'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#features' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-soft py-3'
        : 'bg-transparent py-5'
        }`}
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

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-primary-hover hover:scale-105 transition-all duration-300 shadow-soft"
              aria-label="Book Appointment"
            >
              <Phone className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>

            <button
              className="md:hidden p-2 text-text-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-text-dark/40 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <span className="font-heading font-bold text-xl text-text-dark">Menu</span>
              <button
                className="p-2 text-text-muted hover:text-text-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-dark hover:text-primary transition-colors flex items-center"
                  style={{ minHeight: '44px' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="p-6 border-t border-slate-100 bg-background-alt mb-safe">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-white w-full py-4 rounded-full font-medium text-base hover:bg-primary-hover transition-colors shadow-soft"
                style={{ minHeight: '44px' }}
              >
                <Phone className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
