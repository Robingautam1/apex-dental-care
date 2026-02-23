import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Apex Dental Care - Dentist Near Me Rohtak`,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col pt-24 bg-background-base">
            <Navbar />

            <article className="flex-grow max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-20 w-full">
                {/* Header Section */}
                <header className="mb-10 text-center">
                    <div className="inline-block bg-[#EBF9F4] text-[#1a8f6a] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 relative z-10">
                        {post.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-display font-bold text-[#1C1C1E] leading-tight mb-6">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-sm text-[#6B7280]">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/dr-aashish-avatar.jpg"
                                alt="Dr. Aashish Malik"
                                width={36} height={36}
                                className="rounded-full object-cover object-top border border-slate-200"
                            />
                            <span className="font-semibold text-[#1C1C1E]">Dr. Aashish Malik</span>
                        </div>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                </header>

                {/* Hero Image / Gradient Graphic */}
                <div className={`w-full aspect-video rounded-3xl mb-12 flex items-center justify-center bg-gradient-to-br ${post.gradient} shadow-lg relative overflow-hidden`}>
                    <div className="scale-150 transform opacity-30 mix-blend-overlay">
                        {post.svg}
                    </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg prose-slate max-w-none">
                    {post.content}
                </div>

                {/* CTA Footer */}
                <div className="mt-16 bg-[#F7F4EF] p-8 rounded-3xl text-center border border-[#E5E0D8]">
                    <h4 className="text-2xl font-display font-bold text-[#1C1C1E] mb-4">Ready to Schedule Your Visit?</h4>
                    <p className="text-[#6B7280] mb-8 max-w-xl mx-auto">Don&apos;t wait to address your dental health. Book a consultation with Dr. Aashish Malik today.</p>
                    <a href="https://wa.me/919802155667" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#2DBD8F] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-transform">
                        Book Appointment on WhatsApp
                    </a>
                </div>
            </article>

            <Footer />
        </main>
    );
}
