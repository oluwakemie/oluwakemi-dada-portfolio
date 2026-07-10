"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCheckBadge } from "react-icons/hi2";
import { CERTIFICATIONS, EDUCATION } from "../../constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-b border-white/5 py-24"
    >
      <motion.span
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-sans text-sm uppercase tracking-[0.3em] text-gold"
      >
        03 — Certifications &amp; Education
      </motion.span>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-5xl font-medium text-ivory sm:text-6xl"
      >
        Learning &amp; credentials
      </motion.h2>

      <div className="mt-14 flex flex-wrap gap-x-16 gap-y-14">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:flex-1"
        >
          <h3 className="mb-6 flex items-center gap-3 text-2xl text-neutral-200">
            <HiOutlineCheckBadge className="text-gold" />
            Certifications
          </h3>
          <ul className="space-y-5 border-l border-white/10 pl-6">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.title}>
                <p className="text-xl text-ivory sm:text-2xl">{cert.title}</p>
                <p className="mt-1 font-sans text-sm uppercase tracking-wider text-neutral-400">
                  {cert.issuer}
                  {cert.status ? ` · ${cert.status}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:flex-1"
        >
          <h3 className="mb-6 flex items-center gap-3 text-2xl text-neutral-200">
            <HiOutlineAcademicCap className="text-gold" />
            Education
          </h3>
          <ul className="space-y-5 border-l border-white/10 pl-6">
            {EDUCATION.map((item) => (
              <li key={item.degree}>
                <p className="text-xl text-ivory sm:text-2xl">{item.degree}</p>
                <p className="mt-1 font-sans text-sm uppercase tracking-wider text-neutral-400">
                  {item.school} · {item.year}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
