'use client';

import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function MobileBottomBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] pb-safe">
            <div className="flex h-16 items-center justify-between px-2">

                <a
                    href="https://wa.me/919802155667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 hover:text-secondary transition-colors"
                    style={{ minWidth: '44px', minHeight: '44px' }}
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-[10px] font-medium">WhatsApp</span>
                </a>

                <div className="relative flex-1 flex justify-center -mt-6">
                    <a
                        href="tel:+919802155667"
                        className="group relative flex flex-col items-center justify-center gap-1 bg-primary text-white w-16 h-16 rounded-full shadow-soft"
                    >
                        {/* Soft Pulse Animation Component */}
                        <span className="absolute inset-0 rounded-full animate-ping bg-primary opacity-20"></span>

                        <Phone className="w-6 h-6 z-10" />
                        <span className="text-[9px] font-bold z-10">Call Now</span>
                    </a>
                </div>

                <a
                    href="https://www.google.com/maps/place/Apex+Dental+Care"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 hover:text-secondary transition-colors"
                    style={{ minWidth: '44px', minHeight: '44px' }}
                >
                    <MapPin className="w-5 h-5" />
                    <span className="text-[10px] font-medium">Directions</span>
                </a>

            </div>
        </div>
    );
}
