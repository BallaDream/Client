import type { TGetDiagnoseInfoResponse, TGetInterestedProductsResponse } from '@/types/my/my';

import { axiosInstance } from '@/api/axiosInstance';

// 최근 진단 기록
export const getResentDiagnose = async (): Promise<TGetDiagnoseInfoResponse> => {
  const { data } = await axiosInstance.get('/mypage/diagnose');
  console.log(data);
  return data;
};

// 진단 기록
export const getdiagnoses = async (page: number) => {
  const { data } = await axiosInstance.get(`/mypage/diagnoses?isLatest=true&page=${page}`);
  console.log(data);
  return data;
};

// 관심 제품
export const getInterestedProducts = async (page: number): Promise<TGetInterestedProductsResponse> => {
  const { data } = await axiosInstance.get(`/mypage/interested-product?page=${page}`);
  console.log(data);
  return data;
};
