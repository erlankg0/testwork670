'use client';

import { LoginForm, LoginFormSchema } from '@/features/auth';
import type { LoginFormData } from '@/features/auth';
import WrapperForm from '@/shared/wrappers/form-wrapper';
import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Page() {

  const handleSubmit = useCallback((data: LoginFormData) => {
    console.log('handleSubmit', data);
  }, []);

  return (
    <WrapperForm onSubmit={handleSubmit} options={{
      resolver: zodResolver(LoginFormSchema),
      mode: 'onTouched',
    }}>
      <LoginForm />
    </WrapperForm>
  );
}