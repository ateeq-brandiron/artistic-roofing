import { useState } from 'react';

function SectionLabel({ text }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 9,
      padding: 9, background: '#ffffff',
      borderRadius: 27, boxShadow: '0px 1.82px 1.82px rgba(0,0,0,0.05)',
    }}>
      <img src="/img/vector-stroke-5.svg" alt="" style={{ width: 14.55, height: 14.55 }} />
      <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: 12.7, letterSpacing: '0.035em', color: 'var(--blue)', whiteSpace: 'nowrap' }}>{text}</span>
    </div>
  );
}

const faqs = [
  {
    q: 'What services does Artistic Roofing provide in Sierra Vista AZ?',
    a: 'Artistic Roofing provides complete roofing and gutter solutions for residential and light commercial properties. Our services include new construction roofing, roof repairs, replacements, coatings, maintenance, and seamless 5" and 6" gutter installations. We work with shingles, tiles, metal, and flat roofs using materials from trusted manufacturers such as Tamko, GAF, Owens Corning, Westlake, and Eagle. Every project is completed by licensed professionals who are TRI Certified and trained in OSHA safety standards to ensure reliable workmanship and lasting results.',
    defaultOpen: true,
  },
  {
    q: 'How often should my roof be inspected or maintained?',
    a: 'We recommend roof inspections every 3 to 4 years for standard roofs. If your roof is older than 15 years, annual checkups are advisable. Regular inspections help catch small issues before they become costly repairs and extend the overall life of your roofing system.',
  },
  {
    q: 'How do I know if my roof needs to be replaced instead of repaired?',
    a: 'Key signs that replacement may be needed include widespread shingle cracking or curling, significant granule loss, multiple persistent leaks, sagging decking, or a roof that is 20–30+ years old. Our free inspection will provide an honest assessment of whether repair or replacement is the right choice for your situation.',
  },
  {
    q: 'Do you install gutters along with roofing?',
    a: 'Yes! We offer seamless 5" and 6" gutter systems that are custom-fabricated on-site. Our gutter services include installation, cleaning, and repairs. We can coordinate gutter work alongside any roofing project for a complete, weather-tight system.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{
      width: '100%',
      padding: '75px 80px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 64,
      flexWrap: 'wrap',
    }}>
      {/* Left — heading */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, maxWidth: 407, flex: '0 0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SectionLabel text="FAQ'S" />
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, color: '#000' }}>
            Frequently Asked Questions About Roofing and Gutters
          </h2>
        </div>
      </div>

      {/* Right — accordion */}
      <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              style={{
                background: isOpen ? 'var(--shape-stroke)' : 'var(--shape-fill)',
                border: '1px solid var(--neutral-100)',
                borderRadius: 8,
                padding: 24,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 24, lineHeight: '32px', color: 'var(--neutral-900)', flex: 1 }}>
                  {faq.q}
                </h3>
                <img
                  src={isOpen ? '/img/heroicons-solid-minus.svg' : '/img/heroicons-solid-plus-2.svg'}
                  alt=""
                  style={{ width: 24, height: 24, flexShrink: 0 }}
                />
              </div>
              {isOpen && (
                <p style={{ marginTop: 24, fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 18, lineHeight: '26px', color: 'var(--neutral-600)' }}>
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
