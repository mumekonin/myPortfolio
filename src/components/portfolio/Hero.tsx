import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Github, Linkedin, Code2 } from "lucide-react";

const ROLES = [
  "Full-Stack Developer",
  "IT Student @ Jimma University",
  "React • Node • NestJS",
  "Problem Solver",
];

function useTyping(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), pause);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI(i + 1);
          }
        }
      },
      del ? 40 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-radial" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="gradient-text">Mulualem</span>
            <br />
            Mekonin.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl"
          >
            3rd-Year Information Technology Student at Jimma University. Passionate
            about building scalable, modern, and user-friendly full-stack web
            applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 font-mono text-sm text-cyan h-6"
          >
            <span className="text-muted-foreground">{"> "}</span>
            {typed}
            <span className="animate-blink">_</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl gradient-bg px-6 py-3 text-sm font-semibold text-primary-foreground glow hover:opacity-95 transition"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a href="https://github.com/mumekonin" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Github className="h-5 w-5" /></a>
            <a href="linkedin.com/in/mulualem-mekonin-0b399a345" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:mulualemmekonin0@gmail.com" className="hover:text-foreground transition"><Mail className="h-5 w-5" /></a>
          </motion.div>
        </div>

        {/* Visual: code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative animate-float"
        >
          <div className="absolute inset-0 -z-10 gradient-bg blur-2xl opacity-30 rounded-3xl" />
          <div className="glass-strong rounded-2xl p-5 shadow-2xl gradient-border">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">developer.tsx</span>
              <Code2 className="ml-auto h-4 w-4 text-muted-foreground" />
            </div>
            <pre className="text-[13px] leading-relaxed font-mono mt-4 overflow-x-auto">
{`const `}<span className="text-purple">mulualem</span>{` = {
  `}<span className="text-cyan">name</span>{`: `}<span className="text-emerald-300">'Mulualem Mekonin'</span>{`,
  `}<span className="text-cyan">role</span>{`: `}<span className="text-emerald-300">'Full-Stack Developer'</span>{`,
  `}<span className="text-cyan">stack</span>{`: [`}<span className="text-emerald-300">'React'</span>{`, `}<span className="text-emerald-300">'Node'</span>{`, `}<span className="text-emerald-300">'NestJS'</span>{`],
  `}<span className="text-cyan">learning</span>{`: `}<span className="text-emerald-300">'every single day'</span>{`,
  `}<span className="text-cyan">coffee</span>{`: `}<span className="text-orange-300">true</span>{`,
};

`}<span className="text-purple">export default</span>{` mulualem;`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
