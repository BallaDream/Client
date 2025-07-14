import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { logout } from '@/api/auth/auth';
import { setLogout } from '@/slices/authSlice';

interface IUseLogoutOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useLogout = (options?: IUseLogoutOptions) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      dispatch(setLogout());
      navigate('/');
      console.log('로그아웃 되었습니다.');
      options?.onSuccess?.();
    },
    onError: (error: unknown) => {
      //const err = error as AxiosError;
      console.error('❌ 로그아웃 실패:', error);

      // 서버 로그아웃이 실패해도 클라이언트에서는 로그아웃 처리
      dispatch(setLogout());
      navigate('/');

      const errorMsg = '로그아웃 중 오류가 발생했습니다.';
      options?.onError?.(errorMsg);
    },
  });
};
