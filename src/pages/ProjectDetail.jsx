import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-ghost flex items-center justify-center text-persian text-2xl font-bold">
        Project not found! <Link to="/" className="ml-4 underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ghost text-persian py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation & Header */}
        <Link to="/" className="inline-flex items-center text-persian font-bold hover:scale-105 transition-transform mb-8 text-lg">
          ← Back to Portfolio
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">{project.title}</h1>
        <h2 className="text-2xl opacity-80 mb-8 font-medium">{project.subtitle}</h2>

        {/* Hero Image (The first image in the array) */}
        {project.images && project.images.length > 0 && (
          <div className="w-full h-[400px] md:h-[500px] mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src={project.images[0]} 
              alt={`${project.title} main preview`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-persian text-ghost text-sm font-medium px-5 py-2 rounded-full shadow-md">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Description Container */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl leading-relaxed text-lg text-gray-800 border-t-4 border-persian mb-16">
          <h3 className="text-2xl font-bold text-persian mb-4">About the Project</h3>
          <p>{project.description}</p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-persian text-ghost px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg">
              View Source Code
            </button>
            <button className="border-2 border-persian text-persian bg-ghost px-6 py-3 rounded-xl font-bold hover:bg-persian/10 transition-colors shadow-sm">
              Live Demo
            </button>
          </div>
        </div>

        {/* Screenshot Gallery (The rest of the images) */}
        {project.images && project.images.length > 1 && (
          <div>
            <h3 className="text-3xl font-bold text-persian mb-8">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* .slice(1) skips the first image since we used it for the Hero */}
              {project.images.slice(1).map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg border-2 border-white group relative">
                  <img 
                    src={img} 
                    alt={`${project.title} screenshot ${index + 1}`} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-persian opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
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