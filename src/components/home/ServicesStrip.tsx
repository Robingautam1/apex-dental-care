'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Sun, Anchor, AlignCenter, Gem, Baby, Siren } from 'lucide-react';
import { services } from '@/data/services';
import Container from '@/components/shared/Container';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Sparkles, ShieldCheck, Sun, Anchor, AlignCenter, Gem, Baby, Siren,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function ServicesStrip() {
    return (
        <section id="services" className="py-24 bg-background-alt">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Comprehensive Dental Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted"
                    >
                        We offer a full range of dental treatments under one roof, utilizing the latest technology for optimal results.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.slice(0, 6).map((s, index) => {
                        const Icon = iconMap[s.icon] || Sparkles;
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={s.slug}
                                variants={itemVariants}
                            >
                                <Link
                                    href={`/services/${s.slug}`}
                                    className="block bg-white p-8 rounded-2xl border border-slate-50 shadow-sm hover:shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2 group h-full"
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${isEven ? 'bg-slate-50' : 'bg-secondary/5'} flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors`}>
                                        <Icon className={`w-10 h-10 ${isEven ? 'text-primary' : 'text-secondary'}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-text-dark">{s.shortTitle}</h3>
                                    <p className="text-text-muted leading-relaxed">{s.tagline}</p>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Show more link */}
                {services.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/services/teeth-cleaning"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors"
                        >
                            View All {services.length} Services →
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
