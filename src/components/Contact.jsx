import React from 'react'

export const Contact = () => {
  return (
    <section id="contact" className="bg-[#0d0f10] text-white pt-16 pb-8">
      {/* Grey divider line */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-700 mb-8"></div>
      </div>

      {/* Centered content */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        {/* Mail icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-8 h-8 fill-current text-gray-300"
          aria-hidden="true"
        >
          <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
        </svg>

        <span className="text-gray-200">singhhimmat938@gmail.com</span>
      </div>
    </section>
  )
}

export default Contact;



