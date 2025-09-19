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

// 이름 수정
export const putUserNickname = async (name: string) => {
  const { data } = await axiosInstance.put(`/user`, { changeNickname: name });
  console.log(data);
  return data;
};

// 추천 이력
export const getDiagnosisHistory = async (page: number, sort: 'latest' | 'oldest') => {
  const isLatest = sort === 'latest';

  const response = await axiosInstance.get('/mypage/diagnoses', {
    params: {
      page,
      isLatest,
    },
  });
  console.log('ddd', response.data.data[0].diagnoseId);
  return response.data;
};

// 진단기록 삭제
export const deleteDiagnosis = async (diagnoseId: number) => {
  const response = await axiosInstance.delete(`/diagnose/${diagnoseId}`);
  return response.data;
};
