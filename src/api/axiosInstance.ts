import axios from 'axios';

import { logout } from '@/slices/authSlice';
import { openModal } from '@/slices/modalSlice';
import { store } from '@/store/store';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// ✅ 요청 시 accessToken 자동 부착
axiosInstance.interceptors.request.use((config) => {
  const excludedPaths = ['/login', '/verify-email', '/join', '/join/auth-number/check', '/kakao/authenticate', '/logout'];

  const url = config.url ?? '';
  const urlPath = url.split('?')[0];
  const isExcluded = excludedPaths.some((path) => urlPath === path);

  const token = localStorage.getItem('accessToken');
  if (!isExcluded && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 실패시 모달 띄우기
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const url = error?.config?.url ?? '';
    const path = url.split('?')[0];

    const excludedPaths = ['/login', '/verify-email', '/join', '/join/auth-number/check', '/kakao/authenticate', '/logout', '/user', '/reissue'];

    const isExcluded = excludedPaths.includes(path);

    if (!isExcluded && (status === 401 || status === 403)) {
      console.log(' 인증 오류, 로그인 모달 호출:', path);
      store.dispatch(logout());
      store.dispatch(openModal('login'));
    }

    return Promise.reject(error);
  },
);
