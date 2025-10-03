import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0d0f10] border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side - Name */}
        <h1 className="text-2xl font-bold tracking-wide text-gray-300 hover:text-white cursor-pointer">
          Himmat Singh
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#experience" className="text-gray-300 hover:text-white transition">
              Work Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-700 bg-[#0d0f10]">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium">
            <li>
              <a
                href="#experience"
                className="text-gray-300 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
