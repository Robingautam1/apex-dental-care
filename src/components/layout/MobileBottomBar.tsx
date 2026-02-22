'use client';

import { Phone, CalendarDays } from 'lucide-react';
import Link from 'next/link';

export function MobileBottomBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
            <div className="bg-white/95 backdrop-blur-md border-t border-[#E5E0D8] px-4 py-3 flex items-center gap-3">
                <a
                    href="tel:09802155667"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-[#1A3C5E] text-[#1A3C5E] font-semibold text-sm"
                    aria-label="Call Apex Dental Care"
                >
                    <Phone size={18} />
                    Call Now
                </a>
                <Link
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#2DBD8F] text-white font-semibold text-sm"
                >
                    <CalendarDays size={18} />
                    Book Appointment
                </Link>
            </div>
        </div>
    );
}
