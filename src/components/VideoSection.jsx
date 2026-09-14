import { useState } from 'react';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section style={{
      width: '100%',
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'clamp(40px,5vw,75px) clamp(20px,5vw,74px)',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1292,
        height: 'clamp(220px, 50vw, 709px)',
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        background: '#111',
        cursor: playing ? 'default' : 'pointer',
      }}
        onClick={() => { if (!playing) setPlaying(true); }}
      >
        {playing ? (
          <video
            src="/DJI_0136%20(1).mp4"
            autoPlay
            controls
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <>
            {/* Thumbnail */}
            <img
              src="/img/Frame%202147223472%20(1).png"
              alt="Company Overview Video"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Light overlay */}
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
            <img src="/img/ico-info.svg" alt="" style={{ position: 'absolute', top: 16, right: 20, width: 28, height: 28 }} />

            {/* Centre play button */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 90, height: 62,
              borderRadius: 14,
              background: '#FF0000',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              transition: 'transform 0.15s',
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M8 5.14v14l11-7-11-7z" fill="#fff" />
              </svg>
            </div>

            {/* Bottom gradient */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)',
              padding: '24px 20px 12px',
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <div style={{ width: '100%', height: 3, background: 'rgba(255,255,255,0.3)', borderRadius: 2 }}>
                <div style={{ width: '33%', height: '100%', background: '#ff0000', borderRadius: 2 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <img src="/img/ico-play.svg" alt="" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
                  <img src="/img/ico-next.svg" alt="" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
                  <img src="/img/ico-sound.svg" alt="" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#fff' }}>0:00 / 1:30</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src="/img/ico-hd.svg" alt="" style={{ height: 16 }} />
                  <img src="/img/ico-fullscreen.svg" alt="" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
