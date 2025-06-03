import type { TLoginRequest } from '@/types/loginPage/login';

import { axiosInstance } from '@/api/axiosInstance';

export const login = async (data: TLoginRequest) => {
  const response = await axiosInstance.post('/login', data);
  console.log(response);
  return response; // response.data 아님. 전체 응답 필요
};
