import React, { useEffect, useRef } from 'react';
import Navbar    from './components/Navbar/Navbar';
import About     from './components/About/About';
import Skill     from './components/Skills/Skill';
import Work      from './components/Work/Work';
import Education from './components/Education/Education';
import Contact   from './components/Contact/Contact';
import Footer    from './components/Footer/Footer';
import Loader    from './components/Loader/Loader';
import BlurBlob     from './BlurBlob';
import ScrollToTop  from './components/ScrollToTop/ScrollToTop';
import SideNav      from './components/SideNav/SideNav';
import CursorGlow   from './components/CursorGlow/CursorGlow';
import './index.css';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    //Create stars
    const starColors = [
      'rgb(227, 229, 155)',   
      'rgb(227, 229, 155)',
      'rgb(227, 229, 155)',
      '#7C9FBF',             
      '#7C9FBF',
      '#c084fc',             
      '#c084fc',
    ];

    for (let i = 0; i < 400; i++) {
      const star       = document.createElement('div');
      star.className   = 'star';
      const size       = Math.random() * 3 + 1;
      const duration   = 30 + Math.random() * 30;
      const delay      = Math.random() * 5;
      const brightness = 0.7 + Math.random() * 0.5;
      const color      = starColors[Math.floor(Math.random() * starColors.length)];
      star.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        background-color:${color};
      `;
      star.style.setProperty('--brightness', brightness);
      star.style.animation =
        `float ${duration}s linear ${delay}s infinite,
         sparkle ${duration}s ease-in-out ${delay}s infinite`;
      container.appendChild(star);
    }

    //Ripple on click
    const createRipple = (e) => {
      const r       = document.createElement('div');
      r.className   = 'ripple';
      r.style.left  = `${e.clientX}px`;
      r.style.top   = `${e.clientY}px`;
      container.appendChild(r);
      setTimeout(() => r.remove(), 1000);
    };
    container.addEventListener('click', createRipple);
    return () => container.removeEventListener('click', createRipple);
  }, []);

  /*Scroll progress bar*/
  useEffect(() => {
    const bar      = document.getElementById('progress-bar');
    const onScroll = () => {
      const p = (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = p + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /*Global scroll reveal*/
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="bg-[#050414] min-h-screen overflow-hidden relative"
      ref={containerRef}
    >
      {/*Cursor glow*/}
      <CursorGlow />

      {/* Side nav dots + keyboard */}
      <SideNav />

      {/* Scroll to top*/}
      <ScrollToTop />

      {/* Blur blobs*/}
      <BlurBlob position={{ top: '18%', left: '18%' }} size={{ width: '32%', height: '36%' }} color="purple" />
      <BlurBlob position={{ top: '58%', left: '78%' }} size={{ width: '28%', height: '30%' }} color="violet" />
      <BlurBlob position={{ top: '88%', left: '22%' }} size={{ width: '24%', height: '26%' }} color="teal"   />

      {/* Grid overlay*/}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Progress bar*/}
      <div id="progress-bar" />

      {/* Loader */}
      <Loader />

      {/* Main content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <About />
        <Skill />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
