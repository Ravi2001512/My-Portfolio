"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "ChemBridge - Sri Lanka Best A/L chemistry education website",
    description: "A full-stack web application built for a A/L Chemistry class. Features role-based access for students and Admin, test and quiz features, and conflict resolution.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Google Cloud Console"],
    image: "/chembridge.png",
    github: "https://github.com/Ravi2001512/ChemOne_Frontend",
    live: "https://chembridge.lk",
  },
  {
    title: "TeachGrid - Teacher Management System",
    description: "Developed a web application for managing teacher records and administrative tasks",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/TeachGrid.jpg",
    github: "https://github.com/Ravi2001512/Teacher-Management-System-Frontend",
  },
  {
    title: "NIC Verification Mobile Application",
    description: "Developed a mobile application to validate Sri Lankan National Identity Card numbers.",
    tech: ["React Native", "Firebase"],
    image: "",
    github: "https://github.com/Ravi2001512/Nic_verificator",
  },
  {
    title: "Train Tracker Mobile Application",
    description: "A mobile application that helps passengers to track the real-time location of trains and provides information about train schedules and routes.",
    tech: ["React Native", "Firebase"],
    image: "",
    github: "https://github.com/Ravi2001512/Train-Tracker",
  },
  {
    title: "Dew Flower",
    description: "A Mock website for a flower shop",
    tech: ["HTML5", "CSS3"],
    image: "/Dew.png",
    github: "https://github.com/Ravi2001512/Dew-Flowers",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-primary">Work.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Some things I&apos;ve built recently.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:border-primary/30 transition-colors"
            >
              <div className="h-48 w-full bg-gradient-to-br from-zinc-800 to-black relative overflow-hidden">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Decorative element mimicking a UI skeleton */}
                    <div className="absolute inset-0 p-6 flex flex-col gap-3 opacity-30 group-hover:opacity-50 transition-opacity">
                      <div className="h-4 w-1/3 bg-white/20 rounded" />
                      <div className="h-24 w-full bg-white/10 rounded" />
                      <div className="flex gap-2 mt-auto">
                        <div className="h-3 w-12 bg-white/20 rounded" />
                        <div className="h-3 w-16 bg-white/20 rounded" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-4">
                  {project.github && (
                    <Link href={project.github} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                      <FaGithub size={16} /> Code
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                      <ExternalLink size={16} /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
