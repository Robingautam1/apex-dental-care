'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import Logo from '@/components/Logo';
import { footerData } from '@/lib/footerData';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand/Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <Logo variant="light" />
            <p className="text-sm leading-relaxed max-w-xs">
              {footerData.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {footerData.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {footerData.services.map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href} className="hover:text-secondary transition-colors text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>{footerData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="w-5 h-5 flex items-center justify-center text-secondary shrink-0">P</span>
                <a href={footerData.contact.phoneHref} className="hover:text-secondary transition-colors text-sm">
                  {footerData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="w-5 h-5 flex items-center justify-center text-secondary shrink-0">E</span>
                <Link href={footerData.contact.onlineBooking.href} className="hover:text-secondary transition-colors text-sm">
                  {footerData.contact.onlineBooking.label}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
        >
          <p>{footerData.copyright}</p>
          <p className="text-white/30 text-[10px] hidden md:block">
            {footerData.locationText}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
