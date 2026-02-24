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
                <service.icon className="w-4 h-4 text-[#2DBD8F]" aria-hidden="true" strokeWidth={1.5} />
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

      {/* DESKTOP SERVICES - updated grid */}
      <section id="services" className="hidden md:block py-20 md:py-28 bg-[#F7F4EF]">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 will-change-transform will-change-opacity"
          >
            {servicesData.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className={`group bg-white rounded-2xl p-6 border shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] hover:-translate-y-1 hover:border-[#2DBD8F]/40 transition-all duration-300 ease-out flex flex-col sm:flex-row md:flex-col gap-4 h-full relative ${service.slug === 'emergency-dental-care' ? 'border-[#E5E0D8] border-t-2 border-t-red-400' : 'border-[#E5E0D8]'}`}
                  aria-label={`Learn about ${service.title} at Apex Dental Care`}
                >
                  {/* Urgent Badge for Emergency Care */}
                  {service.slug === 'emergency-dental-care' && (
                    <span className="absolute top-3 right-3 bg-red-50 text-red-500 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-red-100 hidden md:block">
                      Urgent
                    </span>
                  )}
                  {/* Icon badge — consistent size, consistent teal background */}
                  <div className="w-12 h-12 rounded-xl bg-[#EBF9F4] flex items-center justify-center group-hover:bg-[#2DBD8F] transition-colors duration-300 flex-shrink-0">
                    <service.icon
                      className="w-6 h-6 text-[#2DBD8F] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-1.5 flex-grow justify-center">
                    <h3 className="font-semibold text-[#1C1C1E] text-base group-hover:text-[#1A3C5E] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed hidden sm:block md:hidden lg:block line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                  </div>
                  {/* Hover arrow — appears on hover */}
                  <div className="mt-auto hidden sm:flex md:hidden lg:flex items-center gap-1 text-[#2DBD8F] text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                    Learn more
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
