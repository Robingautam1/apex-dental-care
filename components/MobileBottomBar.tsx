'use client';

import { Phone as PhoneIcon, Calendar as CalendarIcon } from 'lucide-react';
import Link from 'next/link';

export default function MobileBottomBar() {
    return (
        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/90 backdrop-blur-md 
                    border-t border-[#E5E0D8] px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]
                    flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transform-gpu">
            <a href="tel:+919802155667"
                className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#F7F4EF] 
                    text-[#1A3C5E] py-2.5 rounded-xl active:bg-[#E5E0D8] transition-colors"
                aria-label="Call Clinic">
                <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                <span className="text-[11px] font-semibold">Call Now</span>
            </a>
            <Link href="/contact"
                className="flex-[1.5] flex items-center justify-center gap-2 bg-[#1A3C5E] 
                       text-white py-2.5 rounded-xl shadow-[0_4px_12px_rgba(26,60,94,0.3)]
                       active:scale-[0.98] transition-transform animate-[softPulse_2s_infinite]"
                aria-label="Book Appointment">
                <CalendarIcon className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-semibold">Book Appointment</span>
            </Link>
        </div>
    );
}
