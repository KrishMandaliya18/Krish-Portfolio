import React from 'react';
import { motion } from 'framer-motion';
// Icons import
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFigma, SiDavinciresolve } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, level: '95%' },
  { name: 'CSS', icon: <FaCss3Alt />, level: '90%' },
  { name: 'JavaScript', icon: <FaJs />, level: '75%' },
  { name: 'React', icon: <FaReact />, level: '80%' },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: '85%' },
  { name: 'Node.js', icon: <FaNodeJs />, level: '40%' },
  { name: 'Express', icon: <SiExpress />, level: '20%' },
  { name: 'MongoDB', icon: <SiMongodb />, level: '30%' },
  { name: 'GitHub', icon: <FaGithub />, level: '80%' },
  { name: 'Figma', icon: <SiFigma />, level: '70%' },
  { name: 'Video Editing', icon: <SiDavinciresolve />, level: '70%' }, // DaVinci Resolve Icon
];

const Skills = () => {
  return (
    <section id="skills" className="py-15 bg-[#0a0a0a] min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#4ade80] text-4xl md:text-5xl font-black uppercase tracking-[0.2em]">
            Tech Stack
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1.5 bg-[#4ade80] mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateZ: 2,
                boxShadow: "0px 0px 30px rgba(74, 222, 128, 0.15)" 
              }}
              className="group relative bg-[#111] border border-gray-800 p-8 rounded-3xl flex flex-col items-center gap-4 cursor-none transition-colors hover:border-[#4ade80]/50"
            >
              {/* Icon with Glow */}
              <div className="text-6xl text-gray-600 group-hover:text-[#4ade80] transition-all duration-500 transform group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-white text-lg font-bold tracking-wider group-hover:text-[#4ade80]">
                {skill.name}
              </h3>

              {/* Progress Bar Mini */}
              <div className="w-full bg-gray-800 h-1 mt-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="bg-[#4ade80] h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;