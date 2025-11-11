import { useMutation } from '@tanstack/react-query';

import type { IResetPasswordRequest } from '@/types/resetPasswordPage/resetPassword';

import { requestAuthCode, resetPassword, verifyAuthCode } from '@/api/resetPasswordPage/resetPassword';

export const useRequestAuthCode = () => useMutation({ mutationFn: (email: string) => requestAuthCode(email) });

export const useVerifyAuthCode = () =>
  useMutation({
    mutationFn: ({ email, authNum }: { email: string; authNum: string }) => verifyAuthCode(email, authNum),
  });

export const useResetPassword = () => useMutation({ mutationFn: (data: IResetPasswordRequest) => resetPassword(data) });
