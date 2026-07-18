"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm text-primary mb-8 border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Seeking Software Engineering Internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
        >
          Software Engineering <br />
          <span className="text-zinc-500">Undergraduate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 font-light leading-relaxed"
        >
          I&apos;m a passionate student building scalable systems and exploring complex algorithms.
          Currently focusing on full-stack development, Frontend development, Ui/Ux and QA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/Ravindu Deshan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/5 transition-colors hover:border-white/20 active:scale-95"
          >
            Download CV <Download size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
