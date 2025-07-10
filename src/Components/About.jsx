import React from 'react';
import { motion } from 'framer-motion'; // 🆕 Add this
import profilePic from '../assets/profile.png';
import { HiLocationMarker } from 'react-icons/hi';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiFramer,
  SiMongodb, SiVercel, SiPostman
} from 'react-icons/si';

const About = () => {
  const techStack = [
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'ReactJS', icon: FaReact, color: '#61DAFB' },
    { name: 'NextJS', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    { name: 'NodeJS', icon: FaNodeJs, color: '#83CD29' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' }
  ];

  // Animations
  const fadeLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } };
  const fadeRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } };
  const zoomIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

  return (
    <section className="bg-neutral-950 flex flex-col overflow-hidden items-center text-neutral-50 px-4 lg:px-6 py-16">
      <motion.h4
        className="text-[15px] text-center text-neutral-300 font-medium"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        GET TO KNOW ME
      </motion.h4>

      <motion.h2
        className="text-3xl md:text-5xl font-semibold pt-2 mb-6 md:mb-10 text-neutral-50 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      <div className="flex max-lg:flex-col max-w-4xl">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/3 lg:max-w-3xl text-center flex flex-col items-center gap-4 pt-6 lg:px-6"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            alt="Profile Pic"
            width="170"
            height="170"
            className="border border-neutral-600 rounded-full"
            src={profilePic}
          />

          <p className="text-neutral-100 border-b border-neutral-600 pb-4">
            I'm a passionate Developer who loves building dynamic,
            user-friendly applications. I thrive on solving problems, creating
            seamless experiences, and continuously expanding my skills.
          </p>

          <div className="hidden lg:flex items-center gap-2 text-neutral-100">
            <HiLocationMarker className="text-2xl text-neutral-100" />
            <span>Kham ki Madri, Udaipur, Rajasthan</span>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-2/3 p-2 lg:p-6 space-y-4 lg:border-l lg:border-neutral-600"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
        >
          {/* Education */}
          <div className="pb-4 border-b border-neutral-600">
            <h3 className="text-lg text-neutral-100 font-semibold mb-2">
              Education
            </h3>
            <p className="text-neutral-100 text-sm flex justify-between">
              <span className="font-semibold">
                Geetanjali Institute of Technical Studies, Udaipur
              </span>
              <span>2021 - 2025</span>
            </p>
            <p className="text-neutral-100 text-sm flex justify-between">
              <span>Bachelor of Technology</span>
              <span>CGPA: 7.6</span>
            </p>
          </div>

          {/* Experience */}
          <div className="pb-4 border-b border-neutral-600">
            <h2 className="text-lg font-semibold mb-4">Experience</h2>
            <div className="mb-6 last:mb-0">
              <h3 className="text-neutral-100 flex justify-between items-center mb-2">
                <span className="font-semibold">Internship</span>
                <span>Sep 2024 – May 2025</span>
              </h3>
              <ul className="mt-2 space-y-2 text-neutral-100 text-sm">
                <li className="border-l-4 border-neutral-200 pl-3">
                  Built 4+ web applications using ReactJS, Spring Boot, and Tailwind CSS, focusing on responsive UI and robust back-end.
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <motion.section
            className="bg-neutral-950 flex flex-col justify-center text-neutral-100"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-lg font-semibold mb-2 self-start text-neutral-100">
              Tech Stack
            </h2>
            <div className="flex gap-1.5 md:gap-2 flex-wrap max-w-3xl">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={index}
                    className="inline-flex justify-center items-center gap-2 px-3 rounded-full py-1 text-xs border border-neutral-600"
                  >
                    <Icon style={{ color: tech.color }} />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
