import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ClipboardList, FileText, Hammer, CheckSquare, ThumbsUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Schedule Your Free Inspection',
    desc: 'Call us or fill out our online form. We\'ll schedule a convenient time for one of our certified roof inspectors to assess your roof — completely free of charge.',
    detail: [
      'Available 7 days a week',
      'Typically scheduled within 24-48 hours',
      'No obligation or pressure',
      'Complete 21-point roof assessment',
    ],
  },
  {
    num: '02',
    icon: ClipboardList,
    title: 'Thorough Roof Assessment',
    desc: 'Our certified inspector conducts a comprehensive evaluation of your roof, attic, gutters, and flashing. We document everything with photos and detailed notes.',
    detail: [
      'Shingle condition and granule loss',
      'Flashing and sealing integrity',
      'Attic ventilation assessment',
      'Gutter and drainage evaluation',
    ],
  },
  {
    num: '03',
    icon: FileText,
    title: 'Transparent Quote & Materials',
    desc: 'We present a detailed, itemized estimate showing exactly what work is needed, what materials we\'ll use, and a clear breakdown of all costs. No hidden fees.',
    detail: [
      'Line-by-line cost breakdown',
      'Multiple material options presented',
      'Insurance claim assistance if applicable',
      'Written warranty terms included',
    ],
  },
  {
    num: '04',
    icon: Hammer,
    title: 'Expert Installation',
    desc: 'Our certified crew arrives on schedule, protects your property, and installs your new roof with precision. Most residential roofs are completed in a single day.',
    detail: [
      'Property protection for landscaping & surfaces',
      'Same-day completion for most homes',
      'Daily clean-up and magnetic nail sweep',
      'Ongoing quality checks during installation',
    ],
  },
  {
    num: '05',
    icon: CheckSquare,
    title: 'Final Quality Inspection',
    desc: 'Upon completion, our project manager performs a detailed inspection to ensure every detail meets our exacting standards before we consider the job done.',
    detail: [
      'Full perimeter inspection',
      'Flashing and sealing verification',
      'Ventilation confirmation',
      'Complete site cleanup',
    ],
  },
  {
    num: '06',
    icon: ThumbsUp,
    title: 'Your Satisfaction & Warranty',
    desc: 'We walk through the completed project with you, answer all questions, and provide your warranty documentation. Then we follow up to ensure your ongoing satisfaction.',
    detail: [
      'Customer walkthrough & sign-off',
      'Lifetime workmanship warranty issued',
      'Manufacturer material warranty registered',
      '30-day follow-up call',
    ],
  },
];

const faqs = [
  { q: 'How long does a roof replacement take?', a: 'Most residential roof replacements are completed in a single day. Larger or more complex projects may take 2-3 days. We\'ll give you an accurate timeline during the estimate phase.' },
  { q: 'Do you help with insurance claims?', a: 'Yes! We work directly with all major insurance companies and help you navigate the claims process from inspection to final settlement. We\'re experienced in documenting storm and hail damage.' },
  { q: 'What materials do you use?', a: 'We use premium, manufacturer-certified materials from top brands including GAF, Owens Corning, and CertainTeed. We\'ll present multiple options to match your budget and home\'s needs.' },
  { q: 'Do I need to be home during the installation?', a: 'While it\'s not required, we recommend being present at the start and end of the project. We\'ll keep you informed throughout the day and do a final walkthrough together.' },
  { q: 'What warranty do you provide?', a: 'We offer a lifetime workmanship warranty on all installations, backed by manufacturer warranties on materials that can range from 25 years to lifetime depending on the product selected.' },
];

export default function Process() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F2741, #1A3C5E)', padding: '10rem 2rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>How It Works</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Our Simple,{' '}
            <em style={{ color: '#C8922A' }}>Transparent</em>
            <br />Roofing Process
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: 580, lineHeight: 1.75 }}>
            We've designed a straightforward process to make your roofing experience stress-free. Here's exactly what to expect when you work with Artistic Roofing.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                  gap: '3rem',
                  alignItems: 'center',
                  flexDirection: i % 2 === 1 ? 'row-reverse' : 'row',
                }}
              >
                {/* Visual */}
                <div style={{ order: i % 2 === 1 ? 1 : 0 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #1A3C5E, #2A5A8C)',
                    borderRadius: 12,
                    padding: '3rem 2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontFamily: 'Playfair Display, serif', fontSize: '6rem', fontWeight: 700, color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}>{step.num}</div>
                    <div style={{ position: 'relative' }}>
                      <div style={{ width: 64, height: 64, background: 'rgba(200,146,42,0.2)', border: '2px solid rgba(200,146,42,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <step.icon size={28} color="#C8922A" />
                      </div>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Step {step.num}</h3>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                        {step.detail.map((d, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)' }}>
                            <span style={{ color: '#C8922A', flexShrink: 0, marginTop: '0.125rem' }}>✓</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div style={{ order: i % 2 === 1 ? 0 : 1 }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem', fontWeight: 700, color: 'rgba(26,60,94,0.08)', lineHeight: 1, display: 'block', marginBottom: '-1rem' }}>{step.num}</span>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#1A3C5E', marginBottom: '1rem', lineHeight: 1.2 }}>{step.title}</h2>
                  <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: 1.8 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 2rem', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '0.75rem' }}>Common Questions</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1A3C5E' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 8, padding: '1.75rem 2rem', border: '1px solid #E5E7EB' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#1A3C5E', marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: '#1A3C5E' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>Start with a free, no-obligation inspection. We'll assess your roof and give you an honest recommendation.</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#C8922A', color: 'white', padding: '1rem 2.5rem', borderRadius: 4, fontSize: '1rem', fontWeight: 700, textDecoration: 'none' }}>
            Schedule Free Inspection <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
