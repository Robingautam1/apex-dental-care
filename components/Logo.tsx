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
            <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="shrink-0 transition-transform group-hover:scale-105">
                <rect
                    width="36"
                    height="36"
                    rx="10"
                    className={clsx(
                        "transition-colors duration-300",
                        isDark ? "fill-[#1A3C5E] group-hover:fill-[#122c47]" : "fill-white group-hover:fill-slate-100"
                    )}
                />
                <text
                    x="18"
                    y="22"
                    fontFamily="Playfair Display, Georgia, serif"
                    fontSize="18"
                    fontWeight="700"
                    textAnchor="middle"
                    className={clsx(
                        "transition-colors duration-300",
                        isDark ? "fill-white" : "fill-[#1A3C5E]"
                    )}
                >
                    A
                </text>
                <path
                    d="M11 26 Q18 31 25 26"
                    stroke="#2DBD8F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
            <span className={clsx(
                "font-heading font-bold text-xl tracking-tight transition-colors duration-300",
                isDark ? "text-text-dark" : "text-white"
            )}>
                Apex Dental Care
            </span>
        </Link>
    );
}
