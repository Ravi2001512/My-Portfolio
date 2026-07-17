import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-md py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
            RD<span className="text-primary">.</span>
          </Link>
          <p className="text-zinc-500 text-sm text-center md:text-left max-w-sm">
            Building scalable systems and solving complex problems with code.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com/Ravi2001512" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/ravindu-deshan-723a5a243/" target="_blank" className="text-zinc-400 hover:text-[#0A66C2] transition-colors">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500 font-medium">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Ravindu Deshan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
