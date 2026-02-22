'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import Container from '@/components/shared/Container';

export function Hero() {
    return (
        <section className="bg-white">
            <Container>
                <div className="py-24 md:py-32 lg:py-40 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p className="text-sm font-medium text-[#2DBD8F] mb-5 tracking-wide">
                            Model Town, Rohtak · Dr. Aashish Malik
                        </p>
                        <h1
                            className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-[#1C1C1E] leading-[1.15] tracking-tight mb-6"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Your smile deserves the best care
                        </h1>
                        <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-xl">
                            Trusted by 500+ families in Rohtak. Modern, painless dental care — from cleanings to implants — at honest prices.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button href="/contact" icon={<ArrowRight size={16} />}>
                                Book Appointment
                            </Button>
                            <Button href="tel:09802155667" variant="secondary" icon={<Phone size={16} />}>
                                098021 55667
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
