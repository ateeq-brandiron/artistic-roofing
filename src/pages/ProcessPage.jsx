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

const steps = [
  {
    num: '01',
    img: '/img/frame-2147223409.png',
    title: 'Step 1 – Consultation & Inspection',
    items: [
      'In-person visit to assess your roof, gutters, or structures',
      'Identify damage, wear, or areas needing improvement',
      'Discuss goals, answer questions, and review your budget and timeline',
    ],
  },
  {
    num: '02',
    img: '/img/frame-2147223415.png',
    title: 'Step 2 – Detailed Proposal',
    items: [
      'Clear, written estimate outlining the scope of work and materials',
      'Recommendations discussed at the time of your estimate',
      'Transparent communication before scheduling begins',
    ],
  },
  {
    num: '03',
    img: '/img/frame-2147223416.png',
    title: 'Step 3 – Project Kickoff',
    items: [
      'On-time arrival of our skilled, experienced crew',
      'Open communication throughout the project',
      'Any additional needs are quoted and approved before proceeding',
    ],
  },
  {
    num: '04',
    img: '/img/frame-2147223417.png',
    title: 'Step 4 – Quality Assurance & Walkthrough',
    items: [
      'Final inspection to ensure all standards are met',
      'Complete cleanup so your property is left better than we found it',
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 400, backgroundImage: 'url(/img/frame-2147223464.png)', backgroundSize: 'cover', backgroundPosition: '50% 30%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />
        <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', width: '100%', padding: '0 clamp(20px,5vw,76px) 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>▶</span>
            <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>PROCESS</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(30px,5vw,56px)', lineHeight: 1.15, color: '#fff', maxWidth: 620 }}>
            What to Expect During Your Installation Process
          </h1>
        </div>
      </section>

      <ScrollBar />

      {/* Intro */}
      <section style={{ background: 'var(--shape-fill)', padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,76px)' }}>
        <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(16px,2vw,19px)', lineHeight: '1.7', color: 'var(--color-3)', textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
          Thank you for considering{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Artistic Roofing</span>
          . Our installation process is designed to make every project—whether a new roof, seamless gutter system, or custom patio cover—straightforward and stress-free. From the first inspection to the final walkthrough, we keep you informed, on schedule, and confident your property is in expert hands.
        </p>
      </section>

      {/* Step-by-Step */}
      <section style={{ background: '#fff', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <SectionLabel text="PROCESS" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.2, marginTop: 16, color: '#000' }}>
              Our Step-by-Step{' '}
              <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Process</span>
            </h2>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Dashed vertical line */}
            <div style={{ position: 'absolute', left: 'clamp(90px,14vw,175px)', top: 40, bottom: 40, width: 2, borderLeft: '2.5px dashed #d1eeff', zIndex: 0 }} />

            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: i < steps.length - 1 ? 48 : 0, position: 'relative' }}>
                {/* Photo */}
                <div style={{ width: 'clamp(80px,12vw,160px)', height: 'clamp(80px,12vw,160px)', flexShrink: 0, borderRadius: 12, overflow: 'hidden' }}>
                  <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Number circle */}
                <div style={{ position: 'relative', zIndex: 1, flexShrink: 0, width: 'clamp(32px,5vw,56px)', display: 'flex', justifyContent: 'center', marginTop: 'clamp(24px,3vw,48px)' }}>
                  <div style={{ width: 'clamp(32px,4vw,48px)', height: 'clamp(32px,4vw,48px)', background: 'var(--blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #fff', boxShadow: '0 0 0 2px var(--blue)' }}>
                    <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 'clamp(11px,1.5vw,16px)', color: '#fff' }}>{step.num}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingTop: 'clamp(16px,2vw,32px)', paddingLeft: 'clamp(12px,2vw,28px)' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(18px,2.5vw,26px)', color: '#000', marginBottom: 16, lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {step.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <Check />
                        <span style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(14px,1.5vw,17px)', color: 'var(--color-3)', lineHeight: '1.5' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', backgroundImage: 'url(/img/box.png)', backgroundSize: 'cover', backgroundPosition: '50% 50%', padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,76px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.60)' }} />
        <div style={{ position: 'relative', maxWidth: 740, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(26px,4vw,46px)', lineHeight: 1.2, color: '#fff' }}>
            Building Trust With Every Project
          </h2>
          <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(15px,2vw,19px)', lineHeight: '1.75', color: 'rgba(255,255,255,0.88)' }}>
            At Artistic Roofing, we believe in doing the job right the first time. Whether it's a small roof repair, a complete roof installation, or seamless gutters to protect your home, our licensed, bonded, and insured team delivers results you can count on.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 28px', background: 'var(--blue)', borderRadius: 10, fontFamily: 'Outfit', fontWeight: 600, fontSize: 17, color: '#fff', letterSpacing: '0.03em' }}>
            Request Your Roofing and Gutter Quote
            <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
          </Link>
        </div>
      </section>
    </>
  );
}
