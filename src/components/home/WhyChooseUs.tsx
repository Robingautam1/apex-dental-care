'use client';

import { motion } from 'framer-motion';
import { Shield, CalendarCheck, Banknote, MapPin } from 'lucide-react';

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
        <section className="py-12 lg:py-20 bg-[#F7F4EF]" aria-labelledby="why-heading">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/10 px-4 py-1.5 rounded-full tracking-wider uppercase">
                        Why Us
                    </span>
                    <h2
                        id="why-heading"
                        className="text-3xl sm:text-4xl font-bold text-[#1A3C5E] mt-4 mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Why Families in Rohtak Choose Apex
                    </h2>
                    <p className="text-[#6B7280] max-w-2xl mx-auto">
                        We combine modern dental science with genuine human care — that&apos;s what makes us the preferred dental clinic in Rohtak, Haryana.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            className="bg-white rounded-2xl p-6 border border-[#E5E0D8] text-center"
                            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#1A3C5E]/5 flex items-center justify-center mx-auto mb-4">
                                <f.icon size={28} className="text-[#1A3C5E]" />
                            </div>
                            <h3 className="font-semibold text-[#1A3C5E] text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                {f.title}
                            </h3>
                            <p className="text-[#6B7280] text-sm leading-relaxed">
                                {f.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
