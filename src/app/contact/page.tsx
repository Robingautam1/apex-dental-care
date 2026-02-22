import { Metadata } from 'next';
import { makeTitle, SITE_URL } from '@/lib/seo';
import { ContactMap } from '@/components/home/ContactMap';
import { WaveDivider } from '@/components/svg/WaveDivider';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: makeTitle('Contact Us'),
    description: 'Contact Apex Dental Care in Model Town, Rohtak, Haryana. Call 098021 55667 to book an appointment with Dr. Aashish Malik. Visit us near Life Care Hospital.',
    keywords: ['contact Apex Dental Care', 'dental appointment Rohtak', 'dentist phone Rohtak', 'dental clinic Model Town'],
    openGraph: {
        title: 'Contact Us | Apex Dental Care — Dentist in Rohtak',
        description: 'Call 098021 55667 or visit us at Model Town, Rohtak for expert dental care.',
        url: `${SITE_URL}/contact`,
    },
    alternates: { canonical: `${SITE_URL}/contact` },
};

const hours = [
    { day: 'Monday', time: '9:00 AM – 8:00 PM' },
    { day: 'Tuesday', time: '9:00 AM – 8:00 PM' },
    { day: 'Wednesday', time: '9:00 AM – 8:00 PM' },
    { day: 'Thursday', time: '9:00 AM – 8:00 PM' },
    { day: 'Friday', time: '9:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
    { day: 'Sunday', time: 'Closed' },
];

export default function ContactPage() {
    return (
        <article>
            <section className="bg-[#1A3C5E] text-white py-16 lg:py-24">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <span className="text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/20 px-4 py-1.5 rounded-full tracking-wider uppercase">
                        Contact Us
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        Book Your Appointment at Apex Dental Care
                    </h1>
                    <p className="mt-4 text-lg text-white/80 max-w-2xl">
                        We are here to help you smile with confidence. Reach out to us by phone, visit our clinic, or fill out the form below.
                    </p>
                </div>
            </section>

            <WaveDivider className="w-full h-12 text-white -mt-1" />

            {/* Quick contact cards */}
            <section className="py-12 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <a
                            href="tel:09802155667"
                            className="bg-[#F7F4EF] rounded-2xl p-6 border border-[#E5E0D8] flex items-center gap-4 hover:border-[#2DBD8F] transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#2DBD8F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2DBD8F]/20 transition-colors">
                                <Phone size={28} className="text-[#2DBD8F]" />
                            </div>
                            <div>
                                <p className="font-semibold text-[#1A3C5E]">Call Us</p>
                                <p className="text-[#6B7280] text-sm">098021 55667</p>
                            </div>
                        </a>
                        <div className="bg-[#F7F4EF] rounded-2xl p-6 border border-[#E5E0D8] flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-[#1A3C5E]/5 flex items-center justify-center flex-shrink-0">
                                <MapPin size={28} className="text-[#1A3C5E]" />
                            </div>
                            <div>
                                <p className="font-semibold text-[#1A3C5E]">Visit Us</p>
                                <p className="text-[#6B7280] text-sm">Model Town, Rohtak 124001</p>
                            </div>
                        </div>
                        <div className="bg-[#F7F4EF] rounded-2xl p-6 border border-[#E5E0D8] flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-[#1A3C5E]/5 flex items-center justify-center flex-shrink-0">
                                <Mail size={28} className="text-[#1A3C5E]" />
                            </div>
                            <div>
                                <p className="font-semibold text-[#1A3C5E]">Email</p>
                                {/* TODO: Replace with actual email */}
                                <p className="text-[#6B7280] text-sm">info@apexdentalcare.in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business hours */}
            <section className="py-12 bg-[#F7F4EF]">
                <div className="max-w-[600px] mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-bold text-[#1A3C5E] text-center mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Business Hours
                    </h2>
                    <div className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)' }}>
                        <div className="flex items-center gap-3 p-4 bg-[#1A3C5E] text-white">
                            <Clock size={20} />
                            <span className="font-semibold text-sm">Weekly Schedule</span>
                        </div>
                        <table className="w-full">
                            <tbody>
                                {hours.map((h) => (
                                    <tr key={h.day} className="border-b border-[#E5E0D8] last:border-0">
                                        <td className="px-5 py-3 text-[#1C1C1E] font-medium">{h.day}</td>
                                        <td className={`px-5 py-3 text-right ${h.time === 'Closed' ? 'text-[#E85D4A] font-semibold' : 'text-[#6B7280]'}`}>
                                            {h.time}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* TODO: Replace placeholder — verify actual hours */}
                    <p className="text-xs text-[#6B7280] text-center mt-3">* Hours may vary on public holidays</p>
                </div>
            </section>

            <WaveDivider className="w-full h-12 text-white -mt-1" flip />

            {/* Reuse the ContactMap component */}
            <ContactMap />
        </article>
    );
}
