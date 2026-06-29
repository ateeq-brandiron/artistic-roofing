export default function VideoSection() {
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
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
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
        <img
          src="/img/ico-play.svg"
          alt="Play"
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 80, height: 80,
          }}
        />

        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)',
          padding: '24px 20px 12px',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {/* Progress bar */}
          <div style={{ width: '100%', height: 3, background: 'rgba(255,255,255,0.3)', borderRadius: 2 }}>
            <div style={{ width: '33%', height: '100%', background: '#ff0000', borderRadius: 2 }} />
          </div>
          {/* Controls row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <img src="/img/ico-play.svg" alt="" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
              <img src="/img/ico-next.svg" alt="" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
              <img src="/img/ico-sound.svg" alt="" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#fff' }}>5:07 / 15:28</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src="/img/ico-hd.svg" alt="" style={{ height: 16 }} />
              <img src="/img/ico-fullscreen.svg" alt="" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
