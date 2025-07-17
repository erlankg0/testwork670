import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const InputUI = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(styles.input, className)}
        {...rest}
      />
    );
  }
);

InputUI.displayName = 'InputUI';
