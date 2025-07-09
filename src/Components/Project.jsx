import React from "react";
import { motion } from "framer-motion";
import Testvault from "../assets/Testvault.png";
import Eva from "../assets/evacare.png";

const Project = () => {
  return (
    <section className="bg-neutral-950 flex flex-col justify-center items-center text-neutral-100 py-6 sm:py-16">

      {/* Animated Heading */}
      <motion.h4
        className="text-[15px] text-center text-neutral-300 font-medium"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        EXPLORE MY CREATIONS
      </motion.h4>

      <motion.h2
        className="text-3xl animated-text-gradient md:text-5xl font-semibold pt-2 pb-1 mb-6 md:mb-10 text-neutral-100"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div className="px-4 lg:w-4xl">
        {/* Animated Project Card */}
        <motion.div
          className="project flex max-lg:flex-col max-lg:pb-4 bg-neutral-950 gap-4 my-4 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition sticky border border-neutral-600"
          style={{ top: "calc(72px + 0px)" }}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Left Info Section */}
          <div className="projectinfo flex flex-1 flex-col p-4 md:p-8 h-96">
            <h3 className="text-xl md:text-3xl border-b border-neutral-600 pb-2 text-neutral-100 font-semibold">
              TestVault
            </h3>
            <p className="text-neutral-100 mt-2">
              Created a responsive technical assessment platform using ReactJS and Tailwind CSS.
            </p>
            <ul>
              <li className="text-sm pt-2">
                - Implemented a cheat-proof test environment with randomized MCQs per user.
              </li>
              <li className="text-sm pt-2">
                - Ensured mobile-first design and smooth performance across all devices.
              </li>
              <li className="text-sm pt-2">
                - Integrated a 30-minute countdown timer to enforce time-limited exams.
              </li>
            </ul>

            <div className="flex flex-wrap gap-1 mt-4">
              {["React.js", "Tailwind CSS", "Node.js", "Express.js"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-neutral-600"
                  >
                    <span>{tech}</span>
                  </span>
                )
              )}
            </div>

            <div className="flex gap-4 mt-5">
              <a
                href="https://github.com/NITRO-COL/TestVault"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-neutral-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5"
              >
                GitHub
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-blue-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5"
              >
                Live Site
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex-1 overflow-visible">
            <div className="projectimg lg:absolute lg:top-20 lg:right-[-55%] w-full h-40 sm:h-80 md:h-96 lg:w-[167%] lg:border border-neutral-600 rounded-xl lg:h-[22rem] hover:cursor-pointer">
              <img
                alt="CodeInsight AI screenshot"
                loading="lazy"
                decoding="async"
                className="rounded-xl object-contain border"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
                src={Testvault}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="px-4 lg:w-4xl">

<motion.div
  className="project flex max-lg:flex-col max-lg:pb-4 bg-neutral-950 gap-4 my-4 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition sticky border border-neutral-600"
  style={{ top: "calc(72px + 60px)" }}
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  {/* Project Info */}
  <div className="projectinfo flex flex-1 flex-col p-4 md:p-8 h-96">
    <h3 className="text-xl md:text-3xl border-b border-neutral-600 pb-2 text-neutral-100 font-semibold">
      My EvaCare
    </h3>
    <p className="text-neutral-100 mt-2">
      Built a multi-page, fully responsive website for a healthcare brand using ReactJS and Tailwind CSS.
    </p>
    <ul>
      <li className="text-sm pt-2">
        - Integrated scroll-based animations using AOS (Animate On Scroll) and GSAP for enhanced interactivity.
      </li>
      <li className="text-sm pt-2">
        - Optimized for all screen sizes, ensuring consistent performance across devices.
      </li>
      <li className="text-sm pt-2">
        - Focused on delivering a visually appealing and user-friendly experience throughout the site.
      </li>
    </ul>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-1 mt-4">
      {[
        { name: "React.js", color: "#61DAFB" },
        { name: "Redux Toolkit", color: "#764ABC" },
        { name: "Tailwind CSS", color: "#38B2AC" },
        { name: "Firebase", color: "#FFCA28" },
      ].map((tech) => (
        <span
          key={tech.name}
          className="flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-neutral-600"
          style={{ color: tech.color }}
        >
          <span>{tech.name}</span>
        </span>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex gap-4 mt-5">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-neutral-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5"
      >
        GitHub
      </a>
      <a
        href="https://myewacare.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-blue-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5"
      >
        Live Site
      </a>
    </div>
  </div>

  {/* Project Image */}
  <div className="relative flex-1 overflow-visible">
    <div className="projectimg lg:absolute lg:top-20 lg:right-[-55%] w-full h-40 sm:h-80 md:h-96 lg:w-[167%] lg:border border-neutral-600 rounded-xl lg:h-[22rem] hover:cursor-pointer">
      <img
        alt="NetflixGPT screenshot"
        loading="lazy"
        decoding="async"
        className="rounded-xl object-contain border"
        style={{ position: "absolute", height: "100%", width: "100%" }}
        src={Eva}
      />
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Project;
