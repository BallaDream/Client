import type {
  TDeleteInterestValue,
  TGetDiagnoseInfoResponse,
  TGetDiagnoseInfoValue,
  TGetRecomendationValue,
  TGetRecommendationResponse,
  TInterestResponse,
  TPostInterestValue,
} from '@/types/resultPage/result';

import { axiosInstance } from '../axiosInstance';

//진단결과 받긴
export const getDiagnoseInfo = async ({ diagnoseId }: TGetDiagnoseInfoValue): Promise<TGetDiagnoseInfoResponse> => {
  const { data } = await axiosInstance.get(`/diagnose/${diagnoseId}`);
  return data;
};

//추천 화장품 받기
export const getRecommendation = async ({
  diagnoseType,
  level,
  step,
  minPrice,
  maxPrice,
  formulation,
}: TGetRecomendationValue): Promise<TGetRecommendationResponse> => {
  const params = new URLSearchParams({
    diagnoseType,
    level,
    step: step.toString(),
  });

  // 선택적 파라미터만 있을 때만 추가
  if (minPrice !== undefined) params.append('minPrice', minPrice.toString());
  if (maxPrice !== undefined) params.append('maxPrice', maxPrice.toString());
  if (formulation) params.append('formulation', formulation);
  console.log(`/recommendation?${params.toString()}`);
  const { data } = await axiosInstance.get(`/recommendation?${params.toString()}`);
  console.log(data);
  return data;
};

// 관심상품 등록
export const postInterest = async (value: TPostInterestValue): Promise<TInterestResponse> => {
  const { data } = await axiosInstance.post('/interested-product', value);
  console.log(data);
  return data;
};
// 관심상품 등록 해제
export const deleteInterest = async (value: TDeleteInterestValue): Promise<TInterestResponse> => {
  const { data } = await axiosInstance.delete(`/interested-product?productId=${value.productId}&diagnoseType=${value.diagnoseType}`, { data: value });
  return data;
};
