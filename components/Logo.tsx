'use client';

import clsx from 'clsx';
import Link from 'next/link';

interface LogoProps {
    variant?: 'light' | 'dark';
    className?: string;
}

export default function Logo({ variant = 'dark', className }: LogoProps) {
    const isDark = variant === 'dark';

    return (
        <Link href="/" className={clsx("flex items-center gap-2 group", className)}>
            <div className={clsx(
                "w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-xl transition-colors",
                isDark ? "bg-primary text-white group-hover:bg-primary-hover" : "bg-white text-primary group-hover:bg-slate-100"
            )}>
                A
            </div>
            <span className={clsx(
                "font-heading font-bold text-xl tracking-tight",
                isDark ? "text-text-dark" : "text-white"
            )}>
                Apex Dental
            </span>
        </Link>
    );
}
