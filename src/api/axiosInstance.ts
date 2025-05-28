import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsInVzZXJuYW1lIjoiZG5qc3dvNDEwQG5hdmVyLmNvbSIsIm5pY2tuYW1lIjoiMyIsImxvZ2luVHlwZSI6IldFQiIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3NDg0MDQxNjcsImV4cCI6MTc0ODQ5MDU2N30.wNIH7tvpu109dTULNRh-ouk5jEWPkAoli5MosweaDEg';
  // localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
