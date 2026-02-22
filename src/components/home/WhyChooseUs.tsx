'use client';

import { motion } from 'framer-motion';
import { Shield, CalendarCheck, Banknote, MapPin } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionLabel from '@/components/shared/SectionLabel';

const features = [
    {
        icon: Shield,
        title: 'Advanced Equipment',
        description: 'State-of-the-art dental technology for accurate diagnosis and comfortable treatment.',
    },
    {
        icon: CalendarCheck,
        title: 'Painless Procedures',
        description: 'Modern anesthesia and gentle techniques ensure a virtually pain-free experience.',
    },
    {
        icon: Banknote,
        title: 'Affordable Pricing',
        description: 'Quality dental care at honest prices — no hidden costs, no surprises.',
    },
    {
        icon: MapPin,
        title: 'Model Town, Rohtak',
        description: 'Conveniently located near Life Care Hospital in the heart of Model Town.',
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 md:py-28 bg-[#F7F4EF] overflow-hidden" aria-labelledby="why-heading">
            <Container>
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionLabel>Why Us</SectionLabel>
                    <h2
                        id="why-heading"
                        className="text-3xl md:text-4xl font-semibold text-[#1A3C5E] mt-1 mb-4 leading-tight tracking-[-0.02em]"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Why Families in Rohtak Choose Apex
                    </h2>
                    <p className="text-[#6B7280] leading-relaxed">
                        We combine modern dental science with genuine human care — that&apos;s what makes us the preferred dental clinic in Rohtak, Haryana.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E5E0D8] border-t-2 border-t-[#2DBD8F] text-left"
                            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#1A3C5E] flex items-center justify-center mb-4">
                                <f.icon size={24} className="text-white" />
                            </div>
                            <h3 className="font-semibold text-[#1A3C5E] text-lg mb-2">
                                {f.title}
                            </h3>
                            <p className="text-[#6B7280] text-sm leading-relaxed">
                                {f.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
