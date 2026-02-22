import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { makeTitle, generateArticleJsonLd, generateBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import { WaveDivider } from '@/components/svg/WaveDivider';
import { Calendar, Clock, User } from 'lucide-react';
import Container from '@/components/shared/Container';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: makeTitle(post.title),
        description: post.excerpt,
        keywords: [post.category, 'dental blog Rohtak', 'Dr Aashish Malik'],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `${SITE_URL}/blog/${slug}`,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
        alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const articleJsonLd = generateArticleJsonLd({
        title: post.title,
        slug: post.slug,
        date: post.date,
        excerpt: post.excerpt,
    });

    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: `${SITE_URL}/blog` },
        { name: post.title, url: `${SITE_URL}/blog/${slug}` },
    ]);

    // Simple markdown-like rendering for ## headings
    const renderBody = (body: string) => {
        return body.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
                return (
                    <h2 key={i} className="text-2xl font-semibold text-[#1A3C5E] mt-8 mb-4 leading-tight tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>
                        {block.replace('## ', '')}
                    </h2>
                );
            }
            if (block.startsWith('### ')) {
                return (
                    <h3 key={i} className="text-xl font-semibold text-[#1A3C5E] mt-6 mb-3 leading-tight tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>
                        {block.replace('### ', '')}
                    </h3>
                );
            }
            return (
                <p key={i} className="text-[#1C1C1E] leading-relaxed mb-5">
                    {block}
                </p>
            );
        });
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article>
                {/* Hero */}
                <section className="bg-[#1A3C5E] text-white py-16 lg:py-24">
                    <Container className="max-w-[800px]">
                        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
                            <ol className="flex items-center gap-2">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li>/</li>
                                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                                <li>/</li>
                                <li className="text-white truncate max-w-[200px]">{post.title}</li>
                            </ol>
                        </nav>
                        <span className="inline-block text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/20 px-3 py-1 rounded-full mb-4 tracking-[0.2em] uppercase">
                            {post.category}
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-white/70">
                            <span className="flex items-center gap-1.5"><User size={16} /> {post.author}</span>
                            <span className="flex items-center gap-1.5"><Calendar size={16} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            <span className="flex items-center gap-1.5"><Clock size={16} /> {post.readTime}</span>
                        </div>
                    </Container>
                </section>

                <WaveDivider className="w-full h-12 text-[#F7F4EF] -mt-1" />

                {/* Content */}
                <section className="py-20 md:py-28 bg-[#F7F4EF]">
                    <Container className="max-w-[800px]">
                        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E0D8] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                            {renderBody(post.body)}
                        </div>

                        {/* Back to blog */}
                        <div className="mt-10 text-center">
                            <Link href="/blog" className="inline-flex items-center text-[#2DBD8F] font-semibold hover:underline">
                                ← Back to All Articles
                            </Link>
                        </div>
                    </Container>
                </section>
            </article>
        </>
    );
}
