import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function AnimateIn({ children, delay = 0, className = '', direction = 'up' }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const initial =
    direction === 'up'    ? { opacity: 0, y: 40 } :
    direction === 'left'  ? { opacity: 0, x: -40 } :
    direction === 'right' ? { opacity: 0, x: 40 } :
                            { opacity: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger container ──────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerChildren({ children, className = '', delay = 0 }: StaggerProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      style={delay ? { transitionDelay: `${delay}s` } : {}}
    >
      {children}
    </motion.div>
  );
}

export function FadeItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUpItem}>
      {children}
    </motion.div>
  );
}
