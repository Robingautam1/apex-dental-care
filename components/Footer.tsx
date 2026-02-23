'use client';

import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, MapPin } from 'lucide-react';
import Link from 'next/link';

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
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-heading font-bold text-xl group-hover:bg-slate-100 transition-colors">
                A
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Apex Dental
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              {/* INSERT USER CONTENT: Footer Bio Here */}
              Delivering premium, painless dental care to the Rohtak community. Your smile is our signature.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
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
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm">Home</Link></li>
              <li><Link href="#services" className="hover:text-secondary transition-colors text-sm">Our Services</Link></li>
              <li><Link href="#features" className="hover:text-secondary transition-colors text-sm">Why Choose Us</Link></li>
              <li><Link href="#blog" className="hover:text-secondary transition-colors text-sm">Dental Blog</Link></li>
              <li><Link href="#contact" className="hover:text-secondary transition-colors text-sm">Contact & Location</Link></li>
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
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm">General Checkup</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm">Dental Implants</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm">Braces & Invisalign</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm">Teeth Whitening</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm">Root Canal Therapy</Link></li>
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
                <span>123 Dental Street, Model Town,<br />Rohtak, Haryana 124001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="w-5 h-5 flex items-center justify-center text-secondary shrink-0">P</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="w-5 h-5 flex items-center justify-center text-secondary shrink-0">E</span>
                <span>info@apexdentalrohtak.com</span>
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
          <p>&copy; {new Date().getFullYear()} Apex Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          {/* Hidden/Small text for local SEO signal */}
          <p className="text-white/30 text-[10px] hidden md:block">Proudly serving Rohtak, Haryana</p>
        </motion.div>
      </div>
    </footer>
  );
}
