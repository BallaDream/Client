export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  status: number;
  message: string;
  accessToken?: string;
}
