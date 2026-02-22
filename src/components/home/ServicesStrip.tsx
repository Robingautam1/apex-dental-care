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
    show: { transition: { staggerChildren: 0.06 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
};

export function ServicesStrip() {
    return (
        <section className="py-20 md:py-28 bg-[#F7F4EF] overflow-hidden" aria-labelledby="services-heading">
            <Container>
                <SectionHeading
                    eyebrow="What We Offer"
                    heading="Our Dental Services"
                    subtext="Expert dental care across 8 specialties at our Model Town, Rohtak clinic."
                    center
                />

                {/* 3-col desktop, 2-col tablet, 1-col mobile — breathing room */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
                                    className="group flex items-start gap-4 bg-white rounded-xl p-5 border border-[#E5E0D8] hover:shadow-md hover:border-[#2DBD8F]/30 transition-all duration-200 h-full"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#EBF9F4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2DBD8F] transition-colors duration-200">
                                        <Icon size={20} className="text-[#2DBD8F] group-hover:text-white transition-colors duration-200" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-[#1C1C1E] text-sm mb-1 group-hover:text-[#1A3C5E] transition-colors">
                                            {s.shortTitle}
                                        </h3>
                                        <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">{s.tagline}</p>
                                    </div>
                                    <ArrowRight size={14} className="text-[#D1D5DB] group-hover:text-[#2DBD8F] flex-shrink-0 mt-1 transition-colors duration-200" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}
