'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Sun, Anchor, AlignCenter, Gem, Baby, Siren } from 'lucide-react';
import { services } from '@/data/services';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Sparkles, ShieldCheck, Sun, Anchor, AlignCenter, Gem, Baby, Siren,
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function ServicesStrip() {
    return (
        <section className="py-20 md:py-28 bg-[#F7F4EF] overflow-hidden" aria-labelledby="services-heading">
            <Container>
                <SectionHeading
                    eyebrow="What We Offer"
                    heading="Comprehensive Dental Services in Rohtak"
                    subtext="From routine cleanings to advanced cosmetic procedures — Apex Dental Care offers a full spectrum of dental services right here in Model Town, Rohtak."
                    center
                />

                {/* 4×2 grid on desktop, 2-col tablet, 1-col mobile */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {services.map((s) => {
                        const Icon = iconMap[s.icon] || Sparkles;
                        return (
                            <motion.div key={s.slug} variants={item}>
                                <Link
                                    href={`/services/${s.slug}`}
                                    className="group bg-white rounded-2xl p-6 border border-[#E5E0D8] shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 hover:border-[#2DBD8F]/40 transition-all duration-300 ease-out flex flex-col gap-4 h-full"
                                >
                                    {/* Icon badge */}
                                    <div className="w-12 h-12 rounded-xl bg-[#EBF9F4] flex items-center justify-center group-hover:bg-[#2DBD8F] transition-colors duration-300">
                                        <Icon size={24} className="text-[#2DBD8F] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <h3 className="font-semibold text-[#1C1C1E] text-lg mb-1.5 group-hover:text-[#1A3C5E] transition-colors">
                                            {s.shortTitle}
                                        </h3>
                                        <p className="text-[#6B7280] text-sm leading-relaxed">{s.tagline}</p>
                                    </div>
                                    {/* Arrow */}
                                    <div className="mt-auto flex items-center gap-1 text-[#2DBD8F] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                                        Learn more <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}
