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
        minHeight: 560,
        backgroundImage: 'url(/img/contact/Frame%202147223464.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '0 76px 64px',
        boxSizing: 'border-box',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.48)' }} />

        {/* Breadcrumb */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
          <img src="/img/contact/caret-right.svg" alt="" style={{ width: 8, height: 13 }} />
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>CONTACT US</span>
        </div>

        <h1 style={{
          position: 'relative',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 56,
          lineHeight: '120%',
          color: '#fff',
          margin: 0,
          maxWidth: 620,
        }}>
          Contact Artistic Roofing Systems in Sierra Vista AZ
        </h1>
      </section>

      {/* ── Ticker ── */}
      <ScrollBar />

      {/* ── Intro ── */}
      <section style={{
        background: 'var(--shape-fill)',
        padding: '48px 76px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'Outfit', fontWeight: 700, fontSize: 20,
          lineHeight: '150%', color: '#000',
          maxWidth: 820, margin: '0 auto 12px',
        }}>
          Have a question about your roof or need a free estimate?
        </p>
        <p style={{
          fontFamily: 'Outfit', fontWeight: 400, fontSize: 17,
          lineHeight: '160%', color: 'var(--color-3)',
          maxWidth: 820, margin: '0 auto',
        }}>
          Contact Artistic Roofing Systems in Sierra Vista AZ today. We proudly serve Sierra Vista and surrounding Cochise County communities with reliable residential and light commercial roofing services. From roof repairs and replacements to gutter installations and maintenance, our experienced team responds quickly to help protect your property from leaks, storm damage, and everyday wear.
        </p>
      </section>

      {/* ── Phone Banner ── */}
      <section style={{
        background: '#3a3a3a',
        padding: '48px 76px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 28,
      }}>
        {/* Phone number row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 52, height: 52,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="24" height="24" viewBox="0 0 39 39" fill="none">
              <path d="M36.5862 31.2916C36.5862 31.9511 36.4397 32.629 36.1282 33.2885C35.8168 33.9481 35.4137 34.571 34.8824 35.1572C33.9847 36.1466 32.9954 36.8611 31.8778 37.3191C30.7786 37.7771 29.5878 38.0153 28.3053 38.0153C26.4366 38.0153 24.4397 37.5756 22.3328 36.6778C20.2259 35.7801 18.1191 34.571 16.0305 33.0504C13.9237 31.5114 11.9267 29.8076 10.0214 27.9206C8.13435 26.0153 6.43053 24.0183 4.90992 21.9298C3.40763 19.8412 2.19847 17.7527 1.31908 15.6824C0.439695 13.5939 0 11.5969 0 9.6916C0 8.4458 0.219847 7.25496 0.659542 6.15572C1.09924 5.03817 1.79542 4.01221 2.76641 3.09618C3.93893 1.94198 5.22137 1.37405 6.5771 1.37405C7.09007 1.37405 7.60305 1.48397 8.06107 1.70382C8.5374 1.92366 8.95878 2.25343 9.28855 2.72977L13.5389 8.72061C13.8687 9.17862 14.1069 9.6 14.2717 10.003C14.4366 10.3878 14.5282 10.7725 14.5282 11.1206C14.5282 11.5603 14.4 12 14.1435 12.4214C13.9053 12.8427 13.5572 13.2824 13.1176 13.7221L11.7252 15.1695C11.5237 15.371 11.4321 15.6092 11.4321 15.9023C11.4321 16.0488 11.4504 16.1771 11.487 16.3237C11.542 16.4702 11.5969 16.5801 11.6336 16.6901C11.9634 17.2946 12.5313 18.0824 13.3374 19.0351C14.1618 19.9878 15.0412 20.9588 15.9939 21.9298C16.9832 22.9008 17.9359 23.7985 18.9069 24.6229C19.8595 25.429 20.6473 25.9786 21.2702 26.3084C21.3618 26.345 21.4717 26.4 21.6 26.455C21.7466 26.5099 21.8931 26.5282 22.058 26.5282C22.3695 26.5282 22.6076 26.4183 22.8092 26.2168L24.2015 24.8427C24.6595 24.3847 25.0992 24.0366 25.5206 23.8168C25.942 23.5603 26.3633 23.4321 26.8214 23.4321C27.1695 23.4321 27.5359 23.5053 27.9389 23.6702C28.342 23.8351 28.7633 24.0733 29.2214 24.3847L35.2855 28.6901C35.7618 29.0198 36.0916 29.4046 36.2931 29.8626C36.4763 30.3206 36.5862 30.7786 36.5862 31.2916Z" fill="white"/>
              <path d="M28.8549 14.1985C28.8549 13.9601 28.7452 13.4907 28.4166 12.8513C28.1019 12.2392 27.6395 11.5774 27.0801 10.978L27.0784 10.9745C26.0205 9.834 24.8022 9.1603 23.8168 9.1603C23.0579 9.1603 22.4427 8.54512 22.4427 7.78626C22.4427 7.02739 23.0579 6.41221 23.8168 6.41221C25.9072 6.41221 27.8022 7.71496 29.0893 9.10126C29.8123 9.8759 30.4241 10.7446 30.8606 11.5935C31.2827 12.4147 31.603 13.3377 31.603 14.1985C31.603 14.9573 30.9879 15.5725 30.229 15.5725C29.4701 15.5725 28.8549 14.9573 28.8549 14.1985Z" fill="white"/>
              <path d="M35.2672 14.1985C35.2672 7.86726 30.148 2.74809 23.8168 2.74809C23.0579 2.74809 22.4427 2.13291 22.4427 1.37405C22.4427 0.615181 23.0579 0 23.8168 0C31.6657 0 38.0153 6.34953 38.0153 14.1985C38.0153 14.9573 37.4001 15.5725 36.6412 15.5725C35.8823 15.5725 35.2672 14.9573 35.2672 14.1985Z" fill="white"/>
            </svg>
          </div>
          <a href="tel:5204586781" style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 1,
            color: '#fff',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}>
            520-458-6781
          </a>
        </div>

        {/* Buttons */}
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
            <img src="/img/contact/Icon-2.svg" alt="" style={{ width: 14, height: 11 }} />
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
            <img src="/img/contact/Icon-1.svg" alt="" style={{ width: 14, height: 11 }} />
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
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)', marginBottom: 20,
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
                  <span style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 16, color: '#000' }}>
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
            border: '1px solid var(--shape-stroke)',
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
          <div style={{ flex: '1 1 340px', minWidth: 280, display: 'flex', flexDirection: 'column', gap: 20 }}>
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
