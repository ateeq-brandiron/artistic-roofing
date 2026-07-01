import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';

/* ── Standard white label pill ── */
function Pill({ text }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', background: '#fff', borderRadius: 100, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
      <img src="/img/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
      <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)', whiteSpace: 'nowrap' }}>{text}</span>
    </div>
  );
}

const commercial = [
  {
    img: '/img/services/commercial-repair.jpg',
    title: 'Commercial Roof Repairs',
    desc: 'We deliver prompt, reliable repair services for businesses facing storm damage, wear, or leaks. Our experienced team quickly addresses problem areas to protect your property and minimize disruption.',
  },
  {
    img: '/img/services/commercial-install.jpg',
    title: 'Commercial Roof Installation',
    desc: 'Our crews bring years of experience with metal roofing systems and low-slope applications, including modified bitumen, helping ensure your commercial property stays well protected with materials suited to Arizona conditions.',
  },
];

const residential = [
  { img: '/img/services/res-home-roofing.png', title: 'Home Roofing', desc: 'From installation to ongoing care, we specialize in residential roofing services for the Sierra Vista area. Whether you need roof installation, repairs, inspections, or maintenance, our energy-efficient systems are designed for Arizona\'s climate.' },
  { img: '/img/services/res-reroofing.png', title: 'Re-Roofing', desc: 'Whether your roof is aging or you\'re looking to upgrade, our re-roofing service is a seamless, professional solution that protects your property and enhances curb appeal.' },
  { img: '/img/services/res-roof-repair.png', title: 'Residential Roof Repair', desc: 'We handle everything from small fixes to comprehensive repair service that restores your roof\'s strength and integrity.' },
  { img: '/img/services/res-inspections.png', title: 'Roof Inspections', desc: 'Our experienced team provides thorough roof inspections to assess condition, identify wear or damage, and provide clear, actionable solutions to extend your roof\'s performance.' },
  { img: '/img/services/res-installation.jpg', title: 'Roof Installation & Replacement', desc: 'Whether you\'re building new or replacing an aging roof, our team installs durable systems using trusted manufacturers including Owens Corning, GAF, Westlake, and Eagle Roofing Products.' },
  { img: '/img/services/res-coatings.jpg', title: 'Roof Coatings & Restoration', desc: 'We provide Polyglass-certified coatings and repair systems for low-slope roofs, supporting long-term waterproofing, energy efficiency, and performance in Arizona\'s climate.' },
];

const gutterFeatures = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 8h20M4 14h14M4 20h8" stroke="#0080C6" strokeWidth="2" strokeLinecap="round"/><rect x="18" y="13" width="6" height="8" rx="1" stroke="#0080C6" strokeWidth="1.5"/></svg>,
    title: 'Custom Fit',
    desc: 'Fabricated on-site to match your roofline precisely.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4c0 0-7 7-7 13a7 7 0 0014 0C21 11 14 4 14 4z" stroke="#0080C6" strokeWidth="1.8" fill="rgba(0,128,198,0.08)"/><path d="M10 18c0 2.2 1.8 4 4 4" stroke="#0080C6" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: 'Manage Water Flow',
    desc: 'Proper slope alignment to direct water away from your foundation.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="10" cy="10" r="4" stroke="#0080C6" strokeWidth="1.8"/><circle cx="20" cy="10" r="4" stroke="#0080C6" strokeWidth="1.8"/><circle cx="10" cy="20" r="4" stroke="#0080C6" strokeWidth="1.8"/><circle cx="20" cy="20" r="4" stroke="#0080C6" strokeWidth="1.8"/></svg>,
    title: 'Multiple Colors',
    desc: 'Available in a wide range of colors to complement your home.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="10" width="20" height="14" rx="2" stroke="#0080C6" strokeWidth="1.8"/><path d="M8 10V8a6 6 0 0112 0v2" stroke="#0080C6" strokeWidth="1.8" strokeLinecap="round"/><circle cx="14" cy="17" r="2" fill="#0080C6"/></svg>,
    title: 'On-Site Fab',
    desc: 'Seamless gutters made fresh at your property for a perfect fit.',
  },
];

const credentials = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 3l10 4v8c0 6-10 12-10 12S6 21 6 15V7l10-4z" stroke="#0080C6" strokeWidth="1.8" fill="rgba(0,128,198,0.08)"/><path d="M11 16l3 3 7-7" stroke="#0080C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Fully Licensed',
    sub: 'AZTRB11-A12',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="5" y="7" width="22" height="18" rx="2" stroke="#0080C6" strokeWidth="1.8"/><path d="M5 13h22" stroke="#0080C6" strokeWidth="1.8"/><path d="M10 19h6M10 23h4" stroke="#0080C6" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: 'Bonded & Insured',
    sub: 'Complete Protection',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4l3 6 6.5 1-4.7 4.6 1.1 6.4L16 19l-5.9 3 1.1-6.4L6.5 11l6.5-1z" stroke="#0080C6" strokeWidth="1.8" fill="rgba(0,128,198,0.08)"/><circle cx="16" cy="27" r="2" fill="#0080C6"/><path d="M16 22v3" stroke="#0080C6" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: 'ARCA Member',
    sub: 'Arizona Roofing Contractors Association',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="14" r="9" stroke="#0080C6" strokeWidth="1.8"/><path d="M12 14l3 3 5-5" stroke="#0080C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 25l1.5-2M22 25l-1.5-2" stroke="#0080C6" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: 'BBB Accredited',
    sub: 'A+ Rating',
  },
];

const faqs = [
  { q: 'What roofing services does Artistic Roofing provide in Sierra Vista AZ?', a: 'Artistic Roofing Systems LLC provides complete roofing services to homeowners and light commercial properties in Sierra Vista and throughout Cochise County. Our services include new construction roofing, roof repairs, replacements, coatings, maintenance, and seamless 5" and 6" gutter installations. We work with shingles, tiles, metal, and flat roofs using materials from trusted manufacturers such as Tamko, GAF, Owens Corning, Westlake, and Eagle. Every project is completed by licensed professionals who are TRI Certified and trained in OSHA safety standards.' },
  { q: 'How does Artistic Roofing handle roof repairs and maintenance?', a: 'Our technicians address leaks, wind-blown shingles, and wear from aging materials or heavy rain. We recommend roof inspections every 3 to 4 years and annual checkups for roofs older than 15 years. Regular maintenance helps identify small issues early and extends the life of your roofing system.' },
  { q: 'Do you install gutters and patio covers in addition to roofing?', a: 'Yes. We offer seamless 5" and 6" gutter systems custom-fabricated on-site. Our gutters are available in multiple colors and styles and are designed to help manage water flow around your property effectively.' },
  { q: 'Why choose Artistic Roofing for roofing services in Sierra Vista AZ?', a: 'Artistic Roofing Systems has served Sierra Vista and Cochise County for over a decade. We are licensed, bonded, insured, TRI Certified, OSHA trained, and Polyglass certified. Our long-term team members are locals who take pride in serving their community with honest, dependable workmanship.' },
];

function CommercialCard({ s }) {
  return (
    <div style={{
      display: 'flex',
      height: 498,
      padding: '23px 33px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10,
      borderRadius: 10,
      border: '1px solid #D1EFFF',
      background: '#E8F8FF',
      boxSizing: 'border-box',
      flex: 1,
    }}>
      {/* Image */}
      <div style={{
        height: 232,
        alignSelf: 'stretch',
        borderRadius: 10,
        backgroundImage: `url(${s.img})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        flexShrink: 0,
      }} />
      {/* Title */}
      <h3 style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        fontSize: 22,
        lineHeight: '130%',
        color: '#000',
        margin: 0,
      }}>{s.title}</h3>
      {/* Description */}
      <p style={{
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '150%',
        color: 'var(--color-3)',
        margin: 0,
      }}>{s.desc}</p>
    </div>
  );
}

function ResidentialCard({ s }) {
  return (
    <div style={{
      display: 'flex',
      width: 403,
      height: 583,
      padding: '30px 17px',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 10,
      flexShrink: 0,
      borderRadius: 10,
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.00) 39.9%, rgba(0,0,0,0.75) 100%), url(${s.img})`,
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        width: 360,
        padding: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: 10,
        opacity: 0.98,
        background: 'rgba(253,255,255,0.95)',
        boxSizing: 'border-box',
      }}>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: 18,
          lineHeight: '130%',
          color: '#000',
          margin: 0,
        }}>{s.title}</h3>
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '150%',
          color: 'var(--color-3)',
          margin: 0,
        }}>{s.desc}</p>
      </div>
    </div>
  );
}

function GutterFeatureCard({ f }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: h ? 'rgba(0,128,198,0.25)' : 'rgba(255,255,255,0.07)',
        border: `1px solid ${h ? 'var(--blue)' : 'rgba(255,255,255,0.12)'}`,
        borderRadius: 12, padding: '28px 20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12,
        transform: h ? 'translateY(-4px)' : 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.3s ease', cursor: 'default' }}>
      <div style={{ width: 60, height: 60, background: h ? 'var(--blue)' : 'var(--shape-fill)', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        transform: h ? 'scale(1.1)' : 'scale(1)', transition: 'background 0.3s ease, transform 0.3s ease' }}>
        {f.icon}
      </div>
      <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 16, color: '#fff' }}>{f.title}</div>
      <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: '1.5' }}>{f.desc}</div>
    </div>
  );
}

function CredentialCard({ c }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: h ? 'var(--blue)' : 'var(--shape-fill)',
        border: `1px solid ${h ? 'var(--blue)' : 'var(--shape-stroke)'}`,
        borderRadius: 16, padding: '36px 20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14,
        transform: h ? 'translateY(-6px)' : 'none',
        boxShadow: h ? '0 20px 48px rgba(0,128,198,0.12)' : 'none',
        transition: 'background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', cursor: 'default' }}>
      <div style={{ width: 72, height: 72, background: h ? 'rgba(255,255,255,0.18)' : '#fff',
        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1.5px solid var(--shape-stroke)', flexShrink: 0,
        transform: h ? 'scale(1.1)' : 'scale(1)', transition: 'background 0.3s ease, transform 0.3s ease' }}>
        {c.icon}
      </div>
      <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 18, color: h ? '#fff' : '#000', transition: 'color 0.3s ease' }}>{c.title}</div>
      <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 14, color: h ? 'rgba(255,255,255,0.85)' : 'var(--color-3)', lineHeight: '1.5', transition: 'color 0.3s ease' }}>{c.sub}</div>
    </div>
  );
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: 819,
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.00) 36.6%, rgba(0,0,0,0.64) 71.27%, rgba(0,0,0,0.91) 100%), url(/img/source_DJI_0120.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '0 76px 72px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
          <img src="/img/contact/caret-right.svg" alt="" style={{ width: 8, height: 13 }} />
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>SERVICES</span>
        </div>

        <h1 style={{
          position: 'relative',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 60,
          lineHeight: '120%',
          color: '#fff',
          margin: '0 0 16px',
          maxWidth: 580,
        }}>
          Roofing Services in Sierra Vista AZ
        </h1>
      </section>

      {/* ── Ticker ── */}
      <ScrollBar />

      {/* ── Intro ── */}
      <section style={{ background: 'var(--shape-fill)', padding: '60px 76px', boxSizing: 'border-box' }}>
        <p style={{
          fontFamily: 'Outfit', fontWeight: 400, fontSize: 18,
          lineHeight: '160%', color: 'var(--color-3)',
          textAlign: 'center', maxWidth: 900, margin: '0 auto',
        }}>
          At{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Artistic Roofing</span>
          , we provide complete roofing and gutter solutions for homeowners and light commercial properties in{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Sierra Vista, Cochise County</span>
          , and surrounding Southeast Arizona communities. From new construction to roof repairs, coatings, seamless gutters, and patio covers, our services are designed to protect your property and add long-term value. Every project is handled with care, craftsmanship, and a commitment to quality results.
        </p>
      </section>

      {/* ── Commercial Roofing Services ── */}
      <section style={{
        background: '#fff',
        display: 'flex',
        padding: 75,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 50,
        boxSizing: 'border-box',
        width: '100%',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Pill text="SERVICES" />
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: 48, lineHeight: '120%', color: '#000', margin: 0, textAlign: 'center',
          }}>
            Commercial Roofing <span style={{ color: 'var(--blue)' }}>Services</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 28, width: '100%', maxWidth: 1290 }}>
          {commercial.map((s, i) => <CommercialCard key={i} s={s} />)}
        </div>
      </section>

      {/* ── Residential Roofing Services ── */}
      <section style={{
        background: 'var(--shape-fill)',
        display: 'flex',
        padding: 75,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 50,
        boxSizing: 'border-box',
        width: '100%',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Pill text="SERVICES" />
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: 48, lineHeight: '120%', color: '#000', margin: 0, textAlign: 'center',
          }}>
            Residential Roofing <span style={{ color: 'var(--blue)' }}>Services</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', maxWidth: 1290 }}>
          {residential.map((s, i) => <ResidentialCard key={i} s={s} />)}
        </div>
      </section>

      {/* ── Gutter Installation ── */}
      <section style={{ background: '#3a3a3a', padding: '75px 76px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto', display: 'flex', gap: 80, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Left */}
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Pill text="GUTTERS" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 48, lineHeight: '120%', color: '#fff', margin: 0 }}>
              Gutter Installation
            </h2>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 18, lineHeight: '160%', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              Our seamless 5" and 6" gutter systems fit to your property and home location site for precise installation. Gutters assist with water flow and drainage from your roof, reducing overflow around your home or business.
            </p>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 18, lineHeight: '160%', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              Available in multiple colors and styles, our gutters are both functional and visually complementary to your roofline.
            </p>
          </div>

          {/* Right — 2×2 feature grid */}
          <div style={{ flex: '1 1 320px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {gutterFeatures.map((f, i) => <GutterFeatureCard key={i} f={f} />)}
          </div>
        </div>
      </section>

      {/* ── Trust & Credentials ── */}
      <section style={{ background: '#fff', padding: '75px 76px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
            <Pill text="TRUST" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 48, lineHeight: '120%', color: '#000', margin: 0 }}>
              Trust & <span style={{ color: 'var(--blue)' }}>Credentials</span>
            </h2>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 18, lineHeight: '160%', color: 'var(--color-3)', maxWidth: 760, margin: 0 }}>
              Artistic Roofing Systems LLC is fully licensed (AZTRB45-A12), bonded, and insured. We are a proud member of the Arizona Roofing Contractors Association (ARCA), accredited by the Better Business Bureau, and active within the Sierra Vista Chamber of Commerce. Each project reflects our dedication to craftsmanship, integrity, and customer satisfaction.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {credentials.map((c, i) => <CredentialCard key={i} c={c} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 75px 75px', boxSizing: 'border-box' }}>
        <section style={{
          display: 'flex',
          width: 1290,
          padding: '80px 100px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 24,
          borderRadius: 10,
          background: `linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 100%), url(/img/source_20191114_091038.jpg) lightgray 50% / cover no-repeat`,
          boxSizing: 'border-box',
          textAlign: 'center',
        }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 48, lineHeight: '120%', color: '#fff', margin: 0 }}>
            Ready to Protect Your Property?
          </h2>
          <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 18, lineHeight: '160%', color: 'rgba(255,255,255,0.9)', maxWidth: 700, margin: 0 }}>
            From roofs and gutters to patios and exterior carpentry, Artistic delivers dependable results across Sierra Vista and Cochise County. Our licensed professionals bring honesty, precision, and attention to detail to every job.
          </p>
          <Link to="/contact" className="btn-blue" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '16px 32px', background: 'var(--blue)', borderRadius: 10,
            fontFamily: 'Outfit', fontWeight: 600, fontSize: 17, color: '#fff',
            letterSpacing: '0.02em', marginTop: 8,
          }}>
            Request Your Free Roofing Estimate
            <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
          </Link>
        </section>
      </div>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '75px 76px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto', display: 'flex', gap: 80, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Left */}
          <div style={{ flex: '0 0 340px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Pill text="FAQ" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 40, lineHeight: '120%', color: '#000', margin: 0 }}>
              Frequently Asked Questions About Roofing and Gutters
            </h2>
          </div>

          {/* Right — accordion */}
          <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} onClick={() => setOpenFaq(isOpen ? -1 : i)} style={{
                  background: 'var(--shape-fill)', borderRadius: 12,
                  padding: '24px 28px', cursor: 'pointer',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif', fontWeight: isOpen ? 700 : 400,
                      fontSize: 20, lineHeight: '135%', color: '#000', margin: 0, flex: 1,
                    }}>{faq.q}</h3>
                    <span style={{ fontSize: 28, color: 'var(--color-3)', lineHeight: 1, flexShrink: 0, marginTop: 2, userSelect: 'none' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                  {isOpen && (
                    <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 16, lineHeight: '170%', color: 'var(--color-3)', margin: '16px 0 0' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
