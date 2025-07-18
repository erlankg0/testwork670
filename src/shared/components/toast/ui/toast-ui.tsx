'use client';
import { useToast } from '../model/useToast';
import styles from './toast.module.scss';

export function ToastUI() {

  const { toast } = useToast();

  if (!toast) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 60,
        right: 20,
        padding: '14px 28px',
        background: toast.type === 'error'
          ? 'linear-gradient(135deg, #f44336 0%, #ef5350 100%)'
          : 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
        color: '#ffffff',
        borderRadius: 10,
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        minWidth: 220,
        maxWidth: 450,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.6,
        transition: 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.2s ease',
        animation: 'slideIn 0.4s ease forwards',
      }}
    >
      <p
        style={{
          margin: 0,
          flexGrow: 1,
        }}
      >
        {toast.message}
      </p>

    </div>
  );
}