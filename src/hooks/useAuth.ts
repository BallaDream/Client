import { useMutation } from '@tanstack/react-query';

import { auth } from '@/api/auth/auth';

export const useLogin = () =>
  useMutation({
    mutationFn: () => auth(),
  });
