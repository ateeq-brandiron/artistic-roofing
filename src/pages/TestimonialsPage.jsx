import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1l2.2 4.8 5.3.7-3.9 3.7 1 5.3L9 12.8l-4.6 2.7 1-5.3L1.5 6.5l5.3-.7z" fill="rgba(243,167,52,1)" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" style={{ flexShrink: 0, opacity: 0.12 }}>
      <path d="M0 28V16.4C0 7.6 5.2 2 15.6 0L17.2 3.6C12.4 4.8 9.6 7.6 9.6 12H14.4V28H0ZM17.6 28V16.4C17.6 7.6 22.8 2 33.2 0L34.8 3.6C30 4.8 27.2 7.6 27.2 12H32V28H17.6Z" fill="var(--blue)" />
    </svg>
  );
}

const groups = [
  {
    label: '⭐ Short & Sweet Praise',
    reviews: [
      { name: 'Tom S', stars: 5, text: 'Best roofing company in Cochise County, but I am biased.' },
      { name: 'Chase M', stars: 5, text: 'Best place to get a new roof.' },
    ],
  },
  {
    label: '⭐ Quality Roofing Repairs & Lasting Results in Sierra Vista',
    reviews: [
      { name: 'Selina B', stars: 5, text: 'We had Artistic out to repair an area of our roof that a roofer in Tucson botched, and they fit us in despite how busy they are. The employees were friendly, fast, and thorough. Our roof looks great.' },
      { name: 'Andy H', stars: 5, text: 'Excellent work, excellent communication. Thank you. Quote was spot on, no surprises.' },
      { name: 'Allison B', stars: 5, text: 'They addressed roof leaks and determined the source of a window leak (stucco problem) that several others could not find. We were very impressed with their expertise and persistence.' },
    ],
  },
  {
    label: '⭐ Knowledgeable, Reliable, and Professional',
    reviews: [
      { name: 'Rick S', stars: 5, text: 'Harley and his team have proven to be knowledgeable, reliable, and innovative. I have been extremely satisfied in my experiences.' },
      { name: 'Rick D', stars: 5, text: 'Thanks again for the wonderful service; much appreciate your expertise and professionalism. Most of all though, I am grateful for your salt-of-the-earth humanness and warmth.' },
      { name: 'Leah R', stars: 5, text: 'Thank you so much for your relentless efforts and commitment to our clients. I always appreciate the opportunity to work with you.' },
    ],
  },
  {
    label: '⭐ Competitive Pricing & Expert Guidance',
    reviews: [
      { name: 'Steven S', stars: 5, text: 'The best roofing company I have used by far in the Sierra Vista area. The bid price was very competitive and there were no surprise additions. Before deciding, I was able to look at various tile options and multiple felt and battling choices were explained to me so I could make an informed decision. All the employees were courteous and knowledgeable, and I discovered the company trains their employees on the latest roofing methods.' },
    ],
  },
  {
    label: '⭐ Going the Extra Mile',
    reviews: [
      { name: 'Richard C', stars: 5, text: 'The roof is lovely – a great job! They even came back and pointed the line of the old tiles above the punch out, which was not part of the job.' },
      { name: 'David K', stars: 5, text: 'They probably used 4 sheets of plywood and about 50 ft of 2x8 fascia. Instead of piecemaking repairs, they replaced entire boards and also fixed areas where birds were nesting. They did a great job and I would recommend them to anyone.' },
    ],
  },
  {
    label: '⭐ From Start to Finish – A Perfect Experience',
    reviews: [
      { name: 'A & T Carrillo', stars: 5, text: 'My wife and I thank you all for our beautiful new roof. All phases of the job – the estimate, tear-off of the old material, and final installation of the metal roof – were accomplished with professionalism. All crew members were friendly, worked hard, and cleaned up after every visit. A special shout-out to Glen for handling challenging installation locations above and beyond our expectations.' },
    ],
  },
];

function ReviewCard({ review }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--shape-stroke)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
      {/* Stars + quote */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {Array.from({ length: review.stars }).map((_, i) => <StarIcon key={i} />)}
        </div>
        <QuoteIcon />
      </div>
      {/* Text */}
      <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(14px,1.5vw,16px)', lineHeight: '1.75', color: 'var(--color-3)', flex: 1 }}>
        {review.text}
      </p>
      {/* Reviewer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--shape-stroke)', paddingTop: 16 }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 15, color: '#fff' }}>
            {review.name.charAt(0)}
          </span>
        </div>
        <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 15, color: '#000' }}>{review.name}</span>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 420, backgroundImage: 'url(/img/frame-2147223464.png)', backgroundSize: 'cover', backgroundPosition: '50% 35%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: 120 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', width: '100%', padding: '0 clamp(20px,5vw,76px) 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>▶</span>
            <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>TESTIMONIALS</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', lineHeight: 1.15, color: '#fff', maxWidth: 700 }}>
            Artistic Roofing Systems: Roofing Company Reviews in Sierra Vista AZ
          </h1>
        </div>
      </section>

      <ScrollBar />

      {/* Intro */}
      <section style={{ background: 'var(--shape-fill)', padding: 'clamp(36px,5vw,64px) clamp(20px,5vw,76px)' }}>
        <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(15px,2vw,18px)', lineHeight: '1.75', color: 'var(--color-3)', textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          These roofing company reviews in Sierra Vista AZ highlight the quality craftsmanship, professionalism, and long-term value we provide. Whether it's a new roof installation, leak repair, seamless gutters, or custom patio covers, our customers share why they continue to recommend Artistic Roofing Systems for dependable service and lasting results.
        </p>
      </section>

      {/* Review groups */}
      <section style={{ background: '#fff', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,76px)' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          {groups.map((group, gi) => (
            <div key={gi}>
              {/* Group label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 32, height: 32, background: 'var(--shape-fill)', border: '1px solid var(--shape-stroke)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                  ⭐
                </div>
                <h2 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 'clamp(16px,2vw,19px)', color: '#000' }}>
                  {group.label.replace('⭐ ', '')}
                </h2>
              </div>
              {/* Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 20 }}>
                {group.reviews.map((r, ri) => <ReviewCard key={ri} review={r} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', backgroundImage: 'url(/img/box.png)', backgroundSize: 'cover', backgroundPosition: '50% 50%', padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,76px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.60)' }} />
        <div style={{ position: 'relative', maxWidth: 740, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(26px,4vw,46px)', lineHeight: 1.2, color: '#fff' }}>
            Why Homeowners Trust Artistic Roofing Systems
          </h2>
          <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(15px,2vw,19px)', lineHeight: '1.75', color: 'rgba(255,255,255,0.88)' }}>
            These roofing company reviews in Sierra Vista AZ highlight the dedication, expertise, and customer-first approach that define Artistic Roofing Systems. From dependable roof installations to custom gutters and patio covers, our team is proud to deliver solutions that protect and enhance your property.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 28px', background: 'var(--blue)', borderRadius: 10, fontFamily: 'Outfit', fontWeight: 600, fontSize: 17, color: '#fff' }}>
            Request a Free Roofing Quote Today
            <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
          </Link>
        </div>
      </section>
    </>
  );
}
