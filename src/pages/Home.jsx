import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock, CheckCircle, Star, Phone, ChevronRight } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '5,000+', label: 'Roofs Installed' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: 'A+', label: 'BBB Rating' },
];

const services = [
  {
    title: 'Roof Installation',
    desc: 'Expert installation of all roofing systems — shingle, tile, metal, and flat roofing designed to last decades.',
    icon: '🏠',
  },
  {
    title: 'Roof Replacement',
    desc: 'Complete tear-off and replacement with top-grade materials, giving your home a brand-new protective layer.',
    icon: '🔨',
  },
  {
    title: 'Roof Repair',
    desc: 'Fast, reliable repairs for leaks, missing shingles, storm damage, and all roofing emergencies.',
    icon: '🛠️',
  },
  {
    title: 'Storm Damage',
    desc: 'Insurance claim assistance and rapid restoration after hail, wind, or storm damage to your roof.',
    icon: '⛈️',
  },
  {
    title: 'Gutter Services',
    desc: 'Complete gutter installation, cleaning, and repair to protect your home from water damage.',
    icon: '💧',
  },
  {
    title: 'Skylight Installation',
    desc: 'Bring natural light into your home with professionally installed and sealed skylights.',
    icon: '☀️',
  },
];

const testimonials = [
  {
    name: 'Maria Rodriguez',
    location: 'San Antonio, TX',
    rating: 5,
    text: 'Artistic Roofing replaced our entire roof after the hailstorm. The team was professional, clean, and finished in one day. Couldn\'t be happier!',
  },
  {
    name: 'James Thompson',
    location: 'Austin, TX',
    rating: 5,
    text: 'I\'ve used them twice now — once for installation and once for repairs. Always on time, fair pricing, and exceptional craftsmanship.',
  },
  {
    name: 'Sandra Lee',
    location: 'San Antonio, TX',
    rating: 5,
    text: 'They helped navigate the entire insurance claim process. Took the stress off our shoulders completely. Highly recommend!',
  },
];

const whyUs = [
  'GAF Master Elite Certified Contractor',
  'Licensed, Bonded & Fully Insured',
  'Lifetime Workmanship Warranty',
  'Free Comprehensive Roof Inspection',
  'Insurance Claim Specialists',
  'Locally Owned & Operated Since 2005',
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0F2741 0%, #1A3C5E 50%, #0D2235 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Background pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }} />

        {/* Decorative shape */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '45%',
          background: 'rgba(200, 146, 42, 0.07)',
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }} />

        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '8rem 2rem 6rem', width: '100%' }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(200, 146, 42, 0.15)',
              border: '1px solid rgba(200, 146, 42, 0.3)',
              borderRadius: 100,
              padding: '0.375rem 1rem',
              marginBottom: '2rem',
            }}>
              <Award size={14} color="#C8922A" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#C8922A', letterSpacing: '0.08em' }}>GAF MASTER ELITE CERTIFIED</span>
            </div>

            <h1 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              Your Roof,{' '}
              <span style={{ color: '#C8922A', fontStyle: 'italic' }}>Our Craft.</span>
              <br />Built to Last.
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
              maxWidth: 560,
            }}>
              Artistic Roofing delivers premium roofing solutions with 20+ years of expertise. From installation to repair, we protect what matters most — your home and family.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: '#C8922A', color: 'white',
                  padding: '1rem 2rem', borderRadius: 4,
                  fontSize: '1rem', fontWeight: 600,
                  textDecoration: 'none', letterSpacing: '0.025em',
                }}
              >
                Get Free Estimate <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+15551234567"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'transparent', color: 'white',
                  padding: '1rem 2rem', borderRadius: 4,
                  fontSize: '1rem', fontWeight: 600,
                  textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)',
                }}
              >
                <Phone size={18} /> (555) 123-4567
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {['Licensed & Insured', 'Lifetime Warranty', 'Free Inspection'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#C8922A" />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: '1.75rem 1rem',
                  textAlign: 'center',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#C8922A', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.375rem', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>What We Do</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1A3C5E', marginBottom: '1rem' }}>Comprehensive Roofing Services</h2>
            <p style={{ fontSize: '1.0625rem', color: '#6B7280', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              From full replacements to emergency repairs, we handle every roofing need with precision and care.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  background: 'white',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,60,94,0.12)'; e.currentTarget.style.borderColor = '#C8922A'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E5E7EB'; }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, color: '#1A3C5E', marginBottom: '0.625rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>
                <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600, color: '#C8922A', textDecoration: 'none' }}>
                  Learn more <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1A3C5E', color: 'white', padding: '1rem 2rem', borderRadius: 4, fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '6rem 2rem', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Image placeholder / visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, #1A3C5E, #2A5A8C)',
              borderRadius: 12,
              height: 480,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 0h30v30H0V0zm30 30h30v30H30V30z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
              <div style={{ position: 'relative', textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🏠</div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', fontWeight: 500 }}>Master Elite Certified</p>
                <p style={{ color: '#C8922A', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', marginTop: '0.5rem' }}>ONLY TOP 3% OF ROOFERS</p>
              </div>
            </div>
            <div style={{
              position: 'absolute',
              bottom: -24,
              right: -24,
              background: '#C8922A',
              borderRadius: 8,
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(200,146,42,0.3)',
            }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginTop: '0.25rem' }}>Years of Trust</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Why Choose Us</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1A3C5E', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              The Roofing Experts <em>You Can Trust</em>
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: 1.75, marginBottom: '2rem' }}>
              With two decades of experience in the roofing industry, we've built our reputation on quality craftsmanship, transparent communication, and lasting relationships with our clients.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
              {whyUs.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={20} color="#C8922A" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1rem', color: '#374151', fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1A3C5E', color: 'white', padding: '1rem 2rem', borderRadius: 4, fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
              About Our Company <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section style={{ padding: '6rem 2rem', background: '#1A3C5E' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>How It Works</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Our Simple 4-Step Process</h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto' }}>
              We make the roofing process easy and transparent from start to finish.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Free Inspection', desc: 'We assess your roof thoroughly at no cost to you.' },
              { step: '02', title: 'Detailed Quote', desc: 'Receive a transparent, itemized estimate with no surprises.' },
              { step: '03', title: 'Expert Installation', desc: 'Our certified crew completes the job efficiently and cleanly.' },
              { step: '04', title: 'Final Walkthrough', desc: 'We inspect together and ensure your complete satisfaction.' },
            ].map((p, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{
                  width: 72, height: 72,
                  background: 'rgba(200,146,42,0.15)',
                  border: '2px solid rgba(200,146,42,0.4)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, color: '#C8922A' }}>{p.step}</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '0.625rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/process" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '2px solid rgba(200,146,42,0.6)', color: '#C8922A', padding: '1rem 2rem', borderRadius: 4, fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
              Learn More About Our Process <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Customer Reviews</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1A3C5E' }}>What Our Clients Say</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ padding: '2rem', background: '#F9FAFB', borderRadius: 8, border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="#C8922A" color="#C8922A" />
                  ))}
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#374151', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.text}"</p>
                <div>
                  <div style={{ fontWeight: 700, color: '#1A3C5E', fontSize: '0.9375rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8125rem', color: '#9CA3AF', marginTop: '0.125rem' }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/testimonials" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#1A3C5E', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
              Read All Reviews <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, #C8922A 0%, #B07820 100%)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>
            Ready to Protect Your Home?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Get your free, no-obligation roof inspection today. Our certified experts will assess your roof and provide honest recommendations.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#C8922A', padding: '1rem 2rem', borderRadius: 4, fontSize: '1rem', fontWeight: 700, textDecoration: 'none' }}>
              Schedule Free Inspection <ArrowRight size={18} />
            </Link>
            <a href="tel:+15551234567" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'white', padding: '1rem 2rem', borderRadius: 4, fontSize: '1rem', fontWeight: 600, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
