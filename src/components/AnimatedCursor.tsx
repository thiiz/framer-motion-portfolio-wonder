
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const handleLinkHover = () => setCursorVariant("link");
    const handleLinkLeave = () => setCursorVariant("default");
    
    window.addEventListener("mousemove", mouseMove);
    
    // Add event listeners to all a tags and buttons
    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);
  
  // Only show custom cursor on desktop
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  
  if (isMobile) return null;
  
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(97, 218, 251, 0.1)",
      border: "1px solid rgba(97, 218, 251, 0.5)",
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(139, 92, 246, 0.1)",
      border: "1px solid rgba(139, 92, 246, 0.5)",
      transition: {
        type: "spring",
        mass: 0.6
      }
    }
  };
  
  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 border-2 border-theme-blue hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
        transition={{
          type: "spring",
          mass: 0.3
        }}
      />
    </>
  );
};
