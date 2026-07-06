import { useState, useEffect } from 'react';
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
    img: '/img/services/commercial-install.jpg',
    title: 'Commercial Roof Repairs',
    desc: 'We deliver prompt, reliable repair services for businesses facing storm damage, wear, or leaks. Our experienced team quickly addresses problem areas to protect your property and minimize disruption.',
  },
  {
    img: '/img/services/commercial-repair.jpg',
    title: 'Commercial Roof Installation',
    desc: 'Our crews bring years of experience with metal roofing systems and low-slope applications, including modified bitumen, helping ensure your commercial property stays well protected with materials suited to Arizona conditions.',
  },
];

const residential = [
  { img: '/img/services/res-coatings.jpg', title: 'Home Roofing', desc: 'From installation to ongoing care, we provide complete roofing services for homeowners. Our team specializes in roof installation, repairs, inspections, maintenance, and energy-efficient options designed for Arizona\'s climate.' },
  { img: '/img/services/res-inspections.png', title: 'Re-Roofing', desc: 'Whether your roof is aging or you\'re adding on to your home, our re-roofing services provide a seamless, professional upgrade that protects your property and enhances curb appeal.' },
  { img: '/img/services/res-installation.jpg', title: 'Residential Roof Repair', desc: 'We handle everything from small leaks to storm damage with responsive service that restores your roof\'s strength and integrity.' },
  { img: '/img/services/res-home-roofing.png', title: 'Roof Inspections', desc: 'Our inspections cover shingles, tile, and flashing to identify wear or damage before it becomes a costly problem.' },
  { img: '/img/services/res-card5.png', title: 'Roof Installation & Replacement', desc: 'Whether you\'re building new or replacing an old roof, we bring the right materials and expertise to deliver dependable results. From asphalt shingles and concrete tile to metal roofing systems built for long-term durability and energy efficiency in Arizona\'s climate, our team ensures every installation meets strict quality standards. We work with trusted manufacturers including Tamko, Owens Corning, GAF, Westlake, and Eagle Roofing Products.' },
  { img: '/img/services/res-card6.png', title: 'Roof Coatings & Restoration', desc: 'We provide coatings and repair solutions for low-slope roofs using professional-grade Polyglass products. Roof coatings serve as a maintenance solution for modified bitumen and compatible flat roofing systems, helping extend roof life and maintain waterproofing. These applications protect against heat, UV exposure, and weather while supporting long-term performance in Arizona\'s climate.' },
];

const gutterFeatures = [
  { icon: '/img/gutters/icon-onsite.svg',      title: 'Custom Fit' },
  { icon: '/img/gutters/icon-colors.svg',      title: 'Manage Water Flow' },
  { icon: '/img/gutters/icon-water-flow.svg',  title: 'Multiple Colors' },
  { icon: '/img/gutters/icon-custom-fit.svg',  title: 'On-Site Fab' },
];

const credentials = [
  { icon: '/img/trust/icon-bbb.svg',      title: 'Fully Licensed',    sub: '#273695 K-42' },
  { icon: '/img/trust/icon-arca.svg',     title: 'Bonded & Insured',  sub: 'Complete Protection' },
  { icon: '/img/trust/icon-bonded.svg',   title: 'ARCA Member',       sub: 'Arizona Roofing Contractors Association' },
  { icon: '/img/trust/icon-licensed.svg', title: 'BBB Accredited',    sub: 'A+ Integrity' },
];

const faqs = [
  { q: 'What roofing services does Artistic Roofing provide in Sierra Vista, AZ?', a: 'Artistic Roofing Systems LLC provides complete roofing services to homeowners and light commercial properties in Sierra Vista and throughout Cochise County. Our services include new construction roofing, roof repairs, replacements, coatings, maintenance, and seamless 5" and 6" gutter installations. We work with shingles, tiles, metal, and flat roofs using materials from trusted manufacturers such as Tamko, GAF, Owens Corning, Westlake, and Eagle. Every project is completed by licensed professionals who are TRI Certified and trained in OSHA safety standards.' },
  { q: 'How does Artistic Roofing handle roof repairs and maintenance?', a: 'Our technicians address leaks, wind-blown shingles, and wear from aging materials or heavy rain. We recommend roof inspections every 3 to 4 years and annual checkups for roofs older than 15 years. Regular maintenance helps identify small issues early and extends the life of your roofing system.' },
  { q: 'Do you install gutters and patio covers in addition to roofing?', a: 'Yes. We offer seamless 5" and 6" gutter systems custom-fabricated on-site. Our gutters are available in multiple colors and styles and are designed to help manage water flow around your property effectively.' },
  { q: 'Why choose Artistic Roofing for roofing services in Sierra Vista, AZ?', a: 'Artistic Roofing Systems has served Sierra Vista and Cochise County for over a decade. We are licensed, bonded, insured, TRI Certified, OSHA trained, and Polyglass certified. Our long-term team members are locals who take pride in serving their community with honest, dependable workmanship.' },
];

function CommercialCard({ s }) {
  return (
    <div className="card-hover" style={{
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
        fontSize: 32,
        lineHeight: 'normal',
        color: '#000',
        margin: 0,
      }}>{s.title}</h3>
      {/* Description */}
      <p style={{
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 300,
        fontSize: 20,
        lineHeight: '120%',
        color: '#464646',
        margin: 0,
        width: 508,
      }}>{s.desc}</p>
    </div>
  );
}

function ResidentialCard({ s }) {
  return (
    <div className="card-hover img-zoom" style={{
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
  return (
    <div style={{
      display: 'flex',
      width: 273,
      height: 162,
      padding: '25px 81px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      flexShrink: 0,
      borderRadius: 10,
      border: '1px solid #0080C6',
      background: '#E8F8FF',
      boxSizing: 'border-box',
    }}>
      <img src={f.icon} alt="" style={{ width: 40, height: 40, objectFit: 'contain' }} />
      <span style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: '120%',
        color: '#000',
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}>{f.title}</span>
    </div>
  );
}

function CredentialCard({ c }) {
  return (
    <div style={{
      display: 'flex',
      width: 206,
      flexDirection: 'column',
      alignItems: 'center',
      gap: 30,
      flexShrink: 0,
    }}>
      {/* Outer dotted ring → inner filled circle → icon */}
      <div style={{
        width: 180,
        height: 180,
        borderRadius: '50%',
        border: '1.5px dashed #0080C6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <div style={{
          width: 148,
          height: 148,
          borderRadius: '50%',
          background: '#D1EFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src={c.icon} alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />
        </div>
      </div>
      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: 20,
          lineHeight: '120%',
          color: '#000',
          textAlign: 'center',
        }}>{c.title}</span>
        <span style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '130%',
          color: 'var(--color-3)',
          textAlign: 'center',
        }}>{c.sub}</span>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const els = document.querySelectorAll('.sr-section');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('sr-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: 819,
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.00) 36.6%, rgba(0,0,0,0.50) 71.27%, rgba(0,0,0,0.75) 100%), url(/img/source_DJI_0120.jpg)',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, alignSelf: 'stretch', marginBottom: 16 }}>
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
          Roofing Services in Sierra Vista, AZ
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
      <section className="sr-section" style={{
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
      <section className="sr-section" style={{
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 403px)', gap: 40 }}>
          {residential.map((s, i) => <ResidentialCard key={i} s={s} />)}
        </div>
      </section>

      {/* ── Gutter Installation ── */}
      <section style={{
        background: '#3a3a3a',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{
          display: 'flex',
          maxWidth: 1440,
          margin: '0 auto',
          padding: 75,
          justifyContent: 'space-between',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}>
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 30, maxWidth: 560 }}>
            <Pill text="SERVICES" />
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              fontSize: 48,
              lineHeight: '120%',
              color: '#fff',
              margin: 0,
              alignSelf: 'stretch',
            }}>
              Gutter Installation
            </h2>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              fontSize: 20,
              lineHeight: '120%',
              color: '#E8F8FF',
              margin: 0,
              alignSelf: 'stretch',
            }}>
              Our seamless 5" and 6" gutter systems are custom-fit to your property and fabricated on-site for precise installation. Gutters assist with proper water flow and drainage from your roof, helping reduce overflow around your home or business.
            </p>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              fontSize: 20,
              lineHeight: '120%',
              color: '#E8F8FF',
              margin: 0,
              alignSelf: 'stretch',
            }}>
              Available in multiple colors and styles, our gutters are both functional and visually complementary to your roofline.
            </p>
          </div>

          {/* Right — 2×2 cards */}
          <div style={{
            display: 'flex',
            width: 581,
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: '28px 35px',
            flexShrink: 0,
            flexWrap: 'wrap',
          }}>
            {gutterFeatures.map((f, i) => <GutterFeatureCard key={i} f={f} />)}
          </div>
        </div>
      </section>

      {/* ── Trust & Credentials ── */}
      <section style={{ background: '#fff', width: '100%', boxSizing: 'border-box' }}>
        <div style={{
          display: 'flex',
          maxWidth: 1440,
          margin: '0 auto',
          padding: '75px 100px',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 30,
          boxSizing: 'border-box',
        }}>
          <Pill text="TRUST" />
          <h2 style={{
            width: 608,
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            fontSize: 48,
            lineHeight: '120%',
            color: '#000',
            textAlign: 'center',
            margin: 0,
          }}>
            Trust & <span style={{ color: 'var(--blue)' }}>Credentials</span>
          </h2>
          <p style={{
            width: 816,
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 300,
            fontSize: 20,
            lineHeight: '120%',
            color: '#464646',
            textAlign: 'center',
            margin: 0,
          }}>
            Artistic Roofing Systems LLC is fully licensed (#273695 K-42), bonded, and insured. We are a proud member of the Arizona Roofing Contractors Association (ARCA), accredited by the Better Business Bureau, and active within the Sierra Vista Chamber of Commerce. Every project reflects our dedication to craftsmanship, integrity, and customer satisfaction.
          </p>

          {/* Icons row */}
          <div style={{
            display: 'flex',
            width: '100%',
            maxWidth: 1440,
            padding: '50px 0',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 100,
          }}>
            {credentials.map((c, i) => <CredentialCard key={i} c={c} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ width: '100%', padding: '0 75px 75px', boxSizing: 'border-box' }}>
        <section style={{
          display: 'flex',
          maxWidth: 1440,
          margin: '0 auto',
          padding: '75px 100px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 24,
          borderRadius: 10,
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 100%), url(/img/source_20191114_091038.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
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
            letterSpacing: '0.02em', marginTop: 8, textDecoration: 'none',
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
          <div style={{ flex: '0 0 340px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
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
