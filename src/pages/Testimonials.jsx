import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Maria Rodriguez',
    location: 'San Antonio, TX',
    service: 'Full Roof Replacement',
    date: 'March 2025',
    rating: 5,
    text: 'Artistic Roofing replaced our entire roof after the March hailstorm and they were absolutely incredible. The crew arrived on time, protected all my landscaping, and completed the whole job in one day. The roof looks amazing and the cleanup was perfect — you couldn\'t tell anyone had been there except for the beautiful new roof.',
  },
  {
    name: 'James Thompson',
    location: 'Austin, TX',
    service: 'Roof Repair',
    date: 'January 2025',
    rating: 5,
    text: 'I\'ve used Artistic Roofing twice now — once for a new installation and once for repairs. Both times, they were professional, on-time, and the pricing was exactly what they quoted. The quality of their work is exceptional. I recommend them to everyone.',
  },
  {
    name: 'Sandra Lee',
    location: 'San Antonio, TX',
    service: 'Storm Damage Repair',
    date: 'February 2025',
    rating: 5,
    text: 'After the storm, I was overwhelmed with the damage and didn\'t know where to start. Artistic Roofing walked me through everything — the inspection, the insurance claim, even dealt with the adjuster directly. They took the entire burden off my shoulders. I could not have done it without them.',
  },
  {
    name: 'Robert Nguyen',
    location: 'New Braunfels, TX',
    service: 'Roof Installation',
    date: 'November 2024',
    rating: 5,
    text: 'Building our new home, we wanted the best roofing contractor available. Artistic Roofing was recommended by our builder and they delivered on every promise. The attention to detail, the clean worksite, and the quality of the GAF shingles — everything exceeded our expectations.',
  },
  {
    name: 'Patricia Williams',
    location: 'Boerne, TX',
    service: 'Roof Replacement',
    date: 'October 2024',
    rating: 5,
    text: 'The professionalism of this company is second to none. From the initial inspection to the final walkthrough, every person I dealt with was knowledgeable, respectful, and genuinely cared about doing the job right. My 30-year-old roof finally got the upgrade it deserved!',
  },
  {
    name: 'Kevin Martinez',
    location: 'San Antonio, TX',
    service: 'Gutter Installation',
    date: 'September 2024',
    rating: 5,
    text: 'Had Artistic Roofing install new seamless gutters with leaf guards throughout the house. The installation was clean, fast, and the product is outstanding. No more clogged gutters and water damage issues. Worth every penny.',
  },
  {
    name: 'Angela Foster',
    location: 'Seguin, TX',
    service: 'Emergency Roof Repair',
    date: 'August 2024',
    rating: 5,
    text: 'A tree limb hit our roof during a storm and we had an active leak. I called Artistic Roofing at 9pm and they had someone out to tarp it within 2 hours. The full repair was done the next morning. That kind of responsiveness and care for the customer is rare.',
  },
  {
    name: 'David Hernandez',
    location: 'San Antonio, TX',
    service: 'Skylight Installation',
    date: 'July 2024',
    rating: 5,
    text: 'Finally got the skylights I\'ve been wanting for years. Artistic Roofing installed three VELUX skylights and the difference in our living room is night and day. The installation was immaculate — no mess, no leaks, perfect finish. Highly recommend their skylight work!',
  },
  {
    name: 'Carol Bennett',
    location: 'Leon Valley, TX',
    service: 'Roof Replacement',
    date: 'June 2024',
    rating: 5,
    text: 'I got three quotes and Artistic Roofing wasn\'t the cheapest, but they were the most thorough and transparent. They explained exactly why my roof needed replacement rather than repair, showed me photos, and gave me a line-by-line quote. That honesty won my business and I\'m so glad I chose them.',
  },
];

const platforms = [
  { name: 'Google Reviews', rating: '4.9', count: '312+' },
  { name: 'BBB Rating', rating: 'A+', count: 'Accredited' },
  { name: 'Houzz', rating: '5.0', count: '87+' },
  { name: 'Angi', rating: '4.8', count: '150+' },
];

export default function Testimonials() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F2741, #1A3C5E)', padding: '10rem 2rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Client Reviews</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            What Our Customers{' '}
            <em style={{ color: '#C8922A' }}>Say About Us</em>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: 580, lineHeight: 1.75 }}>
            We let our work and our clients speak for themselves. Read real reviews from real homeowners throughout Texas.
          </p>
        </div>
      </section>

      {/* Platform ratings */}
      <section style={{ padding: '3rem 2rem', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {platforms.map((p, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 8, padding: '1.75rem', border: '1px solid #E5E7EB', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700, color: '#C8922A', lineHeight: 1 }}>{p.rating}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem', margin: '0.5rem 0' }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="#C8922A" color="#C8922A" />
                  ))}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>{p.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '0.25rem' }}>{p.count} reviews</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <Quote size={28} color="rgba(200,146,42,0.3)" style={{ marginBottom: '1rem' }} />
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={15} fill="#C8922A" color="#C8922A" />
                  ))}
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#374151', lineHeight: 1.75, fontStyle: 'italic', flexGrow: 1, marginBottom: '1.5rem' }}>
                  "{r.text}"
                </p>
                <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1A3C5E', fontSize: '0.9375rem' }}>{r.name}</div>
                    <div style={{ fontSize: '0.8125rem', color: '#9CA3AF', marginTop: '0.125rem' }}>{r.location}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#C8922A', background: 'rgba(200,146,42,0.1)', padding: '0.25rem 0.625rem', borderRadius: 100 }}>{r.service}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '0.375rem' }}>{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, #C8922A, #B07820)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Join Our Growing Family of Happy Homeowners
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem' }}>
            Experience the Artistic Roofing difference yourself. Schedule your free inspection today.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#C8922A', padding: '1rem 2.5rem', borderRadius: 4, fontSize: '1rem', fontWeight: 700, textDecoration: 'none' }}>
            Get Free Estimate <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
