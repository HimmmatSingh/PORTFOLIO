import React from "react";
export default function Projects() {
  const projects = [
    {
      title: "",
      desc: "A short description about this project. Built with React, Tailwind and API integration.",
      image: "Screenshot 2025-10-03 111321.png", // 
      demo: "https://scsdb-1lc1.vercel.app",
      github: "https://github.com/HimmmatSingh/SCSDB"
    },
    {
      title: "Project Two",
      desc: "A modern real estate platform built with React and Tailwind CSS. The app showcases property listings with images, details, and a clean responsive UI. .",
      image: "/Estste.png",
      demo: "https://estate-iota-five.vercel.app/",
      github: "https://github.com/HimmmatSingh/ESTATE"
    }
  ];

  return (
    <section id="projects" className="bg-[#0d0f10] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1c1f] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-900 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-56">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm">{project.desc}</p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-4  bg-gray-700  hover:bg-gray-600  py-2 text-sm rounded-lg transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-gray-700 text-sm rounded-lg hover:bg-gray-600 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
