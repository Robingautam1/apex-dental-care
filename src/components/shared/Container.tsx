export default function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 ${className}`}>
            {children}
        </div>
    );
}
