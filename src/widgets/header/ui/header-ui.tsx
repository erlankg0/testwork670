import styles from './header.module.scss';
import Link from 'next/link';
import { Container } from '@/shared/components/container';
import { LogoUI } from '@/shared/components/logo';

export function HeaderUI() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__info}>
            <LogoUI />
        </div>
        <div className={styles.header__banner}></div>
      </Container>
    </header>
  );
}