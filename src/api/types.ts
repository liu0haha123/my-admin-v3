type TokenRequest = {
  // token请求的类型
  username: string;
  password: string;
};
type ErrorResponse = {
  code: number;
  message: string;
};
export type { TokenRequest, ErrorResponse };
