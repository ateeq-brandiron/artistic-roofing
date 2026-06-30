import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
  const { pathname } = useLocation();
  const [showTop, setShowTop] = useState(false);

  /* ── Scroll to top on route change ── */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* ── Back-to-top visibility ── */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Global section scroll-reveal ── */
  useEffect(() => {
    const timer = setTimeout(() => {
      const sections = Array.from(document.querySelectorAll('main section'));
      const vh = window.innerHeight;

      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('sr-visible');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < vh * 0.92) {
          section.classList.add('sr-visible');
          return;
        }
        section.classList.add('sr-section');
        observer.observe(section);
      });

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw', position: 'relative' }}>
      <Navbar />

      <main key={pathname} className="page-enter">
        <Outlet />
      </main>

      <Footer />

      {showTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed', bottom: 32, right: 32, zIndex: 1200,
            width: 48, height: 48,
            background: 'var(--blue)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(0,128,198,0.38)',
            border: 'none', cursor: 'pointer',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 19V5M5 12l7-7 7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
