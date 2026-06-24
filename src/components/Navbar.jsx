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
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: '#F9FDFF',
      boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '19px clamp(20px,3vw,43px) 15px clamp(20px,3.5vw,50px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/img/vector-3.png" alt="Artistic Roofing" style={{ height: 48, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">
          {navLinks.map(link => {
            const active = pathname === link.path;
            return (
              <Link key={link.path} to={link.path} style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: active ? 600 : 400,
                fontSize: 15,
                color: active ? '#000' : 'var(--color-3)',
                borderBottom: active ? '2px solid #000' : '2px solid transparent',
                paddingBottom: 3,
                whiteSpace: 'nowrap',
              }}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA – outlined style */}
        <Link to="/contact" className="desktop-nav" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '10px 20px',
          background: 'transparent',
          border: '1.5px solid #000',
          borderRadius: 8,
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 600, fontSize: 14,
          color: '#000',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          Contact Us
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1v7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
              background: '#245079',
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
