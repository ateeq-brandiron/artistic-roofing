import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Process', path: '/process' },
  { label: 'Services', path: '/services' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact us', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solidBg = scrolled || !isHome;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'background 0.3s, box-shadow 0.3s',
      background: solidBg ? 'rgba(255,255,255,0.98)' : 'transparent',
      boxShadow: solidBg ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
    }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '0 clamp(20px, 5vw, 76px)',
        height: 80,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/img/vector-3.png" alt="Artistic Roofing" style={{ height: 48, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 2vw, 28px)' }} className="desktop-nav">
          {navLinks.map(link => {
            const active = pathname === link.path;
            return (
              <Link key={link.path} to={link.path} style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: active ? 600 : 400,
                fontSize: 15,
                color: solidBg
                  ? (active ? 'var(--blue)' : 'var(--color-3)')
                  : (active ? '#fff' : 'rgba(255,255,255,0.88)'),
                borderBottom: active ? `2px solid ${solidBg ? 'var(--blue)' : '#fff'}` : '2px solid transparent',
                paddingBottom: 2,
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="desktop-nav" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '10px 18px',
          background: 'var(--blue)',
          borderRadius: 8,
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 600, fontSize: 14,
          color: '#fff',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          Contact Us
          <img src="/img/call-made-2.svg" alt="" style={{ width: 12, height: 12 }} />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="mobile-btn"
          aria-label="Menu"
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, background: 'transparent' }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, borderRadius: 2,
              background: solidBg ? '#245079' : 'white',
              transition: 'background 0.2s',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e5e5', padding: '1rem 1.5rem 1.5rem' }}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} style={{
              display: 'block', padding: '0.75rem 0',
              fontFamily: 'Outfit', fontSize: 16,
              color: pathname === link.path ? 'var(--blue)' : 'var(--color-3)',
              fontWeight: pathname === link.path ? 600 : 400,
              borderBottom: '1px solid #f0f0f0',
            }}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" style={{
            display: 'block', marginTop: '1rem', padding: '0.875rem',
            background: 'var(--blue)', borderRadius: 8,
            color: '#fff', fontFamily: 'Outfit', fontWeight: 600,
            fontSize: 15, textAlign: 'center',
          }}>
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
