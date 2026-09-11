import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';

const steps = [
  {
    num: '01',
    img: '/img/process/Process%20-%20Step%201.jpg',
    title: 'Step 1 – Consultation & Inspection',
    items: [
      'In-person visit to assess your roof, gutters, or structures',
      'Identify damage, wear, or areas needing improvement',
      'Discuss goals, answer questions, and review your budget and timeline',
    ],
  },
  {
    num: '02',
    img: '/img/process/Rectangle%20227-2.png',
    title: 'Step 2 – Detailed Proposal',
    items: [
      'Clear, written estimate outlining the scope of work and materials',
      'Recommendations discussed at the time of your estimate',
      'Transparent communication before scheduling begins',
    ],
  },
  {
    num: '03',
    img: '/img/process/Rectangle%20227-1.png',
    title: 'Step 3 – Project Kickoff',
    items: [
      'On-time arrival of our skilled, experienced crew',
      'Open communication throughout the project',
      'Any additional needs are quoted and approved before proceeding',
    ],
  },
  {
    num: '04',
    img: '/img/process/Home%20-%20EST%20%2B%20Process%20-%20Step%204.jpg',
    pos: 'right center',
    bgSize: '280% auto',
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
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(480px, 65vh, 819px)',
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.00) 36.6%, rgba(0,0,0,0.45) 71.27%, rgba(0,0,0,0.68) 100%), url(/img/process/Process%20Hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 'clamp(20px,5vw,76px)',
        paddingTop: 0,
        paddingBottom: 'clamp(40px,5vw,72px)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, alignSelf: 'stretch', marginBottom: 16 }}>
          <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
          <img src="/img/process/icons/caret-right.svg" alt="" style={{ width: 8, height: 13 }} />
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>PROCESS</span>
        </div>

        <h1 style={{
          position: 'relative',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(32px, 5vw, 60px)',
          lineHeight: '120%',
          color: '#fff',
          margin: 0,
          maxWidth: 812,
        }}>
          What to Expect During Your Installation Process
        </h1>
      </section>

      {/* ── Ticker ── */}
      <ScrollBar />

      {/* ── Intro ── */}
      <section style={{
        background: 'var(--shape-fill)',
        padding: 'clamp(40px,5vw,60px) clamp(20px,5vw,76px)',
        boxSizing: 'border-box',
      }}>
        <p style={{
          fontFamily: 'Outfit', fontWeight: 400, fontSize: 18,
          lineHeight: '160%', color: 'var(--color-3)',
          textAlign: 'center', maxWidth: 820, margin: '0 auto',
        }}>
          Thank you for considering{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Artistic Roofing</span>
          . Our installation process is designed to make every project—whether a new roof, seamless gutter system, or custom patio cover—straightforward and stress-free. From the first inspection to the final walkthrough, we keep you informed, on schedule, and confident your property is in expert hands.
        </p>
      </section>

      {/* ── Step-by-Step Process ── */}
      <section style={{ background: '#fff', display: 'flex', padding: 'clamp(40px,5vw,75px) clamp(20px,5vw,75px)', flexDirection: 'column', alignItems: 'center', gap: 50, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1290, width: '100%', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 64 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', background: '#fff', borderRadius: 100, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="/img/process/icons/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>PROCESS</span>
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '120%',
              color: '#000', margin: 0, textAlign: 'center',
            }}>
              Our Step-by-Step <span style={{ color: 'var(--blue)' }}>Process</span>
            </h2>
          </div>

          {/* Timeline */}
          <div style={{ maxWidth: 900, width: '100%', margin: '0 auto', position: 'relative' }}>
            {/* Vertical connector line through number circles */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2" height="693" viewBox="0 0 2 693" fill="none"
              style={{ position: 'absolute', left: 245, top: 28, zIndex: 0, pointerEvents: 'none' }}
            >
              <path d="M1 0V693" stroke="#0080C6" strokeWidth="2" strokeDasharray="8 8" />
            </svg>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {steps.map((step, i) => (
                <div key={i} className="timeline-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 40, width: '100%' }}>

                  {/* Step image */}
                  {step.bgSize ? (
                    <div className="step-img" style={{
                      width: 178,
                      height: 178,
                      flexShrink: 0,
                      borderRadius: 12,
                      backgroundImage: `url(${step.img})`,
                      backgroundSize: step.bgSize,
                      backgroundPosition: step.pos || 'center',
                      backgroundRepeat: 'no-repeat',
                    }} />
                  ) : (
                    <div className="step-img" style={{
                      width: 178,
                      height: 178,
                      flexShrink: 0,
                      borderRadius: 12,
                      overflow: 'hidden',
                    }}>
                      <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: step.pos || 'center', display: 'block' }} />
                    </div>
                  )}

                  {/* Number circle */}
                  <div style={{
                    position: 'relative',
                    zIndex: 1,
                    flexShrink: 0,
                    width: 56,
                    height: 56,
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ position: 'absolute', inset: 0 }}>
                      {i === 0
                        ? <circle cx="28" cy="28" r="28" fill="#0080C6" />
                        : <circle cx="28" cy="28" r="27" fill="#D1EFFF" stroke="#0080C6" strokeWidth="1" />}
                    </svg>
                    <span style={{
                      position: 'relative',
                      fontFamily: 'Outfit', fontWeight: 700, fontSize: 18,
                      color: i === 0 ? '#fff' : '#0080C6', lineHeight: 1,
                    }}>{step.num}</span>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, paddingTop: 0, paddingLeft: 0 }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif', fontWeight: 700,
                      fontSize: 26, lineHeight: '120%', color: '#000',
                      margin: '0 0 20px',
                    }}>
                      {step.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {step.items.map((item, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                          <img src="/img/process/icons/Vector-2.svg" alt="" style={{ width: 18, height: 18, flexShrink: 0, marginTop: 2 }} />
                          <span style={{
                            fontFamily: 'Outfit', fontWeight: 400, fontSize: 17,
                            lineHeight: '150%', color: 'var(--color-3)',
                          }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 clamp(20px,5vw,75px) clamp(40px,5vw,75px)', boxSizing: 'border-box' }}>
        <section style={{
          display: 'flex',
          width: '100%',
          maxWidth: 1290,
          padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,100px)',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 24,
          borderRadius: 10,
          background: `linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 100%), url(/img/process/DJI_0068.jpg) lightgray 50% / cover no-repeat`,
          boxSizing: 'border-box',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '120%', color: '#fff', margin: 0,
          }}>
            Building Trust With Every Project
          </h2>
          <p style={{
            fontFamily: 'Outfit', fontWeight: 400, fontSize: 18,
            lineHeight: '160%', color: 'rgba(255,255,255,0.9)',
            maxWidth: 740, margin: 0,
          }}>
            At Artistic Roofing, we believe in doing the job right the first time. Whether it's a small roof repair, a complete roof installation, or seamless gutters to protect your home, our licensed, bonded, and insured team delivers results you can count on.
          </p>
          <Link to="/contact" className="btn-blue" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '16px 32px',
            background: 'var(--blue)',
            borderRadius: 10,
            fontFamily: 'Outfit', fontWeight: 600, fontSize: 17,
            color: '#fff', letterSpacing: '0.02em',
            marginTop: 8,
          }}>
            Request Your Roofing and Gutter Quote
            <img src="/img/process/icons/Icon-4.svg" alt="" style={{ width: 16, height: 14 }} />
          </Link>
        </section>
      </div>
    </>
  );
}
