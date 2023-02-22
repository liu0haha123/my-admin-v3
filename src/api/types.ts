type TokenRequest = {
  username: string;
  password: string;
};
type ErrorResponse = {
  code: number;
  message: string;
};
export type { TokenRequest, ErrorResponse };
