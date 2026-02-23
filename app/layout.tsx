import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import MobileBottomBar from '@/components/MobileBottomBar';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://apex-dental-care.vercel.app'),
  title: 'Best Dental Clinic in Rohtak, Haryana — Apex Dental Care',
  description: 'Apex Dental Care in Model Town, Rohtak offers painless dental treatment led by Dr. Aashish Malik. Root canal, implants, whitening & more. Call 98021 55667.',
  openGraph: {
    title: 'Best Dental Clinic in Rohtak, Haryana — Apex Dental Care',
    description: 'Apex Dental Care in Model Town, Rohtak offers painless dental treatment led by Dr. Aashish Malik. Root canal, implants, whitening & more. Call 98021 55667.',
    url: 'https://apex-dental-care.vercel.app',
    siteName: 'Apex Dental Care',
    images: [{ url: '/og-image.jpg' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental Clinic in Rohtak, Haryana — Apex Dental Care',
    description: 'Apex Dental Care in Model Town, Rohtak offers painless dental treatment led by Dr. Aashish Malik. Root canal, implants, whitening & more. Call 98021 55667.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Apex Dental Care',
    image: 'https://apex-dental-care.vercel.app/og-image.jpg',
    telephone: '+919802155667',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Apex Dental Care, near life care hospital, Model Town',
      addressLocality: 'Rohtak',
      addressRegion: 'Haryana',
      postalCode: '124001',
      addressCountry: 'IN'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 28.8955, longitude: 76.5849 },
    url: 'https://apex-dental-care.vercel.app',
    priceRange: '₹₹',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' }
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '38' },
    hasMap: 'https://share.google/3z1exJby1De0Ailde',
    medicalSpecialty: 'Dentistry'
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-soft">
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
        <MobileBottomBar />
      </body>
    </html>
  );
}
