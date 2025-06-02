import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsInVzZXJuYW1lIjoiZG5qc3dvNDEwQG5hdmVyLmNvbSIsIm5pY2tuYW1lIjoiMyIsImxvZ2luVHlwZSI6IldFQiIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3NDg3OTQ5MzAsImV4cCI6MTc0ODg4MTMzMH0.7y_LUE2fdyupa_GVuCS7Xo7qWVF95Rr400KBZHg1YB8';
  // localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
