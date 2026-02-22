export function BlobShape({ className = '' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M420.5 140.5C467.3 187.3 507.8 243 510.3 301.8C512.8 360.5 477.3 422.3 430.5 461.5C383.8 500.8 325.8 517.5 268.3 511.5C210.8 505.5 153.8 477 116 432.3C78.3 387.5 59.8 326.5 64.5 270C69.3 213.5 97.3 161.5 137.8 122.3C178.3 83 231.3 56.5 284.8 58.8C338.3 61 392 93.8 420.5 140.5Z"
                fill="currentColor"
            />
        </svg>
    );
}
