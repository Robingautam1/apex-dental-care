'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Phone as PhoneIcon, Calendar as CalendarIcon, ChevronRight } from 'lucide-react';
import Logo from '@/components/Logo';

export function MobileNavDrawer() {
    const [open, setOpen] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, []);

    // Prevent body scroll when open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            {/* Hamburger trigger */}
            <button onClick={() => setOpen(true)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Open navigation menu"
                aria-expanded={open}
                aria-controls="mobile-nav">
                <span className="w-5 h-0.5 bg-[#1C1C1E] rounded-full" />
                <span className="w-5 h-0.5 bg-[#1C1C1E] rounded-full" />
                <span className="w-3 h-0.5 bg-[#1C1C1E] rounded-full self-start ml-2.5" />
            </button>

            {/* Backdrop */}
            {open && (
                <div onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
                    aria-hidden="true" />
            )}

            {/* Drawer */}
            <div id="mobile-nav"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className={`fixed top-0 right-0 bottom-0 z-[70] w-[80vw] max-w-[320px] 
                       bg-white shadow-2xl flex flex-col md:hidden
                       transition-transform duration-300 ease-out
                       ${open ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Drawer header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]">
                    <Logo variant="dark" />
                    <button onClick={() => setOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F7F4EF]"
                        aria-label="Close navigation menu">
                        <X className="w-4 h-4 text-[#1C1C1E]" aria-hidden="true" />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto" aria-label="Main navigation">
                    {[
                        { label: 'Home', href: '/' },
                        { label: 'About Dr. Malik', href: '/about' },
                        { label: 'Services', href: '/services' },
                        { label: 'Blog', href: '/blog' },
                        { label: 'Contact', href: '/contact' },
                    ].map((link) => (
                        <Link key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between px-6 py-4 
                             border-b border-[#F7F4EF] text-[#1C1C1E] font-medium
                             active:bg-[#F7F4EF] transition-colors duration-100">
                            {link.label}
                            <ChevronRight className="w-4 h-4 text-[#9CA3AF]" aria-hidden="true" />
                        </Link>
                    ))}
                </nav>

                {/* Drawer footer CTAs */}
                <div className="p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] 
                        border-t border-[#E5E0D8] flex flex-col gap-3">
                    <a href="tel:09802155667"
                        className="flex items-center justify-center gap-2 w-full bg-[#1A3C5E] 
                        text-white font-semibold py-3.5 rounded-xl text-sm"
                        aria-label="Call Apex Dental Care">
                        <PhoneIcon className="w-4 h-4" aria-hidden="true" />
                        Call: 098021 55667
                    </a>
                    <Link href="/contact"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-[#2DBD8F] 
                           text-white font-semibold py-3.5 rounded-xl text-sm">
                        <CalendarIcon className="w-4 h-4" aria-hidden="true" />
                        Book Appointment
                    </Link>
                </div>
            </div>
        </>
    );
}
