import { useParams, Link, Navigate } from 'react-router-dom';
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

function BodyBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 700,
          fontSize: 'clamp(22px, 2.5vw, 28px)', lineHeight: '120%',
          color: '#000', margin: '40px 0 16px',
        }}>{block.text}</h2>
      );
    case 'h3':
      return (
        <h3 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 700,
          fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: '120%',
          color: '#000', margin: '28px 0 12px',
        }}>{block.text}</h3>
      );
    case 'p':
      return (
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontWeight: 400,
          fontSize: 'clamp(16px, 1.6vw, 18px)', lineHeight: '170%',
          color: 'var(--color-3)', margin: '0 0 20px',
        }}>{block.text}</p>
      );
    case 'ul':
      return (
        <ul style={{ margin: '0 0 20px', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 400,
              fontSize: 'clamp(16px, 1.6vw, 18px)', lineHeight: '160%',
              color: 'var(--color-3)',
            }}>{item}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol style={{ margin: '0 0 20px', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 400,
              fontSize: 'clamp(16px, 1.6vw, 18px)', lineHeight: '160%',
              color: 'var(--color-3)',
            }}>{item}</li>
          ))}
        </ol>
      );
    case 'tip':
      return (
        <div style={{
          background: 'var(--shape-fill)',
          border: '1px solid var(--shape-stroke)',
          borderLeft: '4px solid var(--blue)',
          borderRadius: '0 8px 8px 0',
          padding: '18px 24px',
          margin: '24px 0',
          display: 'flex', gap: 14, alignItems: 'flex-start',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="10" cy="10" r="9" stroke="#0080C6" strokeWidth="1.5"/>
            <path d="M10 9v5M10 6.5v.5" stroke="#0080C6" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p style={{
            fontFamily: 'Outfit, sans-serif', fontWeight: 500,
            fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: '160%',
            color: '#000', margin: 0,
          }}>{block.text}</p>
        </div>
      );
    case 'img':
      return (
        <figure style={{ margin: '32px 0' }}>
          <img
            src={block.src}
            alt={block.caption || ''}
            style={{ width: '100%', borderRadius: 10, display: 'block' }}
          />
          {block.caption && (
            <figcaption style={{
              fontFamily: 'Outfit', fontSize: 13, color: '#888',
              textAlign: 'center', marginTop: 10,
            }}>{block.caption}</figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

function RelatedCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', flex: '1 1 240px' }}>
      <div className="card-hover" style={{
        background: '#fff', borderRadius: 10,
        border: '1px solid var(--shape-stroke)', overflow: 'hidden',
      }}>
        <div style={{
          height: 160,
          background: 'linear-gradient(135deg, var(--shape-fill) 0%, #c8e8f8 100%)',
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ padding: '16px 20px 20px' }}>
          <div style={{ fontSize: 12, color: '#888', fontFamily: 'Outfit', marginBottom: 8 }}>
            {formatDate(post.date)}
          </div>
          <p style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 700,
            fontSize: 17, lineHeight: '125%', color: '#000', margin: 0,
          }}>{post.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const catStyle = CATEGORY_COLORS[post.category] || { bg: '#E8F8FF', color: '#0080C6' };
  const related = blogPosts
    .filter(p => p.id !== post.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: 'max(420px, 40vw)',
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.65) 100%), url(${post.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 'clamp(20px,5vw,76px)',
        paddingBottom: 'clamp(40px,4vw,64px)',
        boxSizing: 'border-box',
      }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>HOMEPAGE</Link>
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M1 1l6 5.5L1 12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <Link to="/blog" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>BLOG</Link>
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M1 1l6 5.5L1 12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>ARTICLE</span>
        </div>

        {/* Category pill */}
        <span style={{
          display: 'inline-block', padding: '5px 14px',
          background: catStyle.bg, color: catStyle.color,
          borderRadius: 100, fontFamily: 'Outfit', fontWeight: 600,
          fontSize: 12, letterSpacing: '0.06em', marginBottom: 16,
        }}>
          {post.category.toUpperCase()}
        </span>

        <h1 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 900,
          fontSize: 'clamp(26px, 4vw, 52px)', lineHeight: '115%',
          color: '#fff', margin: '0 0 16px', maxWidth: 860,
        }}>
          {post.title}
        </h1>

        <div style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
          {formatDate(post.date)}{post.author && ` · ${post.author}`}
        </div>
      </section>

      {/* ── Article body ── */}
      <section style={{
        background: '#fff',
        padding: 'clamp(48px,5vw,80px) clamp(20px,5vw,76px)',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          {/* Excerpt / lead */}
          <p style={{
            fontFamily: 'Outfit, sans-serif', fontWeight: 500,
            fontSize: 'clamp(17px, 1.8vw, 20px)', lineHeight: '160%',
            color: '#000', margin: '0 0 36px',
            borderBottom: '1px solid var(--shape-stroke)', paddingBottom: 36,
          }}>
            {post.excerpt}
          </p>

          {/* Body blocks */}
          {post.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}

          {/* Back link */}
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--shape-stroke)' }}>
            <Link to="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: 'Outfit', fontWeight: 600, fontSize: 15,
              color: 'var(--blue)',
            }}>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M15 6H1M7 1L1 6l6 5" stroke="#0080C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'var(--shape-fill)',
        padding: 'clamp(48px,5vw,72px) clamp(20px,5vw,76px)',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: '120%', color: '#000', margin: 0,
          }}>
            Have Questions About Your Roof?
          </h2>
          <p style={{
            fontFamily: 'Outfit', fontWeight: 400, fontSize: 17,
            lineHeight: '160%', color: 'var(--color-3)', margin: 0,
          }}>
            Our team in Sierra Vista offers free estimates and honest assessments — no pressure, no surprises.
          </p>
          <Link to="/contact" className="btn-blue" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '14px 28px', background: 'var(--blue)', borderRadius: 10,
            fontFamily: 'Outfit', fontWeight: 600, fontSize: 16,
            color: '#fff', letterSpacing: '0.02em', textDecoration: 'none',
          }}>
            Request a Free Estimate
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
              <path d="M1 6h12M7 1l6 5-6 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section style={{
          background: '#fff',
          padding: 'clamp(48px,5vw,72px) clamp(20px,5vw,76px)',
          boxSizing: 'border-box',
        }}>
          <div style={{ maxWidth: 1290, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 800,
              fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: '120%',
              color: '#000', margin: '0 0 32px',
            }}>
              More Articles
            </h2>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {related.map(p => <RelatedCard key={p.id} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
