import * as React from "react";

export const servicesData = [
    {
        slug: 'general-checkup',
        title: 'General Checkup',
        description: 'Comprehensive dental exams, cleanings, and digital X-rays to keep your smile healthy.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                <path d="M12 22v-5" />
                <path d="M9 8V2" />
                <path d="M15 8V2" />
                <path d="M12 2v6" />
                <path d="M12 17c-2.76 0-5-2.24-5-5V8h10v4c0 2.76-2.24 5-5 5z" />
            </svg>
        ),
    },
    {
        slug: 'dental-implants',
        title: 'Dental Implants',
        description: 'Permanent, natural-looking tooth replacements to restore your confidence and bite.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-secondary">
                <path d="M12 22c-2.76 0-5-2.24-5-5v-2h10v2c0 2.76-2.24 5-5 5z" />
                <path d="M12 15V9" />
                <path d="M9 9V3" />
                <path d="M15 9V3" />
                <path d="M12 3v6" />
            </svg>
        ),
    },
    {
        slug: 'braces-invisalign',
        title: 'Braces & Invisalign',
        description: 'Straighten your teeth with traditional braces or clear, removable aligners.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
                <path d="M8 12h8" />
                <path d="M8 16h8" />
                <path d="M12 8V2" />
            </svg>
        ),
    },
    {
        slug: 'teeth-whitening',
        title: 'Teeth Whitening',
        description: 'Professional whitening treatments for a brighter, more radiant smile in just one visit.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-secondary">
                <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
                <circle cx="12" cy="14" r="2" />
                <path d="M12 8V2" />
            </svg>
        ),
    },
    {
        slug: 'root-canal-therapy',
        title: 'Root Canal Therapy',
        description: 'Painless treatment to save infected teeth and relieve severe toothaches.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
                <path d="M12 17v-4" />
                <path d="M10 13l2 4 2-4" />
                <path d="M12 8V2" />
            </svg>
        ),
    },
    {
        slug: 'cosmetic-dentistry',
        title: 'Cosmetic Dentistry',
        description: 'Veneers, bonding, and smile makeovers tailored to your unique facial features.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-secondary">
                <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
                <path d="M9 12l2 2 4-4" />
                <path d="M12 8V2" />
            </svg>
        ),
    },
    {
        slug: 'paediatric-dentistry',
        title: 'Paediatric Dentistry',
        description: 'Gentle, friendly dental care for children of all ages to ensure a lifetime of healthy functional smiles.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
                <circle cx="12" cy="11" r="3" />
                <path d="M12 8V2" />
            </svg>
        ),
    },
    {
        slug: 'emergency-care',
        title: 'Emergency Care',
        description: 'Immediate priority attention for severe dental pain, broken teeth, and other urgent concerns.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-secondary">
                <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
                <path d="M12 11v4" />
                <path d="M10 13h4" />
                <path d="M12 8V2" />
            </svg>
        ),
    },
];
