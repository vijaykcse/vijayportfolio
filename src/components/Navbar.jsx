import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
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
    { name: "Projects", href: "projects" },
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
      const sections = ["hero", "projects", "creator", "contact"];
      let current = "hero";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 120;
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
      <nav className="fixed top-0 left-0 w-full z-50 bg-ghost/90 dark:bg-[#0d0829]/90 backdrop-blur-md border-b border-persian/10 dark:border-ghost/10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold text-persian dark:text-ghost tracking-tight hover:scale-105 transition"
          >
            Vijay<span className="text-blue-500">.K</span>
          </Link>

          {/* DESKTOP MENU */}
          {isHome && (
            <div className="hidden md:flex items-center gap-8 font-medium">
              <a
                href="#hero"
                className={`relative transition 
                ${activeSection === "hero" ? "text-blue-500" : "text-persian dark:text-ghost"}
                hover:text-blue-500`}
              >
                Home
              </a>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  className={`relative transition
                  ${activeSection === link.href ? "text-blue-500" : "text-persian dark:text-ghost"}
                  hover:text-blue-500`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-persian/5 dark:bg-ghost/10 text-persian dark:text-ghost hover:scale-110 transition"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>

            {isHome && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-persian dark:text-ghost hover:scale-110 transition"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ================= MOBILE DROPDOWN ================= */}
      {isHome && (
        <div
          className={`fixed top-20 left-0 w-full z-[60] md:hidden 
          bg-white dark:bg-[#0d0829] shadow-xl
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center py-6 gap-6">
            <a
              href="#hero"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-semibold transition transform hover:scale-105
              ${activeSection === "hero" ? "text-blue-500" : "text-persian dark:text-ghost"}`}
            >
              Home
            </a>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-semibold transition transform hover:scale-105
                ${activeSection === link.href ? "text-blue-500" : "text-persian dark:text-ghost"}`}
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