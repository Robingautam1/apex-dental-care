'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, ShieldCheck, Sun, Anchor, AlignCenter, Gem, Baby, Siren } from 'lucide-react';
import { services } from '@/data/services';
import Container from '@/components/shared/Container';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Sparkles, ShieldCheck, Sun, Anchor, AlignCenter, Gem, Baby, Siren,
};

export function ServicesStrip() {
    return (
        <section className="bg-white" aria-labelledby="services-heading">
            <Container>
                <div className="border-t border-[#E5E7EB] py-24 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
                        {/* Left label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-sm font-medium text-[#2DBD8F] mb-3">Services</p>
                            <h2
                                id="services-heading"
                                className="text-2xl md:text-3xl font-semibold text-[#1C1C1E] leading-snug tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                What we treat
                            </h2>
                        </motion.div>

                        {/* Right grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E5E7EB] border border-[#E5E7EB] rounded-xl overflow-hidden">
                            {services.map((s, i) => {
                                const Icon = iconMap[s.icon] || Sparkles;
                                return (
                                    <motion.div
                                        key={s.slug}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, margin: '-40px' }}
                                        transition={{ duration: 0.3, delay: i * 0.04 }}
                                    >
                                        <Link
                                            href={`/services/${s.slug}`}
                                            className="group flex items-start gap-4 bg-white p-5 md:p-6 hover:bg-[#FAFAF9] transition-colors duration-150 h-full"
                                        >
                                            <Icon size={18} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-semibold text-[#1C1C1E] mb-1 group-hover:text-[#2DBD8F] transition-colors">
                                                    {s.shortTitle}
                                                </h3>
                                                <p className="text-xs text-[#9CA3AF] leading-relaxed">{s.tagline}</p>
                                            </div>
                                            <ArrowUpRight size={14} className="text-[#D1D5DB] group-hover:text-[#2DBD8F] flex-shrink-0 mt-0.5 transition-colors" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
