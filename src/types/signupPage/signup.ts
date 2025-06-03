// 이메일 인증 요청
export interface IEmailCodeRequest {
  username: string;
}

// 회원가입 요청
export interface ISignupRequest {
  username: string;
  password: string;
  authNum: string;
}

// 이메일 인증번호 확인 요청
export interface ICheckEmailCodeRequest {
  username: string;
  authNum: string;
}

// (선택) 응답 타입들
export interface IBaseResponse {
  status: number;
  message: string;
}
