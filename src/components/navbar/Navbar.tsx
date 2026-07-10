"use client";
import React, { useEffect, useState } from "react";
import logo from "../../assets/kemmylogo.png";
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const SECTION_IDS = ["about", "skills", "certifications", "experience", "projects", "contact"];

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
    <nav className="sticky top-0 z-50 -mx-8 border-b border-white/5 bg-neutral-950/80 px-8 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <a href="#top" className="flex flex-shrink-0 items-center">
          <img src={logo.src} alt="" className="w-16 sm:w-20" />
        </a>

        <div className="hidden items-center gap-8 text-lg tracking-wide lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-gold ${
                activeSection === link.href.slice(1)
                  ? "text-gold"
                  : "text-neutral-300"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-gold/60 px-5 py-1.5 text-neutral-100 transition-colors hover:border-gold hover:text-gold"
          >
            Let&rsquo;s talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-neutral-200 lg:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <TiThMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col items-center gap-1 border-t border-white/5 pb-6 pt-2 text-xl lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="w-full py-3 text-center text-neutral-200 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-2 rounded-full border border-gold/60 px-6 py-2 text-neutral-100"
          >
            Let&rsquo;s talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
