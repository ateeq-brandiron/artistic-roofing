import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';

/* ── Shared label pill ── */
function SectionLabel({ text, center }) {
  return (
    <div style={{ display: 'flex', justifyContent: center ? 'center' : 'flex-start' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '7px 16px',
        background: '#fff',
        borderRadius: 100,
        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
      }}>
        <img src="/img/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
        <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)', whiteSpace: 'nowrap' }}>
          {text}
        </span>
      </div>
    </div>
  );
}

/* ── Core value icons (inline SVG) ── */
function IntegrityIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" stroke="var(--blue)" strokeWidth="1.5" />
      <path d="M18 10l2.5 5 5.5.8-4 3.9 1 5.3L18 22.5l-5 2.5 1-5.3-4-3.9 5.5-.8z" fill="var(--blue)" opacity="0.8" />
    </svg>
  );
}
function CraftsmanshipIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" stroke="var(--blue)" strokeWidth="1.5" />
      <path d="M13 23l10-10M20 13l3 3M13 23l-3 3 3-3z" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />
      <path d="M23 13c0 0-1-2-3-2s-2 2-2 2" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function SafetyIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" stroke="var(--blue)" strokeWidth="1.5" />
      <path d="M18 11l7 3v5c0 4-7 8-7 8s-7-4-7-8v-5l7-3z" stroke="var(--blue)" strokeWidth="1.5" fill="rgba(0,128,198,0.08)" />
      <path d="M15 18l2 2 4-4" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CommunityIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" stroke="var(--blue)" strokeWidth="1.5" />
      <circle cx="18" cy="15" r="3" stroke="var(--blue)" strokeWidth="1.5" />
      <circle cx="12" cy="16" r="2.5" stroke="var(--blue)" strokeWidth="1.5" />
      <circle cx="24" cy="16" r="2.5" stroke="var(--blue)" strokeWidth="1.5" />
      <path d="M11 23c0-2.2 3.1-4 7-4s7 1.8 7 4" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 23c0-1.5 1.8-2.8 4-3" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 23c0-1.5-1.8-2.8-4-3" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function AccountabilityIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" stroke="var(--blue)" strokeWidth="1.5" />
      <path d="M12 18l4 4 8-8" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const coreValues = [
  { Icon: IntegrityIcon, title: 'Integrity', desc: 'We believe in doing the right thing, even when no one is watching.' },
  { Icon: CraftsmanshipIcon, title: 'Craftsmanship', desc: 'Every project is completed with precision, pride, and attention to detail.' },
  { Icon: SafetyIcon, title: 'Safety', desc: 'We follow OSHA-certified standards and ongoing training to keep every jobsite safe.' },
  { Icon: CommunityIcon, title: 'Community', desc: 'We live and work in Cochise County and take pride in serving our neighbors.' },
  { Icon: AccountabilityIcon, title: 'Accountability', desc: 'We stand behind our work and treat every home as if it were our own.' },
];

const certifications = [
  { text: 'TRI Certified Tile Installer', sub: 'Trained in the best techniques for long-term roof performance' },
  { text: 'Polyglass Roof Coating Certified', sub: 'Trained in advanced coating applications for low-slope and flat roofs' },
  { text: 'Tamko Preferred Contractor', sub: 'Recognized for quality installation and product expertise' },
  { text: 'Better Business Bureau (BBB) Accredited', sub: 'Demonstrating a commitment to trusted service and customer satisfaction' },
  { text: 'Chamber of Commerce Member', sub: 'Proud to be part of the local Sierra Vista business community' },
];

/* ── Checkmark icon ── */
function Check() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="11" cy="11" r="11" fill="var(--blue)" opacity="0.12" />
      <path d="M7 11l3 3 5-5" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: 819,
        backgroundImage: 'url(/img/Frame%202147223464%20(2).png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '0 clamp(20px,5vw,76px)',
        gap: 233,
        boxSizing: 'border-box',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />

        {/* Breadcrumb */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>▶</span>
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>ABOUT US</span>
        </div>

        <h1 style={{
          position: 'relative',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(40px, 5.5vw, 72px)',
          lineHeight: 1.1,
          color: '#fff',
          maxWidth: 700,
          margin: 0,
        }}>
          About Artistic Roofing – Roofing Contractors in Sierra Vista AZ
        </h1>
      </section>

      {/* ── Ticker ── */}
      <ScrollBar />

      {/* ── Intro paragraph ── */}
      <section style={{ background: '#fff', padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,76px)' }}>
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 'clamp(16px,2vw,20px)',
          lineHeight: '1.65', color: 'var(--color-3)', textAlign: 'center',
          maxWidth: 820, margin: '0 auto',
        }}>
          Artistic Roofing Systems LLC is a trusted roofing contractor in Sierra Vista AZ, proudly serving residential and light commercial customers throughout Cochise County and surrounding Southeast Arizona communities.
        </p>
      </section>

      {/* ── Our Story ── */}
      <section style={{ background: '#fdfeff', padding: 'clamp(40px,5vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{
          maxWidth: 1290, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(32px, 5vw, 72px)',
          alignItems: 'center',
        }}>
          {/* Left — stacked / overlapping images */}
          <div style={{ position: 'relative', minHeight: 380 }}>
            {/* Background image */}
            <div style={{
              borderRadius: 16,
              overflow: 'hidden',
              width: '88%',
              aspectRatio: '4/3',
              backgroundImage: 'url(/img/background.png)',
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
            }} />
            {/* Foreground image — offset */}
            <div style={{
              position: 'absolute',
              bottom: -24,
              right: 0,
              width: '55%',
              aspectRatio: '1',
              borderRadius: 12,
              overflow: 'hidden',
              border: '4px solid #fff',
              boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
              backgroundImage: 'url(/img/frame-2147223409.png)',
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
            }} />
            {/* Trust badge */}
            <div style={{
              position: 'absolute',
              bottom: 12,
              left: 12,
              background: 'rgba(36,80,121,0.92)',
              borderRadius: 10,
              padding: '10px 16px',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.5 6.5L23 10l-6 5.5 1.5 8L12 20l-6.5 3.5L7 15.5 1 10l7.5-1.5z" fill="rgba(255,255,255,0.25)" stroke="#fff" strokeWidth="1.5" />
                <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 11, color: '#fff', letterSpacing: '0.04em' }}>Trust and Quality</div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 10, color: 'rgba(255,255,255,0.75)' }}>Service You Can Depend On</div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <SectionLabel text="OUR STORY" />
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: '#000',
            }}>
              Our Story and Roots in{' '}
              <span style={{ color: 'var(--blue)' }}>Sierra Vista AZ</span>
            </h2>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 18, lineHeight: '1.7', color: 'var(--color-3)' }}>
              Founded with a mission to deliver honest, high-quality roofing, Artistic Roofing Systems has grown alongside the Sierra Vista community we call home. Many of our experienced team members live right here in Cochise County, and their dedication shows in every project.
            </p>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 18, lineHeight: '1.7', color: 'var(--color-3)' }}>
              Our crews do more than build and repair roofs. They build trust with neighbors, families, and local businesses through consistent workmanship and dependable service.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section style={{ background: '#fff', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel text="CORE VALUES" center />
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.2,
              marginTop: 16, color: '#000',
            }}>
              Our <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Core Values</span>
            </h2>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 18, lineHeight: '1.65', color: 'var(--color-3)', maxWidth: 560, margin: '16px auto 0' }}>
              At Artistic Roofing Systems, our work is guided by values that reflect who we are as a local company.
            </p>
          </div>

          {/* Cards — 3 top, 2 bottom centered */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {coreValues.map(({ Icon, title, desc }, i) => (
              <div key={i} style={{
                width: 'clamp(220px, 28%, 340px)',
                background: 'var(--shape-fill)',
                border: '1px solid var(--shape-stroke)',
                borderRadius: 16,
                padding: '36px 28px',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', gap: 16,
              }}>
                <div style={{
                  width: 72, height: 72,
                  background: '#fff',
                  border: '1.5px solid var(--shape-stroke)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,128,198,0.08)',
                }}>
                  <Icon />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 20, color: '#000' }}>{title}</h3>
                <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 15, lineHeight: '1.65', color: 'var(--color-3)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications & Memberships ── */}
      <section style={{ background: 'var(--shape-fill)', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <SectionLabel text="CERTIFICATIONS" />
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.2,
              marginTop: 16, color: '#000',
            }}>
              <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Certifications</span> and Memberships
            </h2>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 18, lineHeight: '1.65', color: 'var(--color-3)', maxWidth: 640, marginTop: 12 }}>
              Artistic Roofing Systems LLC maintains certifications and professional memberships that reflect our commitment to safety, training, and trusted service standards.
            </p>
          </div>

          {/* Two-column */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 40, alignItems: 'start' }}>
            {/* Left — blue card */}
            <div style={{
              background: 'var(--blue)',
              borderRadius: 16,
              padding: '40px 32px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              textAlign: 'center', gap: 24,
            }}>
              {/* Star icon */}
              <div style={{ width: 80, height: 80, background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 6l3.5 8 8.5 1.2-6.2 6 1.5 8.8L20 26l-7.3 4 1.5-8.8-6.2-6 8.5-1.2z" fill="rgba(255,255,255,0.9)" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 28, color: '#fff' }}>Certified Excellence</h3>
              <p style={{ fontFamily: 'Outfit', fontWeight: 300, fontSize: 16, lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
                We partner with industry leaders to bring you the best materials and practices.
              </p>
              {/* Partner logos / name tags */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                {['Tamko', 'Owens Corning', 'GAF'].map(brand => (
                  <span key={brand} style={{
                    background: 'rgba(255,255,255,0.18)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 6,
                    padding: '6px 14px',
                    fontFamily: 'Outfit', fontWeight: 600, fontSize: 13,
                    color: '#fff', letterSpacing: '0.04em',
                  }}>{brand}</span>
                ))}
              </div>
            </div>

            {/* Right — checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {certifications.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <Check />
                  <div>
                    <div style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 17, color: '#000', lineHeight: 1.3 }}>{c.text}</div>
                    <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 14, color: 'var(--color-3)', marginTop: 4, lineHeight: '1.5' }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Commitment CTA ── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/img/box.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,76px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.58)' }} />
        <div style={{ position: 'relative', maxWidth: 760, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.2, color: '#fff' }}>
            Our Service Commitment
          </h2>
          <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(16px,2vw,20px)', lineHeight: '1.75', color: 'rgba(255,255,255,0.88)' }}>
            Every project, large or small, is managed with care, clear communication, and respect for your property. We are licensed, bonded, and insured for your peace of mind. We stand behind our work long after the job is complete. Our promise is simple: treat every customer like a neighbor and deliver roofing solutions that stand the test of time.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '14px 28px',
            background: 'var(--blue)',
            borderRadius: 10,
            boxShadow: 'inset 0 4px 4px rgba(255,255,255,0.1)',
            fontFamily: 'Outfit', fontWeight: 600, fontSize: 17,
            color: '#fff', letterSpacing: '0.03em',
          }}>
            Request a Quote
            <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
          </Link>
        </div>
      </section>
    </>
  );
}
