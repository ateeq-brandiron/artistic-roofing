import { useState } from 'react';

const YOUTUBE_ID = 'YOUR_YOUTUBE_ID'; // Replace with actual YouTube video ID

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section style={{
      width: '100%',
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '75px 74px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1292,
        height: 'clamp(360px, 50vw, 709px)',
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        background: '#111',
        flexShrink: 0,
      }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
            title="Company Overview Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        ) : (
          <>
            {/* Thumbnail */}
            <img
              src="/img/Frame 2147223472 (1).png"
              alt="Company Overview Video"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Dark overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)' }} />

            {/* Top-left label */}
            <div style={{
              position: 'absolute', top: 20, left: 24,
              color: '#fff',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: 15,
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}>
              Company Overview Video
            </div>

            {/* Top-right info icon */}
            <div style={{ position: 'absolute', top: 16, right: 20 }}>
              <img src="/img/ico-info.svg" alt="" style={{ width: 28, height: 28 }} />
            </div>

            {/* Centre play button */}
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 80, height: 80,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <img src="/img/ico-play.svg" alt="Play" style={{ width: '100%', height: '100%' }} />
            </button>

            {/* Bottom bar */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
              padding: '16px 20px 12px',
              display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              {/* Progress bar */}
              <div style={{ width: '100%', height: 3, background: 'rgba(255,255,255,0.3)', borderRadius: 2, position: 'relative' }}>
                <div style={{ width: '33%', height: '100%', background: '#ff0000', borderRadius: 2 }} />
              </div>
              {/* Controls row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src="/img/ico-play.svg" alt="Play" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
                  <img src="/img/ico-next.svg" alt="Next" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
                  <img src="/img/ico-sound.svg" alt="Sound" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#fff' }}>5:07 / 15:28</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src="/img/ico-hd.svg" alt="HD" style={{ width: 22, height: 16 }} />
                  <img src="/img/ico-fullscreen.svg" alt="Fullscreen" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
