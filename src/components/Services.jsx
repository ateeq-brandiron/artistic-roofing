import React from 'react';
import { Link } from 'react-router-dom';

function SectionLabel({ text }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '7px 16px', background: '#fff',
      borderRadius: 100, boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    }}>
      <img src="/img/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
      <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)', whiteSpace: 'nowrap' }}>{text}</span>
    </div>
  );
}

const services = [
  {
    bg: '/img/Frame%202147223409.png',
    title: 'New Construction Roofing',
    desc: 'Our roofing team partners with builders, homeowners, and businesses to install high-quality systems for new construction projects. We offer a range of materials, including tile, shingle, metal, and low-slope roofing, applying manufacturer-approved methods to ensure strength and longevity.',
  },
  {
    bg: '/img/Frame%202147223415.png',
    title: 'Roof Replacement',
    desc: 'We provide both residential and light commercial roof replacement using materials suited for Arizona\'s climate. From asphalt shingles to concrete tile, every roof is installed with close attention to underlayment integrity, ventilation, and professional finishing.',
  },
  {
    bg: '/img/Frame%202147223416.png',
    title: 'Roof Repairs and Preventive Maintenance',
    desc: 'Our technicians address leaks, wind-blown shingles, and wear from aging materials or heavy rain. We recommend roof inspections every 3 to 4 years and annual checkups for roofs older than 15 years. Regular maintenance helps identify small issues early and extends the life of your roofing system.',
  },
  {
    bg: '/img/Frame%202147223417.png',
    title: 'Roof Coatings and Restoration',
    desc: 'For low-slope or flat roofs, Artistic Roofing offers Polyglass-certified coatings designed to extend roof life and improve performance. This affordable maintenance service is recommended every 3 to 5 years to help maintain waterproofing, energy efficiency, and overall durability in Arizona\'s climate.',
  },
  {
    bg: '/img/homepage/Home%20-%20Gutter%20Installation.jpg',
    title: 'Gutter Installation and Maintenance',
    desc: 'Our seamless 5" and 6" gutter systems are custom-fabricated on-site and installed to assist with effective water control around your property. We use durable materials and precise slope alignment to help manage rainfall and minimize pooling or overflow. Available in multiple color options.',
  },
];

function ServiceCard({ s }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 'clamp(260px, 30vw, 403px)', minHeight: 411,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        flexShrink: 0,
        position: 'relative',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 56px rgba(0,0,0,0.18)' : '0 4px 16px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* Background image with zoom */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${s.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }} />

      {/* Content card */}
      <div style={{
        position: 'relative',
        margin: '0 17px 17px',
        background: hovered ? 'rgba(0,128,198,0.97)' : 'rgba(253,254,255,0.95)',
        borderRadius: 10,
        padding: 15,
        display: 'flex', flexDirection: 'column', gap: 11,
        transition: 'background 0.3s ease',
      }}>
        <h3 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 700,
          fontSize: 18, lineHeight: '21.6px',
          color: hovered ? '#fff' : '#000',
          transition: 'color 0.3s ease',
        }}>{s.title}</h3>
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontWeight: 400,
          fontSize: 14, lineHeight: '16.8px',
          color: hovered ? 'rgba(255,255,255,0.88)' : 'var(--color-3)',
          transition: 'color 0.3s ease',
        }}>{s.desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding: 'clamp(40px,5vw,50px) clamp(20px,5vw,75px) clamp(48px,6vw,75px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(32px,4vw,50px)' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: '100%', maxWidth: 1290 }}>
        <SectionLabel text="SERVICES" />
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(28px, 4vw, 48px)',
          lineHeight: '120%',
          textAlign: 'center',
          color: '#000',
          maxWidth: 608,
          margin: 0,
        }}>
          Comprehensive{' '}
          <span style={{ color: 'var(--blue)' }}>Roofing</span>
          {' '}and{' '}
          <span style={{ color: 'var(--blue)' }}>Gutter</span>
          {' '}Services
        </h2>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px,3vw,40px)', width: '100%', maxWidth: 1290 }}>
        <div className="services-row" style={{ display: 'flex', gap: 'clamp(16px,3vw,40px)', justifyContent: 'center', flexWrap: 'wrap' }}>
          {services.slice(0, 3).map((s, i) => <ServiceCard key={i} s={s} />)}
        </div>
        <div className="services-row" style={{ display: 'flex', gap: 'clamp(16px,3vw,40px)', justifyContent: 'center', flexWrap: 'wrap' }}>
          {services.slice(3).map((s, i) => <ServiceCard key={i} s={s} />)}
        </div>
      </div>

      {/* CTA */}
      <Link to="/contact" className="btn-blue" style={{
        display: 'inline-flex', alignItems: 'center', gap: 20,
        padding: '15px 20px',
        background: 'var(--blue)',
        borderRadius: 10,
        fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 18,
        color: '#fff', letterSpacing: '0.05em',
      }}>
        Get a Roofing or Gutter Quote
        <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
      </Link>
    </section>
  );
}
