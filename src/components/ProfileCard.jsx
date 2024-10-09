import React from "react";
import profilePic from "../assets/images/profile-pic.jpg"; // Example image import
import {
  Facebook,
  Linkedin,
  Twitter,
  Github,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import "../styles/ProfileCard.css"; // Import the new CSS file

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={profilePic} className="profile-pic" alt="Profile" />
      <h2 className="profile-card-header">Vijay K</h2>
      <p className="profile-card-content">FullStack Developer</p>
      <div className="flex justify-center space-x-3 mb-6 social-icons">
        <div className="social-icon-container">
          <Facebook className="w-6 h-6 text-blue-600 social-icon" />
        </div>
        <div className="social-icon-container">
          <Linkedin className="w-6 h-6 text-blue-700 social-icon" />
        </div>
        <div className="social-icon-container">
          <Twitter className="w-6 h-6 text-blue-400 social-icon" />
        </div>
        <div className="social-icon-container">
          <Github className="w-6 h-6 text-gray-800 social-icon" />
        </div>
      </div>
      <div className="space-y-2 text-sm text-gray-700 contact-info contact-card">
        <div className="flex items-center justify-center contact-item">
          <Phone className="w-4 h-4 mr-2 contact-icon" />
          <span>9360776120</span>
        </div>
        <div className="flex items-center justify-center contact-item">
          <Mail className="w-4 h-4 mr-2 contact-icon" />
          <span>kvijay7639@gmail.com</span>
        </div>
        <div className="flex items-center justify-center contact-item">
          <MapPin className="w-4 h-4 mr-2 contact-icon" />
          <span>Chennai, TamilNadu</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
