// app/MotionWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MotionWrapper({ children }: { children: ReactNode }) {
  const sections = Array.isArray(children) ? children : [children];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {sections.map((child, i) => (
        <motion.section key={i} variants={itemVariants} className="relative">
          {child}
        </motion.section>
      ))}
    </motion.div>
  );
}
