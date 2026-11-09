export default function About() {
  return (
    <section id="about-us" style={{
      width: '100%',
      background: '#fff',
      padding: 'clamp(64px,7vw,96px) clamp(20px,5vw,75px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 64,
      flexWrap: 'wrap',
      boxSizing: 'border-box',
    }}>

      {/* Left column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 622, flex: '1 1 300px', minWidth: 0 }}>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          lineHeight: '120%',
          color: '#000',
          margin: 0,
          alignSelf: 'stretch',
        }}>
          Experienced Roofing Professionals in{' '}
          <span style={{ color: 'var(--blue)' }}>Sierra Vista, AZ</span>
        </h2>

        {/* Para 1 */}
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '120%', color: 'var(--color-3)', margin: 0, alignSelf: 'stretch' }}>
          For more than a decade,{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Artistic Roofing</span>
          {' '}Systems LLC has proudly served Sierra Vista and Cochise County with dependable roofing and gutter services. Licensed, bonded, and insured, we're backed by an experienced team, including employees who have been with us since the beginning. We take pride in our workmanship, our lasting relationships, and the quality and care we bring to every project.
        </p>

        {/* Para 2 */}
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '120%', color: 'var(--color-3)', margin: 0, alignSelf: 'stretch' }}>
          As{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>TRI Certified tile installers</span>
          , we specialize in high-performance roofing systems tailored to Arizona's extreme climate. For tile roofs, we partner with leading concrete tile manufacturers like{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Westlake</span>
          {' '}and{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Eagle Roofing Products</span>
          . For asphalt shingle systems, we install top-rated materials from{' '}
          <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Tamko, Owens Corning, and GAF</span>
          —delivering maximum durability, weather resistance, and long-lasting curb appeal.
        </p>

        {/* Blue info box */}
        <div style={{
          display: 'flex',
          width: '100%',
          maxWidth: 623,
          padding: '20px 24px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          borderRadius: 10,
          border: '1px solid var(--shape-stroke)',
          background: 'var(--shape-fill)',
          boxSizing: 'border-box',
        }}>
          <p style={{ width: '100%', fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '150%', color: 'var(--color-3)', margin: 0 }}>
            <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Our commitment to safety:</span>
            {' '}We prioritize employee safety at every stage of the project while executing every job with meticulous care to safeguard the structural integrity of your roof.
          </p>
        </div>
      </div>

      {/* Right column – image card with badges at bottom */}
      <div style={{
        flexShrink: 0,
        width: 'min(587px, 100%)',
        height: 'clamp(400px, 55vw, 644px)',
        padding: '535px 21px 32px 21px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 30,
        border: '1px solid #D1EFFF',
        backgroundImage: 'url(/img/homepage/home-est-process-step4.jpg)',
        backgroundPosition: 'left top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#E8F8FF',
        boxSizing: 'border-box',
      }}>
        {/* Badge row */}
        <div style={{ display: 'flex', gap: 12, width: '100%' }}>
          {[
            { icon: '/img/Vector.svg', title: 'TRI CERTIFIED', sub: 'Tile Installer' },
            { icon: '/img/Vector-1.svg', title: 'POLYGLASS', sub: 'Trained Installers' },
            { icon: '/img/Vector.svg', title: 'TAMKO', sub: 'Preferred Installers' },
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
