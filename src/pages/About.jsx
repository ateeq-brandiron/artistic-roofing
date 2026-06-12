import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Heart } from 'lucide-react';

const team = [
  { name: 'Carlos Mendez', role: 'Founder & CEO', bio: '20+ years in roofing. Started as an apprentice and built Artistic Roofing from the ground up with a vision of quality and integrity.' },
  { name: 'Ana Martinez', role: 'Project Manager', bio: 'Ensures every project runs on time and on budget. Ana coordinates our crews and keeps clients informed every step of the way.' },
  { name: 'David Chen', role: 'Lead Installer', bio: 'GAF-certified installer with 15 years of hands-on experience. David leads our installation crews with precision and care.' },
  { name: 'Lisa Torres', role: 'Customer Relations', bio: 'Your first point of contact. Lisa makes the entire roofing process simple, stress-free, and clear from estimate to completion.' },
];

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards of craftsmanship on every single project, regardless of size.' },
  { icon: Heart, title: 'Integrity', desc: 'Honest pricing, transparent communication, and doing the right thing — even when no one is watching.' },
  { icon: Users, title: 'Community', desc: 'We are proud members of this community and treat every home as if it were our own family\'s.' },
  { icon: CheckCircle, title: 'Reliability', desc: 'We show up when we say we will, finish when we promise, and stand behind every project with our warranty.' },
];

const milestones = [
  { year: '2005', title: 'Founded', desc: 'Carlos Mendez founds Artistic Roofing with 3 employees and one truck.' },
  { year: '2010', title: 'GAF Certification', desc: 'Earned GAF Master Elite status — top 3% of contractors nationwide.' },
  { year: '2015', title: '1,000th Roof', desc: 'Completed our 1,000th roof installation, growing to 25 team members.' },
  { year: '2020', title: 'Expanded Services', desc: 'Launched gutter and skylight divisions to serve more homeowner needs.' },
  { year: '2025', title: '5,000 Roofs', desc: 'Celebrated 5,000+ completed roofing projects with a 100% satisfaction record.' },
];

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F2741, #1A3C5E)', padding: '10rem 2rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Our Story</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Built on Trust,<br />Driven by <em style={{ color: '#C8922A' }}>Excellence</em>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: 600, lineHeight: 1.75 }}>
            For over 20 years, Artistic Roofing has been protecting homes and families throughout Texas with premium craftsmanship and unwavering integrity.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Who We Are</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1A3C5E', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              More Than Just a Roofing Company
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Artistic Roofing was founded in 2005 by Carlos Mendez with a simple belief: every homeowner deserves a roof built with pride, precision, and the finest materials available.
            </p>
            <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              What started as a small, family-run operation has grown into one of the most trusted roofing companies in Texas — but our values haven't changed. We still treat every home as if it were our own.
            </p>
            <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: 1.8, marginBottom: '2rem' }}>
              As a GAF Master Elite Certified Contractor — a designation held by only the top 3% of roofing contractors in North America — we have access to the best materials and manufacturer-backed warranties in the industry.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#C8922A', color: 'white', padding: '1rem 2rem', borderRadius: 4, fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { value: '20+', label: 'Years in Business' },
              { value: '5,000+', label: 'Roofs Completed' },
              { value: '50+', label: 'Team Members' },
              { value: 'A+', label: 'BBB Rating' },
            ].map((s, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? '#1A3C5E' : '#F9FAFB', borderRadius: 8, padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.75rem', fontWeight: 700, color: i % 2 === 0 ? '#C8922A' : '#1A3C5E', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 500, color: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : '#6B7280', marginTop: '0.5rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 2rem', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Our Values</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1A3C5E' }}>The Principles We Live By</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 8, padding: '2.5rem 2rem', border: '1px solid #E5E7EB', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, background: 'rgba(26,60,94,0.07)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <v.icon size={28} color="#1A3C5E" />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, color: '#1A3C5E', marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Our Journey</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1A3C5E' }}>20 Years of Milestones</h2>
          </div>
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid #E5E7EB' }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '3rem' }}>
                <div style={{ position: 'absolute', left: -41, top: 4, width: 20, height: 20, background: '#C8922A', borderRadius: '50%', border: '3px solid white', boxShadow: '0 0 0 2px #C8922A' }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#C8922A', letterSpacing: '0.1em' }}>{m.year}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, color: '#1A3C5E', margin: '0.375rem 0 0.5rem' }}>{m.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '6rem 2rem', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>The People</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1A3C5E' }}>Meet Our Leadership Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {team.map((member, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px solid #E5E7EB' }}>
                <div style={{ height: 200, background: 'linear-gradient(135deg, #1A3C5E, #2A5A8C)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 80, height: 80, background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#C8922A' }}>{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#1A3C5E', marginBottom: '0.25rem' }}>{member.name}</h3>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#C8922A', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>{member.role}</p>
                  <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, #C8922A, #B07820)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Let's Work Together</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem' }}>Ready to experience the Artistic Roofing difference? Schedule your free inspection today.</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#C8922A', padding: '1rem 2.5rem', borderRadius: 4, fontSize: '1rem', fontWeight: 700, textDecoration: 'none' }}>
            Schedule Free Inspection <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
