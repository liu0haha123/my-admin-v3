import type { , AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { MessagePlugin } from "tdesign-vue-next";
import type { ErrorResponse } from "./types";
import { useAppStore } from '../store/app';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // 60s以上请求失败
});
const tokenPrefix = "Bearer "

instance.interceptors.request.use((request) => {
  const appStore = useAppStore();
  if (appStore.token && request.headers) {
    request.headers["Authorization"] = tokenPrefix + appStore.token;
  }
  return request;
});
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  },
  async (err: AxiosError<ErrorResponse>) => {
    const resData: ErrorResponse | undefined = err.response?.data;
    resData && (await MessagePlugin.error(resData.message));
    if (err.response?.status === 401) {
      const appStore = useAppStore();
      await appStore.logout();
    }
    return Promise.reject(err);
  }
);
export default instance;
