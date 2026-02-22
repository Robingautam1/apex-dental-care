import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { generateLocalBusinessJsonLd, generatePersonJsonLd, SITE_URL } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Apex Dental Care | Best Dentist in Rohtak – Dr. Aashish Malik',
    template: '%s | Apex Dental Care Rohtak',
  },
  description:
    'Experience premium dental care at Apex Dental Care in Model Town, Rohtak. Dr. Aashish Malik provides advanced treatments, from general checkups to implants and braces.',
  keywords: [
    'dentist rohtak', 'dental clinic rohtak', 'best dentist rohtak',
    'root canal rohtak', 'dental implants rohtak', 'teeth whitening rohtak',
    'orthodontist rohtak', 'apex dental care', 'model town rohtak dentist',
    'dr aashish malik rohtak',
  ],
  openGraph: {
    title: 'Apex Dental Care | Best Dentist in Rohtak',
    description: 'Experience premium dental care at Apex Dental Care in Model Town, Rohtak.',
    url: SITE_URL,
    siteName: 'Apex Dental Care',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Dental Care | Best Dentist in Rohtak',
    description: 'Experience premium dental care at Apex Dental Care in Model Town, Rohtak.',
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessJsonLd = generateLocalBusinessJsonLd();
  const personJsonLd = generatePersonJsonLd();

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
