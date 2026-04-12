import React, { useState } from 'react';
import { projects } from '../../constants';

const formal = { fontFamily: 'Poppins, sans-serif' };
const script  = { fontFamily: "'Dancing Script', cursive" };

const theme = {
  teal: {
    badge:  { color: '#7C9FBF', background: 'rgba(124,159,191,0.10)', border: '1px solid rgba(124,159,191,0.28)' },
    card:   'rgba(20,35,55,0.70)',
    glow:   'rgba(124,159,191,0.14)',
    accent: '#7C9FBF',
    strip:  'linear-gradient(90deg,rgba(124,159,191,0.70),transparent)',
  },
  purple: {
    badge:  { color: '#a78bfa', background: 'rgba(167,139,250,0.10)', border: '1px solid rgba(167,139,250,0.28)' },
    card:   'rgba(25,20,52,0.70)',
    glow:   'rgba(167,139,250,0.14)',
    accent: '#a78bfa',
    strip:  'linear-gradient(90deg,rgba(167,139,250,0.70),transparent)',
  },
  violet: {
    badge:  { color: '#c084fc', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.28)' },
    card:   'rgba(30,15,56,0.70)',
    glow:   'rgba(192,132,252,0.14)',
    accent: '#c084fc',
    strip:  'linear-gradient(90deg,rgba(192,132,252,0.70),transparent)',
  },
};

// Cycles colors left→right: teal, purple, violet, teal, purple, violet…
const COLOR_CYCLE = ['teal', 'purple', 'violet'];
const getColor = (index) => COLOR_CYCLE[index % 3];

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 12 12"
    fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
  </svg>
);

const ExternalLink = () => (
  <svg width="11" height="11" viewBox="0 0 12 12"
    fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M1 11L11 1M11 1H5M11 1V7" />
  </svg>
);

const Card = ({ project, index, onOpen }) => {
  const [hovered, setHovered] = useState(false);
  const color = project.color || getColor(index);
  const t = theme[color] || theme.teal;

  return (
    <div
      onClick={() => onOpen({ ...project, color })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col cursor-pointer rounded-2xl border border-white/10
        overflow-hidden transition-all duration-300 hover:scale-[1.02]"
      style={{
        background:    t.card,
        backdropFilter:'blur(12px)',
        height:        '100%',
        boxShadow:     hovered ? `0 0 28px 4px ${t.glow}` : 'none',
        borderColor:   hovered ? t.accent + '44' : 'rgba(255,255,255,0.10)',
      }}
    >
      {/* Top colour strip */}
      <div className="h-1 w-full flex-shrink-0" style={{ background: t.strip }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${t.accent}33` }}
          >
            {project.emoji}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] tracking-[.12em] uppercase mb-0.5 truncate"
              style={{ ...formal, color: 'rgba(255,255,255,0.35)' }}>
              {project.type.split('·')[0].trim()}
            </div>
            <div className="text-[11px] font-medium truncate"
              style={{ ...formal, color: t.accent }}>
              {project.subtitle}
            </div>
          </div>
        </div>

        {/* Type badge */}
        <span
          className="text-[10px] font-semibold tracking-[.08em] uppercase
            px-3 py-1.5 rounded-lg w-full text-center mb-4 block"
          style={{ ...formal, ...t.badge }}
        >
          {project.type}
        </span>

        {/* Divider */}
        <div className="h-px mb-4"
          style={{ background: `linear-gradient(90deg,${t.accent}44 0%,transparent 80%)` }} />

        {/* Title */}
        <h3 className="mb-4 leading-snug"
          style={{ ...script, fontSize: '20px', fontWeight: 600, color: '#ffffff' }}>
          {project.title}{' '}
          <span style={{ color: t.accent }}>— {project.subtitle}</span>
        </h3>

        {/* Details */}
        <div className="flex flex-col gap-2.5 mb-4 flex-1">
          {[
            { label: 'Problem',  val: project.problem  },
            { label: 'Approach', val: project.approach },
            { label: 'Outcome',  val: project.outcome  },
          ].map(({ label, val }) => (
            <div key={label} className="flex gap-2">
              <span className="text-[9px] tracking-[.1em] uppercase flex-shrink-0 w-16 pt-0.5"
                style={{ ...formal, color: 'rgba(255,255,255,0.28)' }}>
                {label}
              </span>
              <span className="text-xs leading-relaxed"
                style={{ ...formal, color: 'rgba(255,255,255,0.58)' }}>
                {val}
              </span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-0.5 rounded-full text-[10px]"
              style={{ ...formal, background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${t.accent}33`, color: t.accent }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto gap-2 flex-wrap">
          <span className="text-[10px]"
            style={{ ...formal, color: 'rgba(255,255,255,0.22)' }}>
            Click for details
          </span>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                  text-[10px] font-semibold tracking-[.06em] uppercase
                  transition-all duration-200 hover:gap-2.5"
                style={{ ...formal, background: t.accent, color: '#fff' }}
              >
                Live <ExternalLink />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                text-[10px] font-semibold tracking-[.06em] uppercase
                transition-all duration-200 hover:gap-2.5"
              style={{ ...formal, ...t.badge }}
            >
              GitHub <Arrow />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Modal */
const Modal = ({ project, onClose }) => {
  const t = theme[project?.color] || theme.teal;
  React.useEffect(() => {
    const esc = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [onClose]);
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center
      bg-black/85 backdrop-blur-sm p-4"
      style={{ animation: 'fadeIn .25s ease' }}
      onClick={onClose}
    >
      <div className="rounded-3xl max-w-2xl w-full p-8 relative
        overflow-y-auto max-h-[90vh] border border-white/10"
        style={{ background: 'linear-gradient(135deg,#0d1420,#12102a)',
          animation: 'slideUp .3s cubic-bezier(.16,1,.3,1)' }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-gray-600
            hover:text-white transition-colors bg-transparent border-none cursor-pointer">
          ×
        </button>
        <div className="w-full h-24 rounded-2xl flex items-center justify-center text-5xl mb-6"
          style={{ background: `linear-gradient(135deg,${t.accent}15,rgba(255,255,255,0.02))`,
            border: `1px solid ${t.accent}22` }}>
          {project.emoji}
        </div>
        <h3 className="text-white mb-3"
          style={{ ...script, fontSize: '26px', fontWeight: 700 }}>
          {project.title} <span style={{ color: t.accent }}>— {project.subtitle}</span>
        </h3>
        <span className="text-[9px] font-semibold tracking-[.1em] uppercase
          px-3 py-1 rounded inline-block mb-5"
          style={{ ...formal, ...t.badge }}>
          {project.type}
        </span>
        <p className="text-sm leading-relaxed mb-5"
          style={{ ...formal, color: 'rgba(255,255,255,0.55)' }}>
          {project.description}
        </p>
        <div className="flex flex-col gap-3 p-5 rounded-xl mb-5"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          {[
            { label: 'Problem',  val: project.problem  },
            { label: 'Approach', val: project.approach },
            { label: 'Outcome',  val: project.outcome  },
          ].map(({ label, val }) => (
            <div key={label} className="flex gap-4">
              <span className="text-[9px] tracking-[.1em] uppercase w-20 flex-shrink-0 pt-0.5"
                style={{ ...formal, color: 'rgba(255,255,255,0.30)' }}>
                {label}
              </span>
              <span className="text-sm leading-relaxed"
                style={{ ...formal, color: 'rgba(255,255,255,0.60)' }}>
                {val}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full text-[10px]"
              style={{ ...formal, background: `${t.accent}12`,
                border: `1px solid ${t.accent}33`, color: t.accent }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white
                hover:brightness-110 hover:scale-105 transition-all duration-300"
              style={{ ...formal, background: t.accent }}>
              View Live Demo ↗
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white
              hover:brightness-110 hover:scale-105 transition-all duration-300"
            style={{ ...formal, background: `linear-gradient(90deg,${t.accent}cc,${t.accent})` }}>
            View on GitHub
          </a>
          <button onClick={onClose}
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white
              border border-white/20 hover:border-white/40
              transition-all duration-300 bg-transparent cursor-pointer"
            style={formal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[10vw] font-sans clip-path-custom"
      style={{ background: 'linear-gradient(135deg,#050414 0%,#0b0a24 50%,#0f1a2e 100%)' }}
    >
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <span className="relative inline-block group">
            <span className="relative z-10" style={{ fontFamily: "'Dancing Script', cursive" }}>Projects</span>
            <span className="absolute left-1/2 -bottom-1 -translate-x-1/2
              h-[2px] w-0 bg-[#7C9FBF] transition-all duration-300 group-hover:w-full" />
          </span>
        </h2>
        <p className="text-gray-500 mt-6 text-base max-w-xl mx-auto leading-relaxed" style={formal}>
          A collection of projects built across different technologies —
          each one a step forward in problem-solving and engineering.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch reveal-scale">
        {projects.map((p, i) => (
          <Card key={p.id} project={p} index={i} onOpen={setSelected} />
        ))}
      </div>

      <div className="text-center mt-12 reveal">
        <a href="https://github.com/sabnamparvinbristy" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full
            text-sm font-semibold text-white border border-white/20
            hover:border-[#7C9FBF] hover:text-[#7C9FBF] transition-all duration-300"
          style={formal}>
          View All Repositories →
        </a>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Work;
