import React from 'react';

const bubbles = Array.from({ length: 128 });

function randomBubbleStyle() {
  const size = 2 + Math.random() * 4;
  const distance = 6 + Math.random() * 4;
  const position = -5 + Math.random() * 110;
  const time = 2 + Math.random() * 2;
  const delay = -1 * (2 + Math.random() * 2);
  return {
    '--size': `${size}rem`,
    '--distance': `${distance}rem`,
    '--position': `${position}%`,
    '--time': `${time}s`,
    '--delay': `${delay}s`,
  } as React.CSSProperties;
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="bubbles">
        {bubbles.map((_, i) => (
          <div key={i} className="bubble" style={randomBubbleStyle()} />
        ))}
      </div>
      <div className="content">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center', margin: 0 }}>
            Portfolio 2025 by Maicol Piña
          </p>
        </div>
      </div>
      {/* SVG filter for the blob effect */}
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </footer>
  );
}