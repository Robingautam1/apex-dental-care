import * as React from "react";

export const servicesData = [
    {
        slug: 'teeth-cleaning',
        title: 'Teeth Cleaning',
        description: 'Comprehensive exams, scaling, and polishing to keep your smile healthy and plaque-free.',
        content: "Professional teeth cleaning (scaling and polishing) removes plaque, tartar, and surface stains that regular brushing can't reach. It prevents gum disease, bad breath, and tooth decay. At Apex Dental Care, our gentle cleaning process ensures a comfortable experience, leaving your teeth feeling fresh and looking bright. We recommend a professional cleaning every 6 months for optimal oral health.",
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
        slug: 'orthodontics-braces',
        title: 'Orthodontics',
        description: 'Straighten your teeth with traditional braces or discreet, removable aligners.',
        content: "Straighten your teeth and correct your bite with our comprehensive orthodontic solutions. We offer traditional metal braces for reliable, effective alignment, as well as clear aligners for a more discreet treatment option. Properly aligned teeth not only improve your appearance but also make it easier to maintain good oral hygiene and prevent jaw strain. Our customized treatment plans cater to patients of all ages, from teens to adults.",
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
        slug: 'root-canal-treatment',
        title: 'Root Canal Treatment',
        description: 'Painless therapy to save infected teeth, eliminate infection, and relieve severe toothaches.',
        content: "A root canal is a highly effective, virtually painless procedure used to save a tooth that is badly decayed or severely infected. Dr. Aashish Malik uses advanced visualization and modern local anaesthesia to gently remove the infected pulp, clean the internal canals, and securely seal the tooth. This immediate intervention eliminates severe, throbbing toothaches and permanently prevents the need for extraction. Most patients are pleasantly surprised by how comfortable and straightforward our root canal treatments are.",
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
        slug: 'pediatric-dentistry',
        title: 'Paediatric Dentistry',
        description: 'Gentle, friendly dental care for children to ensure a lifetime of healthy smiles.',
        content: "We provide gentle, remarkably friendly dental care tailored specifically for children. Our primary goal is to make every dental visit a highly positive, fun experience, helping your child build robust foundational habits for lifelong oral health. From routine exams and protective fluoride treatments to cavity prevention and early developmental assessments, we ensure your child's growing smile receives the utmost care in a welcoming, completely anxiety-free environment.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                <path d="M12 22c-2.76 0-5-2.24-5-5V8h10v9c0 2.76-2.24 5-5 5z" />
                <circle cx="12" cy="11" r="3" />
                <path d="M12 8V2" />
            </svg>
        ),
    },
    {
        slug: 'emergency-dental-care',
        title: 'Emergency Care',
        description: 'Immediate priority attention for severe dental pain, broken teeth, and urgent concerns.',
        content: "Dental emergencies don't wait for a convenient time. If you're experiencing excruciating tooth pain, a fractured or broken tooth, facial swelling, or a knocked-out tooth, we provide immediate, same-day priority attention. Our emergency clinic is fully equipped to handle urgent oral traumas quickly and effectively, providing instantaneous pain relief while preventing further long-term complications. Please call us immediately for prompt, stabilizing medical assistance.",
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
