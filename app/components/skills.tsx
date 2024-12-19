"use client"
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava, FaPython, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

type SkillItem = {
  name: string;
  icon: JSX.Element;
  color: string;
}

const skills: SkillItem[] = [
  { name: 'React', icon: <FaReact className="w-8 h-8" />, color: '#61DAFB' },
  {name: 'React Native', icon: <FaReact className="w-8 h-8" />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, color: '#000000' },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, color: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" />, color: '#F7DF1E' },
  { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, color: '#339933' },
  { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" />, color: '#1572B6' },
  { name: 'Python', icon: <FaPython className="w-8 h-8" />, color: '#3776AB' },
  { name: 'Java', icon: <FaJava className="w-8 h-8" />, color: '#007396' },
  { name: 'Git', icon: <FaGitAlt className="w-8 h-8" />, color: '#F05032' },
  { name: 'Docker', icon: <FaDocker className="w-8 h-8" />, color: '#2496ED' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={item}
          className="group relative flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="mb-4 text-gray-600 dark:text-gray-300 group-hover:text-[${skill.color}] transition-colors duration-300">
            {skill.icon}
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {skill.name}
          </span>
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{ backgroundColor: skill.color }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
