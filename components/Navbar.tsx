'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { MobileNavDrawer } from '@/components/MobileNavDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform-gpu transition-all duration-300 ease-in-out ${isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E0D8] py-3'
        : 'bg-transparent py-5'
        } ${(isHome && !isScrolled) ? 'max-md:opacity-0 max-md:pointer-events-none' : 'opacity-100'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919802155667"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-primary-hover hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(11,59,96,0.15)]"
              aria-label="Book Appointment"
            >
              <Phone className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>

            {/* Replaced old mobile toggle with the new robust drawer trigger */}
            <MobileNavDrawer />
          </div>
        </div>
      </div>
    </header>
  );
}
