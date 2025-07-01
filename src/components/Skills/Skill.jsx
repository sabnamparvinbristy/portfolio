import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skill = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          <span className="relative inline-block group">
            <span className="relative z-10">SKILLS</span>
            <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 h-[2px] w-0 bg-[#2EC4B6] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg font-medium max-w-xl mx-auto leading-relaxed">
          A professional toolkit of technologies applied across diverse development projects and team environments.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-none 
    p-8 flex-1 min-w-[280px] max-w-[360px] transition-all duration-300 transform hover:scale-105
    hover:shadow-[0_0_24px_3px_rgba(168,85,247,0.2)] hover:bg-[rgba(168,85,247,0.07)]"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              <span className="relative inline-block group">
                <span className="relative z-10">{category.title}</span>
                <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 h-[2px] w-0 bg-[#2EC4B6] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </h3>

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={800}
              scale={1.02}
              transitionSpeed={1200}
              gyroscope={true}
              glareEnable={false}
            >
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center space-y-2 border border-white/10 bg-white/5 rounded-2xl py-3 px-2 transition-transform duration-300 hover:scale-105 cursor-default"
                    title={skill.name}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm text-gray-300 text-center font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
