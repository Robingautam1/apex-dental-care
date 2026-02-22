# Apex Dental Care — Website

Production-ready website for **Apex Dental Care**, a dental clinic in Model Town, Rohtak, Haryana, India.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Customize

### Replace Placeholder Images

Search for `// TODO: Replace` comments throughout the codebase. Key locations:

- **Hero section**: `src/components/home/Hero.tsx` — clinic photo
- **About section**: `src/components/home/AboutSection.tsx` — doctor photo
- **About page**: `src/app/about/page.tsx` — doctor portrait + clinic gallery
- **Blog cards**: `src/components/shared/BlogCard.tsx` — featured images

Replace the gradient placeholders with `<Image>` from `next/image` using files in `public/images/`.

### Update Business Information

All business details are centralized in `src/lib/seo.ts`:

- Clinic name, doctor name, phone
- Address and geo coordinates
- Opening hours
- Google rating

### Add New Blog Posts

1. Open `src/data/blog-posts.ts`
2. Add a new object to the `blogPosts` array following the existing format
3. The new post will automatically appear on `/blog` and generate a page at `/blog/[slug]`

### Add or Modify Services

1. Open `src/data/services.ts`
2. Add/edit entries in the `services` array
3. Each service auto-generates a page at `/services/[slug]`

## Deployment

This project is ready to deploy on **Vercel** with zero configuration:

```bash
npm run build  # Verify build succeeds
```

Then connect the GitHub repository to Vercel.

## SEO Features

- JSON-LD structured data (LocalBusiness, Dentist, Person, FAQPage, Article, BreadcrumbList)
- Dynamic `sitemap.xml` and `robots.txt`
- `generateMetadata()` on every page
- Semantic HTML throughout
- Core Web Vitals optimized
