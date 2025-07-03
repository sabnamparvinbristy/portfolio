import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] 
      font-sans bg-gradient-to-br from-[#050414] via-[#0f0c29] to-[#1f3a56] clip-path-custom-3 text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          <span className="relative inline-block group">
            <span
              className="relative z-10 font-[Dancing Script]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              EDUCATION
            </span>
            <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 h-[2px] w-0 bg-[#2EC4B6] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          My academic path has helped me grow and learn. Below is a look at my
          education.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Central Line */}
        <div
          className="absolute sm:left-1/2 left-6 sm:translate-x-[-50%] -translate-x-1/2 w-[6px] 
        h-full bg-gradient-to-b from-[#2EC4B6]/40 to-white/10 rounded-full shadow-[0_0_12px_2px_rgba(46,196,182,0.12)] z-0"
        ></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-center justify-${
                isLeft ? "start" : "end"
              } mb-20`}
            >
              {/* Education Card */}
              <div
                className={`
    mt-10 sm:mt-0 w-full sm:max-w-md p-6 sm:p-8 rounded-3xl 
    bg-white/5 backdrop-blur-xl border border-white/10
    shadow-none hover:shadow-[0_0_24px_3px_rgba(168,85,247,0.2)] hover:bg-[rgba(168,85,247,0.07)]
    transition-all duration-300 ease-in-out transform hover:scale-105
    ${isLeft ? "sm:ml-24 text-left" : "sm:ml-auto sm:mr-24 text-left"}
  `}
              >
                <div className="flex items-center gap-6 mb-4">
                  {/* School Logo */}
                  <div className="w-14 h-14 bg-white border-[6px] border-white rounded-full shadow-lg flex justify-center items-center overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
