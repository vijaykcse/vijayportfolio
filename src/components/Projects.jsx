import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaArrowRight, FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "WordPress & Web", "Full-Stack Web", "Mobile & Backend", "Full-Stack Web & IP", "AI / ML & GIS"];

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <FaCode className="text-orange-500" /> Portfolio Showcase
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
          >
            Featured <span className="text-orange-gradient">Projects</span>
          </motion.h2>
          <p className="text-stone-600 dark:text-stone-400 mt-4 max-w-2xl mx-auto font-normal text-base">
            Real-world applications built for corporate clients, academic portals, mobile users, and intellectual property.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 scale-105"
                  : "glass-orange-card text-stone-700 dark:text-stone-300 hover:text-orange-500 hover:border-orange-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-orange-card rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-orange-500/15"
            >
              
              {/* Image Banner */}
              <div className="relative w-full h-56 overflow-hidden bg-stone-100 dark:bg-stone-900 border-b border-orange-500/10">
                {project.images && project.images.length > 0 ? (
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} preview`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-400 font-semibold text-sm">
                    Preview Coming Soon
                  </div>
                )}
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500/20 shadow-md">
                  {project.category || "Full-Stack"}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-1 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold mb-4">
                  {project.subtitle}
                </p>

                <p className="text-stone-600 dark:text-stone-300 text-sm font-normal mb-6 flex-grow leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="bg-orange-500/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold px-2.5 py-1 rounded-xl"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <Link 
                  to={`/project/${project.id}`} 
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-3 rounded-2xl font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg transition-all mt-auto"
                >
                  View Details <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;