"use client";
import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const SECTION_IDS = ["about", "skills", "certifications", "experience", "projects", "services", "contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="sticky top-4 z-50 -mx-8 px-4 sm:px-8">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full border border-forest/10 bg-cream/95 pl-6 pr-2 shadow-lg shadow-forest/5 backdrop-blur-md">
        <a href="#top" className="flex-shrink-0 text-xl font-medium text-forest">
          <b>LADYBUG</b><span className="text-coral !text-lg">{"."}</span>
        </a>

        <div className="hidden items-center gap-7 text-base tracking-wide lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-coral"
                  : "text-forest-light hover:text-coral"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/Oluwakemi-Dada-QA-Resume.pdf"
          download
          className="hidden flex-shrink-0 items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm text-cream transition-colors hover:bg-coral lg:flex"
        >
          <HiOutlineArrowDownTray className="text-base" />
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-2xl text-forest lg:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <TiThMenu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto mt-2 flex max-w-5xl flex-col items-center gap-1 rounded-3xl border border-forest/10 bg-cream/95 py-4 text-lg shadow-lg shadow-forest/5 backdrop-blur-md lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="w-full py-2.5 text-center text-forest-light transition-colors hover:bg-forest/5 hover:text-coral"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Oluwakemi-Dada-QA-Resume.pdf"
            download
            className="mt-2 flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-sm text-cream"
          >
            <HiOutlineArrowDownTray className="text-base" />
            Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
