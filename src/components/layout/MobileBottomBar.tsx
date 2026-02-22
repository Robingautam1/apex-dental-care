'use client';

import { Phone, CalendarDays } from 'lucide-react';
import Link from 'next/link';

export function MobileBottomBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden" aria-label="Quick actions">
            <div className="bg-white border-t border-[#E5E0D8] p-3 flex gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
                <a
                    href="tel:09802155667"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1A3C5E] text-white rounded-xl py-3 font-semibold text-sm"
                    aria-label="Call Apex Dental Care"
                >
                    <Phone size={16} />
                    Call Now
                </a>
                <Link
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#2DBD8F] text-white rounded-xl py-3 font-semibold text-sm"
                >
                    <CalendarDays size={16} />
                    Book Appointment
                </Link>
            </div>
        </div>
    );
}
