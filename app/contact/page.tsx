import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Book a Dental Appointment in Rohtak - Apex Dental Care',
    description: 'Visit Apex Dental Care near life care hospital in Model Town, Rohtak. Call 98021 55667 to schedule an appointment with Dr. Aashish Malik.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col pt-24 bg-background-base">
            <Navbar />
            <div className="flex-grow">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
