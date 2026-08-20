import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes, FaBriefcase, FaCode, FaGraduationCap, FaPaperPlane } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  /* ---------------- AUTO DETECT SYSTEM DARK MODE ---------------- */
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Education & IP", href: "education-ip" },
    { name: "Creator Hub", href: "creator" },
    { name: "Contact", href: "contact" },
  ];

  /* ---------------- DARK MODE PERSIST ---------------- */
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  /* ---------------- ACTIVE SECTION SCROLL SPY ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "projects", "skills", "education-ip", "creator", "contact"];
      let current = "hero";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 140;
          if (window.scrollY >= offset) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- CLOSE MENU ON SCROLL ---------------- */
  useEffect(() => {
    const closeOnScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 transition-all duration-300">
        <nav className="max-w-7xl mx-auto glass-orange-card rounded-3xl px-6 h-16 flex justify-between items-center transition-colors">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 group text-xl sm:text-2xl font-black tracking-tight"
          >
            <span className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center font-black shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              V
            </span>
            <span className="text-stone-900 dark:text-stone-100 font-extrabold tracking-tight">
              Vijay<span className="text-orange-500 font-black">.K</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          {isHome ? (
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-semibold text-sm">
              <a
                href="#hero"
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === "hero"
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20 font-bold"
                    : "text-stone-700 dark:text-stone-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-500/10"
                }`}
              >
                Home
              </a>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === link.href
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/20 font-bold"
                      : "text-stone-700 dark:text-stone-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-500/10"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          ) : (
            <Link
              to="/"
              className="text-stone-700 dark:text-stone-300 hover:text-orange-500 font-bold text-sm"
            >
              ← Back to Main Portfolio
            </Link>
          )}

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle dark mode"
              className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              {isDarkMode ? <FaSun className="text-lg text-amber-400" /> : <FaMoon className="text-lg text-orange-600" />}
            </button>

            {isHome && (
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-md shadow-orange-500/25 hover:shadow-lg transition-all"
              >
                <FaPaperPlane className="text-xs" /> Hire Me
              </a>
            )}

            {isHome && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2.5 rounded-2xl bg-orange-500/10 text-stone-800 dark:text-stone-200 hover:text-orange-500 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-xl text-orange-500" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* ================= MOBILE DROPDOWN ================= */}
      {isHome && (
        <div
          className={`fixed top-24 left-4 right-4 z-40 lg:hidden 
          glass-orange-card rounded-3xl p-6 shadow-2xl transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-2">
            <a
              href="#hero"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-3 rounded-2xl font-bold transition ${
                activeSection === "hero"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-stone-800 dark:text-stone-200 hover:bg-orange-500/10"
              }`}
            >
              Home
            </a>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-3 rounded-2xl font-semibold transition ${
                  activeSection === link.href
                    ? "bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20"
                    : "text-stone-800 dark:text-stone-200 hover:bg-orange-500/10 hover:text-orange-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;