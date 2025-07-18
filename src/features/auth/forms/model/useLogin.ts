import { create } from 'zustand';
import axiosInstance from '@/lib/axios';

interface AuthState {
  user: any | null;
  token: string | null;
  loading: boolean;
  error: string | null;

  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('auth/login', {
        username,
        password,
      });

      const data = response.data;
      document.cookie = `token=${data.accessToken}; path=/; max-age=3600`; // 1 час

      set({
        user: data.user,
        token: data.accessToken,
        loading: false,
        error: null,
      });

    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Ошибка при входе';

      set({ error: message, loading: false });
    }
  },

  logout: () => {
    document.cookie = 'token=; path=/; max-age=0';

    set({ user: null, token: null, error: null });
  },
}));
