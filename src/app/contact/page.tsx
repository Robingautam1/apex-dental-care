import { Metadata } from 'next';
import { makeTitle, SITE_URL } from '@/lib/seo';
import { ContactMap } from '@/components/home/ContactMap';
import { WaveDivider } from '@/components/svg/WaveDivider';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import Container from '@/components/shared/Container';

export const metadata: Metadata = {
    title: makeTitle('Contact Us'),
    description: 'Contact Apex Dental Care in Model Town, Rohtak. Call 098021 55667 to book an appointment with Dr. Aashish Malik.',
    keywords: ['contact Apex Dental Care', 'dental appointment Rohtak', 'dentist phone Rohtak'],
    openGraph: { title: 'Contact Us | Apex Dental Care', description: 'Call 098021 55667 or visit us at Model Town, Rohtak.', url: `${SITE_URL}/contact` },
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
                <Container>
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-3">Contact Us</p>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-[-0.03em]" style={{ fontFamily: 'var(--font-display)' }}>
                        Book Your Appointment at Apex Dental Care
                    </h1>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl leading-[1.7]">
                        We are here to help you smile with confidence. Reach out by phone, visit our clinic, or fill out the form below.
                    </p>
                </Container>
            </section>

            <WaveDivider topColor="#1A3C5E" bottomColor="#FFFFFF" />

            <section className="py-12 md:py-16 bg-white">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <a href="tel:09802155667" className="group flex gap-4 items-center p-5 bg-[#F7F4EF] rounded-2xl border border-[#E5E0D8] hover:border-[#2DBD8F]/40 transition-colors">
                            <div className="w-14 h-14 rounded-2xl bg-[#EBF9F4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2DBD8F] transition-colors"><Phone size={24} className="text-[#2DBD8F] group-hover:text-white transition-colors" /></div>
                            <div><p className="font-semibold text-[#1A3C5E]">Call Us</p><p className="text-[#6B7280] text-sm">098021 55667</p></div>
                        </a>
                        <div className="flex gap-4 items-center p-5 bg-[#F7F4EF] rounded-2xl border border-[#E5E0D8]">
                            <div className="w-14 h-14 rounded-2xl bg-[#1A3C5E]/5 flex items-center justify-center flex-shrink-0"><MapPin size={24} className="text-[#1A3C5E]" /></div>
                            <div><p className="font-semibold text-[#1A3C5E]">Visit Us</p><p className="text-[#6B7280] text-sm">Model Town, Rohtak 124001</p></div>
                        </div>
                        <div className="flex gap-4 items-center p-5 bg-[#F7F4EF] rounded-2xl border border-[#E5E0D8]">
                            <div className="w-14 h-14 rounded-2xl bg-[#1A3C5E]/5 flex items-center justify-center flex-shrink-0"><Mail size={24} className="text-[#1A3C5E]" /></div>
                            <div><p className="font-semibold text-[#1A3C5E]">Email</p><p className="text-[#6B7280] text-sm">info@apexdentalcare.in</p></div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-12 md:py-16 bg-[#F7F4EF]">
                <Container className="max-w-[600px]">
                    <h2 className="text-2xl font-semibold text-[#1C1C1E] text-center mb-6 tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>Business Hours</h2>
                    <div className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                        <div className="flex items-center gap-3 p-4 bg-[#1A3C5E] text-white"><Clock size={20} /><span className="font-semibold text-sm">Weekly Schedule</span></div>
                        <table className="w-full">
                            <tbody>
                                {hours.map((h) => (
                                    <tr key={h.day} className="border-b border-[#E5E0D8] last:border-0">
                                        <td className="px-5 py-3 text-[#1C1C1E] font-medium text-sm">{h.day}</td>
                                        <td className={`px-5 py-3 text-right text-sm ${h.time === 'Closed' ? 'text-[#E85D4A] font-semibold' : 'text-[#6B7280]'}`}>{h.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>

            <WaveDivider topColor="#F7F4EF" bottomColor="#FFFFFF" />
            <ContactMap />
        </article>
    );
}
