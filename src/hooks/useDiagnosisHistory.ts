import { useQuery } from '@tanstack/react-query';

import { getDiagnosisHistory } from '@/api/myPage/my';

export const useDiagnosisHistory = (page: number, sort: 'latest' | 'oldest') => {
  return useQuery({
    queryKey: ['diagnosisHistory', page, sort],
    queryFn: async () => {
      const response = await getDiagnosisHistory(page, sort);
      return {
        list: response.data,
        totalCount: response.totalCount,
      };
    },
  });
};
