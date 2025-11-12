import type { IResetPasswordRequest } from '@/types/resetPasswordPage/resetPassword';
import type { IEmailCodeRequest } from '@/types/signupPage/signup';

import { axiosInstance } from '@/api/axiosInstance';

//회원가입 메일 코드 요청 (그대로)
export const requestEmailCode = async (data: IEmailCodeRequest) => {
  const response = await axiosInstance.post('/verify-email', data, { withCredentials: false });
  return response.data;
};

//비밀번호 재설정
export const resetPassword = async (data: IResetPasswordRequest) => {
  const res = await axiosInstance.put('/user/password', data, { withCredentials: false });
  return res.data;
};

// 비밀번호 재설정용 인증번호 요청
//  /join/auth-number → /verify-email 로 통일
// body: { username, authNumberType: 'PASSWORD_CHANGE_NUMBER' }
export const requestAuthCode = async (email: string) => {
  const res = await axiosInstance.post('/verify-email', { username: email, authNumberType: 'PASSWORD_CHANGE_NUMBER' }, { withCredentials: false });
  return res.data;
};

//인증번호 검증
export const verifyAuthCode = async (email: string, authNum: string) => {
  const res = await axiosInstance.post('/join/auth-number/check', { username: email, authNum }, { withCredentials: false });
  return res.data;
};
