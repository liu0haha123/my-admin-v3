type TokenRequest = {
  // token请求的类型
  username: string;
  password: string;
};
type ErrorResponse = {
  code: number;
  message: string;
};

type UserType = {
  username: string;
  nickname: string;
  roles: string[];
  permissions: string[];
}
export type { TokenRequest, ErrorResponse,UserType };
