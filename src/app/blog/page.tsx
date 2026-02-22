import { Metadata } from 'next';
import { makeTitle, SITE_URL } from '@/lib/seo';
import { blogPosts } from '@/data/blog-posts';
import { BlogCard } from '@/components/shared/BlogCard';
import { WaveDivider } from '@/components/svg/WaveDivider';
import Container from '@/components/shared/Container';
import SectionLabel from '@/components/shared/SectionLabel';

export const metadata: Metadata = {
    title: makeTitle('Blog'),
    description: 'Read the latest dental health tips, treatment guides, and oral care advice from Dr. Aashish Malik at Apex Dental Care, Rohtak, Haryana.',
    keywords: ['dental blog Rohtak', 'dental health tips', 'oral care advice Rohtak', 'Dr Aashish Malik blog'],
    openGraph: {
        title: 'Blog | Apex Dental Care — Dentist in Rohtak',
        description: 'Dental health tips and guides from Apex Dental Care, Rohtak.',
        url: `${SITE_URL}/blog`,
    },
    alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
    return (
        <article>
            <section className="bg-[#1A3C5E] text-white py-16 lg:py-24">
                <Container>
                    <SectionLabel>Blog</SectionLabel>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-1 leading-tight tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>
                        Dental Health Tips & Insights
                    </h1>
                    <p className="mt-4 text-lg text-white/80 max-w-2xl">
                        Expert advice and treatment guides from Dr. Aashish Malik to help you maintain a healthy, beautiful smile.
                    </p>
                </Container>
            </section>

            <WaveDivider className="w-full h-12 text-[#F7F4EF] -mt-1" />

            <section className="py-20 md:py-28 bg-[#F7F4EF]">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.slug} {...post} />
                        ))}
                    </div>
                </Container>
            </section>
        </article>
    );
}
