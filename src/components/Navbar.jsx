import React from "react";
import "../styles/Navbar.css"; // Import your CSS styles

// Import active and inactive images for each button
import activeHomeImage from "../assets/images/activeHome.png";
import inactiveHomeImage from "../assets/images/inactiveHome.png";
import activeResumeImage from "../assets/images/activeResume.png";
import inactiveResumeImage from "../assets/images/inactiveResume.png";
import activeSkillsImage from "../assets/images/activeSkills.png";
import inactiveSkillsImage from "../assets/images/inactiveSkills.png";
import activeProjectsImage from "../assets/images/activeProjects.png";
import inactiveProjectsImage from "../assets/images/inactiveProjects.png";
// import activeContactImage from "../assets/images/activeContact.png";
// import inactiveContactImage from "../assets/images/inactiveContact.png";

const Navbar = ({ setActiveSection, scrollToProfileCard }) => {
  // State to track which button is currently active
  const [activeButton, setActiveButton] = React.useState("Home");

  const handleButtonClick = (section) => {
    setActiveButton(section);
    setActiveSection(section);

    // Call scrollToProfileCard if the Resume button is clicked
    if (section === "Home") {
      scrollToProfileCard();
    } else if (section == "Resume") {
      scrollToProfileCard();
    } else if (section == "Skills") {
      scrollToProfileCard();
    } else if (section == "Projects") {
      scrollToProfileCard();
    }
  };

  return (
    <nav className="navbar">
      {/* Home Button */}
      <div
        className={`home-button ${activeButton === "Home" ? "active" : ""}`}
        onClick={() => handleButtonClick("Home")}
      >
        <div className="icon-container">
          <img
            src={activeButton === "Home" ? activeHomeImage : inactiveHomeImage}
            alt="Home Icon"
            className="home-icon"
          />
        </div>
        <span>Home</span>
      </div>

      {/* Resume Button */}
      <div
        className={`resume-button ${activeButton === "Resume" ? "active" : ""}`}
        onClick={() => handleButtonClick("Resume")}
      >
        <div className="icon-container">
          <img
            src={
              activeButton === "Resume"
                ? activeResumeImage
                : inactiveResumeImage
            }
            alt="Resume Icon"
            className="resume-icon"
          />
        </div>
        <span>Resume</span>
      </div>

      {/* Skills Button */}
      <div
        className={`skills-button ${activeButton === "Skills" ? "active" : ""}`}
        onClick={() => handleButtonClick("Skills")}
      >
        <div className="icon-container">
          <img
            src={
              activeButton === "Skills"
                ? activeSkillsImage
                : inactiveSkillsImage
            }
            alt="Skills Icon"
            className="skills-icon"
          />
        </div>
        <span>Skills</span>
      </div>

      {/* Projects Button */}
      <div
        className={`projects-button ${
          activeButton === "Projects" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("Projects")}
      >
        <div className="icon-container">
          <img
            src={
              activeButton === "Projects"
                ? activeProjectsImage
                : inactiveProjectsImage
            }
            alt="Projects Icon"
            className="projects-icon"
          />
        </div>
        <span>Projects</span>
      </div>

      {/* Contact Button */}
      {/* <div
        className={`contact-button ${
          activeButton === "Contact" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("Contact")}
      >
        <div className="icon-container">
          <img
            src={
              activeButton === "Contact"
                ? activeContactImage
                : inactiveContactImage
            }
            alt="Contact Icon"
            className="contact-icon1"
          />
        </div>
        <span>Contact</span>
      </div> */}
    </nav>
  );
};

export default Navbar;
