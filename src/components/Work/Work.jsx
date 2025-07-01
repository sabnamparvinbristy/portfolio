import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      const timeout = setTimeout(() => setShowModal(true), 100);
      return () => clearTimeout(timeout);
    } else {
      setShowModal(false);
    }
  }, [selectedProject]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative bg-skills-gradient clip-path-custom"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          <span className="relative inline-block group">
            <span className="relative z-10">PROJECTS</span>
            <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 h-[2px] w-0 bg-[#2EC4B6] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg font-medium max-w-xl mx-auto leading-relaxed">
          Explore a collection of my projects across different technologies
          and stacks. Each one reflects creativity, problem-solving, and learning.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl 
              shadow-none hover:shadow-[0_0_24px_3px_rgba(168,85,247,0.2)] hover:bg-[rgba(168,85,247,0.07)] 
              transition-all duration-300 transform hover:scale-105 cursor-pointer focus:outline-none"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleOpenModal(project)}
            role="button"
            aria-label={`Open project ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-3xl"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-2xl text-white font-semibold mb-2 text-center">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 text-center">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#1b1a2e] text-xs font-medium text-[#2EC4B6] rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4 transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#1a1a2f] bg-opacity-95 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl max-w-3xl w-full relative overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-[#a855f7] focus:outline-none"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="flex flex-col p-6 md:p-8">
              <div className="w-full flex justify-center mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-xl shadow-lg max-h-72 object-contain"
                />
              </div>
              <h3
                id="modal-title"
                className="text-3xl font-bold text-[#a855f7] mb-4 text-center"
              >
                {selectedProject.title}
              </h3>
              <p
                id="modal-description"
                className="text-gray-300 mb-6 text-center leading-relaxed"
              >
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-[#2EC4B6] rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 justify-center flex-wrap">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#a855f7] text-white hover:text-black px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 min-w-[120px] text-center"
                >
                  View Code
                </a>
                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#a855f7] hover:bg-[#9244d4] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 min-w-[120px] text-center"
                  >
                    View Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
