"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT, SOCIALS } from "../../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "https://portfolio-backend-gules-six.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <motion.span
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-sans text-sm uppercase tracking-[0.3em] text-gold"
      >
        06 — Contact
      </motion.span>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-2xl text-5xl font-medium leading-tight text-ivory sm:text-6xl"
      >
        Let&rsquo;s work together.
      </motion.h2>

      <div className="mt-14 flex flex-wrap gap-x-16 gap-y-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/5"
        >
          <p className="max-w-md text-xl font-light leading-relaxed text-neutral-300 sm:text-2xl">
            Open to QA Engineer roles — remote, hybrid, or on-site — anywhere
            in the world. Reach out directly or send a message.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="block text-xl text-ivory transition-colors hover:text-gold sm:text-2xl"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
              className="block text-xl text-ivory transition-colors hover:text-gold sm:text-2xl"
            >
              {CONTACT.phoneNo}
            </a>
            <p className="text-xl text-neutral-400 sm:text-2xl">
              {CONTACT.location}
            </p>
          </div>

          <div className="mt-10 flex gap-6 text-lg">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-gold"
            >
              LinkedIn
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-gold"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-5 lg:flex-1"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-b border-white/20 bg-transparent py-3 text-lg text-ivory outline-none transition-colors placeholder:text-neutral-500 focus:border-gold"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-b border-white/20 bg-transparent py-3 text-lg text-ivory outline-none transition-colors placeholder:text-neutral-500 focus:border-gold"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
            rows={4}
            className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-lg text-ivory outline-none transition-colors placeholder:text-neutral-500 focus:border-gold"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-fit rounded-full bg-gold px-8 py-3 text-base font-medium text-neutral-950 transition-colors hover:bg-gold-light disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send message"}
          </button>

          {success && <p className="text-green-500">{success}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
