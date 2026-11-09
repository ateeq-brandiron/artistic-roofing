import React from 'react';

const certs = [
  { icon: '/img/certs/Vector-2.svg', name: 'TRI Certified' },
  { icon: '/img/certs/Vector-1.svg', name: 'BBB Accredited' },
  { icon: '/img/certs/Vector.svg',   name: 'Polyglass\nTrained' },
];

const certList = [
  { text: 'TRI Certified Tile Installer', sub: 'Trained in proper tile installation techniques for long-term roof performance' },
  { text: 'Polyglass Roof Coating Certified', sub: 'Trained in advanced coating applications for low-slope and flat roofs' },
  { text: 'Tamko Preferred Contractor', sub: 'Recognized for quality installation and product expertise' },
  { text: 'Better Business Bureau (BBB) Accredited', sub: 'Demonstrating a commitment to trusted service and customer satisfaction' },
  { text: 'Chamber of Commerce Member', sub: 'Proud to be part of the local Sierra Vista business community' },
];

function CertCircle({ icon, name }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, cursor: 'default' }}
    >
      <div style={{ position: 'relative', width: 200, height: 200, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Dashed ring – spins on hover */}
        <img
          src="/img/certs/ellipse-bg.svg"
          alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            transform: hovered ? 'rotate(30deg)' : 'rotate(0deg)',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
        {/* Inner filled circle */}
        <div style={{
          width: 160, height: 160,
          borderRadius: '50%',
          background: hovered ? 'var(--blue)' : 'var(--shape-fill)',
          border: '1px solid var(--shape-stroke)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
          boxShadow: hovered ? '0 12px 36px rgba(0,128,198,0.35)' : 'none',
          transition: 'background 0.35s ease, box-shadow 0.35s ease',
        }}>
          <img
            src={icon}
            alt={name}
            style={{
              width: 80, height: 80, objectFit: 'contain',
              filter: hovered ? 'brightness(0) invert(1)' : 'none',
              transform: hovered ? 'scale(1.12)' : 'scale(1)',
              transition: 'transform 0.35s ease, filter 0.35s ease',
            }}
          />
        </div>
      </div>

      <span style={{
        fontFamily: 'Playfair Display, serif', fontWeight: 700,
        fontSize: 24, lineHeight: 1.3, textAlign: 'center',
        color: hovered ? 'var(--blue)' : '#000',
        whiteSpace: 'pre-line',
        transition: 'color 0.3s ease',
      }}>
        {name}
      </span>
    </div>
  );
}

export default function Certifications() {
  return (
    <section style={{
      width: '100%',
      background: 'var(--shape-fill)',
      backgroundImage: 'url(/img/pattern.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: 'clamp(72px,9vw,112px) clamp(24px,5vw,100px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 60,
      boxSizing: 'border-box',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 900,
          fontSize: 'clamp(32px,5vw,60px)', lineHeight: 1.15,
          color: '#000', textAlign: 'center', margin: 0, maxWidth: 700,
        }}>
          Certifications and Professional Standards
        </h2>
      </div>

      {/* Cert circles */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        gap: 'clamp(40px,8vw,120px)', flexWrap: 'wrap', width: '100%',
      }}>
        {certs.map((c, i) => <CertCircle key={i} icon={c.icon} name={c.name} />)}
      </div>

      {/* Cert list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%', maxWidth: 700 }}>
        {certList.map((c, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <img src="/img/certs/Vector-2.svg" alt="" style={{ width: 26, height: 26, flexShrink: 0, marginTop: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 20, lineHeight: '120%', color: '#000' }}>{c.text}</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 15, lineHeight: '140%', color: 'var(--color-3)' }}>{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
