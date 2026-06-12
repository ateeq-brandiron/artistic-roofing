import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Process', path: '/process' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled || !isHome ? '#1A3C5E' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 700, color: '#C8922A', lineHeight: 1 }}>
              ARTISTIC
            </span>
            <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 400, color: 'white', lineHeight: 1, letterSpacing: '0.05em' }}>
              ROOFING
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: pathname === link.path ? 600 : 400,
                  color: pathname === link.path ? '#C8922A' : 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  letterSpacing: '0.025em',
                  borderBottom: pathname === link.path ? '2px solid #C8922A' : '2px solid transparent',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-nav">
            <a
              href="tel:+15551234567"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(255,255,255,0.85)',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              <Phone size={16} />
              (555) 123-4567
            </a>
            <Link
              to="/contact"
              style={{
                background: '#C8922A',
                color: 'white',
                padding: '0.6rem 1.4rem',
                borderRadius: 4,
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-menu-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'none',
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: '#1A3C5E',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '1.5rem 2rem',
          }}
          className="mobile-menu"
        >
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontSize: '1rem',
                fontWeight: pathname === link.path ? 600 : 400,
                color: pathname === link.path ? '#C8922A' : 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            style={{
              display: 'block',
              background: '#C8922A',
              color: 'white',
              padding: '0.875rem',
              borderRadius: 4,
              fontSize: '0.9375rem',
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '1.25rem',
            }}
          >
            Free Estimate
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
