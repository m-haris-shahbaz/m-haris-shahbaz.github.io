"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaLink, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

type ProjectItem = {
  name: string;
  description: string;
  href: string;
  github?: string;
  date: string;
  skills: string[];
  image?: string;
}

const projectLists: ProjectItem[] = [
  {
    name: "PreTechie",
    href: "https://pretechie.com",
    date: "May 2024",
    description: "An e-commerce platform for mobile devices with modern UI and seamless user experience.",
    skills: ["Next.js", "React", "MongoDB", "TypeScript"],
    image: "/images/projects/pretechie.png"
  },
  {
    name: "SaeedGH",
    href: "https://saeedgh.com",
    date: "Sep 2023",
    description: "A technology-focused e-commerce platform with advanced filtering and search capabilities.",
    skills: ["React", "JavaScript", "CSS"],
    image: "/images/projects/saeedgh.png"
  },
  {
    name: "JusoorFM Invoicing System",
    href: "https://jusoorfm.aquirty.com",
    date: "Feb 2024",
    description: "Comprehensive invoicing management system for effective financial tracking and reporting.",
    skills: ["React", "Next.js", "Node.js", "MongoDB"],
    image: "/images/projects/jusoorfm.png"
  },
  {
    name: "Expense Tracking",
    href: "https://your-link-here.com",
    date: "Oct 2024",
    description: "Smart expense tracking application with data visualization and budget planning features.",
    skills: ["React", "TypeScript", "CSS"],
    image: "/images/projects/expenslyze.png"
  },
  {
    name: "Nejoum Email Client",
    href: "https://nejoum.aquirty.com",
    date: "Nov 2024",
    description: "A feature-rich email client with real-time communication, secure messaging, and intuitive user interface.",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    image: "/images/projects/email.png"
  }  
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const Projects = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projectLists.map((project, index) => (
        <motion.div
          key={project.name}
          variants={item}
          className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="aspect-video relative overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={400}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
            )}
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                {project.date}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <FaLink className="w-4 h-4" />
                <span>Live Demo</span>
              </Link>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Source Code</span>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Projects
