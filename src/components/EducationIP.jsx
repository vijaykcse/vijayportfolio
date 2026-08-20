import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCertificate, FaGlobe, FaBookReader, FaShieldAlt } from 'react-icons/fa';

const EducationIP = () => {
  const certifications = [
    { name: "Intro to LLMs", issuer: "Google" },
    { name: "GenAI Fundamentals", issuer: "Microsoft" },
    { name: "Intro to MongoDB", issuer: "MongoDB University" },
  ];

  return (
    <section id="education-ip" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <FaGraduationCap className="text-orange-500" /> Academic & IP Credentials
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
          >
            Education, Certifications & <span className="text-orange-gradient">Copyright IP</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Education */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-orange-card rounded-3xl p-8 shadow-xl border border-orange-500/15 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-orange-500/10">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-xl shadow-md shadow-orange-500/20">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100">Education</h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">Academic Timeline</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative pl-4 border-l-2 border-orange-500">
                  <h4 className="font-extrabold text-stone-900 dark:text-stone-100 text-base">
                    Rajalakshmi Institute of Technology
                  </h4>
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-bold mb-1">Chennai, Tamil Nadu</p>
                  <p className="text-stone-600 dark:text-stone-300 text-sm font-medium">
                    B.E. Computer Science and Engineering
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold">
                    Nov 2022 – Apr 2026
                  </span>
                </div>

                <div className="relative pl-4 border-l-2 border-amber-400">
                  <h4 className="font-extrabold text-stone-900 dark:text-stone-100 text-base">
                    Shanmuga Industries Govt Higher Sec School
                  </h4>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-bold mb-1">Tiruvannamalai, Tamil Nadu</p>
                  <p className="text-stone-600 dark:text-stone-300 text-sm font-medium">
                    Higher Secondary School Certificate (HSSC)
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                    Jun 2021 – May 2022
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-orange-card rounded-3xl p-8 shadow-xl border border-orange-500/15 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient Background Badge Glow */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-orange-500/10">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-md shadow-amber-500/20">
                  <FaShieldAlt />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100">Intellectual Property</h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">Government Registered</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-black uppercase tracking-wider mb-3">
                  Official Copyright Granted
                </span>
                <h4 className="text-xl font-black text-stone-900 dark:text-stone-100 mb-2">
                  Library Automation Software
                </h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm font-normal mb-4 leading-relaxed">
                  Registered copyright for automated college book management and entry automation system.
                </p>
                <div className="p-3 rounded-xl bg-white dark:bg-stone-900/80 border border-orange-500/20 text-xs font-mono font-bold text-orange-600 dark:text-orange-400">
                  Registration No: 23099/2024-CO/SW
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-orange-500/10 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-semibold">
              <span>Category: Computer Software</span>
              <span className="text-emerald-500 font-bold">✓ Filed & Granted</span>
            </div>
          </motion.div>

          {/* Card 3: Certifications & Languages */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-orange-card rounded-3xl p-8 shadow-xl border border-orange-500/15 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-orange-500/10">
                <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center text-xl shadow-md shadow-orange-600/20">
                  <FaCertificate />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100">Certifications</h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">Continuous Learning</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {certifications.map((c, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-2xl bg-orange-500/5 dark:bg-white/5 border border-orange-500/10 flex items-center justify-between"
                  >
                    <span className="font-bold text-stone-800 dark:text-stone-200 text-sm">
                      {c.name}
                    </span>
                    <span className="px-2.5 py-1 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-extrabold">
                      {c.issuer}
                    </span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="pt-4 border-t border-orange-500/10">
                <h4 className="flex items-center gap-2 font-bold text-stone-900 dark:text-stone-100 text-sm mb-3">
                  <FaGlobe className="text-orange-500" /> Languages Spoken
                </h4>
                <div className="flex gap-3">
                  <span className="px-3.5 py-1.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold">
                    English (Proficient)
                  </span>
                  <span className="px-3.5 py-1.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold">
                    Tamil (Fluent)
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default EducationIP;
