"use client";
import React from "react";
import Link from "next/link";
import Profile from "../../assets/abour.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Home = () => {
  return (
    <div className="border-b border-neutral-900  pb-4 lg:mb-35">
      {" "}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight mt-10 lg:mt-16 lg:text-8xl"
            >
              Oluwakemi Esther
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
Quality Assurance Engineer            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-3 font-light tracking-tighter"
            >
              A Dedicated Quality Assurance Engineer with 4 years of hands-on experience ensuring the delivery of reliable, scalable, and high-quality web applications.
              Proficient in both manual and automated testing, including functional, regression, integration, and API testing. Experienced with tools
              such as Cypress, Postman, Jira, and Jmeter. Strong understanding of SDLC/STLC and Agile methodologies.
              Passionate about continuous improvement, quality standards, and staying up to date with evolving testing practices and technologies.
            </motion.p>
          </div>
          <div className="m-8 flex items-center justify-start gap-8 text-2xl">
            <Link href="https://www.linkedin.com/in/oluwakemiesther/">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/oluwakemie">
            <FaGithub />
            </Link>

            <FaInstagram />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={Profile.src}
              alt="Kemmie"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
