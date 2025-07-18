'use client';

import { useAuthentication } from '@/features/auth';
import styles from './footer.module.scss';

export function Footer() {
  const { user } = useAuthentication();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      © {currentYear}
      {user?.email ? ` — Logged as ${user.email}` : ''}
    </footer>
  );
}
