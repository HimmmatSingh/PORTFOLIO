import React from 'react'

export default function Hero() {
  return (
    <section className="bg-[#0d0f10] flex items-center justify-center pt-24 pb-12">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 px-6">

        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <div className="p-[3px] bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-500 rounded-full">
            <img
              src="/Profile.png"
              alt="Profile"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-[#0d0f10] object-cover mx-auto"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="text-center md:text-left flex-1">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Hey, I'm Himmat.{" "}
            <span className="font-normal text-gray-300">
              I'm a Frontend Software Developer.
            </span>
          </h1>

          {/* Open to Work Badge */}
          <div className="mt-4">
            <span className="px-3 py-2 bg-green-900 text-green-300 text-xs rounded-full font-medium">
              ● Open to work
            </span>
          </div>

          {/* Location + Socials */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-6 mt-6 text-gray-400">
            
            {/* Location */}
            <span className="flex items-center gap-2 text-base">
              <span role="img" aria-label="home">🏡</span>
              <span>Delhi, India</span>
            </span>

            {/* Social Links */}
            <div className="flex gap-8">
              
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-3 text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 fill-current text-blue-500"
                >
                  <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
                </svg>
                <span className="text-gray-300 hover:text-white">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-3 text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 fill-current text-gray-400 hover:text-white"
                >
                  <path d="M316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z" />
                </svg>
                <span className="text-gray-300 hover:text-white">GitHub</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
