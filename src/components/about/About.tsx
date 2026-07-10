"use client";
import React from "react";
import { motion } from "framer-motion";
import { STATS } from "../../constants";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-white/5 py-24"
    >
      <div className="flex flex-wrap gap-x-16 gap-y-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/5"
        >
          <span className="font-sans text-sm uppercase tracking-[0.3em] text-gold">
            01 — About
          </span>
          <h2 className="mt-4 text-5xl font-medium leading-tight text-ivory sm:text-6xl">
            Shipping quality, one release at a time.
          </h2>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:flex-1"
        >
          <p className="max-w-2xl text-xl font-light leading-relaxed text-neutral-300 sm:text-2xl">
            I&rsquo;m a QA Engineer with 4+ years of hands-on experience
            delivering end-to-end product quality across web, mobile, and API
            layers. I work across the full testing lifecycle — from test
            planning and manual exploratory testing to building Playwright
            automation frameworks with the Page Object Model pattern for
            scalable, maintainable regression coverage.
          </p>
          <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-neutral-300 sm:text-2xl">
            I&rsquo;m most effective in fast-moving Agile teams, owning QA
            sign-off end to end: test strategy, defect management, API
            validation with Postman, and CI/CD-integrated automation that
            ships quality with confidence. Currently based in Lagos, Nigeria
            and open to remote and global opportunities.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-medium text-ivory sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-sm uppercase tracking-wider text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
