import { Link } from 'react-router-dom';

function SectionLabel({ text }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 9,
      padding: 9, background: '#ffffff',
      borderRadius: 27, boxShadow: '0px 1.82px 1.82px rgba(0,0,0,0.05)',
    }}>
      <img src="/img/Icon.svg" alt="" style={{ width: 14.55, height: 14.55 }} />
      <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: 12.7, letterSpacing: '0.035em', color: 'var(--blue)', whiteSpace: 'nowrap' }}>{text}</span>
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
    bg: '/img/Frame%202147223418.png',
    title: 'Gutter Installation and Maintenance',
    desc: 'Our seamless 5" and 6" gutter systems are custom-fabricated on-site and installed to assist with effective water control around your property. We use durable materials and precise slope alignment to help manage rainfall and minimize pooling or overflow. Available in multiple color options.',
  },
];

function ServiceCard({ s }) {
  return (
    <div style={{
      width: 403, minHeight: 411,
      borderRadius: 10,
      backgroundImage: `url(${s.bg})`,
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '30px 17px',
      flexShrink: 0,
    }}>
      <div style={{
        background: 'rgba(253,254,255,0.95)',
        borderRadius: 10,
        padding: 15,
        display: 'flex', flexDirection: 'column', gap: 11,
      }}>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 18, lineHeight: '21.6px', color: '#000' }}>{s.title}</h3>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '16.8px', color: 'var(--color-3)' }}>{s.desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding: '50px 75px 75px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50 }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: '100%', maxWidth: 1290 }}>
        <SectionLabel text="SERVICES" />
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, textAlign: 'center', color: 'transparent' }}>
          <span style={{ color: '#000' }}>Comprehensive </span>
          <span style={{ color: 'var(--blue)' }}>Roofing</span>
          <span style={{ color: '#000' }}> and </span>
          <span style={{ color: 'var(--blue)' }}>Gutter</span>
          <span style={{ color: '#000' }}> Services</span>
        </h2>
      </div>

      {/* Cards grid – row 1: 3 cards, row 2: 2 cards centered */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, width: '100%', maxWidth: 1290 }}>
        {/* Row 1 */}
        <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
          {services.slice(0, 3).map((s, i) => <ServiceCard key={i} s={s} />)}
        </div>
        {/* Row 2 */}
        <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
          {services.slice(3).map((s, i) => <ServiceCard key={i} s={s} />)}
        </div>
      </div>

      {/* CTA */}
      <Link to="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 20,
          padding: '15px 20px',
          background: 'var(--blue)',
          borderRadius: 10,
          boxShadow: 'inset 0 4px 4px rgba(255,255,255,0.1), inset 4px 0 4px rgba(255,255,255,0.1), inset 0 -4px 4px rgba(255,255,255,0.1), inset -4px 0 4px rgba(255,255,255,0.1)',
          fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 18,
          color: '#fff', letterSpacing: '0.05em',
        }}>
        Get a Roofing or Gutter Quote
        <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
      </Link>
    </section>
  );
}
