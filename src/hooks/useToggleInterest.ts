import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteInterest, postInterest } from '@/api/resultPage/result';

type TToggleInterestParams = {
  productId: number;
  diagnoseType: string;
  isInterest: boolean;
};

export const useToggleInterest = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, TToggleInterestParams, { previousData: any }>({
    mutationFn: async ({ productId, diagnoseType, isInterest }: TToggleInterestParams) => {
      const data = { productId, diagnoseType };
      return isInterest ? await deleteInterest(data) : await postInterest(data);
    },

    // 1️ optimistic update
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['product'] });

      const previousData = queryClient.getQueryData(['product']);
      queryClient.setQueryData(['product'], (old: any) => {
        if (!old) return old;
        return {
          ...old,
          data: old.data.map((p: any) => (p.productId === variables.productId ? { ...p, interest: !variables.isInterest } : p)),
        };
      });

      return { previousData };
    },

    // 2️ 에러나면 rollback
    onError: (error, variables, context) => {
      if (context?.previousData) {
        console.log(error);
        console.log(variables);
        queryClient.setQueryData(['product'], context.previousData);
      }
    },

    // 3️ 성공시 최신화
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
  });
};
