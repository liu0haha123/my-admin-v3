import request from "@/api/request";
import type { TokenRequest } from "@/api/types";
import type { AxiosResponse } from "axios";

const createToken = (
  tokenRequest: TokenRequest
): Promise<AxiosResponse<string>> => {
  return request.post("/tokens", tokenRequest);
};

export default {
  createToken,
};
