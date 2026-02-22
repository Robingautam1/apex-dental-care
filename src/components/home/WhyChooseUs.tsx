'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Wallet, MapPin, Stethoscope } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

const features = [
    { icon: Stethoscope, title: 'Advanced Equipment', desc: 'State-of-the-art dental technology for accurate diagnosis and comfortable treatment.' },
    { icon: ShieldCheck, title: 'Painless Procedures', desc: 'Modern anesthesia and gentle techniques ensure a virtually pain-free experience.' },
    { icon: Wallet, title: 'Affordable Pricing', desc: 'Quality dental care at honest prices — no hidden costs, no surprises.' },
    { icon: MapPin, title: 'Model Town, Rohtak', desc: 'Conveniently located near Life Care Hospital in the heart of Model Town.' },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 md:py-28 bg-[#F7F4EF] overflow-hidden" aria-labelledby="why-heading">
            <Container>
                <SectionHeading
                    eyebrow="Why Us"
                    heading="Why Families in Rohtak Choose Apex"
                    subtext="We combine modern dental science with genuine human care."
                    center
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#E5E0D8]"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#1A3C5E] flex items-center justify-center flex-shrink-0">
                                <f.icon size={20} className="text-[#2DBD8F]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#1A3C5E] text-sm mb-1">{f.title}</h3>
                                <p className="text-[#6B7280] text-xs leading-relaxed">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
