'use client';

import { LoginForm, LoginFormSchema, useAuth } from '@/features/auth';
import type { LoginFormData } from '@/features/auth';
import WrapperForm from '@/shared/wrappers/form-wrapper';
import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderUI } from '@/shared/components';

export default function Page() {
  const { login, loading } = useAuth();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      await login(data.username, data.password);
    },
    [login],
  );

  if (loading) {
    return <LoaderUI />;
  }

  return (
    <WrapperForm
      onSubmit={handleSubmit}
      options={{
        resolver: zodResolver(LoginFormSchema),
        mode: 'onTouched',
      }}
    >
      <LoginForm />
    </WrapperForm>
  );
}
