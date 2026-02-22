'use client';

import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
    { label: 'Teeth Cleaning', href: '/services/teeth-cleaning' },
    { label: 'Root Canal', href: '/services/root-canal-treatment' },
    { label: 'Dental Implants', href: '/services/dental-implants' },
    { label: 'Orthodontics', href: '/services/orthodontics' },
];

export default function Footer() {
    return (
        <footer className="bg-[#111111]">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
                <div className="py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-16">
                        {/* Brand */}
                        <div>
                            <p className="text-white font-semibold text-lg mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Apex Dental Care
                            </p>
                            <p className="text-[#787878] text-sm leading-relaxed max-w-xs mb-6">
                                Trusted dental clinic in Model Town, Rohtak. Modern care with a personal touch.
                            </p>
                            <div className="space-y-2 text-sm">
                                <a href="tel:09802155667" className="flex items-center gap-2 text-[#787878] hover:text-white transition-colors">
                                    <Phone size={14} /> 098021 55667
                                </a>
                                <p className="flex items-start gap-2 text-[#787878]">
                                    <MapPin size={14} className="mt-0.5 flex-shrink-0" /> Model Town, Rohtak 124001
                                </p>
                            </div>
                        </div>

                        {/* Pages */}
                        <div>
                            <p className="text-xs font-medium text-[#787878] uppercase tracking-widest mb-4">Pages</p>
                            <ul className="space-y-2.5">
                                {quickLinks.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <p className="text-xs font-medium text-[#787878] uppercase tracking-widest mb-4">Services</p>
                            <ul className="space-y-2.5">
                                {serviceLinks.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#222222] py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-[#555555]">
                        © {new Date().getFullYear()} Apex Dental Care, Model Town, Rohtak
                    </p>
                    <p className="text-xs text-[#555555]">
                        Designed by{' '}
                        <a href="https://robingautam.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            robingautam.in
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
