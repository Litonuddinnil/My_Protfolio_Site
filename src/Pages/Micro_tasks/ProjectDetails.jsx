import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetail = {
  "service-review": {
    title: "Service Review System",
    description: "A restaurant website with an interactive menu, user-friendly UI, and order management.",
    tech: ["React.js", "Tailwind", "DaisyUI", "MongoDB", "Express.js", "Node.js"],
    video: "/src/assets/Service.mp4",
    liveLink: "https://service-review-system-953ea.web.app/",
    github: "https://github.com/Litonuddinnil/service-review-system-client-site",
    challenges: "Implementing a seamless UI for the job adding system.",
    improvements: "Adding a reservation system and AI-powered recommendations.",
  },
  "micro-tasking": {
    title: "Micro Tasking & Earning Platform",
    description: "A micro-tasking platform allowing users to complete small tasks and earn rewards.",
    tech: ["React.js", "Tailwind", "DaisyUI", "MongoDB", "Express.js", "Node.js"],
    video: "/src/assets/MicroTasking.mp4",
    liveLink: "https://simple-firebase-fe141.web.app/",
    github: "https://github.com/Litonuddinnil/Micro_Tasks?tab=readme-ov-file",
    challenges: "Managing roles and user permissions efficiently.",
    improvements: "Enhancing security and integrating more payment methods.",
  },
  "movie-portal": {
    title: "Movie Portal",
    description: "A movie platform that helps users explore and save their favorite movies.",
    tech: ["React.js","Tailwind", "DaisyUi","MongoDb","node.js",],
    video: "/src/assets/movie.mp4",
    liveLink: "https://movie-portal-f2acb.web.app/",
    github: "https://github.com/Litonuddinnil/movie-portal-client-site",
    challenges: "Optimizing API calls for better performance.",
    improvements: "Adding user reviews, integrating the TMDb API, and implementing a personalized recommendation system.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = ProjectDetail[id];

  if (!project) {
    return <h2 className="text-center text-red-500 mt-10">Project not found!</h2>;
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Video Section */}
        <div className="mb-8">
          <video
            controls
            autoPlay
            loop
            src={project.video}
            className="w-full rounded-lg shadow-2xl"
          ></video>
        </div>

        {/* Project Details Card */}
        <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all hover:scale-105">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
          <p className="text-gray-600 mb-6">{project.description}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tech Stack Used:</h3>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Challenges Faced:</h3>
            <p className="text-gray-600">{project.challenges}</p>
          </div>

          {/* Future Plans */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Future Plans:</h3>
            <p className="text-gray-600">{project.improvements}</p>
          </div>

          {/* Links */}
          <div className="flex justify-between items-center mb-6">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center gap-2 hover:text-blue-700 transition-colors">
              Live Demo <FaExternalLinkAlt />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 flex items-center gap-2 hover:text-gray-900 transition-colors">
              GitHub <FaGithub />
            </a>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;