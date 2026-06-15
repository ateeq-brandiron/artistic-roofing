import { useState, useEffect } from 'react';

const navLinks = ['Home', 'About us', 'Gallery', 'Services', 'Contact us'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'background 0.3s, box-shadow 0.3s',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
    }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 76px', height: 90, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo from Figma asset */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/img/vector-3.png" alt="Artistic Roofing" style={{ height: 50, width: 'auto' }} />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 16,
              color: scrolled ? 'var(--color-3)' : 'rgba(255,255,255,0.9)',
              transition: 'color 0.2s',
              letterSpacing: 0,
            }}>
              {link}
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <a href="#contact" className="desktop-nav" style={{
          display: 'inline-flex', alignItems: 'center', gap: 16,
          padding: '12px 20px', background: 'var(--blue)',
          borderRadius: 10, fontFamily: 'Outfit, sans-serif',
          fontWeight: 600, fontSize: 16, color: '#fff',
          letterSpacing: '0.05em',
        }}>
          Request Your Free Roofing
          <img src="/img/call-made-2.svg" alt="" style={{ width: 14, height: 14 }} />
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(o => !o)} className="mobile-btn" style={{
          display: 'none', flexDirection: 'column', gap: 5, padding: 8,
          background: 'transparent',
        }}>
          <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#245079' : 'white', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#245079' : 'white', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#245079' : 'white', borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e5e5', padding: '1.5rem 2rem' }}>
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '0.75rem 0', fontFamily: 'Outfit', fontSize: 16, color: 'var(--color-3)', borderBottom: '1px solid #f0f0f0' }}>
              {link}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} style={{
            display: 'block', marginTop: '1rem', padding: '0.875rem', background: 'var(--blue)',
            borderRadius: 10, color: '#fff', fontFamily: 'Outfit', fontWeight: 600, fontSize: 16, textAlign: 'center',
          }}>
            Request Your Free Roofing
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
