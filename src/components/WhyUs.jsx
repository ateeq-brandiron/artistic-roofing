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
      background: '#3a3a3a',
      width: '100%',
      boxSizing: 'border-box',
    }}>
    <div style={{
      display: 'flex',
      maxWidth: 1440,
      margin: '0 auto',
      padding: 'clamp(64px,7vw,96px) clamp(20px,5vw,75px)',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'clamp(40px,5vw,75px)',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
    }}>

      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, flex: '1 1 280px', maxWidth: 480 }}>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(32px, 3.5vw, 48px)',
          lineHeight: '120%',
          color: '#fff',
          margin: 0,
          alignSelf: 'stretch',
        }}>
          Why Homeowners Choose Artistic Roofing
        </h2>
      </div>

      {/* Right — 2×3 feature grid */}
      <div className="whyus-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 280px))',
        gap: 'clamp(20px,3vw,32px) clamp(24px,4vw,48px)',
        flex: '1 1 320px',
        minWidth: 0,
      }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <img src="/img/why-us/Vector.svg" alt="" style={{ width: 22, height: 22, flexShrink: 0, marginTop: 2, filter: 'brightness(0) saturate(100%) invert(37%) sepia(93%) saturate(1113%) hue-rotate(177deg) brightness(97%) contrast(103%)' }} />
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

    </div>
    </section>
  );
}
