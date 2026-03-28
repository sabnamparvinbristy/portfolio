import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '28px',
        zIndex: 999,
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        background: 'rgba(27,42,74,0.90)',
        border: '1px solid rgba(124,159,191,0.30)',
        color: '#7C9FBF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 20px rgba(124,159,191,0.15)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
        transition: 'all 0.35s cubic-bezier(.16,1,.3,1)',
        pointerEvents: visible ? 'all' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(124,159,191,0.18)';
        e.currentTarget.style.borderColor = 'rgba(124,159,191,0.55)';
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(27,42,74,0.90)';
        e.currentTarget.style.borderColor = 'rgba(124,159,191,0.30)';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
      title="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M8 13V3M3 8l5-5 5 5" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
