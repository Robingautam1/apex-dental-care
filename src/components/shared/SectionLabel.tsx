export default function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[#2DBD8F] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            {children}
        </p>
    );
}
