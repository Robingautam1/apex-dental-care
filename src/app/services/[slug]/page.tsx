import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import { Accordion } from '@/components/shared/Accordion';
import { Button } from '@/components/shared/Button';
import { WaveDivider } from '@/components/svg/WaveDivider';
import { Phone, MapPin, Clock } from 'lucide-react';
import { makeTitle, generateFaqJsonLd, generateBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import Container from '@/components/shared/Container';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: makeTitle(service.shortTitle),
        description: service.description,
        keywords: [`${service.shortTitle} Rohtak`, 'dental clinic Rohtak', 'dentist Rohtak', 'Dr Aashish Malik'],
        openGraph: {
            title: service.title,
            description: service.description,
            url: `${SITE_URL}/services/${slug}`,
        },
        twitter: {
            card: 'summary',
            title: service.title,
            description: service.description,
        },
        alternates: {
            canonical: `${SITE_URL}/services/${slug}`,
        },
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    const faqJsonLd = generateFaqJsonLd(service.faqs);
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: service.shortTitle, url: `${SITE_URL}/services/${slug}` },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article>
                {/* Hero */}
                <section className="bg-[#1A3C5E] text-white py-16 lg:py-24">
                    <Container>
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
                            <ol className="flex items-center gap-2">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li>/</li>
                                <li><Link href="/#services-heading" className="hover:text-white transition-colors">Services</Link></li>
                                <li>/</li>
                                <li className="text-white">{service.shortTitle}</li>
                            </ol>
                        </nav>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>
                            {service.title.replace(' — Apex Dental Care', '')}
                        </h1>
                        <p className="mt-4 text-lg text-white/80 max-w-2xl">{service.tagline}</p>
                    </Container>
                </section>

                <WaveDivider className="w-full h-12 text-[#F7F4EF] -mt-1" />

                {/* Content */}
                <section className="py-20 md:py-28 bg-[#F7F4EF]">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            {/* Main content */}
                            <div className="lg:col-span-2">
                                <div className="prose prose-lg max-w-none">
                                    {service.body.split('\n\n').map((para, i) => (
                                        <p key={i} className="text-[#1C1C1E] leading-relaxed mb-5">
                                            {para}
                                        </p>
                                    ))}
                                </div>

                                {/* Service FAQ */}
                                <div className="mt-12">
                                    <h2 className="text-2xl font-semibold text-[#1A3C5E] mb-6 leading-tight tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>
                                        Common Questions About {service.shortTitle}
                                    </h2>
                                    <Accordion items={service.faqs} />
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className="lg:col-span-1">
                                <div className="bg-white rounded-2xl p-6 border border-[#E5E0D8] sticky top-24 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                                    <h3 className="text-lg font-semibold text-[#1A3C5E] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                        Book This Service
                                    </h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-start gap-3 text-sm">
                                            <MapPin size={18} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                            <span className="text-[#6B7280]">Near Life Care Hospital, Model Town, Rohtak, Haryana 124001</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <Phone size={18} className="text-[#2DBD8F] flex-shrink-0" />
                                            <a href="tel:09802155667" className="text-[#1C1C1E] hover:text-[#2DBD8F] font-medium transition-colors">098021 55667</a>
                                        </div>
                                        <div className="flex items-start gap-3 text-sm">
                                            <Clock size={18} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                            <div className="text-[#6B7280]">
                                                <p>Mon–Sat: 9 AM – 8 PM</p>
                                                <p>Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button href="/contact" className="w-full">
                                        Book Appointment
                                    </Button>
                                    <Button href="tel:09802155667" variant="outline" className="w-full mt-3" icon={<Phone size={16} />}>
                                        Call Now
                                    </Button>
                                </div>
                            </aside>
                        </div>
                    </Container>
                </section>
            </article>
        </>
    );
}
