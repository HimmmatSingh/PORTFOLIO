import React from "react";

const tech = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function TechStack() {
  return (
    <section className="bg-[#0d0f10] text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold mb-8">TECH STACK</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Normal icons from array */}
          {tech.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl border border-gray-700 hover:border-gray-400 transition"
            >
              <img src={item.icon} alt={item.name} className="w-10 h-10" />
              <span className="text-gray-300">{item.name}</span>
            </div>
          ))}

          {/* Tailwind Inline SVG */}
          <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl border border-gray-700 hover:border-gray-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 h-10 text-sky-400"
              fill="currentColor"
            >
              <path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path>
            </svg>
            <span className="text-gray-300">Tailwind CSS</span>
          </div>

          {/* GitHub Inline SVG (White) */}
          <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl border border-gray-700 hover:border-gray-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 h-10 text-white"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.083 1.838 1.234 1.838 1.234 1.07 1.834 2.807 1.304 3.495.997.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.521.117-3.171 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.65.243 2.868.119 3.171.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.371.823 1.103.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.308 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span className="text-gray-300">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
