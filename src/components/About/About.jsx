import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile/pro.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-[7vw] bg-gradient-to-br from-[#050414] via-[#0f0c29] to-[#1f3a56] text-white"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Sabnam Parvin
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#2EC4B6] leading-tight">
            <span className="text-white">I am a </span>
            <span>
              <Typewriter
                words={[
                  "Aspiring Full-Stack Developer",
                  "Software Developer",
                  "Python Learner",
                  "Passionate Coder",
                  "Tech Explorer",
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8">
            I’m a full-stack developer in the making, passionate about software
            development and driven by curiosity. From Python to ML/AI, I enjoy
            solving problems and building things that matter. With each project,
            I grow — and I’m always ready to learn, collaborate, and innovate.
          </p>

          <a
            href="https://drive.google.com/drive/u/3/folders/1OGgWgypJ56lMrbiBiQzyCr7MNhDRqWww"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-full text-white font-bold text-lg transition-transform duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #2EC4B6, #20A4B8)",
              boxShadow: "0 4px 15px rgba(46, 196, 182, 0.4)",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={true}
            style={{
              border: "4px solid #2EC4B6",
              boxShadow: "0 8px 20px rgba(46, 196, 182, 0.3)",
            }}
          >
            <img
              src={profileImage}
              alt="Sabnam Parvin"
              className="w-full h-full object-cover rounded-full"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
