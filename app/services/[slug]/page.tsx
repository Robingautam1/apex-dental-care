import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/services';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);
    if (!service) return {};

    return {
        title: `${service.title} in Rohtak - Apex Dental Care | Dr. Aashish Malik`,
        description: `At Apex Dental Care in Rohtak, ${service.title.toLowerCase()} is performed by Dr. Aashish Malik using modern techniques designed for your comfort and long-term oral health.`,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col pb-24 md:pb-0 pt-32 bg-background-base">
            <Navbar />

            <div className="flex-grow">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-slate-100 pb-12">
                        <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center shrink-0">
                            {service.icon}
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-primary font-medium leading-relaxed">
                                At Apex Dental Care in Rohtak, {service.title.toLowerCase()} is performed by Dr. Aashish Malik using modern techniques designed for your comfort and long-term oral health.
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-lg text-text-muted max-w-none">
                        <p className="text-lg leading-relaxed mb-6">
                            {service.description}
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            {service.content || "Your comfort is our priority. We utilise state-of-the-art diagnostic tools to properly assess your needs before recommending any treatment. Dr. Aashish Malik takes the time to explain every step, ensuring you feel confident in your care."}
                        </p>

                        <h2 className="text-2xl font-bold text-text-dark mt-10 mb-4">Why Choose Us for {service.title}?</h2>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>Painless procedures with advanced local anaesthesia</li>
                            <li>Thorough, honest diagnoses-we never overprescribe</li>
                            <li>Strict sterilization protocols for your safety</li>
                            <li>Detailed post-treatment guidance and follow-up</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
