export default function Footer() {
  return (
    <footer style={{
      background: '#ffffff',
      padding: '75px 75px 25px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 1290, width: '100%', margin: '0 auto' }}>

        {/* Top row: logo + nav list */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32 }}>
          {/* Logo & tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              <img src="/img/vector-3.png" alt="Artistic Roofing" style={{ width: 276, height: 109, objectFit: 'contain' }} />
              <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 24, lineHeight: '28.8px', color: 'var(--color-3)' }}>
                QUALITY YOU CAN TRUST.
              </p>
            </div>
          </div>

          {/* Nav list from figma (list.svg image) */}
          <img src="/img/list.svg" alt="Navigation links" style={{ width: 306, objectFit: 'contain' }} />
        </div>

        {/* Divider */}
        <img src="/img/line-12-1.svg" alt="" style={{ width: '100%', height: 3, objectFit: 'cover' }} />

        {/* Middle row: nav links + location/email */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>
          {/* Nav links */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 25, flexWrap: 'wrap' }}>
            {['Home', 'About us', 'Gallery', 'Services', 'Contact us'].map((link, i, arr) => (
              <div key={link} style={{ display: 'inline-flex', alignItems: 'center', gap: 25 }}>
                <a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 16,
                  color: '#000', textAlign: 'center',
                }}>{link}</a>
                {i < arr.length - 1 && (
                  <img src="/img/line-15.svg" alt="" style={{ width: 1, height: 16 }} />
                )}
              </div>
            ))}
          </div>

          {/* Location + email */}
          <div style={{ display: 'inline-flex', alignItems: 'flex-start', justifyContent: 'flex-end', gap: 41 }}>
            {/* Location */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <img src="/img/vector-4.svg" alt="" style={{ width: 12, height: 13 }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: 13, letterSpacing: '0.035em', color: 'var(--blue)' }}>SIERRA VISTA, AZ</span>
            </div>
            {/* Email */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <img src="/img/vector-5.svg" alt="" style={{ width: 21.5, height: 18.5 }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 18, lineHeight: '25.2px', color: 'var(--color-2)' }}>
                info@artisticroofing.com
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <img src="/img/line-12-1.svg" alt="" style={{ width: '100%', height: 3, objectFit: 'cover' }} />

        {/* Copyright */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 18, lineHeight: '25.2px', color: 'var(--color-2)' }}>
            © 2025 Artistic Roofing. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
