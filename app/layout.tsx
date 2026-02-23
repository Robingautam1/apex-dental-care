import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
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
  title: 'Apex Dental Clinic | Top Dentist & Dental Care in Rohtak',
  description: 'Experience premium dental care at Apex Dental Clinic in Rohtak. We provide advanced treatments, from general checkups to implants and braces.',
  openGraph: {
    title: 'Apex Dental Clinic | Top Dentist in Rohtak',
    description: 'Experience premium dental care at Apex Dental Clinic in Rohtak. We provide advanced treatments, from general checkups to implants and braces.',
    url: 'https://apexdentalrohtak.com',
    siteName: 'Apex Dental Clinic',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Dental Clinic | Top Dentist in Rohtak',
    description: 'Experience premium dental care at Apex Dental Clinic in Rohtak.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'LocalBusiness'],
    name: 'Apex Dental Clinic',
    image: 'https://apexdentalrohtak.com/logo.png',
    '@id': 'https://apexdentalrohtak.com',
    url: 'https://apexdentalrohtak.com',
    telephone: '+91-XXXXXXXXXX', // INSERT USER CONTENT: Phone Number Here
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'INSERT USER CONTENT: Street Address Here',
      addressLocality: 'Rohtak',
      addressRegion: 'Haryana',
      postalCode: '124001', // INSERT USER CONTENT: Postal Code Here
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8955, // INSERT USER CONTENT: Latitude Here
      longitude: 76.5833, // INSERT USER CONTENT: Longitude Here
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    medicalSpecialty: 'Dentistry',
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
        {children}
      </body>
    </html>
  );
}
