import React from "react";
import "../styles/Skills.css"; // Import the CSS file

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        <div className="skills-section">
          <h2>
            <span className="material-icons align-middle">code</span>
            Front End
          </h2>
          <p>HTML, CSS, React js,React Native</p>
        </div>
        <div className="skills-section">
          <h2>
            <span className="material-icons align-middle">language</span>
            Languages
          </h2>
          <p>Java,Python, JavaScript</p>
        </div>
        <div className="skills-section">
          <h2>
            <span className="material-icons align-middle">design_services</span>
            Design Tools
          </h2>
          <p>Figma</p>
        </div>
        <div className="skills-section">
          <h2>
            <span className="material-icons align-middle">cloud</span>
            Back End
          </h2>
          <p>MongoDB, SQL,Firebase, Node, Express</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
