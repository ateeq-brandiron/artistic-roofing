import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: 'var(--shape-fill)', border: '1px solid var(--shape-stroke)', borderRadius: 100 }}>
      <img src="/img/vector-stroke-5.svg" alt="" style={{ width: 13, height: 13 }} />
      <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)', whiteSpace: 'nowrap' }}>{text}</span>
    </div>
  );
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="10" cy="10" r="10" fill="var(--blue)" opacity="0.12" />
      <path d="M6 10l3 3 5-5" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const commercial = [
  {
    img: '/img/frame-2147223416.png',
    title: 'Commercial Roof Repairs',
    desc: 'We deliver prompt, reliable repair services for businesses facing storm damage, wear, or leaks. Our experienced team quickly addresses problem areas to protect your property and minimize disruption.',
  },
  {
    img: '/img/frame-2147223417.png',
    title: 'Commercial Roof Installation',
    desc: 'Our clients bring years of experience with metal roofing systems and low-slope applications, including modified bitumen, helping ensure your commercial property stays well protected with materials suited to Arizona conditions.',
  },
];

const residential = [
  { img: '/img/frame-2147223409.png', title: 'Home Roofing', desc: 'From installation to ongoing care, we specialize in residential roofing services for the Sierra Vista area. Whether you need roof installation, repairs, inspections, or maintenance, our energy-efficient systems are designed for Arizona\'s climate.' },
  { img: '/img/frame-2147223415.png', title: 'Re-roofing', desc: 'Whether your roof is aging or you\'re looking to upgrade, our re-roofing service is a seamless, professional solution that protects your property and enhances curb appeal.' },
  { img: '/img/frame-2147223416.png', title: 'Residential Roof Repair', desc: 'We handle everything from small fixes to comprehensive repair service that restores your roof\'s strength and integrity.' },
  { img: '/img/frame-2147223417.png', title: 'Roof Installation & Replacement', desc: 'Whether you\'re building new or replacing an aging roof, our team installs durable systems using trusted manufacturers including Owens Corning, GAF, Westlake, and Eagle Roofing Products.' },
  { img: '/img/frame-2147223418.png', title: 'Roof Inspections', desc: 'Our experienced team provides thorough roof inspections to assess condition, identify wear or damage, and provide clear, actionable solutions to extend your roof\'s performance.' },
  { img: '/img/frame-2147223409.png', title: 'Roof Coatings & Restoration', desc: 'We provide Polyglass-certified coatings and repair systems for low-slope roofs, supporting long-term waterproofing, energy efficiency, and performance in Arizona\'s climate.' },
];

const gutterFeatures = [
  { icon: '📐', title: 'Custom Fit', desc: 'Fabricated on-site to match your roofline precisely.' },
  { icon: '💧', title: 'Manage Water Flow', desc: 'Proper slope alignment to direct water away from your foundation.' },
  { icon: '🎨', title: 'Multiple Colors', desc: 'Available in a wide range of colors to complement your home.' },
  { icon: '🏭', title: 'On-Site Fab', desc: 'Seamless gutters made fresh at your property for a perfect fit.' },
];

const credentials = [
  { title: 'Fully Licensed', sub: 'AZTRB11-A12', icon: '🛡️' },
  { title: 'Bonded & Insured', sub: 'Complete Protection', icon: '📋' },
  { title: 'ARCA Member', sub: 'Arizona Roofing Contractors Association', icon: '🏛️' },
  { title: 'BBB Accredited', sub: 'A+ Rating', icon: '⭐' },
];

const faqs = [
  { q: 'What roofing services does Artistic Roofing provide in Sierra Vista AZ?', a: 'Artistic Roofing Systems LLC provides complete roofing services to homeowners and light commercial properties in Sierra Vista and throughout Cochise County. Our services include new construction roofing, roof repairs, replacements, coatings, maintenance, and seamless 5" and 6" gutter installations. We work with shingles, tiles, metal, and flat roofs using materials from trusted manufacturers such as Tamko, GAF, Owens Corning, Westlake, and Eagle. Every project is completed by licensed professionals who are TRI Certified and trained in OSHA safety standards.' },
  { q: 'How does Artistic Roofing handle roof repairs and maintenance?', a: 'Our technicians address leaks, wind-blown shingles, and wear from aging materials or heavy rain. We recommend roof inspections every 3 to 4 years and annual checkups for roofs older than 15 years. Regular maintenance helps identify small issues early and extends the life of your roofing system.' },
  { q: 'Do you install gutters and patio covers in addition to roofing?', a: 'Yes. We offer seamless 5" and 6" gutter systems custom-fabricated on-site. Our gutters are available in multiple colors and styles and are designed to help manage water flow around your property effectively.' },
  { q: 'Why choose Artistic Roofing for roofing services in Sierra Vista AZ?', a: 'Artistic Roofing Systems has served Sierra Vista and Cochise County for over a decade. We are licensed, bonded, insured, TRI Certified, OSHA trained, and Polyglass certified. Our long-term team members are locals who take pride in serving their community with honest, dependable workmanship.' },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 400, backgroundImage: 'url(/img/background.png)', backgroundSize: 'cover', backgroundPosition: '50% 40%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: 80 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', width: '100%', padding: '0 clamp(20px,5vw,76px) 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>▶</span>
            <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>SERVICES</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(30px,5vw,56px)', lineHeight: 1.15, color: '#fff', maxWidth: 580 }}>
            Roofing Services in Sierra Vista AZ
          </h1>
        </div>
      </section>

      <ScrollBar />

      {/* Intro */}
      <section style={{ background: 'var(--shape-fill)', padding: 'clamp(36px,5vw,64px) clamp(20px,5vw,76px)' }}>
        <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(15px,2vw,18px)', lineHeight: '1.75', color: 'var(--color-3)', maxWidth: 900, margin: '0 auto' }}>
          At{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Artistic Roofing</span>
          , we provide complete roofing and gutter solutions for homeowners and light commercial properties in{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Sierra Vista, Cochise County</span>
          , and surrounding Southeast Arizona communities. From new construction to roof repairs, coatings, seamless gutters, and patio covers, our services are designed to protect your property and add long-term value. Every project is handled with care, craftsmanship, and a commitment to quality results.
        </p>
      </section>

      {/* Commercial */}
      <section style={{ background: '#fff', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <SectionLabel text="SERVICES" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(26px,4vw,40px)', lineHeight: 1.2, marginTop: 14, color: '#000' }}>
              Commercial Roofing{' '}
              <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Services</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 28 }}>
            {commercial.map((s, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--shape-stroke)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                <div style={{ height: 220, backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: '50% 50%' }} />
                <div style={{ padding: '24px 24px 28px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 22, color: '#000', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 15, lineHeight: '1.7', color: 'var(--color-3)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential */}
      <section style={{ background: 'var(--shape-fill)', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <SectionLabel text="SERVICES" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(26px,4vw,40px)', lineHeight: 1.2, marginTop: 14, color: '#000' }}>
              Residential Roofing{' '}
              <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Services</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 24 }}>
            {residential.map((s, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--shape-stroke)', background: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                <div style={{ height: 180, backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: '50% 50%' }} />
                <div style={{ padding: '20px 20px 24px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 19, color: '#000', marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 14, lineHeight: '1.7', color: 'var(--color-3)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gutter Installation — dark section */}
      <section style={{ background: '#3a3a3a', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 48, alignItems: 'center' }}>
          {/* Left text */}
          <div>
            <SectionLabel text="GUTTERS" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(26px,4vw,40px)', lineHeight: 1.2, color: '#fff', marginTop: 16, marginBottom: 20 }}>
              Gutter Installation
            </h2>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 16, lineHeight: '1.75', color: 'rgba(255,255,255,0.78)', marginBottom: 12 }}>
              Our seamless 5" and 6" gutter systems fit to your property and home location site for precise installation. Gutters assist with water flow and drainage from your roof, reducing overflow around your home or business.
            </p>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 16, lineHeight: '1.75', color: 'rgba(255,255,255,0.78)' }}>
              Available in multiple colors and styles, our gutters are both functional and visually complementary to your roofline.
            </p>
          </div>

          {/* Right — 2×2 feature grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {gutterFeatures.map((f, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 }}>
                <div style={{ width: 52, height: 52, background: 'var(--shape-fill)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                  {f.icon}
                </div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 15, color: '#fff' }}>{f.title}</div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: '1.5' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section style={{ background: '#fff', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <SectionLabel text="TRUST" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(26px,4vw,40px)', lineHeight: 1.2, marginTop: 14, color: '#000' }}>
              Trust &{' '}
              <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Credentials</span>
            </h2>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 16, lineHeight: '1.7', color: 'var(--color-3)', maxWidth: 760, marginTop: 12 }}>
              Artistic Roofing Systems LLC is fully licensed, bonded, and insured. We are a proud member of the Arizona Roofing Contractors Association (ARCA), accredited by the Better Business Bureau, and active within the Sierra Vista Chamber of Commerce. Each project reflects our dedication to craftsmanship, integrity, and customer satisfaction.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 20 }}>
            {credentials.map((c, i) => (
              <div key={i} style={{ background: 'var(--shape-fill)', border: '1px solid var(--shape-stroke)', borderRadius: 16, padding: '32px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
                <div style={{ width: 64, height: 64, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, border: '1.5px solid var(--shape-stroke)', boxShadow: '0 4px 12px rgba(0,128,198,0.08)' }}>
                  {c.icon}
                </div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 18, color: '#000' }}>{c.title}</div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'var(--color-3)', lineHeight: '1.5' }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', backgroundImage: 'url(/img/frame-2147223464.png)', backgroundSize: 'cover', backgroundPosition: '50% 60%', padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,76px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.60)' }} />
        <div style={{ position: 'relative', maxWidth: 740, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(26px,4vw,46px)', lineHeight: 1.2, color: '#fff' }}>
            Ready to Protect Your Property?
          </h2>
          <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(15px,2vw,19px)', lineHeight: '1.75', color: 'rgba(255,255,255,0.88)' }}>
            From roofs and gutters to patios and exterior carpentry, Artistic delivers dependable results across Sierra Vista and Cochise County. Our licensed professionals bring honesty, precision, and attention to detail to every job.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 28px', background: 'var(--blue)', borderRadius: 10, fontFamily: 'Outfit', fontWeight: 600, fontSize: 17, color: '#fff' }}>
            Request Your Free Roofing Estimate
            <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 48, alignItems: 'start' }}>
          <div>
            <SectionLabel text="FAQ" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(26px,4vw,40px)', lineHeight: 1.2, color: '#000', marginTop: 16 }}>
              Frequently Asked Questions About Roofing and Gutters
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} onClick={() => setOpenFaq(isOpen ? -1 : i)} style={{ background: isOpen ? 'var(--shape-stroke)' : 'var(--shape-fill)', border: '1px solid var(--neutral-100)', borderRadius: 8, padding: '20px 24px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(16px,2vw,20px)', lineHeight: '1.4', color: 'var(--neutral-900)', flex: 1 }}>{faq.q}</h3>
                    <img src={isOpen ? '/img/heroicons-solid-minus.svg' : '/img/heroicons-solid-plus-2.svg'} alt="" style={{ width: 22, height: 22, flexShrink: 0 }} />
                  </div>
                  {isOpen && <p style={{ marginTop: 16, fontFamily: 'Outfit', fontWeight: 400, fontSize: 16, lineHeight: '1.7', color: 'var(--neutral-600)' }}>{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
