import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const menuItems = [
  { id: 'about',     label: 'About'     },
  { id: 'skills',    label: 'Skills'    },
  { id: 'work',      label: 'Projects'  },
  { id: 'education', label: 'Education' },
  { id: 'contact',   label: 'Contact'   },
];

const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [active,   setActive]   = useState('');
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
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        px-[7vw] md:px-[7vw] lg:px-[20vw]
        ${scrolled
          ? 'bg-[#050414]/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between py-5 text-white">

        {/*Logo*/}
        <button
          onClick={() => scrollTo('about')}
          className="text-2xl md:text-3xl font-semibold bg-transparent border-none cursor-pointer"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          <span className="text-[#7C9FBF]">&lt;</span>
          <span className="text-white">Sabnam Parvin Bristy</span>
          <span className="text-[#7C9FBF]">&gt;</span>
        </button>

        {/* Desktop links*/}
        <ul className="hidden md:flex space-x-8 text-sm tracking-wide">
          {menuItems.map(({ id, label }) => (
            <li key={id} className="relative group">
              <button
                onClick={() => scrollTo(id)}
                className={`bg-transparent border-none cursor-pointer text-sm
                  transition-colors duration-200
                  ${active === id ? 'text-[#7C9FBF]' : 'text-gray-400 hover:text-white'}`}
                style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.05em' }}
              >
                {label}
              </button>
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#7C9FBF]
                  transition-all duration-300
                  ${active === id ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </li>
          ))}
        </ul>

        {/* Desktop right*/}
        <div className="hidden md:flex items-center gap-5">
          {[
            { href: 'https://github.com/sabnamparvinbristy',    Icon: FaGithub,   label: 'GitHub'   },
            { href: 'https://www.linkedin.com/in/sabnamparvin', Icon: FaLinkedin, label: 'LinkedIn' },
            { href: 'https://www.facebook.com/sabnamsp10',      Icon: FaFacebook, label: 'Facebook' },
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
          onClick={() => setIsOpen(o => !o)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown*/}
      {isOpen && (
        <div className="absolute top-[68px] left-1/2 -translate-x-1/2 w-4/5
          bg-[#050414]/95 backdrop-blur-lg rounded-2xl border border-white/10
          shadow-xl z-50 py-3">
          {menuItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`block w-full text-center py-3 text-sm
                bg-transparent border-none cursor-pointer transition-colors duration-200
                ${active === id ? 'text-[#7C9FBF]' : 'text-gray-400 hover:text-white'}`}
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.05em' }}
            >
              {label}
            </button>
          ))}
          <div className="flex justify-center gap-5 pt-3 pb-1">
            {[
              { href: 'https://github.com/sabnamparvinbristy',    Icon: FaGithub   },
              { href: 'https://www.linkedin.com/in/sabnamparvin', Icon: FaLinkedin },
              { href: 'https://www.facebook.com/sabnamsp10',      Icon: FaFacebook },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#7C9FBF] transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

