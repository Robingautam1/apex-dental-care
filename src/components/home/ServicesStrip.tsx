'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { services } from '@/data/services';
import Container from '@/components/shared/Container';
import SectionLabel from '@/components/shared/SectionLabel';

export function ServicesStrip() {
    return (
        <section className="py-20 md:py-28 bg-[#F7F4EF] overflow-hidden" aria-labelledby="services-heading">
            <Container>
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionLabel>What We Offer</SectionLabel>
                    <h2
                        id="services-heading"
                        className="text-3xl md:text-4xl font-semibold text-[#1A3C5E] mt-1 mb-4 leading-tight tracking-[-0.02em]"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Comprehensive Dental Services in Rohtak
                    </h2>
                    <p className="text-[#6B7280] leading-relaxed">
                        From routine cleanings to advanced cosmetic procedures, Apex Dental Care offers a full spectrum of dental services right here in Model Town, Rohtak.
                    </p>
                </motion.div>

                {/* Mobile: horizontal scroll */}
                <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
                    <div className="flex gap-4" style={{ width: 'max-content' }}>
                        {services.map((s) => (
                            <div key={s.slug} className="w-64 flex-shrink-0">
                                <ServiceCard {...s} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop: 4-col grid */}
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
            </Container>
        </section>
    );
}
