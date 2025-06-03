import type { IEmailCodeRequest, ISignupRequest } from '@/types/signupPage/signup';

import { axiosInstance } from '@/api/axiosInstance';

// 1. 이메일 인증번호 요청
export const requestEmailCode = async (data: IEmailCodeRequest) => {
  const response = await axiosInstance.post('/verify-email', data);
  console.log(response);
  return response.data;
};

// 2. 최종 회원가입
export const signup = async (data: ISignupRequest) => {
  const response = await axiosInstance.post('/join', data);
  return response.data;
};
