import styles from './header.module.scss';
import Link from 'next/link';
import { Container } from '@/shared/components/container';
import { LogoUI } from '@/shared/components/logo';

export function HeaderUI() {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <div className={styles.header__info}>
          <Link href="/">
            <LogoUI />
          </Link>
        </div>
        <div className={styles.header__banner}>600х70</div>
      </Container>
    </header>
  );
}
