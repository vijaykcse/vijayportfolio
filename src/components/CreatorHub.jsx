import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaLinkedinIn, FaVideo } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const CreatorHub = () => {
  const socialLinks = [
    {
      name: "YouTube",
      handle: "@vijayvisions-7",
      url: "https://www.youtube.com/@vijayvisions-7",
      icon: <FaYoutube className="text-3xl text-red-500" />,
      badge: "Tech Reviews & Tutorials",
      description: "In-depth mobile reviews, tech updates, software development walkthroughs, and gadget tricks."
    },
    {
      name: "Instagram",
      handle: "@vijay_visions",
      url: "https://www.instagram.com/vijay_visions?igsh=MTQ3YzRwZHRpc3EzYQ==",
      icon: <FaInstagram className="text-3xl text-pink-500" />,
      badge: "UI/UX & Code Snippets",
      description: "Bite-sized developer tips, clean UI/UX designs, aesthetic workspace setups, and daily tech reels."
    },
    {
      name: "X (Twitter)",
      handle: "@vijayvisions7",
      url: "https://x.com/vijayvisions7",
      icon: <FaXTwitter className="text-3xl text-stone-900 dark:text-stone-100" />,
      badge: "Tech News & Thoughts",
      description: "Daily software thoughts, tech news breakdowns, web dev insights, and real-time updates."
    },
    {
      name: "LinkedIn",
      handle: "vijay-kumar-08vh",
      url: "https://www.linkedin.com/in/vijay-kumar-08vh/",
      icon: <FaLinkedinIn className="text-3xl text-blue-600" />,
      badge: "Professional Network",
      description: "Career milestones, full-stack project breakdowns, collaboration updates, and tech articles."
    }
  ];

  return (
    <section id="creator" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <FaVideo className="text-orange-500" /> Digital Content & Community
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight mb-4"
          >
            The <span className="text-orange-gradient">Vijay Visions</span> Hub
          </motion.h2>
          <p className="text-base text-stone-600 dark:text-stone-400 font-normal max-w-2xl mx-auto">
            Beyond writing code, I love sharing tech knowledge. Explore my channels across platforms where we dive into software, gadgets, and development.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-orange-card p-7 rounded-3xl border border-orange-500/15 hover:border-orange-500/40 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-6 group hover:-translate-y-1"
            >
              <div className="p-4 rounded-2xl bg-orange-500/10 dark:bg-stone-800 border border-orange-500/20 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-500 transition-colors">
                    {link.name}
                  </h3>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 uppercase tracking-wide">
                    {link.badge}
                  </span>
                </div>
                <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2">
                  {link.handle}
                </p>
                <p className="text-stone-600 dark:text-stone-300 text-sm font-normal leading-relaxed">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CreatorHub;