import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/loginPage/login';
import type { TLoginRequest } from '@/types/loginPage/login';

export const useLogin = () =>
  useMutation({
    mutationFn: (data: TLoginRequest) => login(data),
  });
