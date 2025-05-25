import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteInterest, postInterest } from '@/api/resultPage/result';

type TToggleInterestParams = {
  productId: number;
  diagnoseType: string;
  isInterest: boolean; // true: 관심상품 등록, false: 관심상품 해제
};

export const useToggleInterest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, diagnoseType, isInterest }: TToggleInterestParams) => {
      const data = { productId, diagnoseType };
      return isInterest ? await deleteInterest(data) : await postInterest(data);
    },
    onSuccess: () => {
      // 관심상품 변경 후, products 다시 요청 (예: queryKey: ['product'])
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
  });
};
