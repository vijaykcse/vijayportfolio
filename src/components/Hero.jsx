import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaRocket, FaMapMarkerAlt, FaGraduationCap, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="w-full min-h-screen pt-28 pb-20 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Animated Light Orange Ambient Mesh */}
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-orange-400/30 to-amber-300/20 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/25 to-rose-400/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-bold mb-6 backdrop-blur-md shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Full-Time & Freelance Projects
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-stone-900 dark:text-stone-100 leading-[1.1]"
          >
            Building Scalable <br className="hidden sm:inline" />
            <span className="text-orange-gradient">Web & Mobile Apps.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-xl text-stone-600 dark:text-stone-300 font-normal mb-8 max-w-2xl leading-relaxed"
          >
            Hi, I'm <strong className="text-stone-900 dark:text-stone-100 font-bold">Vijay K</strong> — Full-Stack Developer with hands-on experience building web and mobile applications using React, Flutter, Spring Boot, Node.js, and WordPress.
          </motion.p>

          {/* Quick info pills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-medium"
          >
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/10">
              <FaMapMarkerAlt className="text-orange-500" /> Chennai, India
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/10">
              <FaGraduationCap className="text-orange-500" /> BE CSE @ RIT Chennai (2022–2026)
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all"
            >
              <FaRocket /> Explore Projects
            </a>
            
            <a 
              href="/Vijay-Resume.pdf"
              download="Vijay_K_Resume.pdf"
              className="inline-flex items-center gap-2 glass-orange-card px-8 py-4 rounded-2xl font-bold text-stone-800 dark:text-stone-200 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <FaDownload className="text-orange-500" /> Download Resume
            </a>
          </motion.div>

          {/* Statistics counter bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-orange-500/10 dark:border-stone-800 max-w-lg mx-auto lg:mx-0"
          >
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400">1,800+</p>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">Students Served</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400">4+</p>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">Core Projects</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400">1</p>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">Copyright IP</p>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Profile Photo with Glowing Halo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Animated Sunset Halo Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-rose-500 opacity-40 blur-xl group-hover:opacity-75 transition-opacity"
          />

          {/* Profile Photo */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-stone-800 shadow-2xl shadow-orange-500/20">
            <img 
              src={profileImg} 
              alt="Vijay K - Full-Stack Developer" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Floating Badge Card */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 glass-orange-card px-5 py-3 rounded-2xl shadow-xl border border-orange-500/20 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-xl">
              💻
            </div>
            <div>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-semibold">Specialization</p>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-100">Full-Stack & Mobile</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;