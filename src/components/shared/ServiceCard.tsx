'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Sun, Anchor, AlignCenter, Gem, Baby, Siren } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Sparkles, ShieldCheck, Sun, Anchor, AlignCenter, Gem, Baby, Siren,
};

interface ServiceCardProps {
    slug: string;
    shortTitle: string;
    tagline: string;
    icon: string;
}

export function ServiceCard({ slug, shortTitle, tagline, icon }: ServiceCardProps) {
    const Icon = iconMap[icon] || Sparkles;

    return (
        <Link href={`/services/${slug}`}>
            <motion.article
                className="group bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E0D8] cursor-pointer h-full hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-200"
            >
                <div className="w-10 h-10 rounded-xl bg-[#2DBD8F]/10 flex items-center justify-center mb-4 group-hover:bg-[#2DBD8F]/20 transition-colors">
                    <Icon size={20} className="text-[#2DBD8F]" />
                </div>
                <h3 className="font-semibold text-[#1A3C5E] text-lg mb-2">
                    {shortTitle}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                    {tagline}
                </p>
            </motion.article>
        </Link>
    );
}
