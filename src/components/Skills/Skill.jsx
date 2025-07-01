import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skill = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white tracking-wide">SKILLS</h2>
        <div className="w-24 h-1 bg-[#2EC4B6] mx-auto mt-3 rounded"></div>
        <p className="text-gray-400 mt-6 text-lg font-semibold max-w-xl mx-auto">
          A collection of my technical skills and expertise honed through various projects and experiences.
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-8">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 bg-opacity-70 backdrop-blur-md px-8 py-8 rounded-3xl border border-gray-700 shadow-lg flex-1 min-w-[280px] max-w-[360px]"
          >
            <h3 className="text-2xl font-semibold text-[#2EC4B6] mb-6 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={800}
              scale={1.03}
              transitionSpeed={1500}
              gyroscope={true}
              glareEnable={false} // no glare, keep it subtle
            >
              <div className="grid grid-cols-3 gap-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center space-y-2 bg-transparent border border-gray-700 rounded-3xl py-3 px-3 cursor-default select-none transition-transform duration-300 hover:scale-105"
                    title={skill.name}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 object-contain rounded-lg"
                      loading="lazy"
                    />
                    <span className="text-sm text-gray-300 font-medium">
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
