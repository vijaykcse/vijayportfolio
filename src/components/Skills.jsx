import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
// 👈 Added SiOpenjdk for Java and SiPostgresql for SQL
import { 
  SiFlutter, SiReact, SiNodedotjs, 
  SiMongodb, SiPython, SiOpenjdk, SiPostgresql 
} from 'react-icons/si';

const SkillCard = ({ skill }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <motion.div 
        className={`w-28 h-28 flex items-center justify-center rounded-[2.5rem] 
          bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 
          shadow-2xl transition-all duration-300
          group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] ${skill.shadow}`}
      >
        <span className={`text-6xl ${skill.color} filter drop-shadow-2xl transition-transform duration-300 group-hover:scale-110`}>
          {skill.icon}
        </span>
      </motion.div>
      <p className="mt-6 font-bold text-persian dark:text-ghost text-xs uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">
        {skill.name}
      </p>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    // ☕ Java Icon (Red Glow)
    { name: "Java", icon: <SiOpenjdk />, shadow: "shadow-red-500/50", color: "text-red-500" }, 
    // 🗄️ SQL Icon (Blue-Gray Glow)
    { name: "SQL", icon: <SiPostgresql />, shadow: "shadow-blue-400/50", color: "text-blue-400" }, 
    { name: "Flutter", icon: <SiFlutter />, shadow: "shadow-blue-500/50", color: "text-blue-500" },
    { name: "React", icon: <SiReact />, shadow: "shadow-cyan-400/50", color: "text-cyan-400" },
    { name: "Node.js", icon: <SiNodedotjs />, shadow: "shadow-green-500/50", color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb />, shadow: "shadow-emerald-600/50", color: "text-emerald-500" },
    { name: "Python", icon: <SiPython />, shadow: "shadow-yellow-500/50", color: "text-yellow-500" },
  ];

  return (
    <section id="skills" className="py-32 bg-ghost dark:bg-[#0d0829] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-black text-persian dark:text-ghost mb-24 tracking-tighter"
        >
          Technical <span className="text-blue-500">Stack</span>
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-20">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;