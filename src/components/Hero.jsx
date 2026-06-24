export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      width: '100%',
      minHeight: 819,
      backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.00) 36.6%, rgba(0,0,0,0.64) 71.27%, rgba(0,0,0,0.91) 100%), url(/img/frame-2147223464.png)',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'hidden',
    }}>

      <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', width: '100%', padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,76px) 72px' }}>
        {/* Row: headline + right col */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          {/* Left – Headline */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            fontSize: 60,
            lineHeight: '120%',
            color: '#fff',
            width: 628,
            maxWidth: '100%',
            margin: 0,
          }}>
            Artistic Roofing: Roofing Company in Sierra Vista, AZ.
          </h1>

          {/* Right – paragraph + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, flex: 1, minWidth: 280, maxWidth: 560, alignSelf: 'stretch', justifyContent: 'flex-end' }}>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: 20,
              lineHeight: '120%',
              color: '#fff',
              margin: 0,
              alignSelf: 'stretch',
            }}>
              At Artistic Roofing, we take pride in being a trusted roofing company in Sierra Vista AZ. Our team helps homeowners and businesses across Cochise County and surrounding Southeast Arizona communities maintain durable, efficient roofing and gutter systems that stand up to Arizona's weather.
            </p>

            <button
              onClick={() => window.location.href = '/contact'}
              style={{
                alignSelf: 'flex-start',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                padding: '15px 20px',
                background: '#fff',
                border: 'none',
                borderRadius: 10,
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                fontSize: 18,
                color: '#1e1e1e',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
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
