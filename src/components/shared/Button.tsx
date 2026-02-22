'use client';

import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
    ariaLabel?: string;
    icon?: ReactNode;
}

const variants = {
    primary:
        'bg-[#2DBD8F] hover:bg-[#25a87e] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-[0_4px_14px_rgba(45,189,143,0.35)] hover:shadow-[0_6px_20px_rgba(45,189,143,0.45)] transition-all duration-200 active:scale-[0.98] inline-flex items-center justify-center gap-2',
    secondary:
        'border-2 border-[#1A3C5E] text-[#1A3C5E] hover:bg-[#1A3C5E] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 active:scale-[0.98] inline-flex items-center justify-center gap-2',
    ghost:
        'text-[#2DBD8F] font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition-all duration-150 group',
};

export function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    type = 'button',
    ariaLabel,
    icon,
}: ButtonProps) {
    const classes = `${variants[variant]} ${className}`;

    const content = (
        <>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
        </>
    );

    if (href) {
        // External links (tel:, mailto:, http) use <a>
        const isExternal = href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http');
        if (isExternal) {
            return (
                <a
                    href={href}
                    className={classes}
                    aria-label={ariaLabel}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                    {content}
                </a>
            );
        }
        // Internal links use Next.js Link
        const Link = require('next/link').default;
        return (
            <Link href={href} className={classes} aria-label={ariaLabel}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer ${classes}`}
            aria-label={ariaLabel}
        >
            {content}
        </button>
    );
}
