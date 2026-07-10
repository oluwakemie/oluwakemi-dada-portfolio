"use client";
import React from "react";
import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-white/5 py-24">
      <motion.span
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-sans text-sm uppercase tracking-[0.3em] text-gold"
      >
        04 — Experience
      </motion.span>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-5xl font-medium text-ivory sm:text-6xl"
      >
        Where I&rsquo;ve worked
      </motion.h2>

      <div className="mt-14 space-y-16">
        {EXPERIENCES.map((experience) => (
          <div
            key={experience.company}
            className="flex flex-wrap gap-x-16 gap-y-6"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4"
            >
              <p className="font-sans text-sm uppercase tracking-wider text-neutral-400">
                {experience.year}
              </p>
              <p className="mt-1 font-sans text-sm uppercase tracking-wider text-neutral-500">
                {experience.location}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-3xl lg:flex-1"
            >
              <h3 className="text-2xl text-ivory sm:text-3xl">
                {experience.role}
                <span className="text-gold"> — {experience.company}</span>
              </h3>
              <ul className="mt-5 space-y-3">
                {experience.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-lg font-light leading-relaxed text-neutral-300 sm:text-xl"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/70" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
