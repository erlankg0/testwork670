import { ToastState } from './types';
import { create } from 'zustand';

export const useToast = create<ToastState>((set) => ({
  toast: null,
  showToast: (message: string, type: 'success' | 'error') => {
    set({ toast: { message, type } });

    // Автоматически скрыть через 3 секунды
    setTimeout(() => {
      set({ toast: null });
    }, 3000);
  },
  clearToast: () => set({ toast: null }),
}));
