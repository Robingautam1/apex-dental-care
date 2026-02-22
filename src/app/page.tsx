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
        {/* Wave: white → warm */}
        <WaveDivider topColor="#FFFFFF" bottomColor="#F7F4EF" />
        {/* Services — warm bg */}
        <ServicesStrip />
        {/* Wave: warm → white */}
        <WaveDivider topColor="#F7F4EF" bottomColor="#FFFFFF" />
        {/* About — white bg */}
        <AboutSection />
        {/* Wave: white → warm */}
        <WaveDivider topColor="#FFFFFF" bottomColor="#F7F4EF" />
        {/* Why Choose Us — warm bg */}
        <WhyChooseUs />
        {/* Wave: warm → dark navy */}
        <WaveDivider topColor="#F7F4EF" bottomColor="#1A3C5E" />
        {/* Reviews — DARK navy bg */}
        <Reviews />
        {/* Wave: dark navy → white */}
        <WaveDivider topColor="#1A3C5E" bottomColor="#FFFFFF" />
        {/* FAQ — white bg */}
        <FAQ faqs={homeFaqs} />
        {/* Wave: white → warm */}
        <WaveDivider topColor="#FFFFFF" bottomColor="#F7F4EF" />
        {/* Blog — warm bg */}
        <BlogPreview />
        {/* Wave: warm → white */}
        <WaveDivider topColor="#F7F4EF" bottomColor="#FFFFFF" />
        {/* Contact — white bg */}
        <ContactMap />
      </article>
    </>
  );
}
