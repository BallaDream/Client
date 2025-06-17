import { axiosInstance } from '@/api/axiosInstance';

export const kakaoLogin = async (code: string) => {
  const response = await axiosInstance.get(`/kakao/authenticate?code=${code}`);
  return response;
};
