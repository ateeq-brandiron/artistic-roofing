function SectionLabel({ text }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 9,
      padding: 9, background: '#ffffff',
      borderRadius: 27, boxShadow: '0px 1.82px 1.82px rgba(0,0,0,0.05)',
    }}>
      <img src="/img/vector-stroke-5.svg" alt="" style={{ width: 14.55, height: 14.55 }} />
      <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: 12.7, letterSpacing: '0.035em', color: 'var(--blue)', whiteSpace: 'nowrap' }}>{text}</span>
    </div>
  );
}

const certs = [
  { logo: '/img/tri-certified.svg', name: 'TRI Certified' },
  { logo: '/img/osha-certified.svg', name: 'OSHA Certified' },
  { logo: '/img/polyglass.svg', name: 'Polyglass' },
];

export default function Certifications() {
  return (
    <section style={{
      width: '100%',
      background: 'var(--shape-stroke)',
      padding: '75px 100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 30,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: '100%', maxWidth: 1290 }}>
        <SectionLabel text="CERTIFICATIONS" />
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, textAlign: 'center', color: '#000' }}>
          Certified & Trusted
        </h2>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: 20, lineHeight: '24px', textAlign: 'center', color: 'var(--color-3)', maxWidth: 717 }}>
          Artistic Roofing maintains certifications and professional memberships that reflect our commitment to safety, quality, and craftsmanship.
        </p>
      </div>

      {/* Logos */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(40px, 10vw, 151px)', flexWrap: 'wrap', padding: '50px 0', width: '100%' }}>
        {certs.map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, width: 206 }}>
            <img src={c.logo} alt={c.name} style={{ width: 152.65, height: 152.65, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 24, lineHeight: '28.8px', textAlign: 'center', color: '#000' }}>{c.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
