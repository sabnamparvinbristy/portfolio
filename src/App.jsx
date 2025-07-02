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

function App() {
  const containerRef = useRef(null);

  // dots background
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    //dots
    const createStars = () => {
      const starsCount = 100;
      for (let i = 0; i < starsCount; i++) {
        const star = document.createElement("div");
        star.className = "absolute rounded-full bg-white";
        
        // size random on 1-3px
        const size = Math.random() * 5 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // position random
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        //animation duration and delay random
        const duration = 50 + Math.random() * 30;
        const delay = Math.random() * 2;
        
        
        star.style.animation = `float ${duration}s linear ${delay}s infinite`;
        
        container.appendChild(star);
      }
    };

    // water drop effect
    const createRipple = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      
      // Position ripple where click
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      
      container.appendChild(ripple);
      
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    createStars();
    container.addEventListener("click", createRipple);

    return () => {
      container.removeEventListener("click", createRipple);
    };
  }, []);

  return (
    <div 
      className="bg-[#050414] min-h-screen overflow-hidden relative"
      ref={containerRef}
    >
      {/* Blur blob */}
      <BlurBlob position={{top: '35%', left: '20%'}} size={{width:'30%', height:'40%'}}></BlurBlob>
      
      {/* Grid background */}
      <div className="absolute 
      inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,
      transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
       bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main content */}
      <div className="relative pt-20">
        <Navbar/>
        <Clock/>
        <About/>
        <Skill/>
        <Work/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>

      {/* animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        
        .ripple {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          animation: rippleEffect 1s ease-out;
          pointer-events: none;
        }
        
        @keyframes rippleEffect {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;