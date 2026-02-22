import { Metadata } from 'next';
import { makeTitle, SITE_URL } from '@/lib/seo';
import { BlobShape } from '@/components/svg/BlobShape';
import { ToothDecor } from '@/components/svg/ToothDecor';
import { WaveDivider } from '@/components/svg/WaveDivider';
import { Award, Heart, Users, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: makeTitle('About Us'),
    description: 'Learn about Apex Dental Care in Rohtak and Dr. Aashish Malik, a trusted dental surgeon in Model Town, Rohtak, Haryana. Discover our clinic story, values, and commitment to your dental health.',
    keywords: ['about Apex Dental Care', 'Dr Aashish Malik Rohtak', 'dental surgeon Rohtak', 'dentist Model Town Rohtak'],
    openGraph: {
        title: 'About Us | Apex Dental Care — Dentist in Rohtak',
        description: 'Meet Dr. Aashish Malik and the team at Apex Dental Care, Model Town, Rohtak.',
        url: `${SITE_URL}/about`,
    },
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
            {/* Hero */}
            <section className="bg-[#1A3C5E] text-white py-16 lg:py-24 relative overflow-hidden">
                <ToothDecor className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-96 text-white opacity-[0.04] pointer-events-none" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <span className="text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/20 px-4 py-1.5 rounded-full tracking-wider uppercase">
                        About Us
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        The Team Behind Rohtak&apos;s Most Trusted Dental Clinic
                    </h1>
                    <p className="mt-4 text-lg text-white/80 max-w-2xl">
                        At Apex Dental Care, we believe that exceptional dental health starts with trust, expertise, and a genuine commitment to the Rohtak community.
                    </p>
                </div>
            </section>

            <WaveDivider className="w-full h-12 text-[#F7F4EF] -mt-1" />

            {/* Doctor Profile */}
            <section className="py-12 lg:py-20 bg-[#F7F4EF]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <BlobShape className="absolute inset-0 w-full h-full text-[#2DBD8F]/10 -rotate-6 scale-110" />
                            {/* TODO: Replace with actual doctor photo */}
                            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] to-[#1A3C5E]/80">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ToothDecor className="w-24 h-32 text-white/10" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A3C5E] to-transparent p-6">
                                    <p className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Dr. Aashish Malik</p>
                                    <p className="text-white/70 text-sm">Dental Surgeon</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-[#1A3C5E] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                Dr. Aashish Malik — Dental Surgeon, Rohtak
                            </h2>
                            <p className="text-[#6B7280] leading-relaxed mb-4">
                                Dr. Aashish Malik is a skilled dental surgeon based in Model Town, Rohtak, Haryana. With a deep commitment to clinical excellence and patient comfort, Dr. Malik has built Apex Dental Care into one of the most trusted dental practices in the region.
                            </p>
                            <p className="text-[#6B7280] leading-relaxed mb-4">
                                His areas of expertise include root canal treatment, dental implants, cosmetic dentistry, orthodontics, and pediatric dental care. Dr. Malik is known for his gentle approach, honest diagnoses, and ability to put even the most anxious patients at ease.
                            </p>
                            <p className="text-[#6B7280] leading-relaxed mb-6">
                                Beyond clinical work, Dr. Malik actively contributes to dental health awareness in the Rohtak community through camps, seminars, and educational outreach. His philosophy is simple: treat every patient like family, and never compromise on quality.
                            </p>

                            {/* Certifications placeholder */}
                            <div className="bg-white rounded-2xl p-5 border border-[#E5E0D8]">
                                <h3 className="font-semibold text-[#1A3C5E] mb-3 text-sm uppercase tracking-wider">Qualifications & Certifications</h3>
                                {/* TODO: Replace placeholder — add actual certifications */}
                                <ul className="space-y-2 text-[#6B7280] text-sm">
                                    <li>• BDS — Bachelor of Dental Surgery</li>
                                    <li>• Registered with Dental Council of India</li>
                                    <li>• Advanced Training in Endodontics</li>
                                    <li>• Certified in Implant Dentistry</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WaveDivider className="w-full h-12 text-white -mt-1" flip />

            {/* Values */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-bold text-[#1A3C5E] text-center mb-12" style={{ fontFamily: 'var(--font-display)' }}>
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <div key={v.title} className="bg-[#F7F4EF] rounded-2xl p-6 border border-[#E5E0D8] text-center">
                                <div className="w-14 h-14 rounded-2xl bg-[#1A3C5E]/5 flex items-center justify-center mx-auto mb-4">
                                    <v.icon size={28} className="text-[#1A3C5E]" />
                                </div>
                                <h3 className="font-semibold text-[#1A3C5E] mb-2">{v.title}</h3>
                                <p className="text-[#6B7280] text-sm">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team & Gallery placeholder */}
            <section className="py-12 lg:py-20 bg-[#F7F4EF]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-bold text-[#1A3C5E] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Our Clinic
                    </h2>
                    <p className="text-[#6B7280] max-w-2xl mx-auto mb-10">
                        Apex Dental Care features a modern, comfortable clinic space designed to make your visit as pleasant as possible. We maintain the highest standards of hygiene and sterilization.
                    </p>
                    {/* TODO: Replace with actual clinic photos */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {['Clinic Reception', 'Treatment Room', 'Sterilization Area'].map((label) => (
                            <div key={label} className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A3C5E]/80 to-[#2DBD8F]/40 flex items-center justify-center">
                                <span className="text-white/40 text-sm font-medium">{label} — Photo Coming Soon</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
}
