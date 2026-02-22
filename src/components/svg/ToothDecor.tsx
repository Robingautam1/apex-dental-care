export function ToothDecor({ className = '' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M100 10C70 10 50 30 40 55C30 80 25 100 30 130C35 160 45 190 60 220C70 238 80 240 85 230C90 220 95 200 100 195C105 200 110 220 115 230C120 240 130 238 140 220C155 190 165 160 170 130C175 100 170 80 160 55C150 30 130 10 100 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M65 75C75 85 90 88 100 85C110 88 125 85 135 75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}
