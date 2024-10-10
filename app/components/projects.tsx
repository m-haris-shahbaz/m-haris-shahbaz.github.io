import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLink } from 'react-icons/fa'

type ProjectItem = {
    name: string;
    description: string;
    href: string;
    date: string;
    skills: string[]; // Added skills property
}

const projectLists: ProjectItem[] = [
    {
        name: "PreTechie",
        href: "https://pretechie.com",
        date: "May 2024",
        description: "An e-commerce platform for mobile devices.",
        skills: ["Next.js", "React", "MongoDB", "TypeScript"], // Skills for this project
    },
    {
        name: "SaeedGH",
        href: "https://saeedgh.com",
        date: "Sep 2023",
        description: "An e-commerce for SaeedGH company related to technology.",
        skills: ["React", "JavaScript", "CSS"], // Skills for this project
    },
    {
        name: "JusoorFM Invoicing System",
        href: "https://jusoorfm.aquirty.com",
        date: "Feb 2024",
        description: "Invoicing management system for effective financial tracking for Jusoor Facilities Management.",
        skills: ["React", "Next.js", "Node.js", "MongoDB"], // Skills for this project
    },
    {
        name: "Expense Tracking",
        href: "https://your-link-here.com",
        date: "Oct 2024",
        description: "A project for tracking expenses efficiently.",
        skills: ["React", "TypeScript", "CSS"], // Skills for this project
    },
];

const Projects = () => {
    return (
        <div className="space-y-4">
            {projectLists.map((project, index) => (
                <div key={index} className="py-8 border rounded-lg p-4 flex justify-between bg-gray-900 border-gray-600 shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold text-white">{project.name}</h2>
                        <p className="text-white">{project.description}</p>
                        <div className="flex flex-wrap mt-2">
                            {project.skills.map((skill, index) => (
                                <span key={index} className="border-primary border text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="bg-primary text-black text-sm px-2 py-0.5 rounded-full">{project.date}</span>
                        <Link href={project.href} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center">
                            <span className='text-sm hover:underline mr-2'>View Project</span>
                            <FaLink className="w-3 h-3 text-primary hover:text-primary transition duration-200" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
