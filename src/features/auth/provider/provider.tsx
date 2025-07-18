'use client';

import { createContext, ReactNode, useContext, useEffect } from 'react';
import { create } from 'zustand';
import axiosInstance from '@/lib/axios';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  checkAuth: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  checkAuth: async () => {
    try {
      const response = await axiosInstance.get('/auth/me');
      if (response.status === 200) {
        set({
          user: {
            id: response.data.id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
          },
        });
      } else {
        set({
          user: {
            id: response.data.id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
          },
        });
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      set({ user: null });
    }
  },
}));

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, setUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // Автоматическая проверка при монтировании провайдера
  }, [checkAuth]);

  return (
    <AuthContext.Provider value={{ user, setUser, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthentication() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthentication must be used within an AuthProvider');
  }
  return context;
}
