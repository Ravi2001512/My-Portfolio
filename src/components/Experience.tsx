"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            role: "Freelance Fullstack Engineer",
            company: "ChemBridge LMS | Online",
            period: "2025 - Present",
            description: "Collaborated with stakeholder to develop and maintain a Learning Management System. Led frontend and backend development using the MERN stack. Designed and implemented REST APIs for user and content management. Managed deployment, updates, and bug fixes in the production environment ",
            skills: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS", "Google Cloud Console"],
        },
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
                        Professional Experience
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        My journey through tech, building scalable solutions and crafting exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center mt-2 md:mt-0">
                                    <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10 relative">
                                        <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-75 duration-1000" />
                                        <Briefcase className="w-5 h-5 text-emerald-400 relative z-10" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <div className="group relative">
                                        {/* Glowing border effect on hover */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

                                        <div className="relative bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1">

                                            {/* Period Badge */}
                                            <div className="flex items-center gap-2 text-emerald-400 font-medium mb-4 text-sm bg-emerald-500/10 w-fit px-3 py-1.5 rounded-full border border-emerald-500/20">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                                {exp.role}
                                            </h3>

                                            <div className="text-gray-400 font-medium mb-6 text-lg">
                                                {exp.company}
                                            </div>

                                            <p className="text-gray-300 leading-relaxed mb-8">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs font-semibold tracking-wide rounded-full text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 transition-all cursor-default"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Side for flex spacing on desktop */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
