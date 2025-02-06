import React from "react";
import { Link } from "react-router-dom"; 
const projects = [
  {
    id: "service-review",
    title: "Service Review System",
    description: "A modern Service Review website with an interactive menu and seamless user experience.",
    tech: ["React.js", "Tailwind", "DaisyUI","Node.js","MongoDb","Express.js"],
    image: "/src/assets/service.png",
  },
  {
    id: "micro-tasking",
    title: "Micro Tasking & Earning Platform",
    description: "A platform where users complete small tasks to earn money with different user roles.",
    tech: ["React.js", "Tailwind", "DaisyUI", "MongoDB", "Node.js"],
    image: "/src/assets/micro.png",
  },
  {
    id: "movie-portal",
    title: "Movie Portal",
    description: "A dynamic movie platform to explore, save, and manage favorite movies.",
    tech: ["React.js", "Tailwind", "DaisyUI","Node.js","MongoDb","Express.js"],
    image: "/src/assets/Screenshot 2025-02-05 154421.png",
  },
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>

                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    to={`/project/${project.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 block text-center"
                  >
                    View More  
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
