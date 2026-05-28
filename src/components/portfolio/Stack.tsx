import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import { Code, Layers, Database } from "lucide-react";

const GROUPS = [
  {
    icon: Code,
    title: "Languages",
    color: "from-purple to-blue",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "PHP", "Java", "C++"],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    color: "from-blue to-cyan",
    items: ["React.js", "Node.js","ExpressJs","NestJS", "JWT"],
  },
  {
    icon: Database,
    title: "Databases & Tools",
    color: "from-cyan to-purple",
    items: ["MongoDB", "MySQL", "Git", "GitHub","Postman"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-28">
      <div className="absolute inset-x-0 top-1/3 h-72 bg-purple/10 blur-3xl -z-10" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          tag="Tech stack"
          title="Tools I build with."
          desc="A curated set of languages, frameworks, and tools I use to ship full-stack apps."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl glass p-6 gradient-border"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg gradient-bg text-primary-foreground">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">{g.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {g.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm font-mono hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
