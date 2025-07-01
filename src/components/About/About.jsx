import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile/pro.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-[7vw] bg-gradient-to-br from-[#050414] via-[#0f0c29] to-[#2c5364] text-white"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sabnam Parvin
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#2EC4B6] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#2EC4B6]">
              <Typewriter
                words={[
                  "Aspiring Full-Stack Developer",
                  "Software Developer",
                  "Python Learner",
                  "Passionate Coder",
                  "Tech Explorer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* about me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            I’m an aspiring full-stack developer with a passion for software
            development and a curiosity that drives me to explore new
            technologies every day. As a dedicated Python & ML/AI learner and
            passionate coder, I enjoy solving problems and building projects
            that help me grow my knowledge. I’m eager to collaborate, keep
            learning, and turn ideas into real, impactful applications.
          </p>
          {/* resume button */}
          <a
            href="https://drive.google.com/drive/u/3/folders/1OGgWgypJ56lMrbiBiQzyCr7MNhDRqWww"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all 
             duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #2EC4B6, #20A4B8)",
              boxShadow: "0 4px 15px rgba(46, 196, 182, 0.4)",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={900}
            scale={1.02}
            transitionSpeed={700}
            gyroscope={true}
            style={{
              borderColor: "#2EC4B6",
              boxShadow: "0 6px 20px rgba(130, 69, 236, 0.3)",
            }}
          >
            <img
              src={profileImage}
              alt="Sabnam Parvin"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
