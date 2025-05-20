import type { TGetDiagnoseInfoResponse, TGetDiagnoseInfoValue } from '@/types/resultPage/result';

import { axiosInstance } from '../axiosInstance';

export const getDiagnoseInfo = async ({ diagnoseId }: TGetDiagnoseInfoValue): Promise<TGetDiagnoseInfoResponse> => {
  const { data } = await axiosInstance.get(`/diagnose/${diagnoseId}`);
  console.log(data);
  return data;
};
