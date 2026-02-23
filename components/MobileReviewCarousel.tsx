'use client';

import { useState, useRef } from 'react';
import { Star as StarIcon, ExternalLink as ExternalLinkIcon } from 'lucide-react';

type Review = {
    name: string;
    text: string;
    rating: number;
};

export function MobileReviewCarousel({ reviews }: { reviews: Review[] }) {
    const [active, setActive] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Update dot indicator on scroll
    const handleScroll = () => {
        if (!containerRef.current) return;
        const index = Math.round(
            containerRef.current.scrollLeft / containerRef.current.offsetWidth
        );
        setActive(index);
    };

    return (
        <section className="md:hidden py-10 bg-[#1A3C5E]" aria-label="Patient testimonials">
            <div className="px-5 mb-6">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-2">
                    Testimonials
                </p>
                <h2 className="font-display text-2xl font-semibold text-white leading-tight">
                    What Our Patients Say
                </h2>
                {/* Google rating badge */}
                <div className="flex items-center gap-2 mt-3">
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
                        ))}
                    </div>
                    <span className="text-white/70 text-sm">5.0 · 38 reviews on Google</span>
                </div>
            </div>

            {/* Swipeable cards */}
            <div ref={containerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 pb-2 scrollbar-none"
                role="region"
                aria-label="Swipe to read patient reviews">
                {reviews.map((review, i) => (
                    <figure key={i}
                        className="snap-center flex-shrink-0 w-[85vw] bg-white/10 backdrop-blur-sm 
                             border border-white/15 rounded-2xl p-6">
                        <div className="flex gap-0.5 mb-4">
                            {[...Array(review.rating)].map((_, j) => (
                                <StarIcon key={j} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                            ))}
                        </div>
                        <blockquote className="min-h-[140px]">
                            <p className="text-white/90 text-sm leading-relaxed mb-4">
                                &quot;{review.text}&quot;
                            </p>
                        </blockquote>
                        <figcaption className="text-white/50 text-xs font-medium">
                            — {review.name} · Google Review
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5" role="tablist" aria-label="Review navigation">
                {reviews.map((_, i) => (
                    <button key={i}
                        role="tab"
                        aria-selected={active === i}
                        aria-label={`Review ${i + 1} of ${reviews.length}`}
                        onClick={() => {
                            containerRef.current?.scrollTo({ left: i * containerRef.current.offsetWidth, behavior: 'smooth' });
                        }}
                        className={`rounded-full transition-all duration-300 
                              ${active === i ? 'w-6 h-2 bg-[#2DBD8F]' : 'w-2 h-2 bg-white/30'}`} />
                ))}
            </div>

            {/* CTA */}
            <div className="px-5 mt-6">
                <a href="https://www.google.com/search?q=Apex+Dental+Care+Rohtak+reviews"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full border border-white/25 
                      text-white font-semibold text-sm py-3.5 rounded-xl
                      active:bg-white/10 transition-colors duration-150">
                    See All Reviews on Google
                    <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}
