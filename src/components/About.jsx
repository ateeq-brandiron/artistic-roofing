function SectionLabel({ text }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 9,
      padding: 9,
      background: '#ffffff',
      borderRadius: 27,
      boxShadow: '0px 1.82px 1.82px rgba(0,0,0,0.05)',
    }}>
      <img src="/img/vector-stroke-5.svg" alt="" style={{ width: 14.55, height: 14.55 }} />
      <span style={{
        fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: 12.7,
        letterSpacing: '0.035em', lineHeight: '21.8px',
        color: 'var(--blue)', whiteSpace: 'nowrap',
      }}>{text}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about-us" style={{
      width: '100%',
      background: 'rgba(255,255,255,0.10)',
      padding: '75px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 48,
      flexWrap: 'wrap',
    }}>
      {/* Left column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, maxWidth: 622, flex: '1 1 340px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SectionLabel text="EST. OVER 10 YEARS" />
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2,
            color: 'transparent',
            background: 'none',
          }}>
            <span style={{ color: '#000000' }}>Experienced Roofing Professionals in </span>
            <span style={{ color: 'var(--blue)' }}>Sierra Vista AZ</span>
          </h2>
        </div>

        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '24px', color: 'var(--color-3)' }}>
          <span style={{ color: '#464646' }}>For more than a decade, </span>
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Artistic Roofing</span>
          <span style={{ color: '#464646' }}> has served Sierra Vista and Cochise County with dependable roofing and gutter services. We are licensed, bonded, and insured, and our long-term team members complete every job with precision and care.</span>
        </p>

        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '24px', color: 'var(--color-3)' }}>
          <span style={{ color: '#464646' }}>As </span>
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>TRI Certified</span>
          <span style={{ color: '#464646' }}> tile installers, we work with concrete tile from leading manufacturers such as </span>
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Westlake</span>
          <span style={{ color: '#464646' }}> and </span>
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Eagle Roofing Products. </span>
          <span style={{ color: '#464646' }}>For asphalt shingle systems, we install materials from </span>
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Tamko, Owens Corning, and GAF</span>
          <span style={{ color: '#464646' }}>, trusted names known for quality and weather resistance suited to Arizona's climate.</span>
        </p>

        {/* Ellipse + OSHA card row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{
            width: 178, height: 178, flexShrink: 0,
            borderRadius: 221, border: '1px solid #d1eeff', overflow: 'hidden',
          }}>
            <img src="/img/ellipse-5.png" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{
            flex: 1, minHeight: 147,
            background: 'var(--shape-fill)',
            border: '1px solid var(--shape-stroke)',
            borderRadius: 10,
            padding: '25px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '24px', color: 'var(--color-3)' }}>
              <span style={{ fontWeight: 600, color: 'var(--blue)' }}>OSHA certification</span>
              <span style={{ color: '#464646' }}> and </span>
              <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Polyglass training </span>
              <span style={{ color: '#464646' }}>guarantee every project meets high standards for quality, safety, and long-term performance.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right column — background image + certification badges */}
      <div style={{ position: 'relative', width: 587, minHeight: 636, flexShrink: 0, flex: '1 1 300px', maxWidth: 587 }}>
        <div style={{
          width: '100%', height: 636,
          borderRadius: 30,
          border: '1px solid #d1eeff',
          backgroundImage: 'url(/img/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Badges overlay at bottom */}
          <div style={{
            position: 'absolute', bottom: 21, left: 21, right: 21,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 8,
          }}>
            {[
              { icon: '/img/vector.svg', title: 'TRI CERTIFIED', sub: 'Tile Installer' },
              { icon: '/img/vector-1.svg', title: 'OSHA CERTIFIED', sub: 'Safety Standards' },
              { icon: '/img/vector-2.svg', title: 'POLYGLASS', sub: 'Trained Pros' },
            ].map((b, i) => (
              <div key={i} style={{
                flex: 1,
                background: '#ffffff',
                borderRadius: 10,
                border: '0.79px solid #a3cde4',
                boxShadow: '1.59px 1.59px 3.17px rgba(0,0,0,0.10)',
                padding: '12.69px 14px',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={b.icon} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 11, color: '#000', lineHeight: 1.2 }}>{b.title}</div>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 10, color: 'var(--color-3)', lineHeight: 1.2 }}>{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
