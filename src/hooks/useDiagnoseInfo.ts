import { useQuery } from '@tanstack/react-query';

import type { TGetDiagnoseInfoValue } from '@/types/resultPage/result';

import { getResentDiagnose } from '@/api/myPage/my';
import { getDiagnoseInfo } from '@/api/resultPage/result';

export const useDiagnoseInfo = ({ diagnoseId }: TGetDiagnoseInfoValue) => {
  return useQuery({
    queryKey: ['diagnose', diagnoseId],
    queryFn: () => getDiagnoseInfo({ diagnoseId }),
  });
};

// 최근 진단 기록
export const useResentDiagnose = () => {
  return useQuery({
    queryKey: ['resentDiagnose'],
    queryFn: () => getResentDiagnose(),
  });
};
