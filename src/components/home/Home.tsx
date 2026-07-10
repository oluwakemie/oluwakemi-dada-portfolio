"use client";
import React from "react";
import Profile from "../../assets/abour.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { motion } from "framer-motion";
import { SOCIALS } from "../../constants";

const container = (delay: number) => ({
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <section
      id="top"
      className="flex min-h-[92vh] scroll-mt-24 flex-col justify-center border-b border-white/5 pb-16 pt-24 lg:pt-16"
    >
      <div className="flex flex-wrap items-center gap-y-12">
        <div className="w-full lg:w-3/5">
          <motion.p
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-gold"
          >
            QA Engineer · Automation · API Testing · Mobile &amp; Web
          </motion.p>

          <motion.h1
            variants={container(0.15)}
            initial="hidden"
            animate="visible"
            className="text-6xl font-medium leading-[1.05] tracking-tight text-ivory sm:text-7xl lg:text-8xl"
          >
            Oluwakemi
            <br />
            Dada
          </motion.h1>

          <motion.p
            variants={container(0.35)}
            initial="hidden"
            animate="visible"
            className="my-8 max-w-xl text-xl font-light leading-relaxed text-neutral-300 sm:text-2xl"
          >
            Results-driven QA Engineer with 4+ years delivering end-to-end
            product quality across web, mobile, and API layers — proficient
            in Playwright automation, REST API testing, and scalable
            regression strategy. Based in Lagos, Nigeria, open to remote and
            global opportunities.
          </motion.p>

          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="/Oluwakemi-Dada-QA-Resume.pdf"
              download
              className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-medium text-neutral-950 transition-colors hover:bg-gold-light"
            >
              <HiOutlineArrowDownTray className="text-lg" />
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-base text-neutral-200 transition-colors hover:border-gold hover:text-gold"
            >
              Let&rsquo;s talk
            </a>
          </motion.div>

          <motion.div
            variants={container(0.65)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex items-center gap-6 text-2xl text-neutral-400"
          >
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-gold"
            >
              <FaLinkedin />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-gold"
            >
              <FaGithub />
            </a>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/5 lg:pl-8">
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative w-full max-w-sm"
            >
              <div className="absolute -inset-3 -z-10 rounded-2xl border border-gold/30" />
              <img
                src={Profile.src}
                alt="Oluwakemi Dada"
                className="w-full rounded-2xl grayscale"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
