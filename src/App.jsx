import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CreatorHub from './components/CreatorHub';
import ProjectDetail from './pages/ProjectDetail'; 
import Skills from './components/Skills';   // 👈 Import Skills
import Contact from './components/Contact'; // 👈 Import Contact
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
function App() {
  return (
    <Router basename="/vijayportfolio">
      <div className="min-h-screen bg-ghost dark:bg-[#0d0829] font-poppins transition-colors duration-300">
       <CustomCursor /> {/* 👈 Add CustomCursor at the top level */}
        <Navbar />
        
        <div className="pt-20"> 
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Skills />      {/* 👈 Added Skills below Hero */}
                <Projects />
                <div id="creator">
                  <CreatorHub />
                </div>
                <Contact />     {/* 👈 Added Contact at the bottom */}
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;