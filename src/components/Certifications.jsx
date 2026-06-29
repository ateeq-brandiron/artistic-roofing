import { Link } from 'react-router-dom';

const certs = [
  { icon: '/img/certs/Vector.svg',   name: 'TRI Certified' },
  { icon: '/img/certs/Vector-1.svg', name: 'BBB Accredited' },
  { icon: '/img/certs/Vector-2.svg', name: 'Polyglass\nTrained' },
];

export default function Certifications() {
  return (
    <section style={{
      width: '100%',
      background: 'var(--shape-fill)',
      backgroundImage: 'url(/img/pattern.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: 'clamp(60px,8vw,100px) clamp(24px,5vw,100px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 60,
      boxSizing: 'border-box',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        {/* Label */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <img src="/img/certs/Icon.svg" alt="" style={{ width: 16, height: 16 }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', color: 'var(--blue)' }}>CERTIFICATIONS</span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(32px,5vw,60px)',
          lineHeight: 1.15,
          color: '#000',
          textAlign: 'center',
          margin: 0,
          maxWidth: 700,
        }}>
          Certifications and Professional Standards
        </h2>
      </div>

      {/* Cert circles */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 'clamp(40px,8vw,120px)',
        flexWrap: 'wrap',
        width: '100%',
      }}>
        {certs.map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
            {/* Outer dashed ring using Ellipse SVG */}
            <div style={{ position: 'relative', width: 200, height: 200, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/img/certs/Ellipse%209.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
              {/* Inner filled circle */}
              <div style={{
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: 'var(--shape-fill)',
                border: '1px solid var(--shape-stroke)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <img src={c.icon} alt={c.name} style={{ width: 80, height: 80, objectFit: 'contain' }} />
              </div>
            </div>

            {/* Label */}
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontSize: 24,
              lineHeight: 1.3,
              textAlign: 'center',
              color: '#000',
              whiteSpace: 'pre-line',
            }}>
              {c.name}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link to="/about" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '16px 32px',
        background: 'var(--blue)',
        borderRadius: 10,
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 600,
        fontSize: 17,
        color: '#fff',
        letterSpacing: '0.02em',
      }}>
        View All Certifications
        <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
      </Link>

    </section>
  );
}
