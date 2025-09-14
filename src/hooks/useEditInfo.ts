import { useMutation } from '@tanstack/react-query';

import { putUserNickname } from '@/api/myPage/my';

export const useEditNickname = (fn: () => void) => {
  return useMutation({
    mutationFn: (nickName: string) => putUserNickname(nickName),
    onSuccess() {
      fn();
    },
  });
};
