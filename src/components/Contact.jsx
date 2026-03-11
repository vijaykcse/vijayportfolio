import React from 'react';
import { FaEnvelope, FaFileDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton'; // 👈 Import the new effect

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-ghost dark:bg-[#0d0829] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-persian dark:text-ghost mb-8 tracking-tighter"
        >
          Let's <span className="text-blue-500">Connect.</span>
        </motion.h2>

        {/* --- MAGNETIC RESUME DOWNLOAD --- */}
        <div className="flex justify-center mb-16">
          <MagneticButton>
            <a 
              href="/Vijay-Resume.pdf" // 👈 Points to public folder
              download="Vijay_K_Resume.pdf"
              className="flex items-center gap-3 bg-persian text-ghost dark:bg-ghost dark:text-persian px-10 py-5 rounded-full font-black text-xl shadow-[0_20px_40px_rgba(39,24,126,0.3)] hover:shadow-blue-500/40 transition-shadow"
            >
              <FaFileDownload />
              Download Resume
            </a>
          </MagneticButton>
        </div>

        {/* --- EMAIL CARD --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-white/5 p-12 rounded-[3rem] border-2 border-persian/5 dark:border-white/5 shadow-2xl backdrop-blur-xl"
        >
          <a href="mailto:vijay.k.2022.cse@ritchennai.edu.in" className="group">
            <div className="w-24 h-24 bg-persian dark:bg-ghost rounded-full mx-auto flex items-center justify-center text-ghost dark:text-persian text-4xl mb-6 group-hover:scale-110 transition-transform">
              <FaEnvelope />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-persian dark:text-ghost break-all mb-4">
              vijay.k.2022.cse@ritchennai.edu.in
            </p>
            <p className="text-blue-500 font-black tracking-widest uppercase text-sm">Send a Direct Message</p>
          </a>
        </motion.div>

        {/* Footer info from your summary [cite: 2] */}
        <footer className="mt-24 pt-12 border-t border-persian/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
          <p className="font-bold text-persian dark:text-ghost uppercase tracking-tighter">© 2026 Vijay Visions Hub</p>
          <div className="flex gap-8 text-3xl">
            <a href="https://www.linkedin.com/in/vijay-kumar-08vh/" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><FaGithub /></a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;