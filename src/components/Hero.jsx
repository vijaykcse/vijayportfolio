import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="bg-persian w-full min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Animated Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]"
      />

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Side: Image with Floating Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Pulsing Border Effect */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-30 blur-md group-hover:opacity-60 transition-opacity"
          />
          <img 
            src={profileImg} 
            alt="Vijay K" 
            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-8 border-ghost/10 shadow-2xl"
          />
        </motion.div>

        {/* Right Side: Text with Staggered Entry */}
        <div className="text-center md:text-left text-ghost">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]"
          >
            Hi, I'm <br /> <span className="text-blue-400">Vijay Kumar</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-light opacity-80 mb-10 max-w-lg"
          >
            Full-Stack Developer Specializing in Web, Mobile, and AI/ML Solutions.
          </motion.p>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="inline-block bg-ghost text-persian px-10 py-4 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(247,247,255,0.3)] transition-shadow hover:shadow-ghost/50"
          >
            Explore Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;