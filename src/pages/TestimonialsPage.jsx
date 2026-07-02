import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';

const groups = [
  {
    icon: '/img/testimonials/Vector-5.svg',
    label: 'Short & Sweet Praise',
    cols: 2,
    reviews: [
      { name: 'Tom S', stars: 5, text: 'Best roofing company in Cochise County, but I am biased.' },
      { name: 'Chase M', stars: 5, text: 'Best place to get a new roof.' },
    ],
  },
  {
    icon: '/img/testimonials/Vector-3.svg',
    label: 'Quality Roofing Repairs & Lasting Results in Sierra Vista',
    cols: 3,
    reviews: [
      { name: 'Selina B', stars: 5, text: 'We had Artistic out to repair an area of our roof that a roofer in Tucson botched, and they fit us in despite how busy they are. The employees were friendly, fast, and thorough. Our roof looks great.' },
      { name: 'Andy H', stars: 5, text: 'Excellent work, excellent communication. Thank you. Quote was spot on, no surprises.' },
      { name: 'Allison B', stars: 5, text: 'They addressed roof leaks and determined the source of a window leak (stucco problem) that several others could not find. We were very impressed with their expertise and persistence.' },
    ],
  },
  {
    icon: '/img/testimonials/Vector-4.svg',
    label: 'Knowledgeable, Reliable, and Professional',
    cols: 3,
    reviews: [
      { name: 'Rick S', stars: 5, text: 'Harley and his team have proven to be knowledgeable, reliable, and innovative. I have been extremely satisfied in my experiences.' },
      { name: 'Rick D', stars: 5, text: 'Thanks again for the wonderful service; much appreciate your expertise and professionalism. Most of all though, I am grateful for your salt-of-the-earth humanness and warmth.' },
      { name: 'Leah R', stars: 5, text: 'Thank you so much for your relentless efforts and commitment to our clients. I always appreciate the opportunity to work with you.' },
    ],
  },
  {
    icon: '/img/testimonials/Vector-1.svg',
    label: 'Competitive Pricing & Expert Guidance',
    cols: 1,
    reviews: [
      { name: 'Steven S', stars: 5, text: 'The best roofing company I have used by far in the Sierra Vista area. The bid price was very competitive and there were no surprise additions. Before deciding, I was able to look at various tile options and multiple felt and battling choices were explained to me so I could make an informed decision. All the employees were courteous and knowledgeable, and I discovered the company trains their employees on the latest roofing methods.' },
    ],
  },
  {
    icon: '/img/testimonials/Vector-2.svg',
    label: 'Going the Extra Mile',
    cols: 2,
    reviews: [
      { name: 'Richard C', stars: 5, text: 'The roof is lovely – a great job! They even came back and pointed the line of the old tiles above the punch out, which was not part of the job.' },
      { name: 'David K', stars: 5, text: 'They probably used 4 sheets of plywood and about 50 ft of 2x8 fascia. Instead of piecemaking repairs, they replaced entire boards and also fixed areas where birds were nesting. They did a great job and I would recommend them to anyone.' },
    ],
  },
  {
    icon: '/img/testimonials/Vector.svg',
    label: 'From Start to Finish – A Perfect Experience',
    cols: 1,
    reviews: [
      { name: 'A & T Carrillo', stars: 5, text: 'My wife and I thank you all for our beautiful new roof. All phases of the job – the estimate, tear-off of the old material, and final installation of the metal roof – were accomplished with professionalism. All crew members were friendly, worked hard, and cleaned up after every visit. A special shout-out to Glen for handling challenging installation locations above and beyond our expectations.' },
    ],
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: count }).map((_, i) => (
        <img key={i} src="/img/testimonials/Star 1.svg" alt="" style={{ width: 20, height: 20 }} />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      border: '1px solid var(--shape-stroke)',
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxSizing: 'border-box',
    }}>
      {/* Stars + Quote icon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Stars count={review.stars} />
        <img src="/img/testimonials/quote.svg" alt="" style={{ width: 40, height: 32, flexShrink: 0 }} />
      </div>
      {/* Review text */}
      <p style={{
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: '120%',
        color: '#464646',
        margin: 0,
        flex: 1,
      }}>
        {review.text}
      </p>
      {/* Reviewer */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        borderTop: '1px solid var(--shape-stroke)',
        paddingTop: 16,
      }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'var(--blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 15, color: '#fff' }}>
            {review.name.charAt(0)}
          </span>
        </div>
        <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 15, color: '#000' }}>
          {review.name}
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: 819,
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.00) 36.6%, rgba(0,0,0,0.64) 71.27%, rgba(0,0,0,0.91) 100%), url(/img/testimonials/Frame%202147223464.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
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
          <img src="/img/testimonials/caret-right.svg" alt="" style={{ width: 8, height: 13 }} />
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>TESTIMONIALS</span>
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
          Artistic Roofing Systems: Roofing Company Reviews in Sierra Vista AZ
        </h1>
      </section>

      {/* ── Ticker ── */}
      <ScrollBar />

      {/* ── Intro ── */}
      <section style={{
        background: 'var(--shape-fill)',
        padding: '60px 76px',
        boxSizing: 'border-box',
      }}>
        <p style={{
          fontFamily: 'Outfit', fontWeight: 400, fontSize: 24,
          lineHeight: '150%', color: '#000',
          textAlign: 'center', width: 1038, margin: '0 auto',
        }}>
          These roofing company reviews in Sierra Vista AZ highlight the quality craftsmanship, professionalism, and long-term value we provide. Whether it's a new roof installation, leak repair, seamless gutters, or custom patio covers, our customers share why they continue to recommend{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Artistic Roofing Systems</span>
          {' '}for dependable service and lasting results.
        </p>
      </section>

      {/* ── Review Groups ── */}
      <section style={{ background: '#fff', padding: '75px 76px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1290, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          {groups.map((group, gi) => (
            <div key={gi}>
              {/* Group header */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    background: 'var(--shape-fill)',
                    border: '1px solid var(--shape-stroke)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <img src={group.icon} alt="" style={{ width: 18, height: 18, objectFit: 'contain' }} />
                  </div>
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 800,
                    fontSize: 30,
                    lineHeight: '120%',
                    color: '#000',
                    margin: 0,
                  }}>
                    {group.label}
                  </h2>
                </div>
                <div style={{ width: '100%', height: 1, background: 'var(--shape-stroke)' }} />
              </div>

              {/* Cards grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: group.cols === 1
                  ? '1fr'
                  : group.cols === 2
                    ? 'repeat(2, 1fr)'
                    : 'repeat(3, 1fr)',
                gap: 20,
              }}>
                {group.reviews.map((r, ri) => <ReviewCard key={ri} review={r} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 75px 75px', boxSizing: 'border-box' }}>
        <section style={{
          display: 'flex',
          width: 1290,
          padding: '80px 100px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 24,
          borderRadius: 10,
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 100%), url(/img/testimonials/Box.png)`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#ccc',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: 48, lineHeight: '120%', color: '#fff', margin: 0,
          }}>
            Why Homeowners Trust Artistic Roofing Systems
          </h2>
          <p style={{
            fontFamily: 'Outfit', fontWeight: 400, fontSize: 18,
            lineHeight: '160%', color: 'rgba(255,255,255,0.9)',
            maxWidth: 740, margin: 0,
          }}>
            These roofing company reviews in Sierra Vista AZ highlight the dedication, expertise, and customer-first approach that define Artistic Roofing Systems. From dependable roof installations to custom gutters and patio covers, our team is proud to deliver solutions that protect and enhance your property.
          </p>
          <Link to="/contact" className="btn-blue" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '16px 32px',
            background: 'var(--blue)',
            borderRadius: 10,
            fontFamily: 'Outfit', fontWeight: 600, fontSize: 17,
            color: '#fff', letterSpacing: '0.02em',
            marginTop: 8,
            textDecoration: 'none',
          }}>
            Request a Free Roofing Quote Today
            <img src="/img/process/icons/Icon-4.svg" alt="" style={{ width: 16, height: 14 }} />
          </Link>
        </section>
      </div>
    </>
  );
}
