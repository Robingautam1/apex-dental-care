'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SmileArc } from '@/components/svg/SmileArc';
import { services } from '@/data/services';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#E5E0D8]/50">
            <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20" aria-label="Main navigation">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#1A3C5E] flex items-center justify-center">
                        <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>A</span>
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-lg font-bold text-[#1A3C5E] block leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                            Apex Dental Care
                        </span>
                        <SmileArc className="w-24 h-2 text-[#2DBD8F] -mt-0.5" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative group">
                            {link.hasDropdown ? (
                                <button
                                    className="flex items-center gap-1 text-[#1C1C1E] hover:text-[#2DBD8F] transition-colors font-medium text-sm cursor-pointer"
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                    aria-expanded={servicesOpen}
                                    aria-haspopup="true"
                                >
                                    {link.label}
                                    <ChevronDown size={14} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-[#1C1C1E] hover:text-[#2DBD8F] transition-colors font-medium text-sm"
                                >
                                    {link.label}
                                </Link>
                            )}
                            {link.hasDropdown && (
                                <div
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                                            >
                                                <div className="bg-white rounded-2xl border border-[#E5E0D8] p-3 w-64"
                                                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1), 0 16px 40px rgba(0,0,0,0.08)' }}>
                                                    {services.map((s) => (
                                                        <Link
                                                            key={s.slug}
                                                            href={`/services/${s.slug}`}
                                                            className="block px-3 py-2 rounded-lg text-sm text-[#1C1C1E] hover:bg-[#F7F4EF] hover:text-[#2DBD8F] transition-colors"
                                                        >
                                                            {s.shortTitle}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="tel:09802155667"
                        className="flex items-center gap-2 text-sm font-medium text-[#1A3C5E] hover:text-[#2DBD8F] transition-colors"
                    >
                        <Phone size={16} />
                        098021 55667
                    </a>
                    <Link
                        href="/contact"
                        className="bg-[#2DBD8F] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#24a07a] transition-colors"
                    >
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-2 text-[#1A3C5E] cursor-pointer"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile slide-in drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-white z-50 lg:hidden overflow-y-auto"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-lg font-bold text-[#1A3C5E]" style={{ fontFamily: 'var(--font-display)' }}>
                                        Menu
                                    </span>
                                    <button
                                        onClick={() => setMobileOpen(false)}
                                        aria-label="Close menu"
                                        className="p-2 cursor-pointer"
                                    >
                                        <X size={24} className="text-[#1A3C5E]" />
                                    </button>
                                </div>
                                <div className="space-y-1">
                                    {navLinks.map((link) =>
                                        link.hasDropdown ? (
                                            <div key={link.label}>
                                                <div className="px-4 py-3 text-[#6B7280] text-xs font-semibold uppercase tracking-wider">
                                                    Services
                                                </div>
                                                {services.map((s) => (
                                                    <Link
                                                        key={s.slug}
                                                        href={`/services/${s.slug}`}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block px-4 py-3 text-[#1C1C1E] hover:bg-[#F7F4EF] rounded-lg transition-colors"
                                                    >
                                                        {s.shortTitle}
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-4 py-3 text-[#1C1C1E] hover:bg-[#F7F4EF] rounded-lg font-medium transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        )
                                    )}
                                </div>
                                <div className="mt-8 space-y-3">
                                    <a
                                        href="tel:09802155667"
                                        className="flex items-center justify-center gap-2 w-full border-2 border-[#1A3C5E] text-[#1A3C5E] py-3 rounded-lg font-semibold"
                                    >
                                        <Phone size={18} />
                                        Call Now
                                    </a>
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-center w-full bg-[#2DBD8F] text-white py-3 rounded-lg font-semibold"
                                    >
                                        Book Appointment
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
