import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const navItems = [
  { name: 'About',     id: 'about'     },
  { name: 'Skills',    id: 'skills'    },
  { name: 'Projects',  id: 'work'      },
  { name: 'Education', id: 'education' },
  { name: 'Contact',   id: 'contact'   },
];

const socials = [
  { href: 'https://github.com/sabnamparvinbristy',    Icon: FaGithub,   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/sabnamparvin', Icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/sabnamsp10',      Icon: FaFacebook, label: 'Facebook' },
];

const Footer = () => {
  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        .footer-nav-btn {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(210,220,235,0.40);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.25s ease;
          padding: 2px 0;
          position: relative;
        }
        .footer-nav-btn::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #7C9FBF, #a78bfa);
          transition: width 0.3s ease;
        }
        .footer-nav-btn:hover { color: rgba(210,220,235,0.85); }
        .footer-nav-btn:hover::after { width: 100%; }

        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(210,220,235,0.35);
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .footer-social-link:hover {
          background: rgba(124,159,191,0.10);
          border-color: rgba(124,159,191,0.35);
          color: #a5c0d8;
          transform: translateY(-3px);
        }

        .footer-ornament {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
        }
        .footer-ornament::before,
        .footer-ornament::after {
          content: '';
          flex: 1;
          max-width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,159,191,0.30));
        }
        .footer-ornament::after {
          background: linear-gradient(90deg, rgba(124,159,191,0.30), transparent);
        }
      `}</style>

      <footer style={{
        background: 'linear-gradient(180deg, #060518 0%, #080720 50%, #0a0d22 100%)',
        borderTop: '1px solid rgba(124,159,191,0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Ambient glow — top left */}
        <div style={{
          position: 'absolute', top: '-60px', left: '-80px',
          width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(124,159,191,0.055) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Ambient glow — bottom right */}
        <div style={{
          position: 'absolute', bottom: '-40px', right: '-60px',
          width: '260px', height: '260px',
          background: 'radial-gradient(circle, rgba(167,139,250,0.045) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Fine top rule*/}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(124,159,191,0.25) 30%, rgba(167,139,250,0.20) 70%, transparent 100%)',
        }} />

        <div style={{
          maxWidth: '680px', margin: '0 auto',
          padding: '52px 32px 40px',
          position: 'relative', zIndex: 1,
        }}>

          {/*Name block*/}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '30px', fontWeight: 600,
              lineHeight: 1, marginBottom: '10px',
              background: 'linear-gradient(135deg, #c4d6e8 0%, #a78bfa 50%, #7C9FBF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.02em',
            }}>
              Sabnam Parvin Bristy
            </h2>

            <div className="footer-ornament" style={{ margin: '14px 0 0' }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '11px', fontWeight: 300,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(210,220,235,0.30)',
              }}>
                Full-Stack Developer&ensp;·&ensp;Bioinformatics Researcher&ensp;·&ensp;CSE Student
              </span>
            </div>
          </div>

          {/*Thin rule*/}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
            marginBottom: '28px',
          }} />

          {/*Nav links*/}
          <nav style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', gap: '6px 28px', marginBottom: '28px',
          }}>
            {navItems.map(({ name, id }) => (
              <button key={id} className="footer-nav-btn" onClick={() => scrollTo(id)}>
                {name}
              </button>
            ))}
          </nav>

          {/*Social icons*/}
          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: '12px', marginBottom: '32px',
          }}>
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank"
                rel="noopener noreferrer" title={label}
                className="footer-social-link">
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/*Fine rule*/}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
            marginBottom: '20px',
          }} />

          {/*copyright with auto year*/}
          <p style={{
            textAlign: 'center',
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px', fontWeight: 300,
            letterSpacing: '0.10em',
            color: 'rgba(210,220,235,0.22)',
            lineHeight: 1.8,
          }}>
            © {new Date().getFullYear()}{' '}
            <span style={{ color: 'rgba(124,159,191,0.65)' }}>Sabnam Parvin Bristy</span>
            {' '}— All rights reserved
            <br />
            <span style={{ opacity: 0.6 }}>Narayanganj, Bangladesh</span>
          </p>

        </div>

        {/*bottom accent strip*/}
        <div style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(124,159,191,0.20) 25%, rgba(167,139,250,0.18) 75%, transparent 100%)',
        }} />
      </footer>
    </>
  );
};

export default Footer;

