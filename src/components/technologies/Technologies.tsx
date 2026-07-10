"use client";
import React from "react";
import { motion } from "framer-motion";
import { TbApi, TbRepeat, TbRobot, TbUsersGroup } from "react-icons/tb";
import {
  SiCypress,
  SiPostman,
  SiApachejmeter,
  SiGooglechrome,
  SiGithubactions,
} from "react-icons/si";
import { MdOutlineFactCheck } from "react-icons/md";
import { FaBugSlash, FaGithub, FaDatabase } from "react-icons/fa6";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const SKILLS = [
  { label: "Playwright", icon: TbRobot },
  { label: "Cypress", icon: SiCypress },
  { label: "API Testing", icon: TbApi },
  { label: "Postman", icon: SiPostman },
  { label: "Manual Testing", icon: MdOutlineFactCheck },
  { label: "Regression Testing", icon: TbRepeat },
  { label: "Performance (JMeter)", icon: SiApachejmeter },
  { label: "Test Case Design", icon: HiOutlineClipboardDocumentList },
  { label: "Bug Reporting", icon: FaBugSlash },
  { label: "SQL / Data", icon: FaDatabase },
  { label: "Chrome DevTools", icon: SiGooglechrome },
  { label: "CI/CD Testing", icon: SiGithubactions },
  { label: "Git & GitHub", icon: FaGithub },
  { label: "Agile / Scrum", icon: TbUsersGroup },
];

const PLAYWRIGHT_HIGHLIGHTS = [
  "End-to-end test automation for web and mobile apps using Playwright with TypeScript/JavaScript",
  "Cross-browser testing (Chromium, Firefox, WebKit) and mobile viewport emulation for iOS and Android",
  "Page Object Model (POM) design pattern for scalable, maintainable test suites",
  "API request interception and mocking using Playwright's network layer alongside UI assertions",
  "CI/CD pipeline integration (GitHub Actions) for automated test execution on every push/PR",
  "Playwright Trace Viewer and HTML reports for detailed post-run debugging and stakeholder reporting",
];

const Technologies = () => {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-white/5 py-24">
      <motion.span
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-sans text-sm uppercase tracking-[0.3em] text-gold"
      >
        02 — Skills
      </motion.span>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-5xl font-medium text-ivory sm:text-6xl"
      >
        Core skills
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {SKILLS.map((skill) => (
          <div
            key={skill.label}
            className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-4 transition-colors hover:border-gold/50"
          >
            <skill.icon className="flex-shrink-0 text-2xl text-gold" />
            <span className="text-lg text-neutral-200">{skill.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 rounded-2xl border border-gold/30 bg-gold/[0.04] p-8 sm:p-10"
      >
        <h3 className="text-3xl font-medium text-ivory sm:text-4xl">
          Playwright automation — what I bring
        </h3>
        <ul className="mt-6 space-y-3">
          {PLAYWRIGHT_HIGHLIGHTS.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-lg font-light leading-relaxed text-neutral-300 sm:text-xl"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Technologies;
