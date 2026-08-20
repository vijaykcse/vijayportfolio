import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <FaBriefcase className="text-orange-500" /> Professional Track
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
          >
            Work & Project <span className="text-orange-gradient">Experience</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-200 dark:to-stone-800 -translate-x-1/2 rounded-full hidden sm:block"></div>

          {/* Main Experience Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-orange-card rounded-3xl p-8 sm:p-10 shadow-xl border border-orange-500/20 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-orange-500/10 dark:border-stone-800 pb-6 mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider mb-2">
                  Freelance / Project Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100">
                  Full-Stack Developer
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-400">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/10">
                  <FaCalendarAlt className="text-orange-500" /> 2025 – Present
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/10">
                  <FaMapMarkerAlt className="text-orange-500" /> Chennai, India
                </span>
              </div>
            </div>

            {/* Deliverable Projects inside Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Deliverable 1 */}
              <div className="p-6 rounded-2xl bg-orange-500/5 dark:bg-white/5 border border-orange-500/10 hover:border-orange-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center text-lg shadow-md shadow-orange-500/20">
                    <FaLaptopCode />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100 text-lg">Apollo Peripherals</h4>
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">Corporate Web Portal</p>
                  </div>
                </div>
                <ul className="space-y-2 text-stone-600 dark:text-stone-300 text-sm font-normal">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 shrink-0 mt-1 text-xs" />
                    <span>Developed corporate website using WordPress & Elementor with modern UI/UX principles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 shrink-0 mt-1 text-xs" />
                    <span>Collaborated directly with client for custom layout requirements & SEO optimization using Rank Math.</span>
                  </li>
                </ul>
              </div>

              {/* Deliverable 2 */}
              <div className="p-6 rounded-2xl bg-orange-500/5 dark:bg-white/5 border border-orange-500/10 hover:border-orange-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg shadow-md shadow-amber-500/20">
                    <FaMobileAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100 text-lg">Sales Management App</h4>
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">Flutter & Spring Boot</p>
                  </div>
                </div>
                <ul className="space-y-2 text-stone-600 dark:text-stone-300 text-sm font-normal">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-amber-500 shrink-0 mt-1 text-xs" />
                    <span>Built a cross-platform mobile application in Flutter integrated with Spring Boot REST APIs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-amber-500 shrink-0 mt-1 text-xs" />
                    <span>Automated customer management, daily sales tracking, inventory, and revenue reporting.</span>
                  </li>
                </ul>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
