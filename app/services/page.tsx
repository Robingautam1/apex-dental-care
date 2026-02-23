import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export const metadata = {
    title: 'Our Services in Rohtak - Apex Dental Care',
    description: 'Explore the comprehensive range of premium dental services offered at Apex Dental Care, Rohtak, including teeth cleaning, implants, root canals, and cosmetic dentistry.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background-base pb-24 md:pb-0">
            <Navbar />

            {/* Header Spacer */}
            <div className="pt-24 md:pt-32"></div>

            {/* Reusing the Services Component */}
            <Services />

            <Contact />
            <Footer />
        </main>
    );
}
