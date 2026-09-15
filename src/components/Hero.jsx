import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      width: '100%',
      minHeight: 'clamp(600px, 90vh, 960px)',
      backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.00) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.78) 100%), url(/img/homepage/Home%20Hero.png)',
      backgroundSize: 'cover',
      backgroundPosition: '50% 65%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'hidden',
    }}>

      <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', width: '100%', padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,76px) clamp(56px,6vw,88px)' }}>
        {/* Row: left col + right col */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          {/* Left – Headline + tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: '100%', flex: '1 1 320px' }}>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              fontSize: 'clamp(36px, 5.2vw, 68px)',
              lineHeight: '116%',
              color: '#fff',
              margin: 0,
            }}>
              Artistic Roofing: Roofing Company in Sierra Vista, AZ.
            </h1>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              lineHeight: '140%',
              color: '#fff',
              margin: 0,
            }}>
              We're on top of what matters most.
            </p>
          </div>

          {/* Right – paragraph + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, flex: '1 1 300px', maxWidth: 620 }}>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(16px, 1.7vw, 19px)',
              lineHeight: '165%',
              color: '#fff',
              margin: 0,
              alignSelf: 'stretch',
            }}>
              At Artistic Roofing, we take pride in being a trusted roofing company in Sierra Vista, AZ. Our team helps homeowners and businesses across Cochise County and surrounding Southeast Arizona communities maintain durable, efficient roofing and gutter systems that stand up to Arizona's weather.
            </p>

            <Link
              to="/contact"
              className="btn-dark"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                padding: 'clamp(14px,2vw,18px) clamp(24px,2.5vw,36px)',
                background: '#fff',
                border: '2px solid #fff',
                borderRadius: 10,
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                color: '#1e1e1e',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}>
              Request Your Free Roofing Estimate
              <img src="/img/call-made-2.svg" alt="" style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
