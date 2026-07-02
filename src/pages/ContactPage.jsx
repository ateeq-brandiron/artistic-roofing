import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';

const hours = [
  { day: 'Monday – Friday', time: '7:30 AM – 4:00 PM', highlight: true },
  { day: 'Saturday', time: 'By Appointment', highlight: false },
  { day: 'Sunday', time: 'Closed', highlight: false },
];

const cities = ['Sierra Vista', 'Hereford', 'Huachuca City', 'Benson', 'Sonoita', 'Patagonia', 'Tombstone'];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: 819,
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.00) 36.6%, rgba(0,0,0,0.52) 71.27%, rgba(0,0,0,0.75) 100%), url(/img/contact/Frame%202147223464.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '0 76px 72px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, alignSelf: 'stretch', marginBottom: 16 }}>
          <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
          <img src="/img/contact/caret-right.svg" alt="" style={{ width: 8, height: 13 }} />
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>CONTACT US</span>
        </div>

        <h1 style={{
          position: 'relative',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 60,
          lineHeight: '120%',
          color: '#fff',
          margin: 0,
          width: 749,
        }}>
          Contact Artistic Roofing Systems in Sierra Vista AZ
        </h1>
      </section>

      {/* ── Ticker ── */}
      <ScrollBar />

      {/* ── Intro ── */}
      <section style={{
        background: 'var(--shape-fill)',
        padding: '75px 76px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
        <div style={{ width: 1088, display: 'flex', flexDirection: 'column', gap: 0 }}>
          <p style={{
            fontFamily: 'Outfit', fontWeight: 700, fontSize: 24,
            lineHeight: '150%', color: '#000',
            textAlign: 'center', margin: 0,
          }}>
            Have a question about your roof or need a free estimate?
          </p>
          <p style={{
            fontFamily: 'Outfit', fontWeight: 400, fontSize: 24,
            lineHeight: '150%', color: '#000',
            textAlign: 'center', margin: 0,
          }}>
            Contact Artistic Roofing Systems in Sierra Vista AZ today. We proudly serve Sierra Vista and surrounding Cochise County communities with reliable residential and light commercial roofing services. From roof repairs and replacements to gutter installations and maintenance, our experienced team responds quickly to help protect your property from leaks, storm damage, and everyday wear.
          </p>
        </div>
      </section>

      {/* ── Phone Banner ── */}
      <section style={{
        background: '#464646',
        padding: 75,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        {/* Left — icon + number */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{
            display: 'flex',
            padding: 20.329,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20.329,
            borderRadius: 60.987,
            background: '#FFF',
            boxShadow: '0 4.066px 4.066px 0 rgba(0,0,0,0.05)',
            flexShrink: 0,
          }}>
            <img src="/img/contact/phone-icon.svg" alt="" style={{ width: 39, height: 39 }} />
          </div>
          <a href="tel:5204586781" style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 900,
            fontSize: 65.109,
            lineHeight: '120%',
            color: '#fff',
            textDecoration: 'none',
          }}>
            520-458-6781
          </a>
        </div>

        {/* Right — buttons */}
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="tel:5204586781" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 28px',
            background: '#fff',
            borderRadius: 10,
            fontFamily: 'Outfit', fontWeight: 600, fontSize: 16,
            color: '#000', textDecoration: 'none',
          }}>
            Call Us Today
            <img src="/img/contact/arrow-dark.svg" alt="" style={{ width: 20, height: 16 }} />
          </a>
          <a href="#estimate-form" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 28px',
            background: 'var(--blue)',
            borderRadius: 10,
            fontFamily: 'Outfit', fontWeight: 600, fontSize: 16,
            color: '#fff', textDecoration: 'none',
          }}>
            Free Estimate
            <img src="/img/contact/arrow-white.svg" alt="" style={{ width: 20, height: 16 }} />
          </a>
        </div>
      </section>

      {/* ── Office Hours + Photo ── */}
      <section style={{
        background: '#fff',
        padding: '75px 76px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          maxWidth: 1290, margin: '0 auto',
          display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap',
        }}>
          {/* Left – hours */}
          <div style={{ flex: '1 1 340px', minWidth: 280 }}>
            {/* TIMINGS pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 16px', background: '#fff', borderRadius: 100,
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)', marginBottom: 16,
            }}>
              <img src="/img/contact/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>TIMINGS</span>
            </div>

            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 40, lineHeight: '120%', color: '#000',
              margin: '0 0 28px',
            }}>
              Office Hours:
            </h2>

            {/* Hours table */}
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--shape-stroke)', borderRadius: 12, overflow: 'hidden' }}>
              {hours.map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '18px 24px',
                  background: 'var(--shape-fill)',
                  borderBottom: i < hours.length - 1 ? '1px solid var(--shape-stroke)' : 'none',
                }}>
                  <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 16, color: '#000' }}>
                    {row.day}
                  </span>
                  <span style={{
                    fontFamily: 'Outfit', fontWeight: row.highlight ? 600 : 400, fontSize: 16,
                    color: row.highlight ? 'var(--blue)' : 'var(--color-3)',
                  }}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – photo */}
          <div style={{
            flex: '1 1 340px', minWidth: 280, maxWidth: 540,
            borderRadius: 20,
            overflow: 'hidden',
            height: 380,
            border: '2px solid #0080C6',
          }}>
            <img
              src="/img/contact/Tile%20roof%202.jpg"
              alt="Artistic Roofing project"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── Map + Location ── */}
      <section style={{
        background: 'var(--shape-fill)',
        padding: '75px 76px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          maxWidth: 1290, margin: '0 auto',
          display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap',
        }}>
          {/* Left – map image */}
          <div style={{
            flex: '1 1 340px', minWidth: 280, maxWidth: 540,
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid var(--shape-stroke)',
            height: 340,
          }}>
            <img
              src="/img/contact/Rectangle%203.png"
              alt="Map"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Right – address */}
          <div style={{ flex: '1 1 340px', minWidth: 280, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* LOCATION pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 16px', background: '#fff', borderRadius: 100,
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)', alignSelf: 'flex-start',
            }}>
              <img src="/img/contact/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>LOCATION</span>
            </div>

            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 40, lineHeight: '120%', color: '#000', margin: 0,
            }}>
              Visit our Office
            </h2>

            {/* Address row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <img src="/img/contact/Vector.svg" alt="" style={{ width: 20, height: 23, flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 16, color: '#000', margin: '0 0 4px' }}>
                  Artistic Roofing Systems
                </p>
                <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 15, color: 'var(--color-3)', lineHeight: '160%', margin: 0 }}>
                  5563 S Santa Elena Ave Sierra Vista,<br />AZ 85650
                </p>
              </div>
            </div>

            {/* Directions button */}
            <a
              className="btn-blue"
              href="https://maps.google.com/?q=5563+S+Santa+Elena+Ave+Sierra+Vista+AZ+85650"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 28px',
                background: 'var(--blue)',
                borderRadius: 10,
                fontFamily: 'Outfit', fontWeight: 600, fontSize: 16,
                color: '#fff', textDecoration: 'none',
                alignSelf: 'flex-start',
              }}
            >
              Click for Directions
              <img src="/img/contact/Icon-1.svg" alt="" style={{ width: 14, height: 11 }} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section id="estimate-form" style={{
        position: 'relative',
        display: 'flex',
        minHeight: 480,
      }}>
        {/* Left – background image + heading */}
        <div style={{
          flex: '0 0 50%',
          position: 'relative',
          backgroundImage: 'url(/img/contact/DJI_0169.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 64px',
          boxSizing: 'border-box',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.60)' }} />
          <div style={{ position: 'relative', maxWidth: 400 }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 42, lineHeight: '120%', color: '#fff', margin: '0 0 16px',
            }}>
              Request a Free Estimate
            </h2>
            <p style={{
              fontFamily: 'Outfit', fontWeight: 400, fontSize: 17,
              lineHeight: '160%', color: 'rgba(255,255,255,0.85)', margin: 0,
            }}>
              Fill out the form below and our team will contact you as soon as possible.
            </p>
          </div>
        </div>

        {/* Right – form */}
        <div style={{
          flex: '0 0 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 64px',
          boxSizing: 'border-box',
          background: '#fff',
        }}>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480 }}>
            <input
              type="text"
              placeholder="Enter Full Name"
              style={{
                width: '100%', padding: '16px 18px',
                border: '1.5px solid var(--shape-stroke)',
                borderRadius: 8,
                fontFamily: 'Outfit', fontSize: 15, color: 'var(--color-3)',
                background: 'var(--shape-fill)', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: '100%', padding: '16px 18px',
                border: '1.5px solid var(--shape-stroke)',
                borderRadius: 8,
                fontFamily: 'Outfit', fontSize: 15, color: 'var(--color-3)',
                background: 'var(--shape-fill)', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <textarea
              rows={5}
              placeholder="Message"
              style={{
                width: '100%', padding: '16px 18px',
                border: '1.5px solid var(--shape-stroke)',
                borderRadius: 8,
                fontFamily: 'Outfit', fontSize: 15, color: 'var(--color-3)',
                background: 'var(--shape-fill)', outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
            <button
              type="submit"
              className="btn-blue"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '16px 28px',
                background: 'var(--blue)',
                borderRadius: 10,
                fontFamily: 'Outfit', fontWeight: 600, fontSize: 16,
                color: '#fff', border: 'none', cursor: 'pointer',
              }}
            >
              Schedule Your Free Roofing Estimate
              <img src="/img/contact/Icon-1.svg" alt="" style={{ width: 14, height: 11 }} />
            </button>
          </form>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section style={{
        background: '#fff',
        padding: '75px 76px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}>
        {/* LOCATIONS pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '7px 16px', background: '#fff', borderRadius: 100,
          boxShadow: '0 2px 6px rgba(0,0,0,0.06)', marginBottom: 20,
        }}>
          <img src="/img/contact/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>LOCATIONS</span>
        </div>

        <h2 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 900,
          fontSize: 48, lineHeight: '120%', color: '#000', margin: '0 0 16px',
        }}>
          Service Area
        </h2>

        <p style={{
          fontFamily: 'Outfit', fontWeight: 400, fontSize: 17,
          lineHeight: '160%', color: 'var(--color-3)',
          maxWidth: 600, margin: '0 auto 36px',
        }}>
          We provide roofing and gutter services throughout Cochise County, including:
        </p>

        {/* City pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 700, margin: '0 auto 24px' }}>
          {cities.map(city => (
            <span key={city} style={{
              padding: '12px 28px',
              background: '#fff',
              border: '1.5px solid var(--shape-stroke)',
              borderRadius: 100,
              fontFamily: 'Outfit', fontWeight: 400, fontSize: 16,
              color: '#000',
            }}>
              {city}
            </span>
          ))}
        </div>

        <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 16, color: 'var(--color-3)', margin: 0 }}>
          and surrounding areas.
        </p>
      </section>
    </>
  );
}
