import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'installation',
    title: 'Roof Installation',
    subtitle: 'New Construction & Complete New Roofs',
    emoji: '🏠',
    color: '#1A3C5E',
    desc: 'Whether you\'re building a new home or need a brand-new roof system, our GAF Master Elite certified team delivers flawless installation using premium materials designed to last 30-50 years.',
    features: [
      'All roof types: asphalt shingle, metal, tile, flat/TPO',
      'Architectural and designer shingle options',
      'New construction scheduling coordination',
      'Lifetime workmanship warranty',
      'GAF System Plus warranty eligible',
      'Permit pulling and inspection coordination',
    ],
  },
  {
    id: 'replacement',
    title: 'Roof Replacement',
    subtitle: 'Complete Tear-Off & Replacement',
    emoji: '🔨',
    color: '#C8922A',
    desc: 'When your roof has reached the end of its life, our full replacement service gives your home a fresh start. We handle everything from tear-off and debris removal to final installation and cleanup.',
    features: [
      'Complete old roof tear-off and disposal',
      'Decking inspection and repair as needed',
      'Ice and water shield installation',
      'Premium underlayment systems',
      'Proper ventilation installation',
      'Same-day completion for most homes',
    ],
  },
  {
    id: 'repair',
    title: 'Roof Repair',
    subtitle: 'Leaks, Damage & Maintenance',
    emoji: '🛠️',
    color: '#1A3C5E',
    desc: 'From minor leaks to major damage, our repair specialists diagnose and fix roofing problems quickly and correctly. We don\'t just patch — we identify the root cause and provide lasting solutions.',
    features: [
      'Leak detection and repair',
      'Missing or damaged shingle replacement',
      'Flashing repair and replacement',
      'Ridge cap and valley repairs',
      'Vent and pipe boot replacement',
      'Emergency same-day service available',
    ],
  },
  {
    id: 'storm',
    title: 'Storm Damage Repair',
    subtitle: 'Hail, Wind & Emergency Response',
    emoji: '⛈️',
    color: '#C8922A',
    desc: 'Storm damage can be hidden and devastating. We provide rapid response after hail, wind, or severe weather events, with complete insurance claim assistance from start to finish.',
    features: [
      'Free storm damage inspection',
      'Detailed damage documentation with photos',
      'Insurance adjuster coordination',
      'Direct insurance billing available',
      'Emergency tarping for active leaks',
      'Fast-track scheduling after storms',
    ],
  },
  {
    id: 'gutters',
    title: 'Gutter Services',
    subtitle: 'Installation, Cleaning & Repair',
    emoji: '💧',
    color: '#1A3C5E',
    desc: 'Gutters are a critical part of your home\'s drainage system. We install, clean, repair, and replace gutters and downspouts to keep water flowing away from your foundation.',
    features: [
      'Seamless aluminum gutter installation',
      'K-style and half-round gutter options',
      'Gutter guard / leaf protection systems',
      'Downspout installation and repair',
      'Complete cleaning and flushing',
      'Annual maintenance programs',
    ],
  },
  {
    id: 'skylights',
    title: 'Skylight Installation',
    subtitle: 'Natural Light & Ventilating Skylights',
    emoji: '☀️',
    color: '#C8922A',
    desc: 'Transform your living spaces with natural light. We install fixed, venting, and solar-powered skylights from top brands like VELUX, with proper flashing to ensure a watertight seal.',
    features: [
      'VELUX certified installer',
      'Fixed and venting skylight options',
      'Solar-powered and electric blinds',
      'Solar tunnel / sun tube installation',
      'Skylight replacement and resealing',
      'Full warranty on installation',
    ],
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F2741, #1A3C5E)', padding: '10rem 2rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>What We Offer</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Complete Roofing{' '}
            <em style={{ color: '#C8922A' }}>Services</em>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: 580, lineHeight: 1.75 }}>
            From new construction to emergency repairs, we offer a full spectrum of roofing services backed by our lifetime workmanship warranty.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                gap: '3rem',
                alignItems: 'center',
              }}
            >
              {/* Visual */}
              <div style={{ order: i % 2 === 1 ? 1 : 0 }}>
                <div style={{
                  background: `linear-gradient(135deg, ${svc.color}, ${svc.color}CC)`,
                  borderRadius: 12,
                  padding: '3.5rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ fontSize: '5rem', marginBottom: '1.25rem' }}>{svc.emoji}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>{svc.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{svc.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div style={{ order: i % 2 === 1 ? 0 : 1 }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: '#1A3C5E', marginBottom: '1rem', lineHeight: 1.2 }}>{svc.title}</h2>
                <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: 1.8, marginBottom: '1.75rem' }}>{svc.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                  {svc.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: '#374151' }}>
                      <CheckCircle size={18} color="#C8922A" style={{ flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#C8922A', color: 'white', padding: '0.875rem 1.75rem', borderRadius: 4, fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none' }}>
                  Get Free Estimate <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section style={{ padding: '5rem 2rem', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Trusted Brands</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: '#1A3C5E', marginBottom: '1rem' }}>We Use Only Top-Grade Materials</h2>
          <p style={{ fontSize: '1rem', color: '#6B7280', maxWidth: 520, margin: '0 auto 3rem' }}>
            As a GAF Master Elite Contractor, we have access to the highest-quality roofing products backed by industry-leading warranties.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {['GAF', 'Owens Corning', 'CertainTeed', 'VELUX', 'IKO', 'Atlas Roofing'].map(brand => (
              <div key={brand} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '1.25rem 2rem', fontWeight: 700, color: '#374151', fontSize: '1rem', letterSpacing: '0.025em' }}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: '#1A3C5E' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Not Sure What Service You Need?</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>Our experts will assess your roof and recommend exactly what's needed — no upselling, just honest advice.</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#C8922A', color: 'white', padding: '1rem 2.5rem', borderRadius: 4, fontSize: '1rem', fontWeight: 700, textDecoration: 'none' }}>
            Schedule Free Inspection <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
