import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1A3C5E 0%, #0F2236 100%)',
                    fontFamily: 'Georgia, serif',
                }}
            >
                {/* Logo circle */}
                <div
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 20,
                        background: 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                    }}
                >
                    <span style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>A</span>
                </div>

                {/* Title */}
                <h1
                    style={{
                        fontSize: 52,
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: 8,
                        textAlign: 'center',
                    }}
                >
                    Apex Dental Care
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        fontSize: 24,
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: 28,
                        textAlign: 'center',
                    }}
                >
                    Best Dental Clinic in Rohtak, Haryana
                </p>

                {/* Rating badge */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        background: 'rgba(255,255,255,0.1)',
                        padding: '10px 24px',
                        borderRadius: 12,
                        marginBottom: 24,
                    }}
                >
                    <span style={{ color: '#FBBF24', fontSize: 22 }}>★★★★★</span>
                    <span style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>5.0</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>Google Rating</span>
                </div>

                {/* Location */}
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>
                    📍 Model Town, Rohtak · ☎ 098021 55667
                </p>
            </div>
        ),
        { ...size }
    );
}
