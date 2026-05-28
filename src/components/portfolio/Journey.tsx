import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import { Monitor, Server, Database, Layers, Infinity as InfinityIcon } from "lucide-react";

const STEPS = [
  { icon: Monitor, title: "Frontend Development", text: "Building responsive, accessible UIs with React, TypeScript, and modern CSS." },
  { icon: Server, title: "Backend Development", text: "Designing REST APIs with Node.js ,ExpressJs and  NestJS, focused on clean architecture." },
  { icon: Database, title: "Database Management", text: "Modeling and querying data with MongoDB and MySQL for real-world apps." },
  { icon: Layers, title: "Full-Stack Projects", text: "Connecting it all — auth, payments, dashboards, deployments." },
  { icon: InfinityIcon, title: "Continuous Learning", text: "Always exploring new frameworks, patterns, and best practices." },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-28">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          tag="Journey"
          title="Learning in motion."
          desc="A snapshot of the path I'm walking as a developer."
        />

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-purple via-blue to-cyan md:-translate-x-px" />

          <div className="space-y-10">
            {STEPS.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: left ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative flex md:items-center gap-6 ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 grid h-4 w-4 place-items-center rounded-full gradient-bg ring-4 ring-background" />

                  <div className="md:w-1/2" />
                  <div className="ml-14 md:ml-0 md:w-1/2 rounded-2xl glass p-5 hover:border-white/20 transition">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                        <s.icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-semibold">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
