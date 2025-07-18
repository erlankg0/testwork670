type ToastType = {
  message: string,
  type: 'success' | 'error'
}

export interface ToastState {
  toast: ToastType | null;
  showToast: (message: string, type: 'success' | 'error') => void;
  clearToast: () => void;
}


