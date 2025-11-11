import type { IResetPasswordRequest } from '@/types/resetPasswordPage/resetPassword';

import { axiosInstance } from '@/api/axiosInstance';

export const resetPassword = async (data: IResetPasswordRequest) => {
  const res = await axiosInstance.put('/user/password', data);
  console.log(res);
  return res.data;
};

export const requestAuthCode = async (email: string) => {
  const res = await axiosInstance.post('/join/auth-number', {
    username: email, // 백엔드가 username으로 받는다면 이렇게 맞추는 게 안전
    authNumberType: 'PASSWORD_CHANGE_NUMBER',
  });
  console.log(res);

  return res.data;
};

export const verifyAuthCode = async (email: string, authNum: string) => {
  const res = await axiosInstance.post('/join/auth-number/check', {
    username: email,
    authNum,
  });
  console.log(res);

  return res.data;
};
