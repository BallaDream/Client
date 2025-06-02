import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { axiosInstance } from '@/api/axiosInstance';
import { setAccessToken, setNickname } from '@/slices/authSlice';

let isCalled = false; // 중복 요청 방지용

export default function KakaoCallback() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKakaoToken = async () => {
      if (isCalled) return; // 두 번 실행 방지
      isCalled = true;

      try {
        const response = await axiosInstance.get(`/kakao/authenticate?code=${code}`);
        const token = response.headers['access'];
        console.log('🔥 응답 전체:', response);
        console.log('🔥 응답 헤더:', response.headers);
        console.log('🔥 accessToken:', token);

        if (token) {
          dispatch(setAccessToken(token));
          const decoded: any = jwtDecode(token);
          dispatch(setNickname(decoded.nickname));
          alert('로그인 성공!');
          navigate('/');
        } else {
          alert('AccessToken이 응답 헤더에 없습니다.');
        }
      } catch (error: any) {
        console.error('❌ 카카오 로그인 실패:', error);
        if (error.response) {
          console.log('🔥 error.response.status:', error.response.status);
          console.log('🔥 error.response.data:', error.response.data);
          console.log('🔥 error.response.headers:', error.response.headers);
        }
      }
    };

    fetchKakaoToken();
  }, [code]);

  return <div>카카오 로그인 처리 중입니다...</div>;
}
