import type { AxiosInstance } from "axios";
import axios from "axios";
const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

export default instance;
