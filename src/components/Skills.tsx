
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { AnimatedSection } from "./AnimatedSection";

interface Skill {
  name: string;
  level: number;
  color: string;
}

export const Skills = () => {
  const skills: Skill[] = [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "TypeScript", level: 85, color: "#3178C6" },
    { name: "TailwindCSS", level: 95, color: "#38BDF8" },
    { name: "Next.js", level: 80, color: "#FFFFFF" },
    { name: "Framer Motion", level: 88, color: "#FF4D4D" },
    { name: "UI/UX Design", level: 85, color: "#8B5CF6" },
    { name: "Node.js", level: 75, color: "#8CC84B" },
    { name: "GraphQL", level: 70, color: "#E535AB" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeInOut" }
    })
  };

  return (
    <AnimatedSection id="skills" className="section-container py-20">
      <SectionTitle title="Skills & Expertise" />
      
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6"
          >
            Technical Proficiency
          </motion.h3>
          
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.slice(0, 4).map((skill) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                itemVariants={itemVariants}
                barVariants={barVariants}
              />
            ))}
          </motion.div>
        </div>
        
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6"
          >
            Creative Abilities
          </motion.h3>
          
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.slice(4).map((skill) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                itemVariants={itemVariants}
                barVariants={barVariants}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

interface SkillBarProps {
  skill: Skill;
  itemVariants: any;
  barVariants: any;
}

const SkillBar = ({ skill, itemVariants, barVariants }: SkillBarProps) => {
  return (
    <motion.div variants={itemVariants}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          custom={skill.level}
          variants={barVariants}
        />
      </div>
    </motion.div>
  );
};
