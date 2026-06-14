import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 20 });
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot (instant) */}
      <motion.div
        className="fixed z-[9999] rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          background: '#C9A66B',
          boxShadow: '0 0 8px rgba(201,166,107,0.8)',
        }}
      />
      {/* Ring (spring follows) */}
      <motion.div
        className="fixed z-[9998] rounded-full pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          border: '1.5px solid rgba(201,166,107,0.6)',
        }}
      />
    </>
  );
}
