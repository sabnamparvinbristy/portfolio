import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2
          className="
    text-2xl 
    font-semibold 
    font-greatvibes
    drop-shadow-md
    transition-colors duration-500 ease-in-out
  "
          style={{
            fontFamily: "'Great Vibes', cursive",
            background:
              "linear-gradient(90deg, oklch(64% 0.29 180), oklch(63% 0.28 234))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow:
              "0 0 8px rgba(139, 92, 246, 0.25), 0 0 12px rgba(187, 134, 252, 0.3)",
          }}
        >
          Sabnam Parvin
        </h2>

        {/* navigation link */}

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <div key={index} className="relative group my-1">
              <button
                onClick={() => handleScroll(item.id)}
                className="
    text-sm sm:text-base 
    relative z-10 
    font-[Dancing Script] 
    transition duration-300 ease-in-out 
    group-hover:scale-110
    group-hover:text-transparent 
    group-hover:bg-gradient-to-r 
    group-hover:from-[#a855f7] 
    group-hover:to-[#2EC4B6] 
    group-hover:bg-clip-text
  "
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {item.name}
              </button>

              <span
                className="
          absolute left-0 bottom-0 w-0 h-[2px] 
          transition-all duration-300 
          group-hover:w-full 
          bg-gradient-to-r from-[#2EC4B6] to-[#a855f7]
        "
              ></span>
            </div>
          ))}
        </nav>
        {/* social media link */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaGithub size={26} />,
              link: "https://github.com/sabnamparvinbristy",
            },
            {
              icon: <FaLinkedin size={26} />,
              link: "https://www.linkedin.com/in/sabnamparvin",
            },
            {
              icon: <FaFacebook size={26} />,
              link: "https://www.facebook.com/sabnamsp10",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
        text-white 
        p-2 
        rounded-full 
        transition-all 
        duration-300 
        transform 
        hover:scale-125 
        hover:bg-white/10 
        hover:backdrop-blur-md 
        hover:shadow-md
      "
            >
              {item.icon}
            </a>
          ))}
        </div>
        {/* cp right text */}
        
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Sabnam Parvin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
