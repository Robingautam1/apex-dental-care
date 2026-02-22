'use client';

import { motion } from 'framer-motion';
import { Shield, CalendarCheck, Banknote, MapPin } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

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

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function WhyChooseUs() {
    return (
        <section className="py-20 md:py-28 bg-[#F7F4EF] overflow-hidden" aria-labelledby="why-heading">
            <Container>
                <SectionHeading
                    eyebrow="Why Us"
                    heading="Why Families in Rohtak Choose Apex"
                    subtext="We combine modern dental science with genuine human care — that's what makes us the preferred dental clinic in Rohtak, Haryana."
                    center
                />

                {/* Horizontal card layout — 2-col grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            variants={item}
                            className="flex gap-5 items-start p-6 bg-white rounded-2xl border border-[#E5E0D8] shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
                        >
                            <div className="flex-shrink-0 w-14 h-14 bg-[#1A3C5E] rounded-2xl flex items-center justify-center">
                                <f.icon size={28} className="text-[#2DBD8F]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#1A3C5E] text-lg mb-1.5">{f.title}</h3>
                                <p className="text-[#6B7280] text-sm leading-relaxed">{f.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
