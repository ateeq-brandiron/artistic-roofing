export default function About() {
  return (
    <section id="about-us" style={{
      width: '100%',
      background: '#fff',
      padding: '75px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 48,
      flexWrap: 'wrap',
      boxSizing: 'border-box',
    }}>

      {/* Left column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 622, flex: '1 1 340px' }}>

        {/* Label */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <img src="/img/Vector (Stroke).svg" alt="" style={{ width: 18, height: 18 }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', color: 'var(--blue)' }}>
            EST. OVER 10 YEARS
          </span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(32px,4vw,48px)',
          lineHeight: 1.2,
          color: '#000',
          margin: 0,
        }}>
          Experienced Roofing Professionals in{' '}
          <span style={{ color: 'var(--blue)' }}>Sierra Vista AZ</span>
        </h2>

        {/* Para 1 */}
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '28px', color: 'var(--color-3)', margin: 0 }}>
          For more than a decade,{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Artistic Roofing</span>
          {' '}has served Sierra Vista and Cochise County with dependable roofing and gutter services. We are licensed, bonded, and insured, and our long-term team members complete every job with precision and care.
        </p>

        {/* Para 2 */}
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '28px', color: 'var(--color-3)', margin: 0 }}>
          As{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>TRI Certified tile installers</span>
          , we work with concrete tile from leading manufacturers such as{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Westlake</span>
          {' '}and{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Eagle Roofing Products.</span>
          {' '}For asphalt shingle systems, we install materials from{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Tamko, Owens Corning, and GAF</span>
          , trusted names known for quality and weather resistance suited to Arizona's climate.
        </p>

        {/* Blue info box */}
        <div style={{
          background: 'var(--shape-fill)',
          border: '1px solid var(--shape-stroke)',
          borderRadius: 12,
          padding: '20px 24px',
        }}>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '28px', color: 'var(--color-3)', margin: 0 }}>
            Our commitment to safety includes{' '}
            <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Polyglass roof coating training,</span>
            {' '}giving customers confidence that every project follows established standards for quality, safety, and long-term performance.
          </p>
        </div>
      </div>

      {/* Right column */}
      <div style={{ flex: '1 1 300px', maxWidth: 587, display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div style={{
          width: '100%',
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
          background: 'var(--shape-fill)',
          border: '1px solid var(--shape-stroke)',
        }}>
          {/* Roofer photo */}
          <img
            src="/img/source_2.png"
            alt="Roofing professionals at work"
            style={{ width: '100%', height: 500, objectFit: 'cover', display: 'block' }}
          />

          {/* Badges row */}
          <div style={{
            display: 'flex',
            gap: 12,
            padding: '16px',
            background: 'var(--shape-fill)',
          }}>
            {[
              { icon: '/img/Vector.svg', title: 'TRI CERTIFIED', sub: 'Tile Installer' },
              { icon: '/img/Vector-1.svg', title: 'POLYGLASS', sub: 'Trained Pros' },
            ].map((b, i) => (
              <div key={i} style={{
                flex: 1,
                background: '#fff',
                borderRadius: 10,
                border: '1px solid var(--shape-stroke)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                <img src={b.icon} alt="" style={{ width: 36, height: 36, objectFit: 'contain', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 13, color: '#000', letterSpacing: '0.04em' }}>{b.title}</span>
                  <span style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 12, color: 'var(--color-3)' }}>{b.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
