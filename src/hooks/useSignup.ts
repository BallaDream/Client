import { useMutation } from '@tanstack/react-query';

import type { ICheckEmailCodeRequest, IEmailCodeRequest, ISignupRequest } from '@/types/signupPage/signup';

import { axiosInstance } from '@/api/axiosInstance';
import { requestEmailCode, signup } from '@/api/signupage/signup';

// 1. 이메일 인증 요청 훅
export const useRequestEmailCode = () =>
  useMutation({
    mutationFn: (data: IEmailCodeRequest) => requestEmailCode(data),
  });

// 2. 회원가입 요청 훅
export const useSignup = () =>
  useMutation({
    mutationFn: (data: ISignupRequest) => signup(data),
  });

// 3. 이메일 인증번호 확인 훅
export const useCheckEmailCode = () =>
  useMutation({
    mutationFn: (data: ICheckEmailCodeRequest) => axiosInstance.post('/join/auth-number/check', data).then((res) => res.data),
  });
