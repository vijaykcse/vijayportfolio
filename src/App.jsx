import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Skills from "./components/Skills"; // Import Skills component
import ProfileCard from "./components/ProfileCard"; // Import ProfileCard
import "./styles/App.css";
import Projects from "./components/Projects";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const profileCardRef = useRef(null); // Create a ref for the ProfileCard

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return <Home />;
      case "Resume":
        return <Resume />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  const scrollToProfileCard = () => {
    if (profileCardRef.current) {
      profileCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar
        setActiveSection={setActiveSection}
        scrollToProfileCard={scrollToProfileCard}
      />
      <div className="main-layout">
        <div ref={profileCardRef}>
          <ProfileCard /> {/* Fixed ProfileCard */}
        </div>
        <div className="main-content">
          {renderContent()} {/* Dynamic content based on active section */}
        </div>
      </div>
    </div>
  );
}

export default App;
