import { useMutation } from '@tanstack/react-query';

import type { TLoginRequest } from '@/types/loginPage/login';

import { login } from '@/api/loginPage/login';

export const useLogin = () =>
  useMutation({
    mutationFn: (data: TLoginRequest) => login(data),
  });
