"use client";
import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-white/5 py-24">
      <motion.span
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-sans text-sm uppercase tracking-[0.3em] text-gold"
      >
        05 — Projects
      </motion.span>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-5xl font-medium text-ivory sm:text-6xl"
      >
        Selected work
      </motion.h2>

      <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-x-10 gap-y-6 py-12"
          >
            <div className="w-full sm:w-1/5">
              <span className="text-3xl font-light text-neutral-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="w-full sm:flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-3xl text-ivory sm:text-4xl">
                  {project.title}
                </h3>
                <span className="font-sans text-sm uppercase tracking-wider text-neutral-400">
                  {project.company} · {project.year}
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-lg font-light leading-relaxed text-neutral-300 sm:text-xl"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/70" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 font-sans text-xs uppercase tracking-wider text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
