import { services } from '@/data/services';
import { blogPosts } from '@/data/blog-posts';
import { SITE_URL } from '@/lib/seo';

export async function GET() {
    const now = new Date().toISOString();

    const staticPages = [
        { url: SITE_URL, priority: '1.0' },
        { url: `${SITE_URL}/about`, priority: '0.8' },
        { url: `${SITE_URL}/blog`, priority: '0.8' },
        { url: `${SITE_URL}/contact`, priority: '0.9' },
    ];

    const servicePages = services.map((s) => ({
        url: `${SITE_URL}/services/${s.slug}`,
        priority: '0.8',
    }));

    const blogPages = blogPosts.map((p) => ({
        url: `${SITE_URL}/blog/${p.slug}`,
        priority: '0.6',
    }));

    const allPages = [...staticPages, ...servicePages, ...blogPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
            .map(
                (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${now}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
            )
            .join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
