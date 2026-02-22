import { Hero } from '@/components/home/Hero';
import { ServicesStrip } from '@/components/home/ServicesStrip';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Reviews } from '@/components/home/Reviews';
import { FAQ } from '@/components/home/FAQ';
import { BlogPreview } from '@/components/home/BlogPreview';
import { ContactMap } from '@/components/home/ContactMap';
import { generateFaqJsonLd } from '@/lib/seo';
import { homeFaqs } from '@/data/faqs';

export default function HomePage() {
  const faqJsonLd = generateFaqJsonLd(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article>
        <Hero />
        <ServicesStrip />
        <AboutSection />
        <WhyChooseUs />
        <Reviews />
        <FAQ faqs={homeFaqs} />
        <BlogPreview />
        <ContactMap />
      </article>
    </>
  );
}
