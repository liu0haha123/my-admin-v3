import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import { MessagePlugin } from "tdesign-vue-next";
import type { ErrorResponse } from "./types";
const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // 60s以上请求失败
});

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  },
  async (err: AxiosError<ErrorResponse>) => {
    const resData: ErrorResponse | undefined = err.response?.data;
    resData && (await MessagePlugin.error(resData.message));
    return Promise.reject(err);
  }
);
export default instance;
