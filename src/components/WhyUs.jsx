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

const features = [
  { icon: '/img/icon-5.svg', title: 'Licensed & Insured', desc: 'Licensed, bonded, and insured roofing professionals' },
  { icon: '/img/icon-5.svg', title: 'Expert Team', desc: 'Over a decade of trusted service in Sierra Vista and Cochise County.' },
  { icon: '/img/icon-3.svg', title: 'Quality Materials', desc: 'TRI Certified tile installers trained on Westlake and Eagle products' },
  { icon: '/img/icon-3.svg', title: 'Warranty Backed', desc: 'Experienced in Tamko, Owens Corning, and GAF asphalt shingles' },
  { icon: '/img/icon-5.svg', title: 'Transparent Pricing', desc: 'Committed to integrity, craftsmanship, and clear communication' },
  { icon: '/img/icon-5.svg', title: 'Local Expertise', desc: 'OSHA and Polyglass certified for safety and coating expertise' },
];

export default function WhyUs() {
  return (
    <section id="home" style={{
      width: '100%',
      background: 'var(--color-3)',
      padding: 75,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48,
      flexWrap: 'wrap',
    }}>
      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, maxWidth: 622, flex: '1 1 300px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SectionLabel text="WHY US?" />
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, color: '#ffffff' }}>
            Why Homeowners Choose Artistic Roofing
          </h2>
        </div>

        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: 20, lineHeight: '24px', color: '#ffffff' }}>
          "We're on top of what matters most." It is our promise to every customer to deliver dependable roofing and gutter solutions with honesty and precision.
        </p>

        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          style={{
            alignSelf: 'flex-start',
            display: 'inline-flex', alignItems: 'center', gap: 20,
            padding: '15px 20px', background: '#ffffff',
            borderRadius: 10,
            fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 18,
            color: '#1e1e1e', letterSpacing: '0.05em', cursor: 'pointer',
          }}>
          Request Your Free Roofing
          <img src="/img/call-made-2.svg" alt="" style={{ width: 14, height: 14 }} />
        </button>
      </div>

      {/* Right — 2x3 grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 253.53px)',
        gridTemplateRows: 'repeat(3, auto)',
        gap: '23.96px 33.94px',
      }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14.97 }}>
            <img src={f.icon} alt="" style={{ width: 18.65, height: 18.65, flexShrink: 0, marginTop: 3 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 20, color: '#ffffff', lineHeight: 'normal' }}>{f.title}</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: 11.7, lineHeight: '14px', color: 'var(--shape-fill)' }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
