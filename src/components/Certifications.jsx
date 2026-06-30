import React from 'react';
import { Link } from 'react-router-dom';

const certs = [
  { icon: '/img/certs/Vector-2.svg', name: 'TRI Certified' },
  { icon: '/img/certs/Vector-1.svg', name: 'BBB Accredited' },
  { icon: '/img/certs/Vector.svg',   name: 'Polyglass\nTrained' },
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
          src="/img/certs/Ellipse%209.svg"
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
      padding: 'clamp(60px,8vw,100px) clamp(24px,5vw,100px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 60,
      boxSizing: 'border-box',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', background: '#fff', borderRadius: 100, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
          <img src="/img/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>CERTIFICATIONS</span>
        </div>
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

      {/* CTA */}
      <Link to="/about" className="btn-blue" style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        padding: '16px 32px',
        background: 'var(--blue)',
        borderRadius: 10,
        fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 17,
        color: '#fff', letterSpacing: '0.02em',
      }}>
        View All Certifications
        <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
      </Link>
    </section>
  );
}
