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
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: scrolled ? 10 : 19,
      left: scrolled ? 24 : 50,
      right: scrolled ? 24 : 43,
      zIndex: 1000,
      transform: 'translateZ(0)',
      background: scrolled ? 'rgba(255,255,255,0.92)' : '#F9FDFF',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderRadius: 10,
      boxShadow: scrolled
        ? '0 8px 32px rgba(0,0,0,0.14), 0 1px 0 rgba(255,255,255,0.6) inset'
        : '0 4px 24px rgba(0,0,0,0.08)',
      transition: 'top 0.3s ease, left 0.3s ease, right 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
      overflow: 'hidden',
    }}>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '19px clamp(20px,3vw,43px) 15px clamp(20px,3.5vw,50px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
        {/* Logo */}
        <Link to="/" className="logo-hover" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/img/vector-3.png" alt="Artistic Roofing" style={{ height: 48, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">
          {navLinks.map(link => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link${active ? ' nav-active' : ''}`}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: active ? 600 : 400,
                  fontSize: 15,
                  color: active ? '#000' : 'var(--color-3)',
                  paddingBottom: 3,
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="nav-cta desktop-nav" style={{
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
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H4M11 1v7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Hamburger → X */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="mobile-btn"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, background: 'transparent' }}
        >
          <span style={{
            display: 'block', width: 22, height: 2, borderRadius: 2,
            background: '#245079',
            transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            transition: 'transform 0.25s ease',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2, borderRadius: 2,
            background: '#245079',
            opacity: mobileOpen ? 0 : 1,
            transform: mobileOpen ? 'scaleX(0)' : 'scaleX(1)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2, borderRadius: 2,
            background: '#245079',
            transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            transition: 'transform 0.25s ease',
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: mobileOpen ? 500 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}>
        <div style={{ background: '#fff', borderTop: '1px solid #e5e5e5', padding: mobileOpen ? '1rem 1.5rem 1.5rem' : 0 }}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} style={{
              display: 'block', padding: '0.75rem 0',
              fontFamily: 'Outfit', fontSize: 16,
              color: pathname === link.path ? 'var(--blue)' : 'var(--color-3)',
              fontWeight: pathname === link.path ? 600 : 400,
              borderBottom: '1px solid #f0f0f0',
              transition: 'color 0.2s ease',
            }}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-blue" style={{
            display: 'block', marginTop: '1rem', padding: '0.875rem',
            background: 'var(--blue)', borderRadius: 8,
            color: '#fff', fontFamily: 'Outfit', fontWeight: 600,
            fontSize: 15, textAlign: 'center',
          }}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
