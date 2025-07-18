import { forwardRef } from 'react';
import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const ButtonUI = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button ref={ref} className={clsx(styles.button, className)} {...rest}>
        {children}
      </button>
    );
  }
);

ButtonUI.displayName = 'ButtonUI';
