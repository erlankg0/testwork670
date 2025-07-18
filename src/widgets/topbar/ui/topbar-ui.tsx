'use client';

import styles from './topbar.module.scss';
import { Phone, Mail, MapPin, User } from 'lucide-react';
import { InfoLineUI } from '@/shared/components/infoLine';
import { Container } from '@/shared/components/container';
import { useAuth, useAuthentication } from '@/features/auth';
import Link from 'next/link';

function UserInfo({ firstName, lastName, onLogout }: { firstName: string; lastName: string; onLogout: () => void }) {
  return (
    <div className={styles.user}>
      <User aria-label="User Icon"  className={styles.icon}/>
      <span>{firstName} {lastName}</span>
      <Link href="/" onClick={onLogout} className={styles.logout}>
        Logout
      </Link>
    </div>
  );
}

function AuthLink() {
  return (
    <Link href="/auth" className={styles.login}>
      <User aria-label="Login Icon" className={styles.icon} /> Login
    </Link>
  );
}

export function TopbarUI() {
  const { user } = useAuthentication();
  const { logout } = useAuth();

  return (
    <div className={styles.topbar}>
      <Container className={styles.topbar__inner}>
        <div className={styles.topbar__contacts}>
          <InfoLineUI icon={Phone} info="021-95-64-648" type="tel" />
          <InfoLineUI icon={Mail} info="shop@abelohost.com" type="email" />
          <InfoLineUI icon={MapPin} info="1734 Stonecaol Road" type="address" />
        </div>

        <div className={styles.topbar__auth}>
          {user ? (
            <UserInfo firstName={user.firstName} lastName={user.lastName} onLogout={logout} />
          ) : (
            <AuthLink />
          )}
        </div>
      </Container>
    </div>
  );
}
