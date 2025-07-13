import { axiosInstance } from '@/api/axiosInstance';

export const auth = async () => {
  const response = await axiosInstance.post('/user');
  console.log(response);
  return response;
};

export const refresh = async () => {
  const response = await axiosInstance.post('/reissue');
  console.log(response);
  return response;
};

export const logout = async () => {
  const response = await axiosInstance.post('/logout');
  console.log(response);
  return response;
};
