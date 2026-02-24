import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin as MapPinIcon, Clock as ClockIcon, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Book a Dental Appointment in Rohtak - Apex Dental Care',
    description: 'Visit Apex Dental Care near life care hospital in Model Town, Rohtak. Call 98021 55667 to schedule an appointment with Dr. Aashish Malik.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col pt-24 bg-background-base">
            <Navbar />
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-3xl md:text-5xl font-display font-bold text-[#1C1C1E] mb-6">Our Clinic Locations</h1>
                    <p className="text-lg text-text-muted leading-relaxed">Visit us at either of our convenient Rohtak branches. Experience world-class dental care led by Dr. Aashish Malik.</p>
                </div>

                {/* The Two Branch Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

                    {/* Branch 1 Card */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E5E0D8] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-[#2DBD8F]" />
                            <span className="text-xs font-semibold text-[#2DBD8F] uppercase tracking-widest">
                                Branch 1 — Model Town
                            </span>
                        </div>
                        <h3 className="font-semibold text-[#1A3C5E] text-lg mb-3">Apex Dental Care</h3>
                        <div className="flex flex-col gap-3 text-sm text-[#6B7280]">
                            <div className="flex items-start gap-2.5">
                                <MapPinIcon className="w-4 h-4 text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                <span>Near Life Care Hospital, Model Town, Rohtak, Haryana 124001</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <ClockIcon className="w-4 h-4 text-[#2DBD8F] flex-shrink-0" />
                                <span>Mon–Sat: 9:00 AM – 8:00 PM · Sunday: Closed</span>
                            </div>
                        </div>
                        <a href="https://share.google/3z1exJby1De0Ailde"
                            target="_blank" rel="noopener noreferrer"
                            className="mt-4 flex items-center gap-1.5 text-[#2DBD8F] font-semibold text-sm hover:gap-2.5 transition-all duration-150">
                            Get Directions <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Branch 2 Card */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E5E0D8] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-[#1A3C5E]" />
                            <span className="text-xs font-semibold text-[#1A3C5E] uppercase tracking-widest">
                                Branch 2 — MDU Gate
                            </span>
                        </div>
                        <h3 className="font-semibold text-[#1A3C5E] text-lg mb-3">Apex Dental Care</h3>
                        <div className="flex flex-col gap-3 text-sm text-[#6B7280]">
                            <div className="flex items-start gap-2.5">
                                <MapPinIcon className="w-4 h-4 text-[#1A3C5E] flex-shrink-0 mt-0.5" />
                                <span>Opp. Agro Mall, Near MDU Gate No. 2, Rohtak, Haryana</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <ClockIcon className="w-4 h-4 text-[#1A3C5E] flex-shrink-0" />
                                <span>Mon–Sat: 9:00 AM – 8:00 PM · Sunday: Closed</span>
                            </div>
                        </div>
                        <a href="https://www.google.com/maps/search/Apex+Dental+Care+MDU+Gate+Rohtak"
                            target="_blank" rel="noopener noreferrer"
                            className="mt-4 flex items-center gap-1.5 text-[#1A3C5E] font-semibold text-sm hover:gap-2.5 transition-all duration-150">
                            Get Directions <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>

                {/* Google Maps Embeds */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-sm bg-[#EBF9F4] flex items-center justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.535843477437!2d76.6045145150821!3d28.88235398231976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85a0684f85e5%3A0xc6cb719d27f67be5!2sApex%20Dental%20Care!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map - Model Town Branch"
                        />
                    </div>
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-sm bg-[#e8ecf0] flex items-center justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.535843477437!2d76.61!3d28.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2sUnknown!5e0!3m2!1sen!2sin!4v1711234567891!5m2!1sen!2sin"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map - MDU Gate Branch"
                        />
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
}
