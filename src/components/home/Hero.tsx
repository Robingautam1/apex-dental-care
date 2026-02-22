'use client';

import { motion } from 'framer-motion';
import { Phone, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { ToothDecor } from '@/components/svg/ToothDecor';
import Container from '@/components/shared/Container';

const stats = [
    { value: '5.0', suffix: '★', label: 'Google Rating' },
    { value: '500', suffix: '+', label: 'Happy Patients' },
    { value: '8', suffix: '', label: 'Dental Specialties' },
];

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#2DBD8F]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A3C5E]/5 rounded-full blur-3xl pointer-events-none" />
            <ToothDecor className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[280px] h-[340px] text-[#1A3C5E] opacity-[0.03] pointer-events-none select-none hidden lg:block" aria-hidden="true" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-3">
                            Dental Clinic in Model Town, Rohtak
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1C1C1E] leading-[1.1] tracking-[-0.03em] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Your Smile Deserves the{' '}
                            <span className="relative inline-block">
                                <span className="text-[#2DBD8F]">Best Care</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#2DBD8F]/30" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                                    <path d="M2 8C60 2 140 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-[#4B5563] leading-[1.7] mb-8 max-w-xl">
                            Trusted dental clinic in Model Town, Rohtak — led by{' '}
                            <strong className="text-[#1C1C1E]">Dr. Aashish Malik</strong>, one of Rohtak&apos;s most referred dental surgeons. Experience gentle, modern dental care for your entire family.
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

                    {/* Right: Image placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="relative hidden lg:block"
                    >
                        {/* TODO: Replace with actual clinic photo — use next/image with fill layout */}
                        <div className="relative">
                            {/* Blob behind frame */}
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#2DBD8F]/15 rounded-full blur-2xl" />
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1A3C5E]/10 rounded-full blur-xl" />

                            {/* Main image frame */}
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] via-[#1e4976] to-[#2DBD8F]/60 ring-1 ring-white/10 shadow-2xl">
                                {/* Dot pattern */}
                                <svg className="absolute inset-0 w-full h-full opacity-[0.05]" aria-hidden="true">
                                    <pattern id="heroDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="1.5" fill="white" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#heroDots)" />
                                </svg>
                                {/* Large tooth illustration */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ToothDecor className="w-48 h-48 text-white opacity-10" />
                                </div>
                                {/* Bottom info strip */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-5 border-t border-white/10">
                                    <p className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Dr. Aashish Malik</p>
                                    <p className="text-white/70 text-sm">BDS, Dental Surgeon · Rohtak, Haryana</p>
                                </div>
                            </div>

                            {/* Floating credential badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-[#E5E0D8]">
                                <div className="w-10 h-10 bg-[#EBF9F4] rounded-xl flex items-center justify-center">
                                    <Star size={20} className="text-[#2DBD8F]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280]">Google Rating</p>
                                    <p className="font-bold text-[#1A3C5E] text-sm">5.0 ★ · 38 Reviews</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 grid grid-cols-3 divide-x divide-[#E5E0D8] bg-white rounded-2xl border border-[#E5E0D8] shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="px-4 sm:px-6 py-5 flex flex-col items-center md:items-start gap-1">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl sm:text-3xl font-bold text-[#1A3C5E]" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</span>
                                {stat.suffix && <span className="text-[#2DBD8F] font-bold text-lg sm:text-xl">{stat.suffix}</span>}
                            </div>
                            <p className="text-xs text-[#6B7280] font-medium">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
