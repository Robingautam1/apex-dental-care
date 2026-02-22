'use client';

import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

// Distinct gradients for each category
const gradientMap: Record<string, string> = {
    'Dental Health': 'from-[#1A3C5E] to-[#2a5298]',
    'Treatments': 'from-[#134e4a] to-[#2DBD8F]',
    'Dental Tips': 'from-[#312e81] to-[#7c3aed]',
};

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
            <article className="bg-white rounded-xl overflow-hidden border border-[#E5E0D8] hover:shadow-md hover:border-[#2DBD8F]/30 transition-all duration-200 h-full flex flex-col">
                {/* Gradient thumbnail — compact */}
                <div className={`relative h-32 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                    <span className="absolute top-2.5 left-2.5 bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-[#1C1C1E] text-sm leading-snug mb-2 group-hover:text-[#1A3C5E] transition-colors">
                        {title}
                    </h3>
                    <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2 mb-3 flex-1">
                        {excerpt}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-[#9CA3AF]">
                        <span>{new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> {readTime}</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
