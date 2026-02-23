'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/services';
import Link from 'next/link';

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
    <>
      {/* MOBILE SERVICES - horizontal scroll chips */}
      <section className="md:hidden py-10 bg-[#F7F4EF]" aria-label="Our dental services">
        <div className="px-5 mb-5">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-2">
            What We Offer
          </p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1E] leading-tight">
            Dental Services in Rohtak
          </h2>
        </div>

        {/* Horizontally scrollable chip strip */}
        <div className="flex gap-3 overflow-x-auto pb-3 px-5 
                        scrollbar-none snap-x snap-mandatory 
                        [-webkit-overflow-scrolling:touch]"
          role="list"
          aria-label="Browse our dental services">
          {servicesData.map((service) => (
            <Link key={service.slug}
              href={`/services/${service.slug}`}
              role="listitem"
              className="snap-start flex-shrink-0 flex items-center gap-2.5 
                             bg-white border border-[#E5E0D8] rounded-2xl px-4 py-3
                             shadow-[0_1px_4px_rgba(0,0,0,0.06)]
                             active:bg-[#EBF9F4] active:border-[#2DBD8F] 
                             transition-colors duration-150 min-w-[160px]"
              aria-label={`Learn about ${service.title} at Apex Dental Care`}>
              <div className="w-8 h-8 bg-[#EBF9F4] rounded-xl flex items-center justify-center flex-shrink-0">
                {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4 text-[#2DBD8F]' })}
              </div>
              <span className="text-sm font-semibold text-[#1C1C1E] whitespace-nowrap">
                {service.title}
              </span>
            </Link>
          ))}
        </div>

        {/* View all services CTA */}
        <div className="px-5 mt-5">
          <Link href="/services"
            className="flex items-center justify-center gap-2 w-full border-2 border-[#1A3C5E] 
                           text-[#1A3C5E] font-semibold text-sm py-3.5 rounded-xl
                           active:bg-[#1A3C5E] active:text-white transition-colors duration-150">
            View All Services
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* DESKTOP SERVICES - unchanged grid */}
      <section id="services" className="hidden md:block py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              className="text-3xl md:text-4xl font-bold mb-4 will-change-transform will-change-opacity"
            >
              Comprehensive Dental Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted will-change-transform will-change-opacity"
            >
              We offer a full range of dental treatments under one roof, utilizing the latest technology for optimal results.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 will-change-transform will-change-opacity"
          >
            {servicesData.map((service, index) => (
              <motion.a
                href={`/services/${service.slug}`}
                key={index}
                variants={itemVariants}
                className="bg-white px-5 py-4 md:p-8 rounded-2xl border border-slate-50 shadow-sm hover:shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2 group flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 min-h-[72px] will-change-transform will-change-opacity"
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
    </>
  );
}
