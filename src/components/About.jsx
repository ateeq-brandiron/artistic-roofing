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
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', background: '#fff', borderRadius: 100, boxShadow: '0 2px 6px rgba(0,0,0,0.06)', alignSelf: 'flex-start' }}>
          <img src="/img/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>EST. OVER 10 YEARS</span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 48,
          lineHeight: '120%',
          color: '#000',
          margin: 0,
          alignSelf: 'stretch',
        }}>
          Experienced Roofing Professionals in{' '}
          <span style={{ color: 'var(--blue)' }}>Sierra Vista AZ</span>
        </h2>

        {/* Para 1 */}
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '120%', color: 'var(--color-3)', margin: 0, alignSelf: 'stretch' }}>
          For more than a decade,{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Artistic Roofing</span>
          {' '}has served Sierra Vista and Cochise County with dependable roofing and gutter services. We are licensed, bonded, and insured, and our long-term team members complete every job with precision and care.
        </p>

        {/* Para 2 */}
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '120%', color: 'var(--color-3)', margin: 0, alignSelf: 'stretch' }}>
          As{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>TRI Certified tile installers</span>
          , we work with concrete tile from leading manufacturers such as{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Westlake</span>
          {' '}and{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Eagle Roofing Products.</span>
          {' '}For asphalt shingle systems, we install materials from{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Tamko, Owens Corning, and GAF</span>
          , trusted names known for quality and weather resistance suited to Arizona's climate.
        </p>

        {/* Blue info box */}
        <div style={{
          display: 'flex',
          width: 623,
          padding: '11px 0',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          borderRadius: 10,
          border: '1px solid var(--shape-stroke)',
          background: 'var(--shape-fill)',
          boxSizing: 'border-box',
        }}>
          <p style={{ width: 560, flexShrink: 0, fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '120%', color: 'var(--color-3)', margin: 0 }}>
            Our commitment to safety includes{' '}
            <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Polyglass roof coating training,</span>
            {' '}giving customers confidence that every project follows established standards for quality, safety, and long-term performance.
          </p>
        </div>
      </div>

      {/* Right column – image card with badges at bottom */}
      <div style={{
        flexShrink: 0,
        width: 587,
        height: 644,
        padding: '535px 21px 32px 21px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 30,
        border: '1px solid #D1EFFF',
        background: 'url(/img/source_2.png) lightgray -84.5px -73.973px / 128.79% 89.151% no-repeat, #E8F8FF',
        boxSizing: 'border-box',
      }}>
        {/* Badge row */}
        <div style={{ display: 'flex', gap: 12, width: '100%' }}>
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

    </section>
  );
}
