export default function CallToAction() {
  return (
    <section id="contact" style={{
      width: '100%',
      padding: '75px 100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1290,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundImage: 'url(/img/box.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        padding: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* Dark overlay for legibility */}
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute', inset: -100,
            background: 'rgba(0,0,0,0.5)',
          }} />
          <div style={{
            position: 'relative',
            maxWidth: 856,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '57.6px',
              color: '#ffffff',
              whiteSpace: 'wrap',
            }}>
              Your Roof, Our Commitment
            </h2>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: 22,
              lineHeight: '33px',
              color: '#ffffff',
              textAlign: 'center',
            }}>
              If you need reliable roofing or gutter services in Sierra Vista or nearby Cochise County communities, trust the team at Artistic Roofing. Our goal is simple: to provide professional service, lasting workmanship, and open communication from start to finish.
            </p>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 20,
                padding: '15px 20px',
                background: 'var(--blue)',
                borderRadius: 10,
                boxShadow: 'inset 0 4px 4px rgba(255,255,255,0.1), inset 4px 0 4px rgba(255,255,255,0.1), inset 0 -4px 4px rgba(255,255,255,0.1), inset -4px 0 4px rgba(255,255,255,0.1)',
                fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 18,
                color: '#fff', letterSpacing: '0.05em', cursor: 'pointer',
              }}>
              Talk With a Roofing Expert Today
              <img src="/img/call-made-3.svg" alt="" style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
