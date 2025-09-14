import axios from 'axios';

import { refresh } from '@/api/auth/auth';
import { setLogout } from '@/slices/authSlice';
import { openModal } from '@/slices/modalSlice';
import { store } from '@/store/store';

// ✅ Axios 인스턴스 생성 (공통 baseURL + 쿠키 전송 설정 포함)
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // ✅ 쿠키 자동 전송 (HttpOnly refreshToken용)
});

// ✅ 요청 인터셉터: accessToken 자동 부착
axiosInstance.interceptors.request.use((config) => {
  // accessToken을 붙이지 않아야 하는 예외 경로
  const excludedPaths = ['/login', '/verify-email', '/join', '/join/auth-number/check', '/kakao/authenticate', '/logout'];

  const url = config.url ?? '';
  const urlPath = url.split('?')[0]; // 쿼리스트링 제거
  const isExcluded = excludedPaths.some((path) => urlPath === path);

  // accessToken이 있고, 예외 경로가 아니라면 Authorization 헤더에 부착
  const token = localStorage.getItem('accessToken');
  if (!isExcluded && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ✅ refresh 관련 상태
let isRefreshing = false; // 현재 refresh 요청 중인지 여부
let requestQueue: Array<(token: string) => void> = []; // refresh 중인 동안 대기 중인 요청들

// ✅ refresh 성공 후 대기 중이던 요청 재시도 처리
const processQueue = (newToken: string) => {
  requestQueue.forEach((callback) => callback(newToken));
  requestQueue = [];
};

// ✅ 응답 인터셉터: 401/403 발생 시 refresh → 재시도 흐름 처리
axiosInstance.interceptors.response.use(
  (response) => response, // 정상 응답은 그대로 전달
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;
    const path = originalRequest?.url?.split('?')[0] ?? '';

    const excludedPaths = ['/login', '/verify-email', '/join', '/join/auth-number/check', '/kakao/authenticate', '/logout', '/user', '/reissue'];
    const isExcluded = excludedPaths.includes(path);

    // ✅ accessToken 만료 상태이며, 아직 재시도 전인 경우
    if (!isExcluded && (status === 401 || status === 403 || status === 406) && !originalRequest._retry) {
      originalRequest._retry = true;

      // 이미 다른 요청이 refresh 중이면 큐에 등록해서 나중에 실행
      if (isRefreshing) {
        return new Promise((resolve) => {
          requestQueue.push((newToken) => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            resolve(axiosInstance(originalRequest)); // 새 토큰으로 재시도
          });
        });
      }

      isRefreshing = true;

      try {
        // ✅ refresh API 호출 (HttpOnly 쿠키 자동 전송)
        const res = await refresh();
        const newAccessToken = res.data.accessToken;

        // ✅ 새 accessToken 저장
        localStorage.setItem('accessToken', newAccessToken);

        // ✅ 대기 중이던 요청들 처리
        processQueue(newAccessToken);

        // ✅ 원래 실패했던 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // ❌ refreshToken까지 만료 → 로그아웃 처리
        store.dispatch(setLogout());
        store.dispatch(openModal('login'));
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // ❌ 재발급 대상이 아니거나 재시도 실패 → 로그아웃 처리
    if (!isExcluded && (status === 401 || status === 403)) {
      store.dispatch(setLogout());
      store.dispatch(openModal('login'));
    }

    return Promise.reject(error);
  },
);
export default axiosInstance;
