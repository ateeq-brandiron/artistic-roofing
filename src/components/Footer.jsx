import { Link } from 'react-router-dom';

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Services', path: '/services' },
  { label: 'Contact us', path: '/contact' },
];

const socials = [
  { icon: FacebookIcon, href: '#' },
  { icon: TwitterIcon, href: '#' },
  { icon: LinkedInIcon, href: '#' },
  { icon: InstagramIcon, href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e8f8ff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '60px clamp(20px, 5vw, 75px) 24px' }}>

        {/* Top row: logo+tagline left | social icons right */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          {/* Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <img src="/img/vector-3.png" alt="Artistic Roofing" style={{ height: 90, width: 'auto', objectFit: 'contain' }} />
            <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, color: 'var(--color-3)', lineHeight: 1.2 }}>
              QUALITY YOU CAN TRUST.
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', paddingTop: 8 }}>
            {socials.map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} style={{
                width: 38, height: 38,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--shape-fill)',
                border: '1px solid var(--shape-stroke)',
                borderRadius: '50%',
                color: 'var(--blue)',
                transition: 'background 0.2s',
              }}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#e5e5e5', marginBottom: 28 }} />

        {/* Bottom row: nav links | location + email */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
            {navLinks.map((link, i) => (
              <span key={link.path} style={{ display: 'flex', alignItems: 'center' }}>
                <Link to={link.path} style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 15,
                  color: '#000',
                }}>
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span style={{ margin: '0 16px', color: '#ccc', fontSize: 14 }}>|</span>
                )}
              </span>
            ))}
          </div>

          {/* Location + email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src="/img/vector-4.svg" alt="" style={{ width: 12, height: 13 }} />
              <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', color: 'var(--blue)' }}>
                SIERRA VISTA, AZ
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src="/img/vector-5.svg" alt="" style={{ width: 20, height: 18 }} />
              <a href="mailto:artisticroofing@gmail.com" style={{
                fontFamily: 'Outfit', fontWeight: 400, fontSize: 16,
                color: 'var(--color-2)',
              }}>
                artisticroofing@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#e5e5e5', margin: '24px 0 20px' }} />

        {/* Copyright */}
        <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 16, color: 'var(--color-2)', textAlign: 'center' }}>
          © 2025 Artistic Roofing. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
