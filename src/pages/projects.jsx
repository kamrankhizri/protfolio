import { useState } from "react";
import SectionWrapper from "../components/sectionwrapeer";
import projects from "../data/projects";

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <SectionWrapper id="projects" bg="bg-gradient-to-b from-black to-gray-900">
      <div className="text-center px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl font-bold mb-16 text-white drop-shadow-lg">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-500/40 hover:scale-[1.05] transition-transform duration-300"
            >
              {/* Full Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 md:h-96 object-cover"
              />

              {/* Blur Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-red-400 mb-3 drop-shadow">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {expanded === idx
                    ? project.description
                    : project.description.substring(0, 80) + "..."}
                </p>

                {/* More / Less toggle */}
                <button
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  className="text-blue-400 text-sm mt-3 hover:underline"
                >
                  {expanded === idx ? "Show Less" : "More"}
                </button>

                {/* Buttons */}
                {expanded === idx && (
                  <div className="mt-4 flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-500 rounded-md text-sm hover:bg-red-600 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 rounded-md text-sm hover:bg-gray-600 transition"
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
