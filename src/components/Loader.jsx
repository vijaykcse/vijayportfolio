import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2 }}
      onAnimationComplete={finishLoading}
      className="fixed inset-0 z-[1000] bg-persian flex items-center justify-center overflow-hidden"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-black text-ghost tracking-tighter"
        >
          Vijay<span className="text-blue-500">.K</span>
        </motion.div>
        
        {/* Animated Progress Bar */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="h-1 bg-blue-500 mt-4 rounded-full max-w-[200px] mx-auto"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
          className="text-ghost mt-4 uppercase tracking-[0.3em] text-xs font-bold"
        >
          Loading Vision
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;