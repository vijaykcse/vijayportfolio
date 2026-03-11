import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  
  // Spring physics for a smooth, trailing effect
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const checkPointer = () => {
      const hoveredElement = document.querySelector(':hover');
      const style = window.getComputedStyle(hoveredElement || document.body);
      setIsPointer(style.cursor === 'pointer');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkPointer);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkPointer);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-persian dark:border-ghost pointer-events-none z-[9999] hidden md:block"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        scale: isPointer ? 2.5 : 1,
        backgroundColor: isPointer ? "rgba(39, 24, 126, 0.1)" : "rgba(0,0,0,0)",
      }}
    />
  );
};

export default CustomCursor;