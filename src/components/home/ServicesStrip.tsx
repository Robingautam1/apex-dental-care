'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { services } from '@/data/services';

export function ServicesStrip() {
    return (
        <section className="py-12 lg:py-20 bg-[#F7F4EF]" aria-labelledby="services-heading">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/10 px-4 py-1.5 rounded-full tracking-wider uppercase">
                        What We Offer
                    </span>
                    <h2
                        id="services-heading"
                        className="text-3xl sm:text-4xl font-bold text-[#1A3C5E] mt-4 mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Comprehensive Dental Services in Rohtak
                    </h2>
                    <p className="text-[#6B7280] max-w-2xl mx-auto">
                        From routine cleanings to advanced cosmetic procedures, Apex Dental Care offers a full spectrum of dental services right here in Model Town, Rohtak.
                    </p>
                </motion.div>

                {/* Mobile: horizontal scroll, Desktop: 4-col grid */}
                <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
                    <div className="flex gap-4" style={{ width: 'max-content' }}>
                        {services.map((s) => (
                            <div key={s.slug} className="w-64 flex-shrink-0">
                                <ServiceCard {...s} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                        >
                            <ServiceCard {...s} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
