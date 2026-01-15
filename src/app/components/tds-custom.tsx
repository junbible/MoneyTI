import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Setup utility
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// 1. Spacing
export function Spacing({ size }: { size: number }) {
    return <div style={{ height: size }} />;
}

// 2. Text
interface TextProps {
    typography?: 'h1' | 'h2' | 'h3' | 'h4' | 't1' | 't2' | 't3' | 't4' | 't5' | 't6';
    fontWeight?: 400 | 500 | 600 | 700;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    children: ReactNode;
}

const TYPO_STYLES = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    t1: 'text-2xl',
    t2: 'text-xl',
    t3: 'text-lg',
    t4: 'text-base',
    t5: 'text-sm',
    t6: 'text-xs',
};

// Simplified color map (Toss-like)
const COLORS: Record<string, string> = {
    gray900: 'text-gray-900',
    gray800: 'text-gray-800',
    gray700: 'text-gray-700',
    gray600: 'text-gray-600',
    gray500: 'text-gray-500',
    blue500: 'text-blue-500',
    red500: 'text-red-500',
};

export function Text({ typography = 't4', fontWeight, color = 'gray900', className, style, children }: TextProps) {
    return (
        <span
            className={cn(TYPO_STYLES[typography], COLORS[color] || 'text-gray-900', className)}
            style={{ fontWeight, ...style }}
        >
            {children}
        </span>
    );
}

// 3. Button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'large' | 'medium';
}

export function Button({ variant = 'primary', size = 'medium', className, children, ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                'rounded-xl font-semibold transition-colors flex items-center justify-center',
                size === 'large' ? 'h-14 px-5 text-lg' : 'h-12 px-4 text-base',
                variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
