
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  once?: boolean;
}

export const AnimatedText = ({ text, className = "", once = false }: AnimatedTextProps) => {
  // For a single line
  const singleLineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // For word-by-word animation
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.08
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // If text is a string, animate the whole line
  if (typeof text === "string") {
    return (
      <motion.div
        className={className}
        variants={singleLineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.div>
    );
  }

  // If text is an array, animate each line
  return (
    <>
      {text.map((line, index) => (
        <motion.p
          key={index}
          className={className}
          variants={sentenceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
        >
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              variants={wordVariants}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      ))}
    </>
  );
};
