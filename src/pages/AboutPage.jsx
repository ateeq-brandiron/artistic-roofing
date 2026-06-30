import React from 'react';
import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';



const coreValues = [
  { icon: '/img/core-values/Vector-4.svg', title: 'Integrity', desc: 'We believe in doing the right thing, even when no one is watching.' },
  { icon: '/img/core-values/Vector-3.svg', title: 'Craftsmanship', desc: 'Every project is completed with precision, pride, and attention to detail.' },
  { icon: '/img/core-values/Vector-2.svg', title: 'Safety', desc: 'We follow OSHA-certified standards and ongoing training to keep every jobsite safe.' },
  { icon: '/img/core-values/Vector-1.svg', title: 'Community', desc: 'We live and work in Cochise County and take pride in serving our neighbors.' },
  { icon: '/img/core-values/Vector.svg',   title: 'Accountability', desc: 'We stand behind our work and treat every home as if it were our own.' },
];

const certifications = [
  { text: 'TRI Certified Tile Installer', sub: 'Trained in proper tile installation techniques for long-term roof performance' },
  { text: 'Polyglass Roof Coating Certified', sub: 'Trained in advanced coating applications for low-slope and flat roofs' },
  { text: 'Tamko Preferred Contractor', sub: 'Recognized for quality installation and product expertise' },
  { text: 'Better Business Bureau (BBB) Accredited', sub: 'Demonstrating a commitment to trusted service and customer satisfaction' },
  { text: 'Chamber of Commerce Member', sub: 'Proud to be part of the local Sierra Vista business community' },
];

/* ── Core Value Card ── */
function CoreValueCard({ icon, title, desc }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        width: 316,
        padding: '30px 0',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30,
        flexShrink: 0,
        borderRadius: 10,
        border: hovered ? '2px solid var(--blue)' : '2px solid #D1EFFF',
        background: hovered ? '#fff' : '#E8F8FF',
        boxSizing: 'border-box',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 48px rgba(0,128,198,0.15)' : 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* Dashed ring + inner circle + icon */}
      <div style={{ position: 'relative', width: 134, height: 134, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <img src="/img/core-values/Ellipse 9.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        <div style={{
          width: 104,
          height: 104,
          borderRadius: '50%',
          background: hovered ? 'var(--blue)' : 'var(--shape-fill)',
          border: '1px solid var(--shape-stroke)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          transition: 'background 0.3s ease',
        }}>
          <img src={icon} alt={title} style={{
            width: 52, height: 52, objectFit: 'contain',
            filter: hovered ? 'brightness(0) invert(1)' : 'none',
            transform: hovered ? 'scale(1.12)' : 'scale(1)',
            transition: 'transform 0.3s ease, filter 0.3s ease',
          }} />
        </div>
      </div>

      <h3 style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        fontSize: 22,
        lineHeight: 1.2,
        color: hovered ? 'var(--blue)' : '#000',
        margin: 0,
        textAlign: 'center',
        transition: 'color 0.3s ease',
      }}>{title}</h3>

      <p style={{
        fontFamily: 'Outfit',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: '120%',
        color: '#464646',
        textAlign: 'center',
        margin: 0,
      }}>{desc}</p>
    </div>
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
        backgroundImage: 'url(/img/Frame%202147223464%20%282%29.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '0 clamp(20px,5vw,76px) 64px',
        boxSizing: 'border-box',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.48)' }} />

        {/* Breadcrumb */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 20, alignSelf: 'stretch', marginBottom: 8 }}>
          <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>▶</span>
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>ABOUT US</span>
        </div>

        <h1 style={{
          position: 'relative',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 60,
          lineHeight: '120%',
          color: '#fff',
          margin: 0,
          whiteSpace: 'pre-line',
        }}>
          {'About Artistic Roofing –\nRoofing Contractors in\nSierra Vista AZ'}
        </h1>
      </section>

      {/* ── Ticker ── */}
      <ScrollBar />

      {/* ── Intro paragraph ── */}
      <section style={{ background: 'var(--shape-fill)', padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,76px)' }}>
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 'clamp(16px,2vw,20px)',
          lineHeight: '1.65', color: 'var(--color-3)', textAlign: 'center',
          maxWidth: 820, margin: '0 auto',
        }}>
          Artistic Roofing Systems LLC is a trusted roofing contractor in Sierra Vista AZ, proudly serving residential and light commercial customers throughout Cochise County and surrounding Southeast Arizona communities.
        </p>
      </section>

      {/* ── Our Story ── */}
      <section style={{ background: '#fff', padding: 'clamp(40px,5vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{
          maxWidth: 1290, margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(32px,5vw,80px)',
          flexWrap: 'wrap',
        }}>
          {/* Left column — overlapping images */}
          <div style={{ position: 'relative', display: 'flex', height: 487, paddingRight: 200, flexDirection: 'column', alignItems: 'flex-start', flex: '1 0 0' }}>

            {/* Right Image (main/background — roofer photo) */}
            <div style={{
              height: 441,
              flexShrink: 0,
              alignSelf: 'stretch',
              borderRadius: 30,
              background: `url(/img/about/20260507_103206.jpg) lightgray 50% / cover no-repeat`,
            }} />

            {/* Left Image (foreground — house, absolute bottom-right) + badge */}
            <div style={{
              width: 390,
              height: 411,
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: 30,
                border: '12px solid var(--shape-stroke)',
                background: `url(/img/about/Cardillo.jpg) lightgray 50% / cover no-repeat`,
                boxShadow: '0 10px 25px 0 rgba(0,0,0,0.07)',
              }} />

              {/* Counter / Trust badge — positioned at the left seam of the two photos */}
              <div style={{
                display: 'flex',
                padding: 25,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                position: 'absolute',
                left: -80,
                bottom: 46,
                borderRadius: 23.846,
                background: '#000',
              }}>
                <img src="/img/about/Vector.svg" alt="" style={{ width: 40, height: 40 }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 14, color: '#fff', whiteSpace: 'nowrap' }}>Trust and Quality</div>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}>Service you can count on</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div style={{
            display: 'flex',
            height: 487,
            padding: '60px 0',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 30,
            flex: '1 0 0',
            boxSizing: 'border-box',
          }}>
            {/* Label pill */}
            <div style={{
              display: 'inline-flex',
              padding: 9.091,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 9.091,
              borderRadius: 27.273,
              background: '#fff',
              boxShadow: '0 1.818px 1.818px 0 rgba(0,0,0,0.05)',
            }}>
              <img src="/img/about/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)', whiteSpace: 'nowrap' }}>OUR STORY</span>
            </div>

            {/* Heading */}
            <h2 style={{
              alignSelf: 'stretch',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              fontSize: 48,
              lineHeight: '120%',
              color: '#000',
              margin: 0,
            }}>
              Our Story and Roots in{' '}
              <span style={{ color: 'var(--blue)' }}>Sierra Vista AZ</span>
            </h2>

            {/* Paragraphs — gap 30px handled by parent gap */}
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 20, lineHeight: '120%', color: 'var(--color-3)', margin: 0 }}>
              Founded with a mission to deliver honest, high-quality roofing, Artistic Roofing Systems has grown alongside the Sierra Vista community we call home. Many of our experienced team members live right here in Cochise County, and their dedication shows in every project.
            </p>
            <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 20, lineHeight: '120%', color: 'var(--color-3)', margin: 0 }}>
              Our crews do more than build and repair roofs. They build trust with neighbors, families, and local businesses through consistent workmanship and dependable service.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section style={{ background: '#fff', padding: '50px 75px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 56 }}>
            {/* Label pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', background: '#fff', borderRadius: 100, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="/img/core-values/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>CORE VALUES</span>
            </div>

            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 48, lineHeight: '120%',
              color: '#000', margin: 0, textAlign: 'center',
            }}>
              Our <span style={{ color: 'var(--blue)', fontStyle: 'normal' }}>Core Values</span>
            </h2>

            <p style={{
              fontFamily: 'Outfit', fontWeight: 400, fontSize: 18,
              lineHeight: '1.6', color: 'var(--color-3)',
              textAlign: 'center', maxWidth: 580, margin: 0,
            }}>
              At Artistic Roofing Systems, our work is guided by values that reflect who we are as a local company:
            </p>
          </div>

          {/* All 5 cards — flex-wrap centers 2-card second row automatically */}
          <div style={{ display: 'flex', gap: 100, justifyContent: 'center', flexWrap: 'wrap' }}>
            {coreValues.map(({ icon, title, desc }, i) => (
              <CoreValueCard key={i} icon={icon} title={title} desc={desc} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Certifications & Memberships ── */}
      <section style={{ background: '#fff', padding: '75px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto' }}>

          {/* Header — centered */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 60 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', background: '#fff', borderRadius: 100, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="/img/certs-section/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>CERTIFICATIONS</span>
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 48, lineHeight: '120%',
              color: '#000', margin: 0, textAlign: 'center',
            }}>
              <span style={{ color: 'var(--blue)' }}>Certifications</span> and Memberships
            </h2>
            <p style={{
              fontFamily: 'Outfit', fontWeight: 400, fontSize: 18,
              lineHeight: '120%', color: 'var(--color-3)',
              textAlign: 'center', maxWidth: 680, margin: 0,
            }}>
              Artistic Roofing Systems LLC maintains certifications and professional memberships that reflect our commitment to safety, training, and trusted service standards.
            </p>
          </div>

          {/* Two-column layout */}
          <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* Left — card with background image */}
            <div style={{
              flex: '0 0 590px',
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
              background: 'var(--shape-fill)',
              minHeight: 440,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
              padding: '48px 40px',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}>
              {/* Background image with overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url(/img/source_IQC.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                opacity: 0.18,
              }} />
              <div style={{ position: 'absolute', inset: 0, background: 'var(--shape-fill)', opacity: 0.6 }} />

              {/* Content above overlay */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
                <img src="/img/certs-section/Vector-1.svg" alt="Award" style={{ width: 80, height: 80, objectFit: 'contain' }} />
                <h3 style={{
                  fontFamily: 'Playfair Display, serif', fontWeight: 900,
                  fontSize: 32, lineHeight: '120%', color: '#000', margin: 0,
                }}>Certified Excellence</h3>
                <p style={{
                  fontFamily: 'Outfit', fontWeight: 400, fontSize: 18,
                  lineHeight: '120%', color: 'var(--color-3)', margin: 0, maxWidth: 400,
                }}>
                  We partner with industry leaders to bring you the best materials and practices.
                </p>
                {/* Pills */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {['Tamko', 'Owens Corning', 'GAF'].map(brand => (
                    <span key={brand} style={{
                      background: '#fff',
                      border: '1.5px solid var(--shape-stroke)',
                      borderRadius: 8,
                      padding: '8px 20px',
                      fontFamily: 'Outfit', fontWeight: 500, fontSize: 15,
                      color: 'var(--blue)',
                    }}>{brand}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — checklist */}
            <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 32 }}>
              {certifications.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <img src="/img/certs-section/Vector.svg" alt="" style={{ width: 26, height: 26, flexShrink: 0, marginTop: 2 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{
                      fontFamily: 'Playfair Display, serif', fontWeight: 700,
                      fontSize: 22, lineHeight: '120%', color: '#000',
                    }}>{c.text}</div>
                    <div style={{
                      fontFamily: 'Outfit', fontWeight: 400,
                      fontSize: 16, lineHeight: '120%', color: 'var(--color-3)',
                    }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Service Commitment CTA ── */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 75px 75px', boxSizing: 'border-box' }}>
        <section style={{
          display: 'flex',
          width: 1290,
          padding: 100,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          borderRadius: 10,
          background: `linear-gradient(0deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.50) 100%), url(/img/source_20191114_091038.jpg) lightgray 50% / cover no-repeat`,
          boxSizing: 'border-box',
        }}>
          <div style={{ maxWidth: 900, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 52, lineHeight: '120%', color: '#fff', margin: 0,
            }}>
              Our Service Commitment
            </h2>
            <p style={{
              fontFamily: 'Outfit', fontWeight: 400, fontSize: 20,
              lineHeight: '160%', color: '#fff', margin: 0,
            }}>
              Every project, large or small, is managed with care, clear communication, and respect for your property. We are licensed, bonded, and insured for your peace of mind. We stand behind our work long after the job is complete. Our promise is simple: treat every customer like a neighbor and deliver roofing solutions that stand the test of time.
            </p>
            <Link to="/contact" className="btn-blue" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '16px 32px',
              background: 'var(--blue)',
              borderRadius: 10,
              fontFamily: 'Outfit', fontWeight: 600, fontSize: 17,
              color: '#fff', letterSpacing: '0.02em',
            }}>
              Request a Quote
              <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
