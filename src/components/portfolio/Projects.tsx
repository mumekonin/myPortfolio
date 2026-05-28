import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "./About";
import ecom from "@/assets/project-ecommerce.jpg";
import uni from "@/assets/project-university.jpg";
import tasks from "@/assets/project-tasks.jpg";
import portfolio from "@/assets/project-portfolio.jpg";

const PROJECTS = [
  {
    title: "M-MARKET ELECTRONICS",
    desc: "A full-stack electronics storefront with real-time product browsing, order placement, payment screenshot upload, and a complete admin dashboard.",
    tech: ["React", "NestJs", "MongoDB", "JWT","Cloudinary"],
    image: ecom,
    github: "https://github.com/mumekonin/m-market-frontend",
    demo: "https://m-market-frontend.vercel.app/",
  },
  {
    title: "Digital Library",
    desc: "Digital Library  developed for Kera Secondary School The system provides a modern, responsive, and user-friendly digital library interface for Students, Librarians, and Administrators.",
    tech: ["HTML","CSS","JavaScript", "NestJs+TypeScript", "MongoDB", "JWT","Cloudinary"],
    image: uni,
    github: "https://github.com/mumekonin/digital-library-frontend",
    demo: "https://digital-library-frontend-nine.vercel.app/",
  },
  {
    title: "BirrConvert",
    desc: "Ethiopian Birr exchange rate dashboard — track and convert ETB against 10 major world currencies..",
    tech: ["HTML","CSS","JavaScript", "NestJs+TypeScript", "MongoDB", "JWT","Cloudinary"],
    image: tasks,
    github: "https://github.com/mumekonin/exchange-rate",
    demo: "https://exchange-rate-virid.vercel.app/",
  },
  {
    title: "Hermata Knowledge Hub",
    desc: "A comprehensive digital learning infrastructure designed to provide the community of Hermata Merkato, Jimma, with centralized access to educational resource.",
    tech: ["HTML","CSS","JavaScript", "NestJs+TypeScript", "MongoDB", "JWT","Cloudinary"],
    image: portfolio,
    github: "https://github.com/mumekonin/Hermata_Knowledge_Hub",
    demo: "https://hermata-knowledge-hub-ncfh.vercel.app/",
  },

];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          tag="Projects"
          title="Selected work."
          desc="A few of the things I've built while learning and shipping."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl glass-strong gradient-border"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:gradient-text transition">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2 text-sm hover:bg-white/10 transition">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg gradient-bg px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
