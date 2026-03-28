import React, { useState } from 'react';
import { education } from '../../constants';

const formal = { fontFamily: 'Poppins, sans-serif' };

const experience = [
  {
    period: '2025 – Present',
    pos: 'Bioinformatics Researcher',
    org: 'Current Work · Computational Biology',
    note: 'Currently working in bioinformatics — applying computational tools to analyze biological data. Specializing in molecular docking using CB-Dock2, PyRx, PyMOL, and Discovery Studio.',
    active: true, current: true,
  },
  {
    period: '2023 – Present',
    pos: 'Full-Stack Developer',
    org: 'Personal Projects',
    note: 'Delivered 3+ full-stack projects — a MERN real estate platform, a Java desktop hospital system, and a responsive static UI.',
    active: false, current: false,
  },
  {
    period: '2023 – Present',
    pos: 'AI / ML Learner',
    org: 'Self-Directed · Python',
    note: 'Exploring Python for machine learning and AI. Aspiring to bridge full-stack engineering with intelligent systems.',
    active: false, current: false,
  },
];

const bioTools = [
  { name: 'CB-Dock2',         emoji: '🔬', desc: 'Molecular docking server'  },
  { name: 'PyMOL',            emoji: '🧬', desc: 'Molecular visualization'    },
  { name: 'Discovery Studio', emoji: '💊', desc: 'Drug discovery platform'    },
  { name: 'PyRx',             emoji: '⚗️', desc: 'Virtual screening'          },
  { name: 'BioPython',        emoji: '🐍', desc: 'Biological computation'     },
  { name: 'Python',           emoji: '🔷', desc: 'Data analysis & scripting'  },
  { name: 'Jupyter',          emoji: '📓', desc: 'Research notebooks'         },
];

const TLItem = ({ period, pos, org, note, current }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:      'relative',
        paddingBottom: '32px',
        paddingLeft:   hovered ? '24px' : '20px',
        borderLeft:    hovered
          ? '2px solid rgba(124,159,191,0.60)'
          : '2px solid rgba(124,159,191,0.20)',
        background:    hovered ? 'rgba(124,159,191,0.05)' : 'transparent',
        transform:     hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow:     hovered ? '0 8px 24px rgba(124,159,191,0.10)' : 'none',
        borderRadius:  hovered ? '12px' : '8px',
        transition:    'all 0.3s ease',
        cursor:        'default',
      }}
    >
      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
        <span style={{ fontFamily: "'Dancing Script', cursive", color: '#7C9FBF', fontSize: '16px', fontWeight: 600 }}>
          {period}
        </span>
        {current && (
          <span
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-semibold"
            style={{
              ...formal,
              background: 'rgba(124,159,191,0.12)',
              border: '1px solid rgba(124,159,191,0.30)',
              color: '#7C9FBF',
            }}
          >
            <span style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: '#7C9FBF', display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            Currently Studying
          </span>
        )}
      </div>

      <div className="text-sm font-semibold text-white mb-0.5" style={formal}>{pos}</div>
      <div className="text-xs mb-2" style={{ ...formal, color: 'rgba(255,255,255,0.35)' }}>{org}</div>
      <div className="text-xs leading-relaxed" style={{ ...formal, color: 'rgba(255,255,255,0.50)' }}>{note}</div>
    </div>
  );
};

const BioCard = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-7 rounded-2xl transition-all duration-300"
      style={{
        background: hovered
          ? 'linear-gradient(135deg,rgba(124,159,191,0.09),rgba(167,139,250,0.06))'
          : 'linear-gradient(135deg,rgba(124,159,191,0.06),rgba(167,139,250,0.04))',
        border:    `1px solid ${hovered ? 'rgba(124,159,191,0.35)' : 'rgba(124,159,191,0.18)'}`,
        transform:  hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow:  hovered ? '0 8px 28px rgba(124,159,191,0.12)' : 'none',
      }}
    >
      {children}
    </div>
  );
};

const BioChip = ({ tool }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2.5 p-3 rounded-xl transition-all duration-200 cursor-default"
      style={{
        background: hovered ? 'rgba(124,159,191,0.06)' : 'rgba(255,255,255,0.03)',
        border:     `1px solid ${hovered ? 'rgba(124,159,191,0.28)' : 'rgba(255,255,255,0.07)'}`,
        transform:  hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <span className="text-lg flex-shrink-0">{tool.emoji}</span>
      <div>
        <div className="text-xs font-medium text-white leading-tight" style={formal}>{tool.name}</div>
        <div className="text-[9px] leading-tight mt-0.5"
          style={{ ...formal, color: 'rgba(255,255,255,0.35)' }}>{tool.desc}</div>
      </div>
    </div>
  );
};

const Education = () => (
  <section
    id="education"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans text-white clip-path-custom-3"
    style={{ background: 'linear-gradient(135deg,#050414 0%,#0b0a24 50%,#0f1a2e 100%)' }}
  >
    {/*Title*/}
    <div className="text-center mb-20 reveal">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        <span className="relative inline-block group">
          <span
            className="relative z-10"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Education
          </span>
          <span className="absolute left-1/2 -bottom-1 -translate-x-1/2
            h-[2px] w-0 bg-[#7C9FBF] transition-all duration-300 group-hover:w-full" />
        </span>
      </h2>
      <p className="text-gray-500 mt-6 text-base max-w-2xl mx-auto leading-relaxed" style={formal}>
        My academic path and current bioinformatics research shaping
        my technical skills and problem-solving mindset.
      </p>
    </div>

    {/*2column*/}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal">

      {/* Degrees*/}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase"
            style={{ ...formal, color: 'rgba(255,255,255,0.30)' }}>Degrees</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>
        <div className="flex flex-col gap-1">
          {education.map(edu => (
            <TLItem
              key={edu.id}
              period={edu.date}
              pos={edu.degree}
              org={edu.school}
              note={edu.desc}
              current={edu.current}
            />
          ))}
        </div>
      </div>

      {/*Experience*/}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase"
            style={{ ...formal, color: 'rgba(255,255,255,0.30)' }}>Experience & Research</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>
        <div className="flex flex-col gap-1">
          {experience.map((item, i) => (
            <TLItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>

    {/* Bioinformatics card*/}
    <div className="mt-16 reveal">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-semibold tracking-widest uppercase"
          style={{ ...formal, color: 'rgba(255,255,255,0.30)' }}>Current Research Focus</span>
        <span className="flex-1 h-px bg-white/10" />
      </div>

      <BioCard>
        <div className="flex items-start gap-4 mb-6 flex-wrap">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'rgba(124,159,191,0.10)', border: '1px solid rgba(124,159,191,0.20)' }}>
            🧬
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h4 className="text-white font-semibold text-base" style={formal}>
                Bioinformatics & Computational Biology
              </h4>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5
                rounded-full text-[9px] font-semibold"
                style={{ ...formal, background: 'rgba(124,159,191,0.12)',
                  border: '1px solid rgba(124,159,191,0.28)', color: '#7C9FBF' }}>
                <span style={{ width:'5px', height:'5px', borderRadius:'50%',
                  background:'#7C9FBF', display:'inline-block',
                  animation:'pulse 2s ease-in-out infinite' }} />
                Currently Working
              </span>
            </div>
            <p className="text-sm leading-relaxed"
              style={{ ...formal, color: 'rgba(255,255,255,0.50)' }}>
              Working at the intersection of{' '}
              <span style={{ color: '#7C9FBF', fontWeight: 500 }}>Computer Science</span>
              {' '}and{' '}
              <span style={{ color: '#a78bfa', fontWeight: 500 }}>Biology</span>.
              {' '}Specializing in molecular docking and drug discovery workflows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {bioTools.map(tool => (
            <BioChip key={tool.name} tool={tool} />
          ))}
        </div>
      </BioCard>
    </div>

    <style>{`
      @keyframes pulse {
        0%,100% { opacity:1; transform:scale(1); }
        50%      { opacity:0.4; transform:scale(0.8); }
      }
    `}</style>
  </section>
);

export default Education;