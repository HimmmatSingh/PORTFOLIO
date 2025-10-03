
import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Mystery Marketing",
    period: "2024 — 2025",
    details: [
      "Developed and maintained responsive websites and web applications using HTML, CSS, JavaScript, and React.",
      "Built reusable components and optimized performance for better user experience.",
      "Ensured cross-browser compatibility and mobile-first responsive design."
    ]
  },
 
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0d0f10] text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#1a1c1f] rounded-xl border border-gray-800 hover:bg-[#242629] transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="mt-2 md:mt-0 text-gray-500">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
