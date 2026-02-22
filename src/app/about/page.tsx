import { Metadata } from 'next';
import { makeTitle, SITE_URL } from '@/lib/seo';
import { ToothDecor } from '@/components/svg/ToothDecor';
import { WaveDivider } from '@/components/svg/WaveDivider';
import { Award, Heart, Users, Shield, Star } from 'lucide-react';
import Container from '@/components/shared/Container';

export const metadata: Metadata = {
    title: makeTitle('About Us'),
    description: 'Learn about Apex Dental Care in Rohtak and Dr. Aashish Malik, a trusted dental surgeon in Model Town, Rohtak, Haryana.',
    keywords: ['about Apex Dental Care', 'Dr Aashish Malik Rohtak', 'dental surgeon Rohtak'],
    openGraph: { title: 'About Us | Apex Dental Care', description: 'Meet Dr. Aashish Malik and the team at Apex Dental Care.', url: `${SITE_URL}/about` },
    alternates: { canonical: `${SITE_URL}/about` },
};

const values = [
    { icon: Heart, title: 'Patient-First Care', desc: 'Every treatment decision is guided by what is best for the patient.' },
    { icon: Shield, title: 'Clinical Excellence', desc: 'We invest in the latest technology and continuous learning.' },
    { icon: Users, title: 'Community Trust', desc: 'Serving the Rohtak community with integrity and compassion.' },
    { icon: Award, title: 'Transparent Pricing', desc: 'Honest, upfront costs with no hidden fees.' },
];

export default function AboutPage() {
    return (
        <article>
            <section className="bg-[#1A3C5E] text-white py-16 lg:py-24 relative overflow-hidden">
                <ToothDecor className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-96 text-white opacity-[0.04] pointer-events-none select-none" aria-hidden="true" />
                <Container>
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-3">About Us</p>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-[-0.03em]" style={{ fontFamily: 'var(--font-display)' }}>
                        The Team Behind Rohtak&apos;s Most Trusted Dental Clinic
                    </h1>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl leading-[1.7]">
                        At Apex Dental Care, exceptional dental health starts with trust, expertise, and a genuine commitment to the Rohtak community.
                    </p>
                </Container>
            </section>

            <WaveDivider topColor="#1A3C5E" bottomColor="#F7F4EF" />

            <section className="py-20 md:py-28 bg-[#F7F4EF]">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#2DBD8F]/15 rounded-full blur-2xl" />
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1A3C5E]/10 rounded-full blur-xl" />
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] via-[#1e4976] to-[#2DBD8F]/60 ring-1 ring-white/10 shadow-2xl">
                                <svg className="absolute inset-0 w-full h-full opacity-[0.05]" aria-hidden="true">
                                    <pattern id="aboutPageDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="white" /></pattern>
                                    <rect width="100%" height="100%" fill="url(#aboutPageDots)" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ToothDecor className="w-48 h-48 text-white opacity-10" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-5 border-t border-white/10">
                                    <p className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Dr. Aashish Malik</p>
                                    <p className="text-white/70 text-sm">BDS, Dental Surgeon</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-[#E5E0D8]">
                                <div className="w-10 h-10 bg-[#EBF9F4] rounded-xl flex items-center justify-center"><Star size={20} className="text-[#2DBD8F]" /></div>
                                <div><p className="text-xs text-[#6B7280]">Google Rating</p><p className="font-bold text-[#1A3C5E] text-sm">5.0 ★ · 38 Reviews</p></div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#1C1C1E] mb-6 tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>
                                Dr. Aashish Malik — Dental Surgeon, Rohtak
                            </h2>
                            <p className="text-[#4B5563] leading-[1.7] mb-4">
                                Dr. Aashish Malik is a skilled dental surgeon based in Model Town, Rohtak. With a deep commitment to clinical excellence and patient comfort, he has built Apex Dental Care into one of the most trusted dental practices in the region.
                            </p>
                            <p className="text-[#4B5563] leading-[1.7] mb-4">
                                His areas of expertise include root canal treatment, dental implants, cosmetic dentistry, orthodontics, and pediatric dental care. Dr. Malik is known for his gentle approach, honest diagnoses, and ability to put even the most anxious patients at ease.
                            </p>
                            <p className="text-[#4B5563] leading-[1.7] mb-6">
                                Beyond clinical work, Dr. Malik actively contributes to dental health awareness in the Rohtak community through camps, seminars, and educational outreach.
                            </p>
                            <div className="bg-white rounded-2xl p-5 border border-[#E5E0D8] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                                <h3 className="font-semibold text-[#1A3C5E] mb-3 text-sm uppercase tracking-wider">Qualifications</h3>
                                <ul className="space-y-2 text-[#6B7280] text-sm">
                                    <li>• BDS — Bachelor of Dental Surgery</li>
                                    <li>• Registered with Dental Council of India</li>
                                    <li>• Advanced Training in Endodontics</li>
                                    <li>• Certified in Implant Dentistry</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <WaveDivider topColor="#F7F4EF" bottomColor="#FFFFFF" />

            <section className="py-20 md:py-28 bg-white">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#1C1C1E] text-center mb-12 tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map((v) => (
                            <div key={v.title} className="flex gap-5 items-start p-6 bg-[#F7F4EF] rounded-2xl border border-[#E5E0D8]">
                                <div className="flex-shrink-0 w-14 h-14 bg-[#1A3C5E] rounded-2xl flex items-center justify-center">
                                    <v.icon size={28} className="text-[#2DBD8F]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1A3C5E] mb-1">{v.title}</h3>
                                    <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </article>
    );
}
