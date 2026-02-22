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
                className="group bg-white rounded-2xl p-6 border border-[#E5E0D8] cursor-pointer h-full"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)' }}
                whileHover={{ y: -4, boxShadow: '0 2px 8px rgba(0,0,0,0.1), 0 16px 40px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
            >
                <div className="w-12 h-12 rounded-xl bg-[#2DBD8F]/10 flex items-center justify-center mb-4 group-hover:bg-[#2DBD8F]/20 transition-colors">
                    <Icon size={24} className="text-[#2DBD8F]" />
                </div>
                <h3 className="font-semibold text-[#1A3C5E] text-lg mb-2 font-[var(--font-display)]">
                    {shortTitle}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                    {tagline}
                </p>
            </motion.article>
        </Link>
    );
}
