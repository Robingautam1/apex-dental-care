export const SITE_URL = 'https://apexdentalcarerohtak.com'; // TODO: Replace with actual domain

export const BUSINESS_INFO = {
    name: 'Apex Dental Care',
    doctor: 'Dr. Aashish Malik',
    jobTitle: 'Dental Surgeon',
    phone: '098021 55667',
    phoneRaw: '09802155667',
    address: {
        streetAddress: 'Near Life Care Hospital, Model Town',
        addressLocality: 'Rohtak',
        addressRegion: 'Haryana',
        postalCode: '124001',
        addressCountry: 'IN',
    },
    geo: {
        latitude: 28.8955, // TODO: Replace placeholder — approximate
        longitude: 76.5849, // TODO: Replace placeholder — approximate
    },
    rating: {
        ratingValue: 5.0,
        reviewCount: 38,
    },
    priceRange: '₹₹',
    // TODO: Replace placeholder hours — verify with clinic
    openingHours: [
        { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' },
    ],
} as const;

export function generateLocalBusinessJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'Dentist'],
        name: BUSINESS_INFO.name,
        image: `${SITE_URL}/images/clinic-exterior.jpg`, // TODO: Replace placeholder
        telephone: `+91${BUSINESS_INFO.phoneRaw}`,
        url: SITE_URL,
        address: {
            '@type': 'PostalAddress',
            ...BUSINESS_INFO.address,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS_INFO.geo.latitude,
            longitude: BUSINESS_INFO.geo.longitude,
        },
        openingHoursSpecification: BUSINESS_INFO.openingHours.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.dayOfWeek,
            opens: h.opens,
            closes: h.closes,
        })),
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: BUSINESS_INFO.rating.ratingValue,
            reviewCount: BUSINESS_INFO.rating.reviewCount,
        },
        priceRange: BUSINESS_INFO.priceRange,
    };
}

export function generatePersonJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: BUSINESS_INFO.doctor,
        jobTitle: BUSINESS_INFO.jobTitle,
        worksFor: {
            '@type': 'Dentist',
            name: BUSINESS_INFO.name,
        },
        url: `${SITE_URL}/about`,
    };
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateArticleJsonLd(article: {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    image?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: article.image || `${SITE_URL}/images/blog-placeholder.jpg`,
        datePublished: article.date,
        author: {
            '@type': 'Person',
            name: BUSINESS_INFO.doctor,
        },
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
            url: SITE_URL,
        },
        url: `${SITE_URL}/blog/${article.slug}`,
    };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function makeTitle(page: string) {
    return `${page} | Apex Dental Care — Dentist in Rohtak, Haryana`;
}
