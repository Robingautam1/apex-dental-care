'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin as MapPinIcon, Phone as PhoneIcon } from 'lucide-react';
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
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 will-change-transform will-change-opacity"
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
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="will-change-transform will-change-opacity"
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
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="will-change-transform will-change-opacity"
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
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="will-change-transform will-change-opacity"
          >
            <div className="flex flex-col gap-4">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
                Our Locations
              </p>

              {/* Branch 1 */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-xs font-semibold mb-0.5">Model Town</p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Near Life Care Hospital, Model Town,<br />Rohtak, Haryana 124001
                  </p>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-xs font-semibold mb-0.5">MDU Gate No. 2</p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Opp. Agro Mall, Near MDU Gate No. 2,<br />Rohtak, Haryana
                  </p>
                </div>
              </div>

              {/* Single phone serves both */}
              <div className="flex items-center gap-3 mt-2">
                <PhoneIcon className="w-4 h-4 text-[#2DBD8F] flex-shrink-0" />
                <a href="tel:09802155667"
                  className="text-white/60 text-xs hover:text-[#2DBD8F] transition-colors">
                  098021 55667
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/10 gap-2 will-change-opacity"
        >
          <p className="text-white/40 text-xs">
            © 2026 Apex Dental Care, Model Town, Rohtak, Haryana 124001
          </p>
          <p className="text-white/40 text-xs">
            Designed & developed by{' '}
            <a href="https://robingautam.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#2DBD8F] transition-colors duration-200 underline underline-offset-2">
              Robin Gautam
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
