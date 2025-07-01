import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(item.id);
        }
      });

      setIsScrolled(scrollPos > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-xl border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#2EC4B6]">&lt;</span>
          <span className="text-white">Sabnam Parvin Bristy</span>
          <span className="text-[#2EC4B6]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm tracking-wide text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`relative group cursor-pointer ${
                activeSection === item.id ? "text-[#2EC4B6]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)} className="relative z-10">
                {item.label}
              </button>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2EC4B6] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/sabnamparvinbristy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#2EC4B6]"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/sabnamparvin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#2EC4B6]"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.facebook.com/sabnamsp10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#2EC4B6]"
          >
            <FaFacebook size={22} />
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#2EC4B6] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#2EC4B6] cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setActiveSection("");
              }}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/80 backdrop-blur-lg z-50 rounded-lg shadow-lg transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300 w-full">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`w-full text-center relative group ${
                  activeSection === item.id ? "text-[#2EC4B6]" : "text-gray-300"
                }`}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="w-full px-4 py-2 transition"
                >
                  {item.label}
                </button>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-1 h-[2px] w-0 bg-[#2EC4B6] group-hover:w-4 transition-all duration-300"></span>
              </li>
            ))}

            {/* Socials on Mobile */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/sabnamparvinbristy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sabnamparvin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/sabnamsp10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
