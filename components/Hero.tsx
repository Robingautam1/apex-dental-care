'use client';

import { motion } from 'motion/react';
import { Star, ShieldCheck, Stethoscope, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background-base">
      {/* Background SVG Mesh Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0 flex items-center justify-center">
        <svg
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
            className="flex flex-col gap-6"
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
              {/* INSERT USER CONTENT: Hero Subheadline Here */}
              Experience painless, world-class dentistry. From routine checkups to advanced implants, your perfect smile starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary-hover hover:scale-105 transition-all duration-300 shadow-soft"
              >
                Book Free Consultation
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
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2 text-sm font-medium text-text-dark">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span>5-Star Rated on Google</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-text-dark">
                <Stethoscope className="w-5 h-5 text-secondary" />
                <span>Experienced Specialists</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-text-dark">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Modern Equipment</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-soft"
          >
            {/* Placeholder for high-quality clinic/dentist photo */}
            <Image
              src="https://picsum.photos/800/1000?random=1"
              alt="Apex Dental Clinic Interior"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
