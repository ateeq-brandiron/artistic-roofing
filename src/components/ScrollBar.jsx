import { useEffect, useRef, useState } from 'react';

const items = [
  'ROOF REPLACEMENT',
  'CONSTRUCTION ROOFING',
  'ROOF REPAIRS',
  'ROOF COATINGS',
  'GUTTER INSTALLATION',
];

export default function ScrollBar() {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 1.2;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current -= speed;
        if (posRef.current <= -track.scrollWidth / 2) posRef.current = 0;
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        width: '100%', height: 56,
        background: '#000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        cursor: 'default',
      }}
    >
      <div
        ref={trackRef}
        style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500, fontSize: 14,
              letterSpacing: '0.12em',
              color: '#f5f5f5',
              padding: '0 40px',
              textTransform: 'uppercase',
            }}>
              {item}
            </span>
            {/* Diamond separator */}
            <span style={{
              display: 'inline-block',
              width: 5, height: 5,
              background: 'var(--blue)',
              transform: 'rotate(45deg)',
              flexShrink: 0,
              opacity: 0.8,
            }} />
          </span>
        ))}
      </div>
    </div>
  );
}
