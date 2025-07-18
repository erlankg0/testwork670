import { create } from 'zustand';
import axiosInstance from '@/lib/axios';
import { AxiosError, AxiosResponse } from 'axios';

interface AuthState {
  user: any | null;
  token: string | null;
  loading: boolean;
  error: string | null;

  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const setCookie = (name: string, value: string, maxAge: number) => {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; path=/; max-age=0`;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const response: AxiosResponse = await axiosInstance.post('auth/login', {
        username,
        password,
      });

      const { accessToken, user } = response.data;
      setCookie('token', accessToken, 3600); // 1 час

      set({
        user,
        token: accessToken,
        loading: false,
        error: null,
      });
      window.location.replace('/')
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      // Исправлено: правильно извлекаем сообщение об ошибке
      if (error.response?.data?.message) {
        set({ error: error.response.data.message, loading: false });
      } else {
        set({
          error: 'Что-то пошло не так. Попробуйте позже.',
          loading: false,
        });
      }
    }
  },

  logout: () => {
    deleteCookie('token');
    set({ user: null, token: null, error: null });
  },
}));
