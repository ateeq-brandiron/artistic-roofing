import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Services', path: '/services' },
  { label: 'Contact us', path: '/contact' },
];

const socials = [
  { icon: '/img/footer/Icon.svg',   href: '#', label: 'Facebook' },
  { icon: '/img/footer/Icon-1.svg', href: '#', label: 'X' },
  { icon: '/img/footer/Icon-2.svg', href: '#', label: 'LinkedIn' },
  { icon: '/img/footer/Icon-3.svg', href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '60px clamp(20px,5vw,75px) 24px', boxSizing: 'border-box' }}>

        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link to="/" className="logo-hover">
              <img src="/img/vector-3.png" alt="Artistic Roofing" style={{ height: 90, width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 16, letterSpacing: '0.06em', color: 'var(--color-3)', margin: 0 }}>
              QUALITY YOU CAN TRUST.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', paddingTop: 8 }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} aria-label={s.label} className="social-icon" style={{
                width: 48, height: 48,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--shape-fill)',
                borderRadius: '50%',
              }}>
                <img src={s.icon} alt={s.label} style={{ width: 20, height: 20, objectFit: 'contain' }} />
              </a>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: '#e5e5e5', marginBottom: 28 }} />

        {/* Middle row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            {navLinks.map((link, i) => (
              <span key={link.path} style={{ display: 'flex', alignItems: 'center' }}>
                <Link to={link.path} className="footer-link" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 15, color: '#000' }}>
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span style={{ margin: '0 16px', color: '#ccc' }}>|</span>
                )}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src="/img/footer/Vector.svg" alt="" style={{ width: 14, height: 14 }} />
              <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', color: 'var(--blue)' }}>
                SIERRA VISTA, AZ
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src="/img/footer/Vector-1.svg" alt="" style={{ width: 20, height: 16 }} />
              <a href="mailto:artisticroofing11@gmail.com" className="footer-link" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 15, color: 'var(--color-2)' }}>
                artisticroofing11@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: '#e5e5e5', margin: '24px 0 20px' }} />

        <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 15, color: 'var(--color-2)', textAlign: 'center', margin: 0 }}>
          © 2025 Artistic Roofing. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
