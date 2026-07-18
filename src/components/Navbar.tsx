"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter hover:text-primary transition-colors"
        >
          RD<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Socials - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://github.com/Ravi2001512" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/ravindu-deshan-723a5a243/" target="_blank" className="text-zinc-400 hover:text-[#0A66C2] transition-colors">
            <FaLinkedin size={20} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass absolute top-20 left-0 right-0 border-t border-white/5 p-6 flex flex-col gap-6 shadow-2xl bg-black/90"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <Link href="https://github.com/Ravi2001512" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/ravindu-deshan-723a5a243/" target="_blank" className="text-zinc-400 hover:text-[#0A66C2] transition-colors">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
