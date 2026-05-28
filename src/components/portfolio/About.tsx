import { motion } from "framer-motion";
import { GraduationCap, Sprout, Lightbulb, BookOpen } from "lucide-react";

const ITEMS = [
  { icon: GraduationCap, title: "IT Student", text: "3rd-year Information Technology student at Jimma University." },
  { icon: Sprout, title: "Full-Stack Focus", text: "Currently learning full-stack development — from frontend to backend." },
  { icon: Lightbulb, title: "User-Focused", text: "Passionate about clean, scalable, and user-focused applications." },
  { icon: BookOpen, title: "Always Learning", text: "Always exploring new tools and frameworks to sharpen my skills." },
];

export function SectionHeading({ tag, title, desc }: { tag: string; title: string; desc?: string }) {
  return (
    <div className="text-center mb-14">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-3"
      >
        {tag}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold"
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-muted-foreground max-w-2xl mx-auto"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          tag="About me"
          title="I am a developer who is working on the web.."
          desc="I really love taking ideas and turning them into interfaces that people can use and reliable backends that work well.Here is a quick snapshot of what I do.."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass p-6 hover:border-white/20 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-bg blur-2xl -z-10" style={{ opacity: 0 }} />
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-bg text-primary-foreground mb-4">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
