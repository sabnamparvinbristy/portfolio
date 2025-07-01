import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skill = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">SKILLS</h2>
        <div className="w-24 h-1 bg-[#2EC4B6] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium max-w-xl mx-auto leading-relaxed">
          A professional toolkit of technologies applied across diverse development projects and team environments.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-8 flex-1 min-w-[280px] max-w-[360px] transition-all duration-300 hover:shadow-[#2EC4B6]/30"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              {category.title}
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
