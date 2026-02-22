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
        openGraph: { title: post.title, description: post.excerpt, url: `${SITE_URL}/blog/${slug}`, type: 'article', publishedTime: post.date },
        alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const articleJsonLd = generateArticleJsonLd({ title: post.title, slug: post.slug, date: post.date, excerpt: post.excerpt });
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: `${SITE_URL}/blog` },
        { name: post.title, url: `${SITE_URL}/blog/${slug}` },
    ]);

    const renderBody = (body: string) =>
        body.split('\n\n').map((block, i) => {
            if (block.startsWith('## '))
                return <h2 key={i} className="text-2xl font-semibold text-[#1C1C1E] mt-8 mb-4 tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>{block.replace('## ', '')}</h2>;
            if (block.startsWith('### '))
                return <h3 key={i} className="text-xl font-semibold text-[#1C1C1E] mt-6 mb-3 tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>{block.replace('### ', '')}</h3>;
            return <p key={i} className="text-[#4B5563] leading-[1.7] mb-5">{block}</p>;
        });

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <article>
                <section className="bg-[#1A3C5E] text-white py-16 lg:py-24">
                    <Container className="max-w-[800px]">
                        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
                            <ol className="flex items-center gap-2">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li><li>/</li>
                                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li><li>/</li>
                                <li className="text-white truncate max-w-[200px]">{post.title}</li>
                            </ol>
                        </nav>
                        <span className="inline-block text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/20 px-3 py-1 rounded-full mb-4 tracking-[0.18em] uppercase">{post.category}</span>
                        <h1 className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-[-0.03em]" style={{ fontFamily: 'var(--font-display)' }}>{post.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-white/60">
                            <span className="flex items-center gap-1.5"><User size={16} /> {post.author}</span>
                            <span className="flex items-center gap-1.5"><Calendar size={16} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            <span className="flex items-center gap-1.5"><Clock size={16} /> {post.readTime}</span>
                        </div>
                    </Container>
                </section>
                <WaveDivider topColor="#1A3C5E" bottomColor="#F7F4EF" />
                <section className="py-20 md:py-28 bg-[#F7F4EF]">
                    <Container className="max-w-[800px]">
                        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0D8] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                            {renderBody(post.body)}
                        </div>
                        <div className="mt-10 text-center">
                            <Link href="/blog" className="text-[#2DBD8F] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">← Back to All Articles</Link>
                        </div>
                    </Container>
                </section>
            </article>
        </>
    );
}
