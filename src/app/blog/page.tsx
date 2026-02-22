import { Metadata } from 'next';
import { makeTitle, SITE_URL } from '@/lib/seo';
import { blogPosts } from '@/data/blog-posts';
import { BlogCard } from '@/components/shared/BlogCard';
import { WaveDivider } from '@/components/svg/WaveDivider';
import Container from '@/components/shared/Container';

export const metadata: Metadata = {
    title: makeTitle('Blog'),
    description: 'Read the latest dental health tips, treatment guides, and oral care advice from Dr. Aashish Malik at Apex Dental Care, Rohtak.',
    keywords: ['dental blog Rohtak', 'dental health tips', 'oral care advice Rohtak'],
    openGraph: { title: 'Blog | Apex Dental Care', description: 'Dental health tips and guides from Rohtak.', url: `${SITE_URL}/blog` },
    alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
    return (
        <article>
            <section className="bg-[#1A3C5E] text-white py-16 lg:py-24">
                <Container>
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-3">Blog</p>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-[-0.03em]" style={{ fontFamily: 'var(--font-display)' }}>
                        Dental Health Tips & Insights
                    </h1>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl leading-[1.7]">
                        Expert advice and treatment guides from Dr. Aashish Malik.
                    </p>
                </Container>
            </section>
            <WaveDivider topColor="#1A3C5E" bottomColor="#F7F4EF" />
            <section className="py-20 md:py-28 bg-[#F7F4EF]">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post) => (<BlogCard key={post.slug} {...post} />))}
                    </div>
                </Container>
            </section>
        </article>
    );
}
