import { useState } from 'react';

const faqs = [
  {
    q: 'What services does Artistic Roofing provide in Sierra Vista AZ?',
    a: 'Artistic Roofing provides complete roofing and gutter solutions for residential and light commercial properties. Our services include new construction roofing, roof repairs, replacements, coatings, maintenance, and seamless 5" and 6" gutter installations. We work with shingles, tiles, and metal roofing systems, as well as select low-slope applications. For flat and low-slope roofs, our team specializes in modified bitumen systems and compatible coatings, ensuring reliable performance in Arizona\'s climate. Every project is completed by trained and certified professionals to ensure reliable workmanship and lasting results.',
  },
  {
    q: 'How often should my roof be inspected or maintained?',
    a: 'We recommend scheduling a roof inspection every 3 to 4 years, and annually after your roof reaches 15 years of age. Tile roofs should also be checked for lifted tiles or deteriorated underlayment, especially following Arizona\'s intense monsoon seasons. Proactive maintenance helps prevent leaks, extends the lifespan of your roof, and protects your investment over time.',
  },
  {
    q: 'How do I know if my roof needs to be replaced instead of repaired?',
    a: 'Signs that a roof may need replacement include curling or wind-blown shingles, visible granule loss, cracked or slipped tiles, and water spots in your attic. For tile roofs, underlayment deterioration can occur even when tiles appear intact. Our team performs thorough evaluations to determine whether targeted repairs or a full replacement will provide the most dependable long-term solution for your home or business.',
  },
  {
    q: 'Do you install gutters along with roofing?',
    a: 'Yes. Artistic Roofing installs seamless aluminum gutters as part of our complete roofing solutions. Properly installed gutters help manage rainwater and reduce runoff issues around your property. We design each system to complement your roofline and assist with efficient water control without overpromising results. Gutters can be customized by size and color to match your home or business.',
  },
  {
    q: 'Do you work on all types of flat roofs?',
    a: `Not all flat roofing systems are the same, and Artistic Roofing focuses on specific low-slope applications that perform well in Arizona's climate. Our team specializes in modified bitumen roofing systems, which are known for their durability, weather resistance, and long-term reliability when properly installed and maintained.\nFor flat and low-slope roofs, we also provide Polyglass-certified coatings designed to extend the life of compatible roofing systems, improve waterproofing, and support energy efficiency. These services are ideal for maintaining and protecting modified bitumen roofs over time.\nBecause there are multiple types of flat roofing materials, not every system is a fit for our services. Our team will evaluate your roof and provide clear recommendations based on the structure, condition, and compatibility of your existing system. This ensures you receive the right solution for your property without unnecessary work or confusion.\nIf you're unsure what type of flat roof you have, we're happy to take a look and walk you through your options.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{
      width: '100%',
      background: '#fff',
      padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,80px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 64,
      flexWrap: 'wrap',
      boxSizing: 'border-box',
    }}>

      {/* Left – label + heading */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 380, flex: '0 0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <img src="/img/Vector (Stroke).svg" alt="" style={{ width: 16, height: 16 }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', color: 'var(--blue)' }}>FAQ'S</span>
        </div>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(36px,4vw,56px)',
          lineHeight: 1.15,
          color: '#000',
          margin: 0,
        }}>
          Frequently Asked Questions About Roofing and Gutters
        </h2>
      </div>

      {/* Right – accordion */}
      <div style={{ flex: 1, minWidth: 280, maxWidth: 860, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                background: 'var(--shape-fill)',
                borderRadius: 12,
                padding: '24px 28px',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: isOpen ? 700 : 400,
                  fontSize: 'clamp(18px,2vw,24px)',
                  lineHeight: 1.35,
                  color: '#000',
                  margin: 0,
                  flex: 1,
                }}>
                  {faq.q}
                </h3>
                <span style={{ fontSize: 28, color: 'var(--color-3)', lineHeight: 1, flexShrink: 0, marginTop: 2, userSelect: 'none' }}>
                  {isOpen ? '−' : '+'}
                </span>
              </div>

              {isOpen && (
                <div style={{ marginTop: 20 }}>
                  {faq.a.split('\n').map((para, j) => (
                    <p key={j} style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 400,
                      fontSize: 'clamp(15px,1.5vw,18px)',
                      lineHeight: '1.7',
                      color: 'var(--color-3)',
                      margin: j > 0 ? '12px 0 0' : 0,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
