import React, { ReactNode } from 'react';

export interface BlogPost {
    slug: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    gradient: string;
    svg: ReactNode;
    content: ReactNode;
}

export const blogPosts: BlogPost[] = [
    {
        slug: '5-signs-you-need-to-visit-a-dentist',
        category: 'Dental Health',
        date: '5 min read',
        title: '5 Signs You Need to Visit a Dentist in Rohtak Immediately',
        excerpt: 'Ignoring dental problems can lead to serious complications. Here are five warning signs that mean you should visit a dental clinic in Rohtak right away.',
        gradient: 'from-[#1A3C5E] to-[#0f5e5e]',
        svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-20 text-white" aria-hidden="true">
                <path d="M12 22v-5" />
                <path d="M9 8V2" />
                <path d="M15 8V2" />
                <path d="M12 2v6" />
                <path d="M12 17c-2.76 0-5-2.24-5-5V8h10v4c0 2.76-2.24 5-5 5z" />
                <path d="M12 18l-3 4h6l-3-4z" fill="currentColor" />
            </svg>
        ),
        content: (
            <div className="space-y-6 text-[#4B5563] text-lg leading-relaxed">
                <p>If you have been searching for a <strong>dentist near me</strong> in Rohtak, you might be wondering whether your current dental issue warrants an immediate visit. At Apex Dental Care, we often see patients who wait too long to address warning signs, leading to more complex treatments.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">1. Severe and Persistent Toothache</h3>
                <p>A minor toothache might just be sensitivity, but a severe, throbbing pain that keeps you awake at night is a clear sign of an infection or nerve damage. If you are experiencing unmanageable pain, you should visit a <strong>dental clinic in Rohtak</strong> right away to prevent the underlying infection from spreading.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">2. Bleeding or Swollen Gums</h3>
                <p>Gums that bleed easily when brushing or flossing are often the first sign of gingivitis or advanced periodontal disease. Healthy gums should be firm and pale pink, not swollen, red, or tender. Early intervention is key to preventing tooth loss.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">3. Lingering Sensitivity to Hot and Cold</h3>
                <p>While brief sensitivity to a cold drink can be normal, a sharp pain that lingers long after you have finished a hot coffee or cold ice cream indicates that the inner pulp of the tooth is inflamed or diseased. This often requires a professional assessment by the <strong>best dentist in Rohtak</strong>.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">4. Loose Teeth as an Adult</h3>
                <p>Adult teeth should stay firmly in place. If you notice any of your teeth feeling loose, or if you notice changes in the way your teeth fit together when you bite, this could signify advanced gum disease or localized bone loss. Immediate care is crucial to save the tooth.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">5. Persistent Bad Breath (Halitosis)</h3>
                <p>Chronic bad breath that does not improve with brushing and mouthwash can be a symptom of hidden dental decay or gum disease. Professional cleaning and treatment can target the deep-seated bacteria causing the issue.</p>

                <div className="bg-[#EBF9F4] p-6 rounded-2xl mt-8">
                    <p className="font-semibold text-[#1A3C5E]">Don&apos;t ignore these signs. The earlier you seek treatment, the more conservative and comfortable your care will be. Looking for a top-rated <strong className="text-[#2DBD8F]">dentist near me</strong> in Model Town, Rohtak? Contact Dr. Aashish Malik at Apex Dental Care today to schedule your consultation.</p>
                </div>
            </div>
        )
    },
    {
        slug: 'root-canal-treatment-in-rohtak-what-to-expect',
        category: 'Procedures',
        date: '6 min read',
        title: 'Root Canal Treatment in Rohtak: What to Expect at Apex Dental Care',
        excerpt: 'Root canal treatment does not have to be scary. Here is a complete guide to what happens during RCT at Apex Dental Care in Rohtak.',
        gradient: 'from-[#134e3a] to-[#1A3C5E]',
        svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-20 text-white" aria-hidden="true">
                <circle cx="17" cy="7" r="3" />
                <path d="M15 9L3 21" />
                <path d="M21 21L9 9" />
                <path d="M8 8l2-2" />
            </svg>
        ),
        content: (
            <div className="space-y-6 text-[#4B5563] text-lg leading-relaxed">
                <p>When searching for a highly-rated <strong>dentist near me</strong> for severe tooth pain, you may discover that you need a root canal. The phrase &quot;root canal&quot; used to cause anxiety, but modern dentistry has transformed this procedure into a virtually painless experience.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">What is a Root Canal?</h3>
                <p>A root canal treatment (RCT) is necessary when the innermost part of the tooth, the pulp, becomes infected or inflamed due to deep decay, repeated dental procedures, or a crack in the tooth. Removing the infected pulp relieves pain and saves the natural tooth.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">The Apex Dental Care Experience</h3>
                <p>At Apex Dental Care, recognized as the <strong>best dental clinic in Rohtak</strong> for advanced endodontics, your comfort is our priority. Here is what you can expect:</p>

                <ul className="list-disc pl-6 space-y-3 mt-4">
                    <li><strong>Thorough Diagnostics:</strong> We utilize advanced digital imaging to precise map the root canal anatomy before starting.</li>
                    <li><strong>Pain-Free Numbing:</strong> Dr. Aashish Malik uses state-of-the-art potent local anesthetics to ensure the tooth and surrounding area are completely numb. Most patients report feeling no more discomfort than they would during a routine filling.</li>
                    <li><strong>Cleaning and Shaping:</strong> The infected pulp is carefully removed. The inside of the tooth is then meticulously cleaned, disinfected, and shaped using modern rotary endodontic files.</li>
                    <li><strong>Sealing the Tooth:</strong> Once cleaned, the canal is filled with a biocompatible material called gutta-percha and securely sealed to prevent future infection.</li>
                    <li><strong>Final Restoration:</strong> A tooth that has undergone a root canal becomes brittle. To protect it and restore full function, we will recommend a high-quality dental crown tailored to match your natural teeth.</li>
                </ul>

                <div className="bg-[#F7F4EF] border border-[#E5E0D8] p-6 rounded-2xl mt-8">
                    <p className="font-semibold text-[#1A3C5E]">If you suspect you need a root canal and are looking for a gentle, expert <strong>dentist near me</strong> in Rohtak, trust Dr. Aashish Malik. Save your natural tooth and eliminate your pain today.</p>
                </div>
            </div>
        )
    },
    {
        slug: 'how-to-choose-the-best-dental-clinic-in-model-town-rohtak',
        category: 'Dental Tips',
        date: '5 min read',
        title: 'How to Choose the Best Dental Clinic in Model Town, Rohtak',
        excerpt: 'Choosing the right dental clinic is crucial for your oral health. Here are key factors to consider when selecting a dentist in Model Town, Rohtak.',
        gradient: 'from-[#2c1a5e] to-[#1A3C5E]',
        svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-20 text-white" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <path d="M12 14c-1.5 0-3-1.5-3-3V7h6v4c0 1.5-1.5 3-3 3z" />
                <path d="M12 7v2" />
            </svg>
        ),
        content: (
            <div className="space-y-6 text-[#4B5563] text-lg leading-relaxed">
                <p>Finding a trusted dental professional goes beyond simply searching for &quot;<strong>dentist near me</strong>&quot; on your phone. Your oral health is deeply connected to your overall well-being. If you are exploring options in Model Town or the greater Rohtak area, here are the essential factors to evaluate when choosing a dental clinic.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">1. Qualifications and Experience</h3>
                <p>The foundation of excellent dental care is the expertise of the dentist. Look for a practitioner with robust credentials and a track record of successful treatments. Dr. Aashish Malik at Apex Dental Care is a highly experienced BDS Dental Surgeon known for his meticulous approach and patient-centered philosophy.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">2. Comprehensive Services Under One Roof</h3>
                <p>Your dental needs will evolve over time. The <strong>best dental clinic in Rohtak</strong> should offer a comprehensive range of services—from routine preventative cleanings and fillings to advanced orthodontics (braces), root canal therapy, and dental implants. This saves you from being referred to multiple different specialists.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">3. Hygiene and Sterilization Protocols</h3>
                <p>Cleanliness is non-negotiable in healthcare. A premier clinic will happily walk you through their sterilization protocols. At Apex Dental Care, we adhere to strict international standards for instrument sterilization and operatory sanitization to ensure complete patient safety.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">4. Patient Reviews and Testimonials</h3>
                <p>Word of mouth and online reviews provide candid insights into a clinic&apos;s true environment. Consistent 5-star ratings complimenting the friendliness of the staff and the painlessness of the procedures are strong indicators of a top-tier clinic. Our patients consistently rate us as their top choice when recommending a <strong>dentist near me</strong>.</p>

                <h3 className="text-2xl font-bold text-[#1A3C5E] mt-8 mb-4">5. Modern Technology</h3>
                <p>Modern dentistry relies on advanced technology for accurate diagnoses and comfortable treatments. Clinics utilizing digital X-rays, modern endodontic motors, and premium dental materials provide superior, longer-lasting results.</p>

                <div className="mt-8 border-l-4 border-[#2DBD8F] pl-6 py-2">
                    <p className="font-semibold text-[#1A3C5E] text-xl">Make the Right Choice for Your Smile</p>
                    <p className="mt-2">Apex Dental Care combines clinical excellence, modern infrastructure, and a deeply compassionate approach. Conveniently located near Life Care Hospital in Model Town, we are proud to be Rohtak&apos;s premier destination for family dentistry.</p>
                </div>
            </div>
        )
    }
];
