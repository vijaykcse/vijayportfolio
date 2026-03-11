import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-persian py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-ghost mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-ghost rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              
              {/* --- NEW: Image Header Section --- */}
              {project.images && project.images.length > 0 ? (
                <div className="w-full h-56 overflow-hidden border-b-4 border-persian">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} preview`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : (
                // Fallback if a project doesn't have images yet
                <div className="w-full h-56 bg-persian/10 flex items-center justify-center border-b-4 border-persian">
                  <span className="text-persian font-bold opacity-50">Image Coming Soon</span>
                </div>
              )}

              {/* --- Content Section --- */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-persian mb-2">{project.title}</h3>
                <p className="text-gray-600 font-medium mb-6 flex-grow">{project.subtitle}</p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-persian text-ghost text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Button pushed to the bottom */}
                <Link 
                  to={`/project/${project.id}`} 
                  className="block text-center bg-persian text-ghost px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-colors mt-auto shadow-md"
                >
                  View Details →
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;