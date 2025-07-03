import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours * 30) + (minutes * 0.5);
  const minuteDeg = (minutes * 6) + (seconds * 0.1);
  const secondDeg = seconds * 6;

  const toggleCover = () => setIsOpen(!isOpen);

  return (
    <div  
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        backgroundColor: 'oklch(13% 0.035 260)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '224px',
          height: '224px',
          perspective: '1000px',
          cursor: 'pointer',
        }}
        onClick={toggleCover}
      >
        {/* Clock Cover */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'oklch(97% 0.015 20)',
            borderRadius: '50%',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
            transformOrigin: 'bottom center',
            zIndex: 10,
            overflow: 'hidden',
            transform: isOpen ? 'rotateX(110deg)' : 'none',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* design some */}
          <div style={{ position: 'relative', width: '75%', height: '75%' }}>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '60%',
                height: '60%',
                border: '2px solid #cda434',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
            {[
              { top: '10%', left: '50%' },
              { top: '50%', left: '10%' },
              { top: '50%', right: '10%' },
              { bottom: '10%', left: '50%' },
              { top: '25%', left: '25%' },
              { top: '25%', right: '25%' },
            ].map((style, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  background: '#cda434',
                  borderRadius: '50%',
                  width: index < 4 ? '6px' : '5px',
                  height: index < 4 ? '6px' : '5px',
                  ...style,
                  transform: 'translate(-50%, -50%)',
                }}
              ></div>
            ))}
          </div>
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '50%',
              width: '40px',
              height: '5px',
              background: '#cda434',
              borderRadius: '3px',
              transform: 'translateX(-50%)',
            }}
          ></div>
        </div>

        {/* Clock body */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'oklch(97% 0.015 20)',
            borderRadius: '50%',
            boxShadow: 'inset 0 0 18px rgb(248, 168, 221)',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.5s 0.5s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
        >
          {/* Center Dot */}
          <div
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              background: '#444',
              borderRadius: '50%',
              zIndex: 10,
            }}
          ></div>

          {/* Hour*/}
          <div
            style={{
              position: 'absolute',
              transformOrigin: 'bottom center',
              bottom: '50%',
              width: '4px',
              height: '50px',
              background: '#444',
              borderRadius: '3px',
              transform: `rotate(${hourDeg}deg)`,
            }}
          ></div>

          {/* Minute */}
          <div
            style={{
              position: 'absolute',
              transformOrigin: 'bottom center',
              bottom: '50%',
              width: '2.5px',
              height: '75px',
              background: '#666',
              borderRadius: '3px',
              transform: `rotate(${minuteDeg}deg)`,
            }}
          ></div>

          {/* Second */}
          <div
            style={{
              position: 'absolute',
              transformOrigin: 'bottom center',
              bottom: '50%',
              width: '1.5px',
              height: '90px',
              background: '#e74c3c',
              transform: `rotate(${secondDeg}deg)`,
            }}
          ></div>

          {/* Clock Numbers */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            const radius = 95;
            const x = 112 + radius * Math.sin((angle * Math.PI) / 180);
            const y = 112 - radius * Math.cos((angle * Math.PI) / 180);

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  fontFamily: 'sans-serif',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#444',
                }}
              >
                {i === 0 ? 12 : i}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clock;
