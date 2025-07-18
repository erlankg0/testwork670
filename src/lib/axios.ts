import axios from 'axios';
import { getCookie } from '@/lib/cookie';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor для автоматического добавления токена в каждый запрос
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        // Удаляем токен из cookie
        document.cookie = 'token=; path=/; max-age=0';
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
