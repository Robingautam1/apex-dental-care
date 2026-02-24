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
  title: 'Best Dental Clinic in Rohtak, Haryana - Apex Dental Care',
  description: 'Apex Dental Care has two convenient locations in Rohtak — Model Town near Life Care Hospital, and near MDU Gate No. 2. Led by Dr. Aashish Malik. Call 098021 55667.',
  openGraph: {
    title: 'Best Dental Clinic in Rohtak, Haryana - Apex Dental Care',
    description: 'Apex Dental Care has two convenient locations in Rohtak — Model Town near Life Care Hospital, and near MDU Gate No. 2. Led by Dr. Aashish Malik. Call 098021 55667.',
    url: 'https://apex-dental-care.vercel.app',
    siteName: 'Apex Dental Care',
    images: [{ url: '/og-image.jpg' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental Clinic in Rohtak, Haryana - Apex Dental Care',
    description: 'Apex Dental Care has two convenient locations in Rohtak — Model Town near Life Care Hospital, and near MDU Gate No. 2. Led by Dr. Aashish Malik. Call 098021 55667.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      'name': 'Apex Dental Care — Model Town',
      'image': 'https://apex-dental-care.vercel.app/og-image.jpg',
      'telephone': '+919802155667',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Near Life Care Hospital, Model Town',
        'addressLocality': 'Rohtak',
        'addressRegion': 'Haryana',
        'postalCode': '124001',
        'addressCountry': 'IN'
      },
      'url': 'https://apex-dental-care.vercel.app',
      'priceRange': '₹₹',
      'openingHoursSpecification': [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' }
      ],
      'aggregateRating': { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '38' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      'name': 'Apex Dental Care — MDU Gate',
      'image': 'https://apex-dental-care.vercel.app/og-image.jpg',
      'telephone': '+919802155667',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Opp. Agro Mall, Near MDU Gate No. 2',
        'addressLocality': 'Rohtak',
        'addressRegion': 'Haryana',
        'addressCountry': 'IN'
      },
      'url': 'https://apex-dental-care.vercel.app',
      'priceRange': '₹₹',
      'openingHoursSpecification': [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' }
      ]
    }
  ];

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
