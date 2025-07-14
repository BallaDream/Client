import type { ILoginRequest } from '@/types/loginPage/login';

import { axiosInstance } from '@/api/axiosInstance';

export const login = async (data: ILoginRequest) => {
  const response = await axiosInstance.post('/login', data);
  console.log(response);
  return response; // response.data 아님. 전체 응답 필요
};

export const logout = async () => {
  const response = await axiosInstance.post('/logout');
  console.log(response);
  return response;
};
