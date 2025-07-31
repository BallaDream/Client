import { useQuery } from '@tanstack/react-query';

import { getDiagnosisHistory } from '@/api/myPage/my';

export const useDiagnosisHistory = (page: number, isLatest: boolean) => {
  return useQuery({
    queryKey: ['diagnosisHistory', page, isLatest],
    queryFn: async () => {
      const response = await getDiagnosisHistory(page, isLatest);
      return {
        list: response.data,
        totalCount: response.totalCount,
      };
    },
  });
};
