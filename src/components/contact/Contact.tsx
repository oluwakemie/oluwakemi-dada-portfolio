"use client";
import React, { useState } from "react";
import { CONTACT } from "../../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
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

      // reset form
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
    <div className="w-full h-screen pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h1>

      <div className="mb-8 flex flex-wrap justify-between">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2">
          <motion.p className="my-4">
            <span className="text-neutral-400">Home Address:</span>
            {CONTACT.address}
          </motion.p>

          <motion.p className="my-4">
            <span className="text-neutral-400">Phone number:</span>
            {CONTACT.phoneNo}
          </motion.p>

          <motion.p className="my-4">
            <span className="text-neutral-400">Email Address: </span>
            {CONTACT.email}
          </motion.p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 flex flex-col"
        >
          {/* Name */}
          <label className="relative mb-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-purple-500 py-2 px-2"
            />
            <span className="text-white text-opacity-80 absolute left-0 top-2 mx-6 px-2 peer-focus:text-sm peer-focus:-translate-y-5 bg-neutral-900 ml-2">

            </span>
          </label>

          {/* Email */}
          <label className="relative mb-5">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-purple-500 py-2 px-2"
            />
            <span className="text-white text-opacity-80 absolute left-0 top-2 mx-6 px-2 peer-focus:text-sm peer-focus:-translate-y-5 bg-neutral-900 ml-2">

            </span>
          </label>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            className="rounded px-2 py-2 bg-black border-2 focus:border-purple-500 border-white border-opacity-50 outline-none"
            rows={5}
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="px-3 py-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 border-2 outline-none w-[150px] rounded mt-3 text-black"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* Success */}
          {success && (
            <p className="text-green-500 mt-2">{success}</p>
          )}

          {/* Error */}
          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
