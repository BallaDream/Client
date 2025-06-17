import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { kakaoLogin } from '@/api/auth/kakaoLogin';
import { setAccessToken, setNickname } from '@/slices/authSlice';

export const useKakaoAuth = (code: string | null) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const calledRef = useRef(false);

  useEffect(() => {
    const fetchKakaoToken = async () => {
      if (!code || calledRef.current) return;
      calledRef.current = true;

      try {
        const response = await kakaoLogin(code);
        const token = response.headers.access;

        if (token) {
          dispatch(setAccessToken(token));
          const decoded: any = jwtDecode(token);
          dispatch(setNickname(decoded?.nickname ?? '익명'));
          alert('카카오 로그인에 성공했습니다!');
          navigate('/');
        } else {
          alert('AccessToken이 응답 헤더에 없습니다.');
        }
      } catch (error) {
        console.error('❌ 카카오 로그인 실패:', error);
        alert('카카오 로그인 중 문제가 발생했습니다. 다시 시도해주세요.');
      }
    };

    fetchKakaoToken();
  }, [code, dispatch, navigate]);
};
