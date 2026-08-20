import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationIP from './components/EducationIP';
import CreatorHub from './components/CreatorHub';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail'; 
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAF5EF] dark:bg-[#0C0A09] text-stone-900 dark:text-stone-100 font-sans transition-colors duration-400">
        <CustomCursor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Experience />
              <Projects />
              <Skills />
              <EducationIP />
              <CreatorHub />
              <Contact />
            </main>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;