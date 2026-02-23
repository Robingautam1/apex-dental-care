import Navbar from '@/components/Navbar';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Dental Health Blog — Apex Dental Care Rohtak',
    description: 'Expert dental tips, news, and insights from Dr. Aashish Malik at Apex Dental Care in Rohtak.',
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen flex flex-col pt-24 bg-background-base">
            <Navbar />
            <div className="flex-grow">
                <Blog />
            </div>
            <Footer />
        </main>
    );
}
