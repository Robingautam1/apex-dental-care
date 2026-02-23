'use client';

import { motion } from 'motion/react';
import { Star, ShieldCheck, Stethoscope, ArrowRight, Phone as PhoneIcon, Calendar as CalendarIcon, MapPin as MapPinIcon, Clock as ClockIcon, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Counter from '@/components/Counter';
import Logo from '@/components/Logo';

export default function Hero() {
  return (
    <>
      {/* MOBILE HERO - below md breakpoint only */}
      <div className="md:hidden relative min-h-[85svh] flex flex-col justify-between">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/clinic-treatment.jpg"
            alt="Apex Dental Care clinic, Rohtak"
            fill
            className="object-cover object-[center_20%]"
            priority
            style={{ filter: "brightness(0.9) contrast(1.1)" }}
          />
          {/* Dark gradient overlay - heavier at bottom where text sits */}
          <div className="absolute inset-0 bg-gradient-to-b 
                          from-[#1A3C5E]/60 via-[#1A3C5E]/40 to-[#1A3C5E]/85" />
        </div>

        {/* Content on top - all text becomes white */}
        <div className="relative z-10 px-5 pt-8 flex flex-col gap-6">
          {/* Top bar - compact identity */}
          <div className="flex items-center justify-between">
            <Logo variant="light" />
            <a href="tel:+919802155667"
              className="flex items-center gap-1.5 text-white font-semibold text-sm 
                          bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20"
              aria-label="Call Apex Dental Care">
              <PhoneIcon className="w-3.5 h-3.5" aria-hidden="true" />
              Call Us
            </a>
          </div>

          {/* Star badge - white version */}
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm 
                          px-3 py-1.5 rounded-full w-fit border border-white/20">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-white text-xs font-semibold">5.0 · 38 Google Reviews</span>
          </div>
        </div>

        <div className="relative z-10 px-5 pb-8 flex flex-col gap-5">
          <div>
            <h1 className="font-display text-4xl font-bold text-white leading-[1.1] tracking-[-0.02em]">
              Rohtak&apos;s<br />
              <span className="text-[#2DBD8F]">Trusted</span><br />
              Dental Clinic
            </h1>
            <p className="mt-3 text-white/80 text-base leading-relaxed">
              Led by <strong className="text-white">Dr. Aashish Malik</strong> -
              gentle, modern care for your entire family.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="https://wa.me/919802155667"
              target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 
                          bg-[#2DBD8F] text-white font-semibold text-base 
                          py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-transform">
              <CalendarIcon className="w-5 h-5" aria-hidden="true" />
              Book an Appointment
            </a>
            <a href="tel:+919802155667"
              className="w-full flex items-center justify-center gap-2 
                          bg-white/15 backdrop-blur-sm border border-white/25
                          text-white font-semibold text-base 
                          py-4 rounded-2xl active:scale-[0.98] transition-transform">
              <PhoneIcon className="w-5 h-5" aria-hidden="true" />
              Call: 98021 55667
            </a>
          </div>

          {/* Address */}
          <a href="https://share.google/3z1exJby1De0Ailde"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 text-sm mt-1">
            <MapPinIcon className="w-4 h-4 text-[#2DBD8F] flex-shrink-0" aria-hidden="true" />
            <span className="leading-tight">Near Life Care Hospital, Model Town, Rohtak</span>
            <span className="text-[#2DBD8F] font-medium ml-auto pl-2 flex-shrink-0">Directions →</span>
          </a>
        </div>
      </div>

      {/* DESKTOP HERO - md and above, unchanged */}
      <div className="hidden md:block">
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background-base">
          {/* Background SVG Mesh Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-5 z-0 flex items-center justify-center">
            <svg
              aria-hidden="true"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="mesh" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M 20 0 L 0 20 M 0 0 L 20 20"
                    fill="none"
                    stroke="var(--color-secondary)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mesh)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' as const }}
                className="flex flex-col gap-6 will-change-transform will-change-opacity"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm w-fit">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span>Top Rated Dental Clinic in Rohtak</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-text-dark">Advanced Dental Care in </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Rohtak
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted max-w-lg leading-relaxed">
                  Experience painless, world-class dentistry. From routine checkups to advanced implants, your perfect smile starts here.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <a
                    href="https://wa.me/919802155667"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary-hover hover:scale-105 transition-all duration-300 shadow-soft animate-shimmer"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary border border-primary/20 px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-50 transition-all duration-300"
                  >
                    View Services
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-8 mt-8 pt-8 border-t border-slate-100">
                  <div className="flex flex-col gap-1">
                    <div className="text-3xl font-bold text-text-dark flex items-center">
                      <Counter end={5.0} decimals={1} />
                      <Star className="w-6 h-6 fill-accent text-accent ml-1" />
                    </div>
                    <span className="text-xs text-text-muted font-medium uppercase tracking-wider">Google Rating</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="text-3xl font-bold text-text-dark flex items-center">
                      <Counter end={38} />+
                    </div>
                    <span className="text-xs text-text-muted font-medium uppercase tracking-wider">5-Star Reviews</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="text-3xl font-bold text-text-dark flex items-center">
                      <Counter end={10} />+
                    </div>
                    <span className="text-xs text-text-muted font-medium uppercase tracking-wider">Years Experience</span>
                  </div>
                </div>
              </motion.div>

              {/* Image/Graphic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
                className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-soft will-change-transform will-change-opacity"
              >
                <Image
                  src="/images/clinic-treatment.jpg"
                  alt="Dr. Aashish Malik performing dental treatment at Apex Dental Care, Model Town Rohtak"
                  fill
                  priority
                  className="object-cover object-center"
                  style={{ filter: "brightness(1.05) contrast(1.02)" }}
                />
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
