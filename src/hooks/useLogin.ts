import { useMutation } from '@tanstack/react-query';

import type { ILoginRequest } from '@/types/loginPage/login';

import { login } from '@/api/loginPage/login';

export const useLogin = () =>
  useMutation({
    mutationFn: (data: ILoginRequest) => login(data),
  });
