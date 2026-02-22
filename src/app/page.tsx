import { Hero } from '@/components/home/Hero';
import { ServicesStrip } from '@/components/home/ServicesStrip';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Reviews } from '@/components/home/Reviews';
import { FAQ } from '@/components/home/FAQ';
import { BlogPreview } from '@/components/home/BlogPreview';
import { ContactMap } from '@/components/home/ContactMap';
import { WaveDivider } from '@/components/svg/WaveDivider';
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
        {/* Hero — white bg */}
        <Hero />
        {/* Services — warm bg (single divider into warm) */}
        <ServicesStrip />
        {/* About — white bg */}
        <AboutSection />
        {/* Why Choose Us — warm bg */}
        <WhyChooseUs />
        {/* Wave transition into dark navy */}
        <WaveDivider topColor="#F7F4EF" bottomColor="#1A3C5E" />
        {/* Reviews — DARK navy bg */}
        <Reviews />
        <WaveDivider topColor="#1A3C5E" bottomColor="#FFFFFF" />
        {/* FAQ — white bg */}
        <FAQ faqs={homeFaqs} />
        {/* Blog — warm bg */}
        <BlogPreview />
        {/* Contact — white bg */}
        <ContactMap />
      </article>
    </>
  );
}
