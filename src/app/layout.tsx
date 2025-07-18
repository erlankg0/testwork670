import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';
import { TopbarUI } from '@/widgets/topbar';
import { HeaderUI } from '@/widgets/header';
import { Container } from '@/shared/components/container';
import { NavigationUI } from '@/widgets/navigation';
import { ToastUI } from '@/shared/components/toast';
import { ReactNode } from 'react';
import { AuthProvider } from '@/features/auth';
import { Footer } from '@/widgets/footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Abelohost Shop',
  description: 'Abelohost Shop test task',
  icons: {
    icon: '/vercel.svg', // или '/favicon.svg'
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <AuthProvider>
          <div>
            <TopbarUI />
            <HeaderUI />
            <NavigationUI />
          </div>
          <main>
            <Container>{children}</Container>
            <ToastUI />
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
