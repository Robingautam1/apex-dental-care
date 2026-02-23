'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/services';

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
            We offer a full range of dental treatments under one roof, utilizing the latest technology for optimal results.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.a
              href={`/services/${service.slug}`}
              key={index}
              variants={itemVariants}
              className="bg-white px-5 py-4 md:p-8 rounded-2xl border border-slate-50 shadow-sm hover:shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2 group flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 min-h-[72px]"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-50 flex items-center justify-center md:mb-6 shrink-0 group-hover:bg-primary/5 transition-colors">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-bold md:mb-3 text-text-dark">{service.title}</h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed hidden md:block">{service.description}</p>
                <div className="mt-2 md:mt-4 flex items-center text-primary font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
