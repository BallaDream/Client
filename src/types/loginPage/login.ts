// eslint-disable-next-line @typescript-eslint/naming-convention
export interface TLoginRequest {
  username: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface TLoginResponse {
  status: number;
  message: string;
  accessToken?: string;
}
