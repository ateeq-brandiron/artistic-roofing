import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Share2, Camera, PlayCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#111827', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 24, fontWeight: 700, color: '#C8922A', lineHeight: 1 }}>ARTISTIC</div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 24, fontWeight: 400, color: 'white', lineHeight: 1.2, letterSpacing: '0.05em' }}>ROOFING</div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 260 }}>
              Premium roofing craftsmanship protecting your home and family. Serving the community with integrity since 2005.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[Share2, Camera, PlayCircle].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'background 0.2s' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Our Process', '/process'], ['Testimonials', '/testimonials'], ['Contact', '/contact']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginBottom: '1.25rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Roof Installation', 'Roof Replacement', 'Roof Repair', 'Storm Damage Repair', 'Gutter Services', 'Skylight Installation'].map(s => (
                <li key={s}>
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginBottom: '1.25rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="tel:+15551234567" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.9rem' }}>
                <Phone size={16} style={{ flexShrink: 0, marginTop: 2, color: '#C8922A' }} />
                (555) 123-4567
              </a>
              <a href="mailto:info@artisticroofing.com" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.9rem' }}>
                <Mail size={16} style={{ flexShrink: 0, marginTop: 2, color: '#C8922A' }} />
                info@artisticroofing.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem' }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 2, color: '#C8922A' }} />
                <span>123 Roofing Lane<br />San Antonio, TX 78201</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.8125rem' }}>© 2025 Artistic Roofing. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'License Info'].map(t => (
              <a key={t} href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', textDecoration: 'none' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
