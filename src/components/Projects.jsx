import React from "react";
import "../styles/Projects.css"; // Import the CSS file

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <div className="project-card">
        <h2>
          <span className="material-icons align-middle">library_books</span>
          RIT College Library Management System
        </h2>
        <p>
          <strong>Technologies:</strong> HTML, CSS, JavaScript, MongoDB, Python
        </p>
        <p>
          Developed a system to track real-time book availability and student
          entries/exits. Implemented real-time data synchronization for
          up-to-date information.
        </p>
      </div>

      <div className="project-card">
        <h2>
          <span className="material-icons align-middle">traffic</span>
          Smart Traffic Management System
        </h2>
        <p>
          <strong>Technologies:</strong> YOLO, SUMO, TraCi, Tensorflow
        </p>
        <p>
          Developed an AI-powered system to optimize urban traffic flow by
          dynamically adjusting traffic light timings based on real-time vehicle
          detection. Integrated YOLO for object detection and SUMO for traffic
          simulation.
        </p>
      </div>

      <div className="project-card">
        <h2>
          <span className="material-icons align-middle">design_services</span>
          LLM-Driven Vehicle Design Optimization System
        </h2>
        <p>
          <strong>Technologies:</strong> GPT-2, YOLO Model, Pretrained LLM
          Models
        </p>
        <p>
          Fine-tuned an LLM model using GPT-2 for design optimization and YOLO
          for object detection. Designed a user-friendly interface for
          generating data-driven suggestions to improve car aesthetics and
          functionality.
        </p>
      </div>
    </div>
  );
};

export default Projects;
