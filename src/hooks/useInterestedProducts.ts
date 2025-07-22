import { useInfiniteQuery } from '@tanstack/react-query';

import { getInterestedProducts } from '@/api/myPage/my';

export const useInterestedProducts = () => {
  return useInfiniteQuery({
    queryKey: ['interestedProducts'],
    queryFn: ({ pageParam = 0 }) => getInterestedProducts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.currentPage < lastPage.totalPage ? lastPage.currentPage + 1 : undefined;
    },
  });
};
