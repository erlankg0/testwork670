'use client';

import React, { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navigation} aria-label="Primary navigation">
      <Container className={styles.navigation__container}>
        <button
          className={clsx(styles.navigation__toggle, {
            [styles['navigation__toggle--active']]: menuOpen,
          })}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          className={clsx(styles.navigation__list, {
            [styles['navigation__list--open']]: menuOpen,
          })}
        >
          {navItems.map(({ label, href }) => (
            <li key={href} className={styles.navigation__item}>
              <a
                href={href}
                className={styles.navigation__link}
                onClick={() => setMenuOpen(false)} // Закрытие меню при клике
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
