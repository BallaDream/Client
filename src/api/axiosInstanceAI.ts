import axios from 'axios';

// /analyze
export const axiosInstanceAI = axios.create({
  baseURL: import.meta.env.VITE_AI_API_BASE_URL,
  withCredentials: true,
});
