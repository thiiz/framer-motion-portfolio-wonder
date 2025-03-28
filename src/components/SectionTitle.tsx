
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-8 gradient-text ${className}`}
    >
      {title}
    </motion.h2>
  );
};
