import { useState } from 'react';

const allReviews = [
  {
    stars: 5,
    text: 'Artistic Roofing did a fantastic job on our replacement roof. Professional, fast, and detail-oriented',
    photo: '/img/testimonials/source/57f0ffb0289abd7a4ed15a1f27a837ab2507dc33.jpg',
    name: 'Sarah M.',
    location: 'SIERRA VISTA',
  },
  {
    stars: 5,
    text: 'Best roofing company in Cochise County. Honest, reliable, and skilled',
    photo: '/img/testimonials/source/0bf4306e31fb53c1da8c053abfe25cf657432806.jpg',
    name: 'Tom S',
    location: 'HOUSING ARTS',
  },
  {
    stars: 5,
    text: 'They addressed roof leaks and determined the source of a window leak that several others could not find.',
    photo: '/img/testimonials/Rectangle 8.png',
    name: 'Allison B.',
    location: 'SIERRA VISTA',
  },
  {
    stars: 5,
    text: 'Excellent work, excellent communication. Quote was spot on, no surprises.',
    photo: '/img/testimonials/Rectangle 8-1.png',
    name: 'Andy H.',
    location: 'COCHISE COUNTY',
  },
  {
    stars: 5,
    text: 'Thank you for the wonderful service; much appreciate your expertise and professionalism.',
    photo: '/img/testimonials/Rectangle 8.png',
    name: 'Rick D.',
    location: 'SIERRA VISTA',
  },
];

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l2.9 6.26 6.9.6-5.3 4.72 1.68 6.8L12 16.9l-6.18 3.48 1.68-6.8L2.2 8.86l6.9-.6L12 2z" fill="rgba(243,167,52,1)" />
    </svg>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(allReviews.length / 2);
  const visible = allReviews.slice(page * 2, page * 2 + 2);

  return (
    <section style={{
      width: '100%',
      background: 'var(--shape-fill)',
      padding: 'clamp(48px,6vw,75px) clamp(24px,5vw,75px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      boxSizing: 'border-box',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '7px 16px',
          background: '#fff',
          borderRadius: 100,
          boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
        }}>
          <img src="/img/testimonials/Vector (Stroke).svg" alt="" style={{ width: 15, height: 15 }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: 'var(--blue)' }}>TESTIMONIALS</span>
        </div>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(32px,5vw,56px)',
          lineHeight: 1.15,
          color: '#000',
          textAlign: 'center',
          margin: 0,
        }}>
          Customer Testimonials
        </h2>
      </div>

      {/* Slider container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 1290,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <div style={{
          backgroundImage: 'url(/img/testimonials/Testimonials.png)',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          padding: 'clamp(24px,3vw,40px) clamp(16px,3vw,40px) 80px',
          display: 'flex',
          alignItems: 'stretch',
          gap: 24,
        }}>
          {visible.map((r, i) => (
            <div key={i} style={{
              flex: 1,
              minWidth: 260,
              background: '#fff',
              borderRadius: 20,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 6 }}>
                {Array.from({ length: r.stars }).map((_, j) => <StarIcon key={j} />)}
              </div>

              {/* Text */}
              <p style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px,2vw,20px)',
                lineHeight: '1.5',
                color: 'var(--color-3)',
                margin: 0,
                flex: 1,
              }}>
                {r.text}
              </p>

              {/* Reviewer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <img
                  src={r.photo}
                  alt={r.name}
                  style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 20, color: 'var(--color-3)', lineHeight: 1.2 }}>
                    {r.name}
                  </span>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', color: '#000' }}>
                    {r.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 64,
          background: 'rgba(0,0,0,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}>
          {/* Left arrow */}
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 8, opacity: page === 0 ? 0.4 : 1 }}
          >
            <img src="/img/testimonials/chevron-down.svg" alt="Previous" style={{ width: 24, height: 24, transform: 'rotate(90deg)', filter: 'brightness(0) invert(1)' }} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 10 }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: 10, height: 10,
                  borderRadius: '50%',
                  background: i === page ? '#fff' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 8, opacity: page === totalPages - 1 ? 0.4 : 1 }}
          >
            <img src="/img/testimonials/chevron-down-1.svg" alt="Next" style={{ width: 24, height: 24, transform: 'rotate(-90deg)', filter: 'brightness(0) invert(1)' }} />
          </button>
        </div>
      </div>

    </section>
  );
}
