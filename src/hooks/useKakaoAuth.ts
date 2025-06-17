import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';

import { kakaoLogin } from '@/api/auth/kakaoLogin';
import { setAccessToken, setNickname } from '@/slices/authSlice';

export const useKakaoAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (code: string) => kakaoLogin(code),
    onSuccess: (response) => {
      const token = response.headers.access;

      if (token) {
        dispatch(setAccessToken(token));
        const decoded: any = jwtDecode(token);
        dispatch(setNickname(decoded?.nickname ?? '익명'));
        console.log('카카오 로그인에 성공했습니다!');
        navigate('/');
      } else {
        console.log('AccessToken이 응답 헤더에 없습니다.');
      }
    },
    onError: (error: unknown) => {
      const err = error as AxiosError;

      if (err.response?.status === 400 || err?.status === 400) {
        console.log('이미 존재하는 이메일입니다.');
        alert('이미 존재하는 이메일입니다.');
      } else {
        console.error('❌ 카카오 로그인 실패:', error);
        alert('카카오 로그인 중 문제가 발생했습니다.');
      }
    },
  });
};
