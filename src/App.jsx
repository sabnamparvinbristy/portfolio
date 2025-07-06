import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";
import Clock from "./components/Clock/Clock";
import "./App.css";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    //sparkling stars
    const createStars = () => {
      const starsCount = 200;
      for (let i = 0; i < starsCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        
      //  position random
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
// deuration
        const duration = 30 + Math.random() * 30; 
        const delay = Math.random() * 5;
        const brightness = 0.7 + Math.random() * 0.5;

        star.style.setProperty('--brightness', brightness);
        star.style.animation = `float ${duration}s linear ${delay}s infinite, sparkle ${duration}s ease-in-out ${delay}s infinite`;

        container.appendChild(star);
      }
    };

    // shooting stars
    const createShootingStars = () => {
      const shootingStarsCount = 3;
      for (let i = 0; i < shootingStarsCount; i++) {
        const shootingStar = document.createElement("div");
        shootingStar.className = "shooting-star";

        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.top = `-10px`;

        const length = Math.random() * 80 + 50;
        const angle = Math.random() * 60 - 30;
        const duration = 7 + Math.random() * 3; 
        const delay = Math.random() * 10;

        shootingStar.style.width = `${length}px`;
        shootingStar.style.setProperty('--angle', `${angle}deg`);
        shootingStar.style.setProperty('--duration', `${duration}s`);
        shootingStar.style.setProperty('--delay', `${delay}s`);
        shootingStar.style.animation = `shoot var(--duration) ease-out var(--delay) infinite`;

        container.appendChild(shootingStar);
      }
    };

    // Ripple effect
    const createRipple = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      container.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    };

    createStars();
    createShootingStars();
    container.addEventListener("click", createRipple);

    return () => container.removeEventListener("click", createRipple);
  }, []);

  return (
    <div className="bg-[#050414] min-h-screen overflow-hidden relative" ref={containerRef}>
      <BlurBlob position={{top: '35%', left: '20%'}} size={{width:'30%', height:'40%'}} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="relative pt-20">
        <Navbar />
        <Clock />
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
