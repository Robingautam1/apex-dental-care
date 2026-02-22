import type { Metadata } from 'next';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { generateLocalBusinessJsonLd, generatePersonJsonLd, SITE_URL } from '@/lib/seo';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Apex Dental Care — Best Dental Clinic in Rohtak, Haryana',
  description: 'Apex Dental Care is a leading dental clinic in Model Town, Rohtak, Haryana. Dr. Aashish Malik offers expert dental surgery, root canal, teeth whitening, and cosmetic dentistry. 5.0★ Google rating. Call 098021 55667.',
  keywords: ['dental clinic Rohtak', 'dentist in Model Town Rohtak', 'dental surgeon Rohtak Haryana', 'teeth whitening Rohtak', 'root canal Rohtak', 'Dr Aashish Malik dentist', 'best dentist Rohtak', 'dental implants Rohtak'],
  openGraph: {
    title: 'Apex Dental Care — Best Dental Clinic in Rohtak, Haryana',
    description: 'Trusted dental clinic in Model Town, Rohtak led by Dr. Aashish Malik. Expert dental care with 5.0★ Google rating.',
    url: SITE_URL,
    siteName: 'Apex Dental Care',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Apex Dental Care — Best Dental Clinic in Rohtak' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Dental Care — Best Dental Clinic in Rohtak',
    description: 'Trusted dental clinic in Model Town, Rohtak led by Dr. Aashish Malik.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = generateLocalBusinessJsonLd();
  const personJsonLd = generatePersonJsonLd();

  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
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
        <main id="main-content" className="pt-20 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
