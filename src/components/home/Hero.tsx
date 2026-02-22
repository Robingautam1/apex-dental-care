'use client';

import { motion } from 'framer-motion';
import { Phone, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import Container from '@/components/shared/Container';

const stats = [
    { value: '5.0', suffix: '★', label: 'Google Rating' },
    { value: '500', suffix: '+', label: 'Happy Patients' },
    { value: '8', suffix: '', label: 'Dental Specialties' },
];

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-4">
                            Dental Clinic in Model Town, Rohtak
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1E] leading-[1.1] tracking-[-0.03em] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Your Smile Deserves the{' '}
                            <span className="text-[#2DBD8F]">Best Care</span>
                        </h1>
                        <p className="text-base md:text-lg text-[#4B5563] leading-[1.7] mb-8 max-w-lg">
                            Trusted dental clinic in Model Town, Rohtak — led by{' '}
                            <strong className="text-[#1C1C1E]">Dr. Aashish Malik</strong>, one of Rohtak&apos;s most referred dental surgeons.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" icon={<ArrowRight size={18} />}>
                                Book Appointment
                            </Button>
                            <Button href="tel:09802155667" variant="secondary" icon={<Phone size={18} />}>
                                Call: 098021 55667
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right: Clean image placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] to-[#2a5298] shadow-xl">
                            {/* Simple, clean interior */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                                <p className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Dr. Aashish Malik</p>
                                <p className="text-white/70 text-sm">BDS, Dental Surgeon · Rohtak</p>
                            </div>
                        </div>
                        {/* Single floating badge */}
                        <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2.5 border border-[#E5E0D8]">
                            <Star size={18} className="text-[#FBBF24] fill-[#FBBF24]" />
                            <span className="font-bold text-[#1A3C5E] text-sm">5.0 · 38 Reviews</span>
                        </div>
                    </motion.div>
                </div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 grid grid-cols-3 divide-x divide-[#E5E0D8] border-t border-[#E5E0D8] pt-8"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="px-4 sm:px-6 flex flex-col items-center gap-1">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl sm:text-3xl font-bold text-[#1A3C5E]" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</span>
                                {stat.suffix && <span className="text-[#2DBD8F] font-bold text-lg">{stat.suffix}</span>}
                            </div>
                            <p className="text-xs text-[#6B7280] font-medium">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
