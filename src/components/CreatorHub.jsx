import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const CreatorHub = () => {
  const socialLinks = [
    {
      name: "YouTube",
      handle: "@vijayvisions-7",
      url: "https://www.youtube.com/@vijayvisions-7",
      icon: <FaYoutube className="text-4xl" />,
      color: "hover:bg-red-500 hover:border-red-500 hover:text-white",
      description: "Tech updates, mobile reviews, and gadget tricks."
    },
    {
      name: "Instagram",
      handle: "@vijay_visions",
      url: "https://www.instagram.com/vijay_visions?igsh=MTQ3YzRwZHRpc3EzYQ==",
      icon: <FaInstagram className="text-4xl" />,
      color: "hover:bg-pink-600 hover:border-pink-600 hover:text-white",
      description: "Bite-sized tech tips, UI/UX designs, and aesthetic setups."
    },
    {
      name: "X (Twitter)",
      handle: "@vijayvisions7",
      url: "https://x.com/vijayvisions7",
      icon: <FaXTwitter className="text-4xl" />,
      color: "hover:bg-black dark:hover:bg-gray-700 hover:border-black dark:hover:border-gray-700 hover:text-white",
      description: "Daily tech news, coding thoughts, and quick updates."
    },
    {
      name: "LinkedIn",
      handle: "vijay-kumar-08vh",
      url: "https://www.linkedin.com/in/vijay-kumar-08vh/",
      icon: <FaLinkedinIn className="text-4xl" />,
      color: "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
      description: "Professional networking and full-stack project breakdowns."
    }
  ];

  return (
    <section id="creator" className="w-full bg-ghost dark:bg-[#0d0829] py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Title - FIXED GRADIENT */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-persian dark:text-ghost mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300">Vijay Visions</span> Hub
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto">
            Beyond writing code, I love sharing knowledge. Join my community across platforms where we explore the latest in tech, gadgets, and software development.
          </p>
        </div>

        {/* Social Cards Grid - FIXED DARK MODE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              // Changed to dark:bg-white/5 for a guaranteed dark glass effect
              className={`flex items-start p-6 bg-white dark:bg-white/5 border-2 border-persian/10 dark:border-white/10 rounded-3xl shadow-lg transition-all duration-300 group ${link.color}`}
            >
              <div className="p-4 bg-persian/5 dark:bg-white/10 text-persian dark:text-white rounded-2xl group-hover:bg-white/20 group-hover:text-white transition-colors">
                {link.icon}
              </div>
              <div className="ml-6">
                {/* Guaranteed text colors for dark mode */}
                <h3 className="text-xl font-bold text-persian dark:text-white group-hover:text-white mb-1">{link.name}</h3>
                <p className="text-sm font-semibold text-persian/60 dark:text-gray-400 group-hover:text-white/80 mb-2">{link.handle}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white/90 leading-relaxed">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CreatorHub;