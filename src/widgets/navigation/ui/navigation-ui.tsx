import React from 'react';
import { Container } from '@/shared/components';
import clsx from 'clsx';
import styles from './navigation.module.scss';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Hit Deals', href: '/hit-deals' },
  { label: 'Categories', href: '/categories' },
  { label: 'Laptops', href: '/laptops' },
  { label: 'Smartphone', href: '/smartphone' },
  { label: 'Cameras', href: '/cameras' },
  { label: 'Accessories', href: '/accessories' },
];

export function NavigationUI() {
  return (
    <nav className={styles.navigation} aria-label="Primary navigation">
      <Container>
        <ul className={styles.navigation__list}>
          {navItems.map(({ label, href }) => (
            <li key={href} className={styles.navigation__item}>
              <a href={href} className={styles.navigation__link}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
