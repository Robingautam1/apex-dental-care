export const metadata = {
    title: 'About Dr. Aashish Malik — Apex Dental Care Rohtak',
    description: 'Learn about Dr. Aashish Malik, dental surgeon at Apex Dental Care, the most trusted dental clinic in Model Town, Rohtak, Haryana.',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    const values = [
        {
            title: 'Painless Care',
            desc: 'Modern techniques and gentle hands ensure a comfortable experience every time.'
        },
        {
            title: 'Honest Diagnoses',
            desc: 'Clear communication and transparent treatment plans with no hidden surprises.'
        },
        {
            title: 'Affordable Excellence',
            desc: 'Premium dental care made accessible to the Rohtak community.'
        }
    ];

    return (
        <main className="min-h-screen pt-32 pb-24 bg-background-base">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 tracking-tight">
                        About Apex Dental Care
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Main Content Column */}
                    <div className="lg:col-span-8 flex flex-col gap-16">

                        {/* The Clinic Story */}
                        <section aria-labelledby="story-heading">
                            <h2 id="story-heading" className="text-2xl font-bold text-primary mb-6">
                                The Clinic Story
                            </h2>
                            <div className="prose prose-lg text-text-muted">
                                <p>
                                    Apex Dental Care was founded with one belief — that every person in Rohtak deserves access to world-class dental care, delivered with warmth and integrity. Located in the heart of Model Town, our clinic has grown to become one of the most trusted dental practices in Haryana.
                                </p>
                                <p>
                                    We combine modern technology with a deep commitment to patient comfort. Whether you are visiting for a routine checkup or a complex smile makeover, our goal is to ensure you leave with a healthier, more confident smile.
                                </p>
                            </div>
                        </section>

                        <hr className="border-slate-100" />

                        {/* Dr. Aashish Malik - Full Bio */}
                        <section aria-labelledby="bio-heading">
                            <h2 id="bio-heading" className="text-2xl font-bold text-primary mb-6">
                                Meet Dr. Aashish Malik
                            </h2>
                            <div className="prose prose-lg text-text-muted">
                                <p>
                                    Dr. Aashish Malik holds a Bachelor of Dental Surgery (BDS) and brings over a decade of focused practice in general, cosmetic, and surgical dentistry to Apex Dental Care. His calm, methodical approach has earned him a 5.0 Google rating and the loyalty of patients from across Rohtak and Haryana.
                                </p>
                                <p>
                                    He specialises in root canal treatment, dental implants, smile makeovers, and paediatric care — always ensuring patients understand each step of their treatment.
                                </p>
                            </div>
                            <div className="mt-8 p-6 bg-background-alt rounded-2xl border border-slate-100">
                                <h3 className="font-bold text-text-dark mb-4">Professional Credentials</h3>
                                {/* TODO: Insert BDS certificate scan and any additional qualifications here */}
                                <p className="text-sm text-slate-500 italic">Certificate scans and further qualifications to be inserted here.</p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 p-8 bg-primary/5 rounded-3xl border border-primary/10">
                            <h2 className="text-xl font-bold text-primary mb-8">Our Values</h2>
                            <dl className="flex flex-col gap-8">
                                {values.map((value, i) => (
                                    <div key={i}>
                                        <dt className="font-bold text-text-dark mb-2">{value.title}</dt>
                                        <dd className="text-text-muted leading-relaxed">{value.desc}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
