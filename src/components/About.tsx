
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { AnimatedSection } from "./AnimatedSection";

export const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe XD", "User Experience", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Firebase"]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  return (
    <AnimatedSection id="about" className="section-container py-20">
      <SectionTitle title="About Me" />
      
      <div className="grid md:grid-cols-5 gap-8">
        <motion.div 
          className="md:col-span-3 glass-panel p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Who I am</h3>
          <p className="text-gray-300 mb-4">
            I'm a passionate frontend developer and designer with 5 years of experience creating 
            beautiful, responsive websites and applications.
          </p>
          <p className="text-gray-300 mb-4">
            I specialize in crafting engaging user experiences with modern frontend technologies like 
            React, Next.js, and TailwindCSS, with a focus on animations and interactive elements.
          </p>
          <p className="text-gray-300">
            When I'm not coding, you'll find me exploring new design trends, playing the guitar, or hiking
            in the mountains. I believe that great design comes from understanding both technology and people.
          </p>
        </motion.div>
        
        <motion.div 
          className="md:col-span-2 glass-panel p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
          
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-medium text-theme-blue mb-2">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
