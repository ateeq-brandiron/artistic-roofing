import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const serviceOptions = [
  'Roof Installation',
  'Roof Replacement',
  'Roof Repair',
  'Storm Damage Repair',
  'Gutter Services',
  'Skylight Installation',
  'Free Inspection',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', bestTime: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F2741, #1A3C5E)', padding: '10rem 2rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Get in Touch</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Request Your{' '}
            <em style={{ color: '#C8922A' }}>Free Estimate</em>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: 580, lineHeight: 1.75 }}>
            Contact us today for a free, no-obligation roof inspection and estimate. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ padding: '6rem 2rem', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: '#1A3C5E', marginBottom: '1rem' }}>Let's Talk About Your Roof</h2>
            <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Whether you need an emergency repair or are planning a full replacement, our team is ready to help. Reach out via phone, email, or the form — we'll respond promptly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(26,60,94,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} color="#1A3C5E" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1A3C5E', marginBottom: '0.25rem' }}>Phone</div>
                  <a href="tel:+15551234567" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '1.0625rem' }}>(555) 123-4567</a>
                  <div style={{ fontSize: '0.875rem', color: '#9CA3AF', marginTop: '0.125rem' }}>Mon–Sat: 7am–7pm</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(26,60,94,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} color="#1A3C5E" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1A3C5E', marginBottom: '0.25rem' }}>Email</div>
                  <a href="mailto:info@artisticroofing.com" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '1.0625rem' }}>info@artisticroofing.com</a>
                  <div style={{ fontSize: '0.875rem', color: '#9CA3AF', marginTop: '0.125rem' }}>We respond within 24 hours</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(26,60,94,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} color="#1A3C5E" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1A3C5E', marginBottom: '0.25rem' }}>Location</div>
                  <div style={{ color: '#6B7280', fontSize: '1.0625rem' }}>123 Roofing Lane<br />San Antonio, TX 78201</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(26,60,94,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={20} color="#1A3C5E" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1A3C5E', marginBottom: '0.25rem' }}>Business Hours</div>
                  <div style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    Monday – Friday: 7am – 7pm<br />
                    Saturday: 8am – 5pm<br />
                    Sunday: Emergency only
                  </div>
                </div>
              </div>
            </div>

            {/* Service area */}
            <div style={{ background: 'white', borderRadius: 8, padding: '1.75rem', border: '1px solid #E5E7EB' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#1A3C5E', marginBottom: '1rem' }}>Service Areas</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['San Antonio', 'Austin', 'New Braunfels', 'Boerne', 'Seguin', 'Schertz', 'Converse', 'Leon Valley', 'Helotes', 'Alamo Heights'].map(city => (
                  <span key={city} style={{ background: '#F3F4F6', borderRadius: 100, padding: '0.375rem 0.875rem', fontSize: '0.8125rem', fontWeight: 500, color: '#374151' }}>{city}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'white', borderRadius: 12, padding: '2.5rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ width: 80, height: 80, background: 'rgba(200,146,42,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <CheckCircle size={40} color="#C8922A" />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1A3C5E', marginBottom: '0.75rem' }}>Thank You!</h3>
                <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: 1.7 }}>
                  We've received your request and will contact you within 24 hours to schedule your free inspection.
                </p>
                <p style={{ fontSize: '0.9375rem', color: '#9CA3AF', marginTop: '1rem' }}>
                  For urgent needs, call us directly at{' '}
                  <a href="tel:+15551234567" style={{ color: '#C8922A', fontWeight: 600 }}>(555) 123-4567</a>
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#1A3C5E', marginBottom: '0.5rem' }}>Get Your Free Estimate</h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '2rem' }}>Fill out the form below and we'll be in touch within 24 hours.</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #D1D5DB', borderRadius: 6, fontSize: '0.9375rem', color: '#111827', outline: 'none', fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Phone *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        type="tel"
                        placeholder="(555) 000-0000"
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #D1D5DB', borderRadius: 6, fontSize: '0.9375rem', color: '#111827', outline: 'none', fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Email Address *</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="john@example.com"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #D1D5DB', borderRadius: 6, fontSize: '0.9375rem', color: '#111827', outline: 'none', fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #D1D5DB', borderRadius: 6, fontSize: '0.9375rem', color: form.service ? '#111827' : '#9CA3AF', outline: 'none', fontFamily: 'Inter, sans-serif', background: 'white' }}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Best Time to Call</label>
                    <select
                      name="bestTime"
                      value={form.bestTime}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #D1D5DB', borderRadius: 6, fontSize: '0.9375rem', color: form.bestTime ? '#111827' : '#9CA3AF', outline: 'none', fontFamily: 'Inter, sans-serif', background: 'white' }}
                    >
                      <option value="">Any time works</option>
                      <option value="morning">Morning (7am – 12pm)</option>
                      <option value="afternoon">Afternoon (12pm – 5pm)</option>
                      <option value="evening">Evening (5pm – 7pm)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your roofing needs, any concerns, or questions..."
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #D1D5DB', borderRadius: 6, fontSize: '0.9375rem', color: '#111827', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      background: '#C8922A',
                      color: 'white',
                      padding: '1rem',
                      borderRadius: 6,
                      fontSize: '1rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.025em',
                    }}
                  >
                    Request Free Estimate →
                  </button>

                  <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', textAlign: 'center' }}>
                    By submitting, you agree to be contacted by Artistic Roofing. We never share your information.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ background: '#1A3C5E', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>Proudly Serving Greater San Antonio & Austin</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>We travel throughout Central and South Texas to serve our customers.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15551234567" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#C8922A', color: 'white', padding: '0.875rem 1.75rem', borderRadius: 4, fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none' }}>
              <Phone size={18} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
