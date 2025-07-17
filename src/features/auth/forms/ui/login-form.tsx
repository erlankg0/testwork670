'use client';

import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';

import { ButtonUI, InputUI } from '@/shared/components';

import type { LoginFormData } from '../model/types';
import styles from './login-form.module.scss';

export function LoginForm({ className }: ComponentProps<'div'>) {
  const { register, formState: { errors } } = useFormContext<LoginFormData>();

  return (
    <div className={clsx(styles.form, className)}>
      <h2 className={styles.form__title}>Login</h2>

      <div className={clsx(styles.form__field, { [styles.error]: errors.username })}>
        <InputUI {...register('username')} placeholder="Username" />
        {errors.username && <p className={styles.form__error}>{errors.username.message}</p>}
      </div>

      <div className={clsx(styles.form__field, { [styles.error]: errors.password })}>
        <InputUI {...register('password')} placeholder="Password" type="password" />
        {errors.password && <p className={styles.form__error}>{errors.password.message}</p>}
      </div>

      <ButtonUI>Login</ButtonUI>
    </div>
  );
}
