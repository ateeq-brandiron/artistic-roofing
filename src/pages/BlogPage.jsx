import { Link } from 'react-router-dom';
import ScrollBar from '../components/ScrollBar';
import blogPosts from '../data/blogPosts';

const CATEGORY_COLORS = {
  'Roofing Tips':      { bg: '#E8F8FF', color: '#0080C6' },
  'Maintenance':       { bg: '#E8F8FF', color: '#0080C6' },
  'Monsoon Season':    { bg: '#FFF3E0', color: '#E65100' },
  'Project Spotlight': { bg: '#E8F5E9', color: '#2E7D32' },
  'Company News':      { bg: '#F3E5F5', color: '#6A1B9A' },
  'Gutters':           { bg: '#E8F8FF', color: '#0080C6' },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function CategoryPill({ cat }) {
  const style = CATEGORY_COLORS[cat] || { bg: '#E8F8FF', color: '#0080C6' };
  return (
    <span style={{
      display: 'inline-block',
      padding: '4px 12px',
      background: style.bg,
      color: style.color,
      borderRadius: 100,
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.06em',
    }}>
      {cat.toUpperCase()}
    </span>
  );
}

function PostCard({ post, featured = false }) {
  return (
    <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <article style={{
        background: '#fff',
        borderRadius: 12,
        border: '1px solid var(--shape-stroke)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
        className="card-hover"
      >
        {/* Image */}
        <div style={{
          width: '100%',
          height: featured ? 340 : 220,
          background: 'linear-gradient(135deg, var(--shape-fill) 0%, #c8e8f8 100%)',
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          flexShrink: 0,
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: 16, left: 16 }}>
            <CategoryPill cat={post.category} />
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: 13, color: '#888' }}>
            {formatDate(post.date)}
            {post.author && <span style={{ margin: '0 8px' }}>·</span>}
            {post.author}
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: featured ? 900 : 700,
            fontSize: featured ? 'clamp(22px, 2.5vw, 30px)' : 'clamp(18px, 2vw, 22px)',
            lineHeight: '120%',
            color: '#000',
            margin: 0,
          }}>
            {post.title}
          </h2>

          <p style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 400,
            fontSize: 15,
            lineHeight: '160%',
            color: 'var(--color-3)',
            margin: 0,
            flex: 1,
          }}>
            {post.excerpt}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
            <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 14, color: 'var(--blue)' }}>
              Read Article
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H5M13 1v8" stroke="#0080C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const [featured, ...rest] = sorted;

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" style={{
        position: 'relative',
        width: '100%',
        minHeight: 'max(580px, 56.25vw)',
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.00) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.78) 100%), url(/img/homepage/Home%20Hero.png)',
        backgroundSize: '100% auto',
        backgroundPosition: 'center top',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 'clamp(20px,5vw,76px)',
        paddingBottom: 'clamp(48px,5vw,80px)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, alignSelf: 'stretch', marginBottom: 10 }}>
          <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M1 1l6 5.5L1 12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>BLOG</span>
        </div>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(28px, 4vw, 48px)',
          lineHeight: '118%',
          color: '#fff',
          margin: 0,
          maxWidth: 680,
        }}>
          Roofing Tips, Guides & News from Artistic Roofing Systems
        </h1>
      </section>

      {/* ── Ticker ── */}
      <ScrollBar />

      {/* ── Intro ── */}
      <section style={{
        background: 'var(--shape-fill)',
        padding: 'clamp(40px,5vw,60px) clamp(20px,5vw,76px)',
        boxSizing: 'border-box',
      }}>
        <p style={{
          fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(16px,2vw,22px)',
          lineHeight: '150%', color: '#000',
          textAlign: 'center', maxWidth: 860, margin: '0 auto',
        }}>
          Expert insights on roofing, gutters, and home protection in{' '}
          <span style={{ fontWeight: 600, color: 'var(--blue)' }}>Sierra Vista & Cochise County</span>.
          Browse guides on monsoon preparation, material comparisons, maintenance tips, and project spotlights from our team.
        </p>
      </section>

      {/* ── Posts ── */}
      <section style={{
        background: '#fff',
        padding: 'clamp(48px,5vw,80px) clamp(20px,5vw,76px)',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: 1290, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>

          {/* Featured post */}
          {featured && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span style={{
                  fontFamily: 'Outfit', fontWeight: 600, fontSize: 12,
                  letterSpacing: '0.08em', color: 'var(--blue)',
                  background: 'var(--shape-fill)',
                  border: '1px solid var(--shape-stroke)',
                  padding: '5px 14px', borderRadius: 100,
                }}>LATEST POST</span>
              </div>
              <PostCard post={featured} featured />
            </div>
          )}

          {/* Divider */}
          {rest.length > 0 && (
            <div style={{ height: 1, background: 'var(--shape-stroke)' }} />
          )}

          {/* Remaining posts grid */}
          {rest.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 28,
            }}
              className="blog-grid"
            >
              {rest.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {sorted.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-3)', fontFamily: 'Outfit' }}>
              No posts yet — check back soon!
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 clamp(20px,5vw,75px) clamp(48px,5vw,75px)', boxSizing: 'border-box' }}>
        <section style={{
          display: 'flex', width: '100%', maxWidth: 1290,
          padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,100px)',
          flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          gap: 24, borderRadius: 10,
          background: `linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 100%), url(/img/process/DJI_0068.jpg) lightgray 50% / cover no-repeat`,
          boxSizing: 'border-box', textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: 'clamp(26px,4vw,48px)', lineHeight: '120%', color: '#fff', margin: 0,
          }}>
            Ready for a Free Roofing Estimate?
          </h2>
          <p style={{
            fontFamily: 'Outfit', fontWeight: 400, fontSize: 18,
            lineHeight: '160%', color: 'rgba(255,255,255,0.9)',
            maxWidth: 620, margin: 0,
          }}>
            Our licensed, bonded, and insured team serves Sierra Vista and all of Cochise County. Request your free estimate today.
          </p>
          <Link to="/contact" className="btn-blue" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '16px 32px', background: 'var(--blue)', borderRadius: 10,
            fontFamily: 'Outfit', fontWeight: 600, fontSize: 17,
            color: '#fff', letterSpacing: '0.02em', marginTop: 8, textDecoration: 'none',
          }}>
            Request a Free Estimate
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"><path d="M1 7h14M9 1l6 6-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </section>
      </div>
    </>
  );
}
