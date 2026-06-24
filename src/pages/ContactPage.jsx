import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 420, backgroundImage: 'url(/img/frame-2147223464.png)', backgroundSize: 'cover', backgroundPosition: '50% 40%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: 80 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', width: '100%', padding: '0 clamp(20px,5vw,76px) 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>▶</span>
            <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>CONTACT US</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', lineHeight: 1.15, color: '#fff', maxWidth: 700 }}>
            Contact Artistic Roofing Systems in Sierra Vista AZ
          </h1>
        </div>
      </section>

      <ScrollBar />

      {/* Intro */}
      <section style={{ background: 'var(--shape-fill)', padding: 'clamp(36px,5vw,64px) clamp(20px,5vw,76px)' }}>
        <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(15px,2vw,18px)', lineHeight: '1.75', color: 'var(--color-3)', textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          Have a question about your roof or need a free estimate? Our team at Artistic Roofing Systems is ready to help. Reach out by phone, visit our office, or fill out the form below and we'll get back to you promptly.
        </p>
      </section>

      {/* Phone Banner */}
      <section style={{ background: '#2c2c2c', padding: 'clamp(36px,5vw,56px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 52, height: 52, background: 'var(--blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="#fff" />
              </svg>
            </div>
            <a href="tel:5204586781" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', color: '#fff', textDecoration: 'none', lineHeight: 1.1 }}>
              520-458-6781
            </a>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:5204586781" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', background: 'var(--blue)', borderRadius: 10, fontFamily: 'Outfit', fontWeight: 600, fontSize: 16, color: '#fff', textDecoration: 'none' }}>
              Call Us Today
            </a>
            <a href="#estimate-form" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', background: 'transparent', border: '2px solid rgba(255,255,255,0.5)', borderRadius: 10, fontFamily: 'Outfit', fontWeight: 600, fontSize: 16, color: '#fff', textDecoration: 'none' }}>
              Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Office Hours + Photo */}
      <section style={{ background: '#fff', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'center' }}>
          {/* Hours */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: 'var(--shape-fill)', border: '1px solid var(--shape-stroke)', borderRadius: 100, marginBottom: 20 }}>
              <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>TIMINGS</span>
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(24px,3.5vw,38px)', lineHeight: 1.2, color: '#000', marginBottom: 28 }}>
              Office Hours
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--shape-stroke)', borderRadius: 12, overflow: 'hidden' }}>
              {[
                { day: 'Monday – Friday', hours: '7:30 AM – 4:00 PM' },
                { day: 'Saturday', hours: 'By Appointment' },
                { day: 'Sunday', hours: 'Closed' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: i % 2 === 0 ? 'var(--shape-fill)' : '#fff', borderBottom: i < 2 ? '1px solid var(--shape-stroke)' : 'none' }}>
                  <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 15, color: '#000' }}>{row.day}</span>
                  <span style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 15, color: 'var(--color-3)' }}>{row.hours}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Photo */}
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 'clamp(240px,30vw,380px)' }}>
            <img src="/img/frame-2147223409.png" alt="Artistic Roofing office" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Map + Address */}
      <section style={{ background: 'var(--shape-fill)', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'center' }}>
          {/* Map embed */}
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 'clamp(280px,35vw,420px)', border: '1px solid var(--shape-stroke)' }}>
            <iframe
              title="Artistic Roofing Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.5!2d-110.3!3d31.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d8e7a9a9a9a9a9%3A0x0!2s5563+S+Santa+Elena+Ave%2C+Sierra+Vista%2C+AZ+85650!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Address */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: '#fff', border: '1px solid var(--shape-stroke)', borderRadius: 100, marginBottom: 20 }}>
              <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>LOCATION</span>
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(24px,3.5vw,38px)', lineHeight: 1.2, color: '#000', marginBottom: 16 }}>
              Visit our Office
            </h2>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 40, height: 40, background: 'var(--blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="#fff" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 16, color: '#000', marginBottom: 4 }}>Artistic Roofing Systems</p>
                <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 15, color: 'var(--color-3)', lineHeight: 1.6 }}>5563 S Santa Elena Ave<br />Sierra Vista, AZ 85650</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=5563+S+Santa+Elena+Ave+Sierra+Vista+AZ+85650"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 24px', background: 'var(--blue)', borderRadius: 10, fontFamily: 'Outfit', fontWeight: 600, fontSize: 15, color: '#fff', textDecoration: 'none' }}
            >
              Click for Directions
              <img src="/img/call-made-3.svg" alt="" style={{ width: 13, height: 13 }} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="estimate-form" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
          {/* Left – dark bg with heading */}
          <div style={{ position: 'relative', backgroundImage: 'url(/img/frame-2147223464.png)', backgroundSize: 'cover', backgroundPosition: '50% 50%', padding: 'clamp(48px,6vw,80px) clamp(24px,4vw,64px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 480 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, marginBottom: 20 }}>
                <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.85)' }}>FREE ESTIMATE</span>
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(24px,3.5vw,40px)', lineHeight: 1.2, color: '#fff', marginBottom: 16 }}>
                Request Your Free Roofing Estimate
              </h2>
              <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(14px,1.5vw,17px)', lineHeight: '1.75', color: 'rgba(255,255,255,0.8)' }}>
                Fill out the form and one of our roofing specialists will be in touch to schedule your free, no-obligation estimate.
              </p>
            </div>
          </div>
          {/* Right – form */}
          <div style={{ background: '#fff', padding: 'clamp(48px,6vw,80px) clamp(24px,4vw,64px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 14, color: '#000', display: 'block', marginBottom: 8 }}>Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  style={{ width: '100%', padding: '13px 16px', border: '1.5px solid var(--shape-stroke)', borderRadius: 8, fontFamily: 'Outfit', fontSize: 15, color: 'var(--color-3)', background: 'var(--shape-fill)', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 14, color: '#000', display: 'block', marginBottom: 8 }}>Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{ width: '100%', padding: '13px 16px', border: '1.5px solid var(--shape-stroke)', borderRadius: 8, fontFamily: 'Outfit', fontSize: 15, color: 'var(--color-3)', background: 'var(--shape-fill)', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 14, color: '#000', display: 'block', marginBottom: 8 }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your roofing needs..."
                  style={{ width: '100%', padding: '13px 16px', border: '1.5px solid var(--shape-stroke)', borderRadius: 8, fontFamily: 'Outfit', fontSize: 15, color: 'var(--color-3)', background: 'var(--shape-fill)', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                />
              </div>
              <button
                type="submit"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '15px 28px', background: 'var(--blue)', borderRadius: 10, fontFamily: 'Outfit', fontWeight: 600, fontSize: 16, color: '#fff', border: 'none', cursor: 'pointer' }}
              >
                Schedule Your Free Roofing Estimate
                <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ background: 'var(--shape-fill)', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: '#fff', border: '1px solid var(--shape-stroke)', borderRadius: 100, marginBottom: 16 }}>
            <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>LOCATIONS</span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(24px,4vw,42px)', lineHeight: 1.2, color: '#000', marginBottom: 28 }}>
            Service Area
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 20 }}>
            {['Sierra Vista', 'Hereford', 'Huachuca City', 'Benson', 'Sonoita', 'Patagonia', 'Tombstone'].map(city => (
              <span key={city} style={{ padding: '10px 22px', background: '#fff', border: '1.5px solid var(--shape-stroke)', borderRadius: 100, fontFamily: 'Outfit', fontWeight: 600, fontSize: 15, color: 'var(--blue)' }}>
                {city}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 16, color: 'var(--color-3)' }}>and surrounding areas.</p>
        </div>
      </section>
    </>
  );
}
