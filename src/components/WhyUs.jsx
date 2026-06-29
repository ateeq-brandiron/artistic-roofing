const features = [
  { title: 'Expert Team',          desc: 'Over a decade of trusted service in Sierra Vista and Cochise County' },
  { title: 'Licensed & Insured',   desc: 'Licensed, bonded, and insured roofing professionals' },
  { title: 'Quality Materials',    desc: 'TRI Certified tile installers trained on Westlake and Eagle products' },
  { title: 'Warranty Backed',      desc: 'Experienced in Tamko, Owens Corning, and GAF asphalt shingles' },
  { title: 'Local Expertise',      desc: 'Polyglass certified for advanced roof coating systems' },
  { title: 'Transparent Pricing',  desc: 'Committed to integrity, craftsmanship, and clear communication' },
];

export default function WhyUs() {
  return (
    <section style={{
      width: '100%',
      background: '#3a3a3a',
      padding: '75px clamp(24px,5vw,75px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48,
      flexWrap: 'wrap',
      boxSizing: 'border-box',
    }}>

      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 560, flex: '1 1 300px' }}>

        {/* Label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '7px 16px',
          background: '#fff',
          borderRadius: 100,
          boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
          alignSelf: 'flex-start',
        }}>
          <img src="/img/why-us/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>WHY US?</span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(32px,4vw,52px)',
          lineHeight: 1.15,
          color: '#fff',
          margin: 0,
        }}>
          Why Homeowners Choose Artistic Roofing
        </h2>

        {/* Body */}
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 300,
          fontSize: 20,
          lineHeight: '28px',
          color: '#fff',
          margin: 0,
        }}>
          We're on top of what matters most.<br />
          It is our promise to every customer to deliver dependable roofing and gutter solutions with honesty and precision.
        </p>
      </div>

      {/* Right — 2×3 feature grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(220px, 280px))',
        gap: '32px 48px',
        flex: '1 1 400px',
      }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <img src="/img/why-us/Vector.svg" alt="" style={{ width: 22, height: 22, flexShrink: 0, marginTop: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 20, color: '#fff', lineHeight: 1.2 }}>
                {f.title}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: 14, lineHeight: '18px', color: 'rgba(255,255,255,0.75)' }}>
                {f.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
