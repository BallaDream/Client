import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // 쿠키 기반 인증을 위해 필수
});

axiosInstance.interceptors.request.use((config) => {
  const excludedPaths = [
    '/login',
    '/verify-email',
    '/join',
    '/join/auth-number/check',
    '/kakao/authenticate',
    '/logout', // 로그아웃 요청도 토큰 제외 대상에 포함. 서버가 쿠키 기반으로 처리하므로 토큰이 붙으면 안 됨
  ];

  const url = config.url ?? '';
  const urlPath = url.split('?')[0]; // 쿼리 제거해서 정확한 경로 추출
  const isExcluded = excludedPaths.some((path) => urlPath === path);

  console.log('🚨 요청 URL:', url);
  console.log('✅ 제외 대상인가?', isExcluded);

  if (!isExcluded) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});
