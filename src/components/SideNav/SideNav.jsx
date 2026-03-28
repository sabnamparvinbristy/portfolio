import React, { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SideNav = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    //Scroll
    const onScroll = () => {
      const pos = window.scrollY + 200;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos)
          setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    //Keyboard press 1-5
    const onKey = (e) => {
      const map = {
        1: "about",
        2: "skills",
        3: "work",
        4: "education",
        5: "contact",
      };
      if (map[e.key]) {
        document
          .getElementById(map[e.key])
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      className="hidden lg:flex"
      style={{
        position: "fixed",
        right: "24px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 800,
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "16px",
      }}
    >
      {sections.map(({ id }) => (
        <div
          key={id}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div
            style={{
              width: active === id ? "10px" : "6px",
              height: active === id ? "10px" : "6px",
              borderRadius: "50%",
              background: active === id ? "#7C9FBF" : "rgba(255,255,255,0.22)",
              border:
                active === id
                  ? "2px solid rgba(124,159,191,0.50)"
                  : "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                active === id ? "0 0 8px rgba(124,159,191,0.55)" : "none",
              transition: "all 0.3s cubic-bezier(.16,1,.3,1)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SideNav;
