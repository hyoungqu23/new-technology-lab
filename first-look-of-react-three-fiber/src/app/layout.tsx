import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Three Fiber',
  description: 'With React, Next.js, TypeScript',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='ko'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
