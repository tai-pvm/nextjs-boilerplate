import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import type { PropsWithChildren } from 'react';

import Providers from './providers';

import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  preload: true
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={openSans.className} suppressHydrationWarning>
        <Providers>
          <main>{children}</main>
          <div id="portal" />
        </Providers>
      </body>
    </html>
  );
}
