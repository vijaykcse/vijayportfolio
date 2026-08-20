import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaExternalLinkAlt, FaGithub, FaLayerGroup } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 mb-4">Project Not Found</h2>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-2xl font-bold hover:bg-orange-600 transition"
        >
          <FaArrowLeft /> Back to Main Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-stone-700 dark:text-stone-300 font-bold hover:text-orange-500 transition-colors mb-8 text-sm sm:text-base glass-orange-card px-4 py-2 rounded-2xl"
        >
          <FaArrowLeft className="text-orange-500" /> Back to Main Portfolio
        </Link>

        {/* Category Pill */}
        <div className="mb-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-black uppercase tracking-wider">
            {project.category || "Full-Stack Project"}
          </span>
        </div>

        {/* Title Header */}
        <h1 className="text-4xl sm:text-6xl font-black text-stone-900 dark:text-stone-100 tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl font-semibold text-orange-600 dark:text-orange-400 mb-8">
          {project.subtitle}
        </p>

        {/* Featured Banner Image */}
        {project.images && project.images.length > 0 && (
          <div className="w-full h-[320px] sm:h-[480px] mb-10 rounded-3xl overflow-hidden shadow-2xl border border-orange-500/20 glass-orange-card relative">
            <img 
              src={project.images[0]} 
              alt={`${project.title} main preview`} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className="bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs sm:text-sm font-bold px-4 py-2 rounded-2xl shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Description Container */}
        <div className="glass-orange-card p-8 sm:p-12 rounded-3xl shadow-xl border border-orange-500/15 mb-12">
          <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
            <FaLayerGroup className="text-orange-500" /> About the Project
          </h3>
          <p className="text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Key Deliverables & Highlights */}
          {project.highlights && (
            <div className="mb-8 p-6 rounded-2xl bg-orange-500/5 dark:bg-stone-900/50 border border-orange-500/15">
              <h4 className="font-extrabold text-stone-900 dark:text-stone-100 text-base mb-4">
                Key Accomplishments & Deliverables
              </h4>
              <ul className="space-y-3">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-stone-700 dark:text-stone-300 text-sm font-medium">
                    <FaCheckCircle className="text-orange-500 shrink-0 mt-1 text-sm" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-orange-500/10">
            <a 
              href="https://github.com/vijaykcse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg transition-all"
            >
              <FaGithub /> View Source Code
            </a>
            <a 
              href="https://vijaykcse.github.io/vijayportfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-orange-card px-6 py-3.5 rounded-2xl font-bold text-stone-800 dark:text-stone-200 hover:text-orange-500 border border-orange-500/20 text-sm transition-all"
            >
              <FaExternalLinkAlt className="text-orange-500" /> Live Demo / Links
            </a>
          </div>
        </div>

        {/* Screenshot Gallery */}
        {project.images && project.images.length > 1 && (
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 mb-6">
              Project <span className="text-orange-gradient">Gallery</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.images.slice(1).map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden glass-orange-card border border-orange-500/20 shadow-lg group">
                  <img 
                    src={img} 
                    alt={`${project.title} preview ${index + 1}`} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;