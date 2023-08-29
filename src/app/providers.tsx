'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';

import queryClient from '@/lib/react-query';

export default function Providers({ children }: PropsWithChildren) {
  // Add more nested provider if needed
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
