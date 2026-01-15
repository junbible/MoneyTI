'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export function Header() {
    const router = useRouter();

    return (
        <header className="fixed top-0 left-0 right-0 h-14 flex items-center px-4 bg-white z-50">
            <button
                onClick={() => router.back()}
                className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Go back"
            >
                <ChevronLeft size={24} />
            </button>
        </header>
    );
}
