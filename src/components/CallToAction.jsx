import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section style={{
      width: '100%',
      background: '#fff',
      padding: 'clamp(48px,6vw,75px) clamp(24px,5vw,75px)',
      boxSizing: 'border-box',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 1290,
        margin: '0 auto',
        borderRadius: 20,
        overflow: 'hidden',
        minHeight: 460,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Background image */}
        <img
          src="/img/Box.png"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          maxWidth: 860,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          textAlign: 'center',
          padding: '60px 40px',
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            fontSize: 'clamp(32px,5vw,56px)',
            lineHeight: 1.2,
            color: '#fff',
            margin: 0,
          }}>
            Your Roof, Our Commitment
          </h2>

          <p style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(16px,2vw,20px)',
            lineHeight: '1.6',
            color: '#fff',
            margin: 0,
            maxWidth: 740,
          }}>
            If you need reliable roofing or gutter services in Sierra Vista or nearby Cochise County communities, trust the team at <strong>Artistic Roofing</strong>. Our goal is simple: to provide professional service, lasting workmanship, and open communication from start to finish.
          </p>

          <Link to="/contact" className="btn-blue" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            padding: '16px 32px',
            background: 'var(--blue)',
            borderRadius: 10,
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 600,
            fontSize: 17,
            color: '#fff',
            letterSpacing: '0.02em',
            marginTop: 4,
          }}>
            Talk With a Roofing Expert Today
            <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
