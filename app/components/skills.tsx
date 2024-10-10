// components/Skills.tsx
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava, FaPython, FaCopyright, FaJs, FaDocker  } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
type SkillItem = {
    name: string;
    icon: JSX.Element
}
const skills: SkillItem[] = [
  { name: 'React', icon: <FaReact className="w-6 h-6" /> },
  { name: 'HTML', icon: <FaHtml5 className="w-6 h-6" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" /> },
  { name: 'JavaScript', icon: <FaJs className="w-6 h-6" /> },
  { name: 'C', icon: <FaCopyright className="w-6 h-6" /> },
  { name: 'Python', icon: <FaPython className="w-6 h-6" /> },
  { name: 'Java', icon: <FaJava className="w-6 h-6" /> },
  { name: 'Git', icon: <FaGitAlt className="w-6 h-6" /> },
  { name: 'Docker', icon: <FaDocker className="w-6 h-6" /> },
];

const Skills = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-4 justify-between animate-marquee whitespace-nowrap">
        {skills.map((skill) => (
          <div key={skill.name} className="border p-2 rounded-lg flex items-center justify-center border-white text-primary hover:bg-gray-700 transition duration-300 ease-in-out">
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
