interface SectionHeadingProps {
    eyebrow?: string;
    heading: string;
    subtext?: string;
    center?: boolean;
}

export default function SectionHeading({ eyebrow, heading, subtext, center = false }: SectionHeadingProps) {
    return (
        <div className={`mb-14 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}>
            {eyebrow && (
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-3">
                    {eyebrow}
                </p>
            )}
            <h2
                className="text-3xl md:text-4xl font-semibold text-[#1C1C1E] leading-tight tracking-[-0.02em] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
            >
                {heading}
            </h2>
            {subtext && (
                <p className="text-[#6B7280] text-lg leading-[1.7]">{subtext}</p>
            )}
        </div>
    );
}
