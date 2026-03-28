import React, { useState } from "react";
import { SkillsInfo } from "../../constants";

/*CDN icon URLs*/
const fixIcon = (name, icon) => {
  const overrides = {
    CSS3: "https://cdn.simpleicons.org/css3/264de4",
    Express: "https://cdn.simpleicons.org/express/ffffff",
    "VS Code": "https://cdn.simpleicons.org/visualstudiocode/0078d7",
    Java: "https://cdn.simpleicons.org/openjdk/ED8B00",
    PyMOL: "https://cdn.simpleicons.org/moleculardevices/0066CC",
    "CB-Dock2": "https://cdn.simpleicons.org/gnubash/4EAA25",
    "Discovery Studio": "https://cdn.simpleicons.org/dassaultsystemes/005386",
    PyRx: "https://cdn.simpleicons.org/anaconda/44A833",
    BioPython: "https://cdn.simpleicons.org/python/3776AB",
    Jupyter: "https://cdn.simpleicons.org/jupyter/F37626",
  };
  return overrides[name] || icon;
};

const formal = { fontFamily: "Poppins, sans-serif" };

const Skill = () => {
  /*currently hovered card track*/
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans clip-path-custom"
      style={{
        background:
          "linear-gradient(135deg,#050414 0%,#0b0a24 50%,#0f1a2e 100%)",
      }}
    >
      {/*Title*/}
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <span className="relative inline-block group">
            <span
              className="relative z-10"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Skills
            </span>
            <span
              className="absolute left-1/2 -bottom-1 -translate-x-1/2
              h-[2px] w-0 bg-[#7C9FBF] transition-all duration-300 group-hover:w-full"
            />
          </span>
        </h2>
        <p
          className="text-gray-500 mt-6 text-base max-w-xl mx-auto leading-relaxed"
          style={formal}
        >
          A professional toolkit applied across diverse development projects and
          team environments.
        </p>
      </div>

      {/*Cards*/}
      <div className="flex flex-wrap justify-center gap-10 reveal-scale">
        {SkillsInfo.map((cat) => {
          const isHovered = hoveredCard === cat.title;

          return (
            <div
              key={cat.title}
              className="p-8 flex-1 min-w-[280px] max-w-[360px] rounded-2xl
                border border-white/10 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.03)",
                position: "relative",
                overflow: "hidden",
                borderColor: isHovered
                  ? "rgba(192,132,252,0.35)"
                  : "rgba(255,255,255,0.10)",
                boxShadow: isHovered
                  ? "0 0 32px 4px rgba(192,132,252,0.10)"
                  : "none",
              }}
              onMouseEnter={() => setHoveredCard(cat.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: isHovered
                    ? "linear-gradient(90deg, transparent 0%, #c084fc 40%, #a855f7 60%, transparent 100%)"
                    : "transparent",
                  transition: "background 0.35s ease",
                  borderRadius: "12px 12px 0 0",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "90%",
                  height: "90px",
                  background: isHovered
                    ? "radial-gradient(ellipse at top, rgba(192,132,252,0.18) 0%, rgba(168,85,247,0.06) 50%, transparent 75%)"
                    : "transparent",
                  transition: "background 0.4s ease",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  className="text-base font-semibold text-white mb-6 text-center
                    tracking-widest uppercase"
                  style={formal}
                >
                  {cat.title}
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl
                        border border-white/08 cursor-default
                        hover:border-[#7C9FBF]/40 hover:-translate-y-0.5
                        transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                      title={skill.name}
                    >
                      <img
                        src={fixIcon(skill.name, skill.icon)}
                        alt={skill.name}
                        className="w-7 h-7 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <span
                        className="text-[9px] text-gray-500 text-center leading-tight"
                        style={formal}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
