'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
}

export function BlogCard({ slug, title, excerpt, date, readTime, category }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`}>
            <motion.article
                className="group bg-white rounded-2xl overflow-hidden border border-[#E5E0D8] h-full flex flex-col cursor-pointer"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)' }}
                whileHover={{ y: -4, boxShadow: '0 2px 8px rgba(0,0,0,0.1), 0 16px 40px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
            >
                {/* Placeholder featured image */}
                <div className="h-48 bg-gradient-to-br from-[#1A3C5E] to-[#2DBD8F] relative overflow-hidden">
                    {/* TODO: Replace with actual blog featured image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-bold font-[var(--font-display)]">A</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/10 px-3 py-1 rounded-full w-fit mb-3">
                        {category}
                    </span>
                    <h3 className="font-semibold text-[#1A3C5E] text-lg mb-2 group-hover:text-[#2DBD8F] transition-colors font-[var(--font-display)]">
                        {title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed flex-1 mb-4">
                        {excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                        <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {readTime}
                        </span>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}
