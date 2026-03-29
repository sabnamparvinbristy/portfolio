import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + 100;
      menuItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos)
          setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        px-[7vw] md:px-[7vw] lg:px-[20vw]
        ${
          scrolled
            ? "bg-[#050414]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between py-5 text-white">
        {/* Logo */}
        <button
          onClick={() => scrollTo("about")}
          className="text-xl md:text-2xl font-semibold bg-transparent border-none cursor-pointer group"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          <span className="text-[#7C9FBF]">&lt;</span>
          <span
            style={{ color: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #c4d6e8 0%, #a78bfa 50%, #7C9FBF 100%)";
              e.currentTarget.style.WebkitBackgroundClip = "text";
              e.currentTarget.style.WebkitTextFillColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "none";
              e.currentTarget.style.WebkitBackgroundClip = "unset";
              e.currentTarget.style.WebkitTextFillColor = "white";
            }}
          >
            Sabnam Parvin Bristy
          </span>
          <span className="text-[#7C9FBF]">&gt;</span>
        </button>

        {/*Desktop links*/}
        <ul className="hidden md:flex space-x-8 text-sm tracking-wide">
          {menuItems.map(({ id, label }) => (
            <li key={id} className="relative group">
              <button
                onClick={() => scrollTo(id)}
                className={`bg-transparent border-none cursor-pointer text-sm
                  transition-colors duration-200
                  ${active === id ? "text-[#7C9FBF]" : "text-gray-400 hover:text-white"}`}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </button>
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#7C9FBF]
                  transition-all duration-300
                  ${active === id ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </li>
          ))}
        </ul>

        {/* socials only*/}
        <div className="hidden md:flex items-center gap-5">
          {[
            {
              href: "https://github.com/sabnamparvinbristy",
              Icon: FaGithub,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/sabnamparvin",
              Icon: FaLinkedin,
              label: "LinkedIn",
            },
            {
              href: "https://www.facebook.com/sabnamparvinbristy",
              Icon: FaFacebook,
              label: "Facebook",
            },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="text-gray-500 hover:text-[#7C9FBF] transition-colors duration-200"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Mobile icon */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer text-[#7C9FBF]"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/*Mobile dropdown*/}
      {isOpen && (
        <div
          className="absolute top-[68px] left-1/2 -translate-x-1/2 w-4/5
          backdrop-blur-xl rounded-2xl border z-50 overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #0e0b28 0%, #120e30 50%, #0f1a2e 100%)',
            borderColor: 'rgba(168,85,247,0.28)',
            boxShadow: '0 8px 40px rgba(5,4,20,0.85), 0 0 0 1px rgba(168,85,247,0.10), 0 0 24px rgba(168,85,247,0.08)',
          }}
        >
          {/*accent line */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #a855f7 40%, #c084fc 60%, transparent)',
          }} />

        
          <div style={{
            position: 'absolute', top: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: '70%', height: '60px',
            background: 'radial-gradient(ellipse at top, rgba(168,85,247,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="py-2 relative">
            {menuItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-center py-3 text-sm border-none cursor-pointer transition-all duration-200"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: '0.06em',
                  background: active === id ? 'rgba(168,85,247,0.08)' : 'transparent',
                  color: active === id ? '#c084fc' : 'rgba(200,210,230,0.55)',
                  borderLeft: active === id ? '2px solid rgba(168,85,247,0.50)' : '2px solid transparent',
                }}
                onMouseEnter={e => {
                  if (active !== id) {
                    e.currentTarget.style.color = '#e2e8f0';
                    e.currentTarget.style.background = 'rgba(168,85,247,0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (active !== id) {
                    e.currentTarget.style.color = 'rgba(200,210,230,0.55)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            height: '1px', margin: '0 20px',
            background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.22), transparent)',
          }} />

          {/* Social icons */}
          <div className="flex justify-center gap-5 py-4">
            {[
              { href: 'https://github.com/sabnamparvinbristy',      Icon: FaGithub   },
              { href: 'https://www.linkedin.com/in/sabnamparvin',    Icon: FaLinkedin },
              { href: 'https://www.facebook.com/sabnamparvinbristy', Icon: FaFacebook },
            ].map(({ href, Icon }, i) => (
              <a
                key={i} href={href} target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(168,85,247,0.50)', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#c084fc'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(168,85,247,0.50)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Bottom accent line */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.18), transparent)',
          }} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
