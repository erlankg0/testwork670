'use client';

import {
  useForm,
  FormProvider,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';
import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './form-wrapper.module.scss';

type WrapperFormProps<T extends FieldValues> = {
  children: ReactNode;
  options?: UseFormProps<T>;
  onSubmit: (data: T) => void;
  className?: string;
};

export default function WrapperForm<T extends FieldValues>({
  children,
  onSubmit,
  options,
  className,
}: WrapperFormProps<T>) {
  const methods = useForm<T>(options);

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(styles.form, styles.column, className)}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
}
