import { useQuery } from '@tanstack/react-query';

import type { TGetRecomendationValue } from '@/types/resultPage/result';

import { getRecommendation } from '@/api/resultPage/result';

export const useProductInfo = ({ diagnoseType, level, step, minPrice, maxPrice, formulation }: TGetRecomendationValue) => {
  return useQuery({
    queryKey: ['product', diagnoseType, level, step, minPrice, maxPrice, formulation],
    queryFn: () => getRecommendation({ diagnoseType, level, step, minPrice, maxPrice, formulation }),
  });
};
