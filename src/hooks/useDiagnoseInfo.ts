import { useQuery } from '@tanstack/react-query';

import type { TGetDiagnoseInfoValue } from '@/types/resultPage/result';

import { getDiagnoseInfo } from '@/api/resultPage/result';

export const useDiagnoseInfo = ({ diagnoseId }: TGetDiagnoseInfoValue) => {
  return useQuery({
    queryKey: ['diagnose', diagnoseId],
    queryFn: () => getDiagnoseInfo({ diagnoseId }),
  });
};
