"use client"
import Image from "next/image";
import Social from "./components/social";
import AnimatedBackground from "./components/AnimatedBackground";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Certificates from "./components/certificates";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import ScrollIndicator from "./components/ScrollIndicator";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <AnimatedBackground />
      <ScrollIndicator />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-4 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            MHS
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#about" className="text-black dark:text-white hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-black dark:text-white hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-black dark:text-white hover:text-primary transition-colors">
              Skills
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-lg text-primary">Hi there! 👋</h2>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-black dark:text-white">I'm </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                  Muhammad Haris
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Fullstack Web Developer
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Crafting modern web experiences with React, Next.js, and TypeScript. 
              Focused on building responsive, user-friendly applications that make a difference.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Social />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="#projects"
                  className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  View Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-first md:order-last"
          >
            <div className="relative w-48 h-48 mx-auto md:w-80 md:h-80">
              <Image
                src="/images/profile.png"
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-primary"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
            <div className="absolute -inset-4 rounded-full bg-primary/5 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
              Skills & Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Some of the projects I've worked on
            </p>
          </motion.div>
          <Projects />
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
              Certificates
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Professional certifications and achievements
            </p>
          </motion.div>
          <Certificates />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 dark:text-gray-400">
        <p> {new Date().getFullYear()} Muhammad Haris Shahbaz. All rights reserved.</p>
      </footer>
    </main>
  );
}
