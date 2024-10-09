import React from "react";
import "../styles/Resume.css"; // Import the CSS file

const ResumePage = () => {
  return (
    <div className="resume-container">
      <div className="resume-grid">
        <section className="resume-section">
          <h3>
            <span className="material-icons align-middle">description</span>
            Summary
          </h3>
          <p>
            Full-Stack Developer skilled in MERN stack with a passion for AI/ML
            technologies. Experienced in building responsive and user-friendly
            web and mobile applications. Continuously exploring new technologies
            through hands-on projects and collaborative environments. Dedicated
            to delivering high-quality, innovative solutions with a focus on
            user-centered design.
          </p>
        </section>
        <section className="resume-section">
          <h3>
            <span className="material-icons align-middle">school</span>
            Education
          </h3>
          <div className="education-item">
            <h4>Rajalakshmi Institute of Technology, Chennai, Tamil Nadu</h4>
            <p>
              Bachelor of Engineering, Computer Science and Engineering
              (2022-2026)
            </p>
          </div>
        </section>
        <section className="resume-section">
          <h3>
            <span className="material-icons align-middle">verified_user</span>
            Certifications
          </h3>
          <ul>
            <li>Google Introduction to Large Language Models</li>
            <li>Microsoft Fundamentals of Generative AI</li>
            <li>AI for India 2.0 GUVI Geek Networks</li>
            <li>Introduction to MongoDB</li>
          </ul>
        </section>
        <section className="resume-section">
          <h3>
            <span className="material-icons align-middle">assignment</span>
            Intellectual Property
          </h3>
          <p>
            Copyrights: 23099/2024-CO/SW Library Automation Software – Filed
          </p>
        </section>
      </div>
      <a
        href="/vijay-portfolio/public/resumeDoc/vijayresume.pdf"
        download="Vijay_Resume.pdf"
      >
        <button className="download-button">Download Resume</button>
      </a>
    </div>
  );
};

export default ResumePage;
