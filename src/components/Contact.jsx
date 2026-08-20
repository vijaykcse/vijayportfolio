import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFileDownload, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaCopy } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "kvijay7639@gmail.com";
  const phone = "+91 9360776120";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <FaPaperPlane className="text-orange-500" /> Get In Touch
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
          >
            Let's <span className="text-orange-gradient">Connect & Build.</span>
          </motion.h2>
          <p className="text-stone-600 dark:text-stone-400 mt-4 max-w-xl mx-auto text-base">
            Open for full-time opportunities, freelance projects, or technical collaborations.
          </p>
        </div>

        {/* Download Resume Button CTA */}
        <div className="flex justify-center mb-16">
          <MagneticButton>
            <a 
              href="/Vijay-Resume.pdf"
              download="Vijay_K_Resume.pdf"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white px-10 py-5 rounded-full font-extrabold text-lg shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all"
            >
              <FaFileDownload className="text-xl" />
              Download Official Resume
            </a>
          </MagneticButton>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-orange-card p-8 rounded-3xl text-center border border-orange-500/15 flex flex-col items-center justify-between"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-2xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">Email Address</h3>
            <p className="text-sm font-semibold text-stone-600 dark:text-stone-300 mb-4 break-all">
              {email}
            </p>
            <div className="flex gap-2 w-full">
              <a 
                href={`mailto:${email}`}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition"
              >
                Send Email
              </a>
              <button 
                onClick={() => handleCopy(email, 'email')}
                className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 transition"
                title="Copy Email"
              >
                {copiedEmail ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
              </button>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-orange-card p-8 rounded-3xl text-center border border-orange-500/15 flex flex-col items-center justify-between"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-2xl mb-4">
              <FaPhone />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">Phone / Mobile</h3>
            <p className="text-sm font-semibold text-stone-600 dark:text-stone-300 mb-4">
              {phone}
            </p>
            <div className="flex gap-2 w-full">
              <a 
                href={`tel:${phone}`}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition"
              >
                Call Direct
              </a>
              <button 
                onClick={() => handleCopy(phone, 'phone')}
                className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition"
                title="Copy Phone"
              >
                {copiedPhone ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
              </button>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-orange-card p-8 rounded-3xl text-center border border-orange-500/15 flex flex-col items-center justify-between"
          >
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-2xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">Primary Location</h3>
            <p className="text-sm font-semibold text-stone-600 dark:text-stone-300 mb-4">
              Chennai, Tamil Nadu, India
            </p>
            <span className="w-full inline-block text-xs font-bold py-2.5 px-3 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              Open to Remote & On-site
            </span>
          </motion.div>

        </div>

        {/* Footer */}
        <footer className="pt-10 border-t border-orange-500/10 dark:border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-bold text-xs sm:text-sm text-stone-600 dark:text-stone-400">
            © 2026 Vijay K. Built with React & Tailwind CSS.
          </p>
          <div className="flex gap-4 text-xl">
            <a 
              href="https://www.linkedin.com/in/vijay-kumar-08vh/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/vijaykworks" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
            >
              <FaGithub />
            </a>
            <a 
              href={`mailto:${email}`}
              aria-label="Email Vijay"
              className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
            >
              <FaEnvelope />
            </a>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default Contact;