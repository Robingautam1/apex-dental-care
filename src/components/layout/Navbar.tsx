'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import Container from '@/components/shared/Container';

const navLinks = [
    { label: 'Home', href: '/' },
    {
        label: 'Services', href: '/services/teeth-cleaning',
        children: [
            { label: 'Teeth Cleaning', href: '/services/teeth-cleaning' },
            { label: 'Root Canal', href: '/services/root-canal-treatment' },
            { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
            { label: 'Dental Implants', href: '/services/dental-implants' },
            { label: 'Orthodontics', href: '/services/orthodontics' },
            { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
            { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
            { label: 'Emergency Care', href: '/services/emergency-dental-care' },
        ],
    },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
                    ? 'bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]'
                    : 'bg-white'
                }`}
        >
            <Container>
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#1A3C5E] flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-semibold text-[#1C1C1E] text-sm tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                            Apex Dental Care
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.label} className="relative group">
                                {link.children ? (
                                    <>
                                        <button
                                            className="text-sm text-[#6B7280] hover:text-[#1C1C1E] transition-colors flex items-center gap-1 cursor-pointer"
                                            onMouseEnter={() => setServicesOpen(true)}
                                            onMouseLeave={() => setServicesOpen(false)}
                                        >
                                            {link.label}
                                            <ChevronDown size={12} />
                                        </button>
                                        {servicesOpen && (
                                            <div
                                                className="absolute top-full left-0 pt-2"
                                                onMouseEnter={() => setServicesOpen(true)}
                                                onMouseLeave={() => setServicesOpen(false)}
                                            >
                                                <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-2 min-w-[200px]">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="block px-4 py-2 text-sm text-[#6B7280] hover:text-[#1C1C1E] hover:bg-[#FAFAF9] transition-colors"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#6B7280] hover:text-[#1C1C1E] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="tel:09802155667" className="text-sm text-[#6B7280] hover:text-[#1C1C1E] transition-colors flex items-center gap-1.5">
                            <Phone size={14} /> 098021 55667
                        </a>
                        <Link
                            href="/contact"
                            className="bg-[#1C1C1E] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#333] transition-colors"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden p-2 text-[#6B7280] cursor-pointer"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-[#E5E7EB] py-4 space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                <Link
                                    href={link.href}
                                    className="block py-2 text-sm text-[#6B7280] hover:text-[#1C1C1E]"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                        <div className="pt-3 border-t border-[#E5E7EB]">
                            <Link
                                href="/contact"
                                className="block text-center bg-[#1C1C1E] text-white text-sm font-medium px-4 py-2.5 rounded-lg"
                                onClick={() => setMobileOpen(false)}
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}
