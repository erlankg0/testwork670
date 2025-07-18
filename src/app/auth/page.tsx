'use client';

import { LoginForm, LoginFormSchema, useAuth } from '@/features/auth';
import type { LoginFormData } from '@/features/auth';
import WrapperForm from '@/shared/wrappers/form-wrapper';
import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { login, error } = useAuth();
  const router = useRouter();
  const handleSubmit = useCallback(async (data: LoginFormData) => {
    await login(data.username, data.password);
    if (!error) {
      router.push('/');
    }
  }, [login]);

  return (
    <WrapperForm onSubmit={handleSubmit} options={{
      resolver: zodResolver(LoginFormSchema),
      mode: 'onTouched',
    }}>
      <LoginForm />
      {error && (<p>{error}</p>)}
    </WrapperForm>
  );
}