'use client';

import { ReactNode } from 'react';

export default function TDSProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
