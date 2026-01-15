'use client';

import { usePathname } from 'next/navigation';
import { Header } from './header';
import { ReactNode } from 'react';
import { cn } from './tds-custom';

export function ClientLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <>
            {!isHome && <Header />}
            <main className={cn('min-h-screen', !isHome && 'pt-14')}>
                {children}
            </main>
        </>
    );
}
