import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [hidden,  setHidden]  = useState(false);
  const [phase,   setPhase]   = useState(0);
  // phase 0 name slide
  // phase 1 bar fills
  // phase 2 subtitle + tagline
  // phase 3 fade out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1600);
    const t4 = setTimeout(() => setHidden(true), 2100);
    return () => [t1,t2,t3,t4].forEach(clearTimeout);
  }, []);

  return (
    <div
      style={{
        position:       'fixed',
        inset:          0,
        zIndex:         9999,
        background:     'linear-gradient(135deg,#050414 0%,#0b0a24 60%,#0f1a2e 100%)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        flexDirection:  'column',
        gap:            '0px',
        opacity:        phase === 3 ? 0 : 1,
        visibility:     hidden ? 'hidden' : 'visible',
        transition:     'opacity .5s ease, visibility .5s ease',
      }}
    >
      {/*top line*/}
      <div style={{
        position:   'absolute',
        top:        0, left: 0, right: 0,
        height:     '2px',
        background: 'linear-gradient(90deg,transparent,#7C9FBF,#c084fc,transparent)',
        opacity:    phase >= 1 ? 1 : 0,
        transition: 'opacity .6s ease',
      }} />

      {/*Monogram circle*/}
      <div style={{
        width:        '72px',
        height:       '72px',
        borderRadius: '50%',
        border:       '1.5px solid rgba(124,159,191,0.35)',
        display:      'flex',
        alignItems:   'center',
        justifyContent: 'center',
        marginBottom: '28px',
        background:   'rgba(124,159,191,0.05)',
        boxShadow:    '0 0 30px rgba(124,159,191,0.12)',
        opacity:      phase >= 0 ? 1 : 0,
        transform:    phase >= 0 ? 'scale(1)' : 'scale(0.8)',
        transition:   'opacity .6s ease, transform .6s cubic-bezier(.16,1,.3,1)',
      }}>
        <span style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize:   '28px',
          fontWeight: 600,
          background: 'linear-gradient(135deg,#7C9FBF,#c084fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor:  'transparent',
        }}>
          S
        </span>
      </div>

      {/*Name*/}
      <div style={{ overflow: 'hidden', marginBottom: '6px' }}>
        <div style={{
          fontFamily:     "'Dancing Script', cursive",
          fontSize:       '36px',
          fontWeight:     600,
          letterSpacing:  '-.01em',
          color:          '#ffffff',
          transform:      phase >= 0 ? 'translateY(0)' : 'translateY(100%)',
          opacity:        phase >= 0 ? 1 : 0,
          transition:     'transform .7s cubic-bezier(.16,1,.3,1), opacity .7s ease',
          whiteSpace:     'nowrap',
        }}>
          Sabnam Parvin{' '}
          <span style={{ color: '#c084fc' }}>Bristy</span>
        </div>
      </div>

      {/*divider line*/}
      <div style={{
        width:      phase >= 1 ? '180px' : '0px',
        height:     '1px',
        background: 'linear-gradient(90deg,transparent,rgba(124,159,191,0.60),transparent)',
        marginBottom: '14px',
        transition: 'width .7s cubic-bezier(.16,1,.3,1)',
      }} />

      {/*Progress bar*/}
      <div style={{
        width:        '160px',
        height:       '1.5px',
        background:   'rgba(255,255,255,0.07)',
        borderRadius: '2px',
        overflow:     'hidden',
        marginBottom: '20px',
        opacity:      phase >= 1 ? 1 : 0,
        transition:   'opacity .4s ease',
      }}>
        <div style={{
          height:     '100%',
          background: 'linear-gradient(90deg,#7C9FBF,#c084fc)',
          width:      phase >= 1 ? '100%' : '0%',
          transition: 'width .9s cubic-bezier(.4,0,.2,1)',
          borderRadius: '2px',
        }} />
      </div>

      {/*Subtitle*/}
      <div style={{
        fontFamily:    'Poppins, sans-serif',
        fontSize:      '9px',
        letterSpacing: '.22em',
        textTransform: 'uppercase',
        color:         'rgba(255,255,255,0.35)',
        opacity:       phase >= 2 ? 1 : 0,
        transform:     phase >= 2 ? 'translateY(0)' : 'translateY(8px)',
        transition:    'opacity .5s ease, transform .5s ease',
      }}>
        Full-Stack Developer · Bioinformatics Researcher
      </div>

      {/*bottom line*/}
      <div style={{
        position:   'absolute',
        bottom:     0, left: 0, right: 0,
        height:     '2px',
        background: 'linear-gradient(90deg,transparent,#c084fc,#7C9FBF,transparent)',
        opacity:    phase >= 1 ? 1 : 0,
        transition: 'opacity .6s ease',
      }} />
    </div>
  );
};

export default Loader;
