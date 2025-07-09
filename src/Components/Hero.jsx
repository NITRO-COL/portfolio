
import React from "react";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const Hero = () => {
  return (
    <main className="flex flex-col overflow-hidden gap-y-4 pt-36 md:pt-48 bg-neutral-950 items-center text-neutral-50 min-h-screen mx-auto text-center">

      <motion.p
        className="text-xs border border-neutral-600 rounded-full px-4 py-1.5 flex justify-center items-center gap-2 relative shine"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        Actively Seeking Job Opportunities
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-12 px-4 sm:leading-18 w-full sm:max-w-2xl md:max-w-[52rem]"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
      >
        Crafting Beautiful & Functional Web Experiences
      </motion.h1>

      <motion.h4
        className="md:text-xl leading-6 md:leading-8 w-full sm:max-w-2xl px-4 md:max-w-3xl"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hey, I'm Rajendra Singh Rao, a Full Stack Developer passionate about building
        performant, user-friendly, and scalable applications.
      </motion.h4>

      <motion.div
        className="flex max-sm:flex-col w-full px-8 justify-center mt-2 gap-4 md:gap-6"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <a
          className="px-8 flex group items-center justify-center gap-2 py-2 rounded-full border border-neutral-600 text-sm md:text-lg cursor-pointer"
          href="https://in.linkedin.com/in/rajendra-singh-rao-98b2a0234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>👋</span>Let's Connect
        </a>

        <a
          href="https://drive.google.com/file/d/1Y_8N8IK0uqsdlWnDLhg2qK_oazxMIXmd/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 flex justify-center items-center gap-2 py-2 rounded-full border border-neutral-600 text-sm md:text-lg cursor-pointer"
        >
          My Resume
          <span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="md:text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </span>
        </a>
      </motion.div>

      <div className="pointer-events-none relative z-10 mx-auto -mt-32 h-96 w-screen max-w-screen-2xl overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#1a237e,transparent_80%)] before:opacity-60">
        <div className="absolute animate-gradient top-1/2 -left-1/2 z-20 w-[200%] h-[300px] rounded-b-[100%] border-t-4 border-t-[#d0e8ff] bg-[#0a0a0a] shadow-[inset_0_2px_20px_#d0e8ff,0_-10px_50px_1px_#d0e8ffb3] scale-x-[1.5]"></div>
      </div>
    </main>
  );
};

export default Hero;
