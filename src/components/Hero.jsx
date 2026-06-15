export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundImage: 'url(/img/frame-2147223464.png)',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />

      {/* Background pattern */}
      <img src="/img/pattern.svg" alt="" style={{
        position: 'absolute',
        top: 'calc(50% - 3351px)',
        left: 'calc(50% - 718px)',
        width: 1436,
        height: 6701,
        pointerEvents: 'none',
        opacity: 0.15,
      }} />

      <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', width: '100%', padding: '140px 76px 60px' }}>
        {/* Row: headline + right col */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          {/* Headline */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 60px)',
            lineHeight: 1.2,
            color: '#ffffff',
            maxWidth: 680,
            letterSpacing: 0,
          }}>
            Artistic Roofing: Roofing Company in Sierra Vista, AZ.
          </h1>

          {/* Right column: paragraph + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, maxWidth: 613 }}>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.5',
              color: '#ffffff',
            }}>
              At Artistic Roofing, we take pride in being a trusted roofing company in Sierra Vista AZ. Our team helps homeowners and businesses across Cochise County and surrounding Southeast Arizona communities maintain durable, efficient roofing and gutter systems that stand up to Arizona's weather.
            </p>

            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex', alignItems: 'center', gap: 20,
                padding: '15px 20px',
                background: '#ffffff',
                borderRadius: 10,
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                fontSize: 18,
                color: '#1e1e1e',
                letterSpacing: '0.05em',
                cursor: 'pointer',
              }}>
              Request Your Free Roofing
              <img src="/img/call-made-2.svg" alt="" style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
