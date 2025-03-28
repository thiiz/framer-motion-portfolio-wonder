
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { AnimatedSection } from "./AnimatedSection";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A responsive e-commerce platform with animations, product filtering, and a seamless checkout experience.",
      tags: ["React", "TailwindCSS", "Framer Motion", "Stripe"],
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=2670&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Interactive dashboard with real-time data visualization, dark/light mode, and responsive design.",
      tags: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2670&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A feature-rich social platform with real-time messaging, notifications, and content sharing.",
      tags: ["React", "Firebase", "Tailwind", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop",
      link: "#"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <AnimatedSection id="projects" className="section-container py-24 bg-black/30">
      <SectionTitle title="Featured Projects" />
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      variants={itemVariants}
      className="glass-panel overflow-hidden rounded-xl group"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-theme-dark to-transparent opacity-60"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: hovered ? 0.8 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.a
          href={project.link}
          className="inline-block text-theme-blue hover:text-theme-purple font-medium transition-colors"
          whileHover={{ x: 5 }}
        >
          View Project →
        </motion.a>
      </div>
    </motion.div>
  );
};
