import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import profileImage from '../../assets/profile/pro.png';

/*inline styles*/
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=DM+Mono:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Raleway:wght@200;300;400;500;600&display=swap');

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes portraitReveal {
    from { opacity: 0; transform: translateX(28px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes cornerPulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.35; }
  }

  .about-section {
    position: relative;
    z-index: 10;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #050414 0%, #0b0a24 50%, #0f1a2e 100%);
    overflow: hidden;
  }

  .about-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(124,159,191,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(124,159,191,.05) 1px, transparent 1px);
    background-size: 80px 80px;
    pointer-events: none;
  }
  .about-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 70% at 72% 50%, transparent 38%, #050414 100%);
    pointer-events: none;
  }

  /*PORTRAIT */
  .portrait-wrap {
    position: relative;
    width: 300px;
    flex-shrink: 0;
    animation: portraitReveal .75s cubic-bezier(.16,1,.3,1) .35s both;
    margin: 0 auto;
  }

  .portrait-frame {
    aspect-ratio: 4 / 5;
    background: #0f0f13;
    border-radius: 12px;
    border: 1px solid #32323e;
    overflow: hidden;
    position: relative;
    transition: border-color .3s;
  }
  .portrait-frame:hover { border-color: rgba(168,85,247,.45); }

  .portrait-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(10%) contrast(1.05);
    display: block;
    transition: filter .5s ease, transform .6s cubic-bezier(.16,1,.3,1);
  }
  .portrait-frame:hover img {
    filter: grayscale(0%) contrast(1.02);
    transform: scale(1.03);
  }

  .portrait-corner {
    position: absolute;
    top: -12px;
    right: -12px;
    width: 52px;
    height: 52px;
    border-top: 1px solid rgba(168,85,247,.55);
    border-right: 1px solid rgba(168,85,247,.55);
    border-radius: 0 12px 0 0;
    pointer-events: none;
    animation: cornerPulse 3s ease-in-out infinite;
  }

  .portrait-side-line {
    position: absolute;
    left: -14px;
    top: 18%;
    bottom: 18%;
    width: 2px;
    background: linear-gradient(to bottom, transparent, rgba(168,85,247,.55), transparent);
    border-radius: 2px;
  }

  /*left text*/
  .about-content {
    position: relative;
    z-index: 2;
    flex: 1;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #a855f7;
    margin-bottom: 22px;
    animation: slideUp .7s cubic-bezier(.16,1,.3,1) .25s both;
  }
  .eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: rgba(168,85,247,.5);
  }

  .hero-name {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(42px, 6vw, 76px);
    font-weight: 700;
    color: #f0eaff;
    line-height: .95;
    letter-spacing: -.02em;
    margin-bottom: 6px;
    animation: slideUp .7s cubic-bezier(.16,1,.3,1) .32s both;
  }

  .hero-name-script {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(36px, 5.5vw, 66px);
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 22px;
    background: linear-gradient(90deg, #a855f7, #7C9FBF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: slideUp .7s cubic-bezier(.16,1,.3,1) .40s both;
  }

  /*typewriter row*/
  .typewriter-row {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(13px, 1.4vw, 16px);
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 20px;
    animation: slideUp .7s cubic-bezier(.16,1,.3,1) .47s both;
    border-left: 2px solid rgba(168,85,247,.35);
    padding-left: 14px;
    color: rgba(210, 220, 235, 0.55);
    line-height: 1.6;
  }
  .typewriter-accent {
    color: rgba(124, 159, 191, 0.85);
    font-weight: 500;
    letter-spacing: 0.22em;
  }

  .hero-bio {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #a0a0c0;
    line-height: 1.9;
    max-width: 520px;
    margin-bottom: 28px;
    animation: slideUp .7s cubic-bezier(.16,1,.3,1) .54s both;
    letter-spacing: 0.06em;
  }

  .social-links {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 28px;
    animation: slideUp .7s cubic-bezier(.16,1,.3,1) .60s both;
  }
  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 16px;
    border-radius: 4px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: #a0a0c0;
    border: 1px solid rgba(255,255,255,.08);
    text-decoration: none;
    transition: border-color .2s, color .2s, transform .2s;
  }
  .social-link:hover {
    border-color: rgba(168,85,247,.45);
    color: #a855f7;
    transform: translateY(-1px);
  }

  .cta-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    animation: slideUp .7s cubic-bezier(.16,1,.3,1) .66s both;
  }
  .btn-primary-about {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #fff;
    background: linear-gradient(90deg, #1e3a5f, #7C9FBF);
    padding: 13px 28px;
    border-radius: 4px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: opacity .2s, transform .15s;
    display: inline-block;
  }
  .btn-primary-about:hover { opacity: .88; transform: translateY(-1px); }

  .btn-secondary-about {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #c4c4d4;
    border: 1px solid rgba(255,255,255,.14);
    padding: 12px 28px;
    border-radius: 4px;
    background: none;
    cursor: pointer;
    transition: background .25s, border-color .25s, color .25s;
    display: inline-block;
  }
  .btn-secondary-about:hover {
    border-color: #a855f7;
    color: #fff;
    background: rgba(168,85,247,.1);
  }

  /*stats bar*/
  .stats-bar {
    position: relative;
    z-index: 2;
    border-top: 1px solid rgba(255,255,255,.07);
    animation: fadeIn .5s ease .9s both;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .stat-item {
    padding: 28px 32px;
    border-right: 1px solid rgba(255,255,255,.06);
    position: relative;
    transition: background .25s;
  }
  .stat-item::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(168,85,247,.55), transparent);
    opacity: 0;
    transition: opacity .3s;
  }
  .stat-item:hover::before { opacity: 1; }
  .stat-item:hover { background: rgba(168,85,247,.04); }
  .stat-item:last-child { border-right: none; }

  .stat-divider {
    width: 20px;
    height: 1px;
    background: rgba(168,85,247,.35);
    margin-bottom: 10px;
  }

  .stat-num {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(32px, 4vw, 48px);
    line-height: 1;
    color: #f0eaff;
    margin-bottom: 6px;
    letter-spacing: -.01em;
  }
  .stat-num sup {
    font-size: .42em;
    color: #a855f7;
    vertical-align: super;
    font-family: 'DM Mono', monospace;
    font-weight: 500;
  }
  .stat-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #5a5a7a;
    line-height: 1.4;
  }

  /* responsive*/
  @media (max-width: 900px) {
    .portrait-wrap { width: 260px; }
  }

  @media (max-width: 768px) {
    .portrait-wrap { width: 280px; margin: 20px auto; }
    .stat-item { padding: 24px 20px; }
  }

  @media (max-width: 640px) {
    .portrait-wrap { width: 260px; margin: 20px auto; }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .stat-item:nth-child(1) { order: 1; }
    .stat-item:nth-child(2) { order: 2; }
    .stat-item:nth-child(3) { order: 3; }
    .stat-item:nth-child(4) { order: 4; }

    .stat-item {
      padding: 20px 18px;
      border-right: none;
      border-bottom: 1px solid rgba(255,255,255,.06);
    }

    .stat-item:nth-child(2),
    .stat-item:nth-child(4) {
      border-left: 1px solid rgba(255,255,255,.06);
    }

    .stat-item:nth-child(3),
    .stat-item:nth-child(4) {
      border-bottom: none;
    }

    .stat-item::before { display: none; }
  }
`;

/*Count-up hook*/
const useCountUp = (target, duration = 1200, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start || target === null) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

const statsData = [
  { target: 3,    sup: '+', label: 'Major Projects' },
  { target: 4,    sup: '+', label: 'Tech Stacks'    },
  { target: 2,    sup: '+', label: 'Years Coding'   },
  { target: null, text: 'MERN', sup: '', label: 'Full-Stack' },
];

const StatItem = ({ target, text, sup, label, started }) => {
  const count = useCountUp(target, 1200, started);
  return (
    <div className="stat-item">
      <div className="stat-divider" />
      <div className="stat-num">
        {text ?? count}{sup && <sup>{sup}</sup>}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const socials = [
  { href: 'https://github.com/sabnamparvinbristy',    Icon: FaGithub,   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/sabnamparvin', Icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/sabnamsp10',      Icon: FaFacebook, label: 'Facebook' },
];

/* Main*/
const About = () => {
  const statsRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setStarted(true); }),
      { threshold: 0.5 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>

      <section id="about" className="about-section">

        {/*Main layout*/}
        <div
          className="about-content"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: 'clamp(80px, 10vw, 140px) clamp(20px, 7vw, 120px) 40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '60px',
              width: '100%',
              flexWrap: 'wrap-reverse',
            }}
          >

            {/* left text*/}
            <div style={{ flex: '1 1 340px', minWidth: 0 }}>

              <div className="eyebrow" />

              <h1 className="hero-name">Sabnam Parvin</h1>
              <h2 className="hero-name-script">Bristy</h2>

              <div className="typewriter-row">
                <span>I am a </span>
                <span className="typewriter-accent">
                  <Typewriter
                    words={[
                      'Aspiring AI/ML Engineer',
                      'Bioinformatics Researcher',
                      'React · Node.js Developer',
                      'Python Developer',
                      'Tech Explorer',
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={85}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                </span>
              </div>

              <p className="hero-bio">
                A full-stack developer with a passion for building robust, scalable applications.
                Experienced across Python, ML/AI and Bioinformatics — focused on writing clean code
                and delivering solutions that create real impact.
              </p>

              <div className="social-links">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Icon size={14} /> {label}
                  </a>
                ))}
              </div>

              <div className="cta-row">
                <a
                  href="https://drive.google.com/drive/u/3/folders/1OGgWgypJ56lMrbiBiQzyCr7MNhDRqWww"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-about"
                >
                  Download CV
                </a>
                <button
                  className="btn-secondary-about"
                  onClick={() =>
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  See Projects
                </button>
              </div>
            </div>

            {/* right portrait*/}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '0 0 auto' }}>
              <div className="portrait-wrap">
                <div className="portrait-frame">
                  <img
                    src={profileImage}
                    alt="Sabnam Parvin Bristy"
                    onError={e => {
                      e.currentTarget.src =
                        'https://ui-avatars.com/api/?name=Sabnam+Parvin&background=0f0f13&color=a855f7&size=400';
                    }}
                  />
                </div>
                <div className="portrait-corner" />
                <div className="portrait-side-line" />
              </div>
            </div>

          </div>
        </div>

        {/*stats bar*/}
        <div
          ref={statsRef}
          className="stats-bar"
          style={{ padding: '0 clamp(20px, 7vw, 120px)' }}
        >
          <div className="stats-grid">
            {statsData.map((s, i) => (
              <StatItem
                key={i}
                {...s}
                started={started}
              />
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default About;
