"use client";
import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-16 relative left-1/2 w-screen -mx-[50vw] bg-sage/50 py-24"
    >
      <div className="container mx-auto px-16">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-medium text-forest sm:text-6xl"
        >
          Selected work
        </motion.h2>

        <div className="mt-14 divide-y divide-forest/15 border-t border-forest/15">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-y-10 py-14 lg:grid-cols-[320px_1fr] lg:gap-x-0"
          >
            <div className="lg:border-r lg:border-forest/15 lg:pr-10">
              <span className="font-sans text-sm text-forest-muted/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-3xl leading-tight text-forest sm:text-4xl">
                {project.title}
              </h3>

              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.2em] text-forest-muted/70">
                    Client
                  </dt>
                  <dd className="mt-1.5 text-lg text-coral">
                    {project.company}
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.2em] text-forest-muted/70">
                    Year
                  </dt>
                  <dd className="mt-1.5 text-lg text-forest">{project.year}</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.2em] text-forest-muted/70">
                    Stack
                  </dt>
                  <dd className="mt-2.5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-forest/20 bg-white/70 px-3 py-1 font-sans text-xs uppercase tracking-wider text-forest-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              {project.link ? (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-coral/60 px-4 py-2 font-sans text-sm text-coral transition-colors hover:bg-coral hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                >
                  {project.link.label}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              ) : null}
            </div>

            <div className="lg:pl-10">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-forest-muted/70">
                What I did
              </p>
              <ol className="mt-5 max-w-2xl space-y-4">
                {project.bullets.map((bullet, i) => (
                  <li key={bullet} className="flex gap-4">
                    <span className="mt-0.5 flex-shrink-0 font-sans text-sm text-coral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-light leading-relaxed text-forest-light sm:text-xl">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
