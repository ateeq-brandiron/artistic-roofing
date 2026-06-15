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

const reviews = [
  {
    stars: 5,
    text: 'Artistic Roofing did a fantastic job on our replacement roof. Professional, fast, and detail-oriented.',
    photo: '/img/rectangle-8.png',
    name: 'Sarah M., Sierra Vista',
    company: 'ROOTINGS ALORE',
  },
  {
    stars: 5,
    text: 'Best roofing company in Cochise County. Honest, reliable, and skilled.',
    photo: '/img/rectangle-8-1.png',
    name: 'Tom S.',
    company: 'HOUSING ARTS',
  },
];

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 1l2.39 5.26 5.78.5-4.42 3.93 1.4 5.67L10 13.27l-5.15 3.09 1.4-5.67L1.83 6.76l5.78-.5L10 1z" fill="rgba(243,167,52,1)" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="gallery" style={{
      width: '100%',
      background: 'var(--shape-fill)',
      padding: '75px 100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 30,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: '100%', maxWidth: 1290 }}>
        <SectionLabel text="TESTIMONIALS" />
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, textAlign: 'center', color: '#000' }}>
          What Our Clients Say
        </h2>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: 20, lineHeight: '24px', textAlign: 'center', color: 'var(--color-3)', maxWidth: 717 }}>
          Don't take our word for it, see what our clients say
        </p>
      </div>

      {/* Cards over background image */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: 1290,
        borderRadius: 10, overflow: 'hidden',
      }}>
        <div style={{
          minHeight: 427,
          backgroundImage: 'url(/img/testimonials.png)',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          display: 'flex',
          alignItems: 'center',
          gap: 30,
          padding: '30px 20px 80px',
          flexWrap: 'wrap',
        }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              flex: 1, minWidth: 280,
              minHeight: 302,
              background: '#ffffff',
              borderRadius: 30,
              padding: 35,
              boxShadow: '0px 10px 25px 0px rgba(0,0,0,0.07)',
              display: 'flex',
              flexDirection: 'column',
              gap: 25,
              overflow: 'hidden',
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 10 }}>
                {Array.from({ length: r.stars }).map((_, j) => <StarIcon key={j} />)}
              </div>

              {/* Review text */}
              <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 22, lineHeight: '29px', color: 'var(--color-3)', flex: 1 }}>
                {r.text}
              </p>

              {/* Client info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 25 }}>
                <img src={r.photo} alt={r.name} style={{ width: 75, height: 75, objectFit: 'cover', borderRadius: 4 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: 21, color: 'var(--color-3)', lineHeight: 'normal' }}>{r.name}</span>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 15, letterSpacing: '2.25px', color: '#000', lineHeight: 'normal' }}>{r.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots nav overlay */}
        <img src="/img/group-17.png" alt="" style={{ position: 'absolute', bottom: 15, left: '50%', transform: 'translateX(-50%)', width: 402, height: 50, pointerEvents: 'none' }} />
      </div>
    </section>
  );
}
