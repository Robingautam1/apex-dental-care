'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
    ariaLabel?: string;
    icon?: ReactNode;
}

const variants = {
    primary: 'bg-[#2DBD8F] text-white hover:bg-[#24a07a]',
    outline: 'bg-transparent border-2 border-[#1A3C5E] text-[#1A3C5E] hover:bg-[#1A3C5E] hover:text-white',
    danger: 'bg-[#E85D4A] text-white hover:bg-[#d14a38]',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    type = 'button',
    ariaLabel,
    icon,
}: ButtonProps) {
    const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={baseClasses}
                aria-label={ariaLabel}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={baseClasses}
            aria-label={ariaLabel}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </motion.button>
    );
}
