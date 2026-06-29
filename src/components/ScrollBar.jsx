import { useEffect, useRef } from 'react';

const items = [
  'ROOF REPLACEMENT',
  'CONSTRUCTION ROOFING',
  'ROOF REPAIRS',
  'ROOF COATINGS',
  'GUTTER INSTALLATION',
];

export default function ScrollBar() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf;
    const speed = 1.5;
    const step = () => {
      pos -= speed;
      if (pos <= -track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const allItems = [...items, ...items, ...items, ...items];

  return (
    <div style={{
      width: '100%',
      height: 56,
      background: '#000000',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div ref={trackRef} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', willChange: 'transform' }}>
        {allItems.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: '0.03em',
            color: '#f5f5f5',
            padding: '0 48px',
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
