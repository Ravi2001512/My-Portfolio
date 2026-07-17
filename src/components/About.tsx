"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "REST API",
  "MongoDB",
  "Firebase",
  "SQL",
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Vercel",
  "Render"

];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-8">
              <div className="relative w-40 h-60 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/profile.png" alt="Ravindu Profile" fill sizes="200px" className="object-cover" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Ravindu <br className="hidden sm:block" /> <span className="text-primary">Deshan.</span>
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Hello! I&apos;Ravindu Deshan, a final-year Software Engineering undergraduate at The Open University of Sri Lanka. I enjoy building modern web and mobile applications that solve real-world problems.
              </p>
              <p>
                I have hands-on experience in Full-Stack Development using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and also develop mobile applications with React Native. I enjoy creating responsive user interfaces, designing REST APIs, and deploying applications using modern tools.
              </p>
              <p>
                I am always eager to learn new technologies, improve my problem-solving skills, and work with teams to build high-quality software. Currently, I am looking for a Software Engineering, Full-Stack Developer, Frontend Developer, or QA Internship where I can contribute my skills while gaining industry experience.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="glass p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl font-semibold mb-6 text-white">Technical Skills</h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
