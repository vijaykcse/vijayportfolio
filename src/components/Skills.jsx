import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiFlutter,
  SiPython, SiJavascript, SiOpenjdk,
  SiSpringboot, SiNodedotjs,
  SiWordpress, SiElementor,
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiFigma
} from 'react-icons/si';
import { FaLaptopCode, FaDatabase, FaTools, FaServer, FaCode, FaCogs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const skillCategories = [
  {
    category: "Frontend",
    icon: <FaLaptopCode className="text-orange-500" />,
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    ]
  },
  {
    category: "Languages",
    icon: <FaCode className="text-amber-500" />,
    skills: [
      { name: "Java", icon: <SiOpenjdk className="text-red-500" /> },
      { name: "Python", icon: <SiPython className="text-yellow-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-amber-400" /> },
    ]
  },
  {
    category: "Backend & APIs",
    icon: <FaServer className="text-orange-600" />,
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-emerald-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "REST APIs", icon: <FaCogs className="text-amber-500" /> },
    ]
  },
  {
    category: "CMS Platforms",
    icon: <FaLaptopCode className="text-rose-500" />,
    skills: [
      { name: "WordPress", icon: <SiWordpress className="text-sky-600" /> },
      { name: "Elementor", icon: <SiElementor className="text-rose-500" /> },
    ]
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-emerald-500" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ]
  },
  {
    category: "Tools & Design",
    icon: <FaTools className="text-orange-400" />,
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-stone-900 dark:text-stone-100" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <FaTools className="text-orange-500" /> Technical Mastery
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
          >
            Skills & <span className="text-orange-gradient">Tech Stack</span>
          </motion.h2>
          <p className="text-stone-600 dark:text-stone-400 mt-4 max-w-2xl mx-auto font-normal text-base">
            Comprehensive tools, frameworks, and languages used in academic, personal, and freelance projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-orange-card rounded-3xl p-7 shadow-lg border border-orange-500/15 hover:border-orange-500/35 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-orange-500/10 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                  {cat.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((s, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-orange-500/5 dark:bg-white/5 border border-orange-500/10 hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-200"
                  >
                    <span className="text-2xl filter drop-shadow-sm">
                      {s.icon}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;