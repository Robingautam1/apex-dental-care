export function WaveDivider({ className = '', flip = false }: { className?: string; flip?: boolean }) {
    return (
        <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
            preserveAspectRatio="none"
            style={flip ? { transform: 'scaleY(-1)' } : undefined}
        >
            <path
                d="M0 40C120 80 240 90 360 70C480 50 600 20 720 15C840 10 960 30 1080 45C1200 60 1320 70 1440 50V100H0V40Z"
                fill="currentColor"
            />
        </svg>
    );
}
