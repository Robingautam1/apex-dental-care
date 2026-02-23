'use client';

import { motion } from 'motion/react';

const services = [
  {
    title: 'General Checkup',
    description: 'Comprehensive dental exams, cleanings, and digital X-rays to keep your smile healthy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M12 2v6" />
        <path d="M12 17c-2.76 0-5-2.24-5-5V8h10v4c0 2.76-2.24 5-5 5z" />
      </svg>
    ),
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements to restore your confidence and bite.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-secondary">
        <path d="M12 22c-2.76 0-5-2.24-5-5v-2h10v2c0 2.76-2.24 5-5 5z" />
        <path d="M12 15V9" />
        <path d="M9 9V3" />
        <path d="M15 9V3" />
        <path d="M12 3v6" />
      </svg>
    ),
  },
  {
    title: 'Braces & Invisalign',
    description: 'Straighten your teeth with traditional braces or clear, removable aligners.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
        <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
        <path d="M8 12h8" />
        <path d="M8 16h8" />
        <path d="M12 8V2" />
      </svg>
    ),
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more radiant smile in just one visit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-secondary">
        <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
        <circle cx="12" cy="14" r="2" />
        <path d="M12 8V2" />
      </svg>
    ),
  },
  {
    title: 'Root Canal Therapy',
    description: 'Painless treatment to save infected teeth and relieve severe toothaches.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
        <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
        <path d="M12 17v-4" />
        <path d="M10 13l2 4 2-4" />
        <path d="M12 8V2" />
      </svg>
    ),
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Veneers, bonding, and smile makeovers tailored to your unique facial features.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-secondary">
        <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
        <path d="M9 12l2 2 4-4" />
        <path d="M12 8V2" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Comprehensive Dental Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            {/* INSERT USER CONTENT: Services Subheadline Here */}
            We offer a full range of dental treatments under one roof, utilizing the latest technology for optimal results.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-slate-50 shadow-sm hover:shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
