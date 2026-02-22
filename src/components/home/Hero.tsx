'use client';

import { motion } from 'framer-motion';
import { Phone, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { ToothDecor } from '@/components/svg/ToothDecor';
import Container from '@/components/shared/Container';
import SectionLabel from '@/components/shared/SectionLabel';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white min-h-[600px] md:min-h-[700px] flex items-center py-16 md:py-24">
            {/* Background decoration — reduced size, repositioned behind image area */}
            <ToothDecor className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[300px] h-[360px] text-[#1A3C5E] opacity-[0.04] pointer-events-none select-none hidden lg:block" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#2DBD8F]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A3C5E]/5 rounded-full blur-3xl pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionLabel>Dental Clinic in Model Town, Rohtak</SectionLabel>
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1A3C5E] leading-tight tracking-[-0.02em] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Your Smile Deserves the{' '}
                            <span className="relative inline-block">
                                <span className="text-[#2DBD8F]">Best Care</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#2DBD8F]/30" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                                    <path d="M2 8C60 2 140 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                            {' '}in Rohtak
                        </h1>
                        <p className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-xl">
                            Trusted dental clinic in Model Town, Rohtak — led by{' '}
                            <strong className="text-[#1C1C1E]">Dr. Aashish Malik</strong>, one of Rohtak&apos;s most referred dental surgeons. Experience gentle, modern dental care for your entire family.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" size="lg">
                                Book Appointment
                            </Button>
                            <Button
                                href="tel:09802155667"
                                variant="outline"
                                size="lg"
                                icon={<Phone size={20} />}
                            >
                                Call: 098021 55667
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right: Enhanced placeholder image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* TODO: Replace with actual clinic photo — use next/image with fill layout */}
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] via-[#1A3C5E]/90 to-[#2DBD8F]/60 ring-1 ring-white/10">
                            {/* Subtle dot pattern overlay */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.05]" aria-hidden="true">
                                <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="white" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#dotPattern)" />
                            </svg>
                            {/* Larger centered tooth icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ToothDecor className="w-[40%] h-auto text-white opacity-20" />
                            </div>
                            {/* Location badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                <p className="text-white text-sm font-medium">📍 Near Life Care Hospital, Model Town, Rohtak</p>
                            </div>
                        </div>
                        {/* Floating rating badge */}
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 border border-[#E5E0D8] shadow-[0_2px_8px_rgba(0,0,0,0.1),_0_16px_40px_rgba(0,0,0,0.08)]">
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={16} className="text-[#FBBF24] fill-[#FBBF24]" />
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-[#1A3C5E]">5.0</span>
                                <span className="text-xs text-[#6B7280]">/ 38 reviews</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats bar with visual separation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E0D8] p-5 flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D8]"
                >
                    <div className="flex items-center gap-4 py-4 sm:py-0 sm:px-6 first:pl-0">
                        <div className="w-12 h-12 rounded-xl bg-[#FBBF24]/10 flex items-center justify-center flex-shrink-0">
                            <Star size={24} className="text-[#FBBF24]" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#1A3C5E] tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>5.0★</p>
                            <p className="text-sm text-[#6B7280]">Google Rating</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 py-4 sm:py-0 sm:px-6">
                        <div className="w-12 h-12 rounded-xl bg-[#2DBD8F]/10 flex items-center justify-center flex-shrink-0">
                            <Users size={24} className="text-[#2DBD8F]" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#1A3C5E] tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>38+</p>
                            <p className="text-sm text-[#6B7280]">Happy Patients</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 py-4 sm:py-0 sm:px-6 last:pr-0">
                        <div className="w-12 h-12 rounded-xl bg-[#1A3C5E]/10 flex items-center justify-center flex-shrink-0">
                            <Award size={24} className="text-[#1A3C5E]" />
                        </div>
                        <div>
                            {/* TODO: Replace placeholder — verify years of experience */}
                            <p className="text-2xl font-bold text-[#1A3C5E] tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>10+</p>
                            <p className="text-sm text-[#6B7280]">Years Experience</p>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
