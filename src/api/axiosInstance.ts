import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsInVzZXJuYW1lIjoiZG5qc3dvNDEwQG5hdmVyLmNvbSIsIm5pY2tuYW1lIjoiMyIsImxvZ2luVHlwZSI6IldFQiIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3NDc3MDgwMDUsImV4cCI6MTc0Nzc5NDQwNX0._frmEDN4vAP1RjXicwwu2DjRdkl1W2Fe4-c485zrVJo';
  // localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
