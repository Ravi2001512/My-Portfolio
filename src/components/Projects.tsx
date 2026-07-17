"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "University Course Registration System",
    description: "A full-stack web application built for a software engineering class. Features role-based access for students and faculty, real-time seat availability, and conflict resolution.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
    github: "#",
    live: "#",
    // Use a placeholder pattern with an external image service or a solid color gradient via CSS instead of an actual image file for simplicity in this demo, but since we need an image tag, we can use a mock path or leave it empty if we don't have images. We will just use a nice gradient block instead of an Image component to keep it clean.
  },
  {
    title: "Algorithm Visualizer",
    description: "An interactive educational tool that visualizes common data structures and algorithms, including sorting and pathfinding. Used by fellow students to understand CS fundamentals.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "IoT Campus Navigation",
    description: "A hackathon-winning mobile-responsive app that helps students find optimal routes between classes using real-time campus data.",
    tech: ["Node.js", "Express", "MongoDB", "React Native"],
    github: "#",
    live: "#",
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
                  <Link href={project.github} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <FaGithub size={16} /> Code
                  </Link>
                  <Link href={project.live} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
