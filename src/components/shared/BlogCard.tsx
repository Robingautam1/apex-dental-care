'use client';

import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

// Category-specific gradients
const gradientMap: Record<string, string> = {
    'Dental Health': 'from-[#1A3C5E] to-[#2a5298]',
    'Treatments': 'from-[#134e4a] to-[#2DBD8F]',
    'Dental Tips': 'from-[#1A3C5E] to-[#7c3aed]',
};

// Category-specific SVG illustrations
function CategoryIllustration({ category }: { category: string }) {
    if (category === 'Treatments') {
        return (
            <svg viewBox="0 0 80 80" className="w-20 h-20 text-white opacity-20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M40 15 C30 15 20 25 20 40 C20 50 25 60 40 65 C55 60 60 50 60 40 C60 25 50 15 40 15Z" />
                <line x1="40" y1="30" x2="40" y2="50" />
                <line x1="30" y1="40" x2="50" y2="40" />
            </svg>
        );
    }
    if (category === 'Dental Tips') {
        return (
            <svg viewBox="0 0 80 80" className="w-20 h-20 text-white opacity-20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="20" y="15" width="40" height="50" rx="4" />
                <line x1="28" y1="28" x2="52" y2="28" />
                <line x1="28" y1="36" x2="52" y2="36" />
                <line x1="28" y1="44" x2="44" y2="44" />
                <path d="M28 52 L34 52 L31 56Z" fill="currentColor" />
            </svg>
        );
    }
    // Default: Dental Health — tooth with warning
    return (
        <svg viewBox="0 0 80 80" className="w-20 h-20 text-white opacity-20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M40 15 C30 15 20 25 20 40 C20 50 25 60 40 65 C55 60 60 50 60 40 C60 25 50 15 40 15Z" />
            <path d="M36 33 L40 43 L44 33Z" fill="currentColor" />
            <circle cx="40" cy="49" r="2" fill="currentColor" />
        </svg>
    );
}

interface BlogCardProps {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
}

export function BlogCard({ slug, title, excerpt, date, readTime, category }: BlogCardProps) {
    const gradient = gradientMap[category] || 'from-[#1A3C5E] to-[#2a5298]';

    return (
        <Link href={`/blog/${slug}`} className="group block h-full">
            <article className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
                {/* Illustrated thumbnail */}
                <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                    <CategoryIllustration category={category} />
                    <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-[#1C1C1E] text-lg leading-snug mb-2 group-hover:text-[#1A3C5E] transition-colors">
                        {title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                        {excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#E5E0D8]">
                        <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                            <span>{new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {readTime}</span>
                        </div>
                        <span className="text-[#2DBD8F] text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Read <ArrowRight size={14} />
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
