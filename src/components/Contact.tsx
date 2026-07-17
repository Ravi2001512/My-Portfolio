"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@johndoe.com", href: "mailto:hello@johndoe.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  { icon: FaGithub, label: "GitHub", value: "github.com/johndoe", href: "https://github.com/johndoe" },
  { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/johndoe", href: "https://linkedin.com/in/johndoe" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-16 rounded-3xl relative overflow-hidden flex flex-col lg:flex-row gap-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-30" />
          
          <div className="relative z-10 flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s build something <br />
              <span className="text-primary">extraordinary.</span>
            </h2>
            
            <p className="text-zinc-400 text-lg mb-10 max-w-md">
              I&apos;m currently looking for software engineering internships and new grad roles. Whether you have an opportunity or just want to connect, my inbox is always open!
            </p>
          </div>

          <div className="relative z-10 flex-1 flex flex-col gap-6 justify-center">
            {contactInfo.map((info, idx) => (
              <motion.div 
                key={info.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Link
                  href={info.href}
                  target={info.label === "Location" ? "_self" : "_blank"}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium mb-1">{info.label}</p>
                    <p className="text-zinc-200 font-semibold group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
