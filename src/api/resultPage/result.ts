import type { TGetDiagnoseInfoResponse, TGetDiagnoseInfoValue, TGetRecomendationValue, TGetRecommendationResponse } from '@/types/resultPage/result';

import { axiosInstance } from '../axiosInstance';

export const getDiagnoseInfo = async ({ diagnoseId }: TGetDiagnoseInfoValue): Promise<TGetDiagnoseInfoResponse> => {
  const { data } = await axiosInstance.get(`/diagnose/${diagnoseId}`);
  console.log(data);
  return data;
};

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

  const { data } = await axiosInstance.get(`/recommendation?${params.toString()}`);
  console.log(data);
  return data;
};
