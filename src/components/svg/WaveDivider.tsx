export function WaveDivider({ topColor, bottomColor, flip = false }: { topColor: string; bottomColor: string; flip?: boolean }) {
    return (
        <div className="relative h-16 md:h-20 overflow-hidden" aria-hidden="true" style={{ backgroundColor: topColor }}>
            <svg
                viewBox="0 0 1440 80"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute bottom-0 w-full ${flip ? 'scale-y-[-1]' : ''}`}
                preserveAspectRatio="none"
            >
                <path
                    d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
                    fill={bottomColor}
                />
            </svg>
        </div>
    );
}
