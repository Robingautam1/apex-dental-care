import { Hero } from '@/components/home/Hero';
import { ServicesStrip } from '@/components/home/ServicesStrip';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Reviews } from '@/components/home/Reviews';
import { FAQ } from '@/components/home/FAQ';
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
        <Hero />
        <WaveDivider className="w-full h-16 text-[#F7F4EF] -mb-1" />
        <ServicesStrip />
        <WaveDivider className="w-full h-16 text-white -mb-1" flip />
        <AboutSection />
        <WaveDivider className="w-full h-16 text-[#F7F4EF] -mb-1" />
        <WhyChooseUs />
        <WaveDivider className="w-full h-16 text-white -mb-1" flip />
        <Reviews />
        <WaveDivider className="w-full h-16 text-[#F7F4EF] -mb-1" />
        <FAQ faqs={homeFaqs} />
        <WaveDivider className="w-full h-16 text-white -mb-1" flip />
        <ContactMap />
      </article>
    </>
  );
}
