import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-bg text-primary-foreground">M</span>
            <span className="gradient-text">Mulualem</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {ITEMS.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {it.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-lg gradient-bg px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Hire me
          </a>

          <button
            aria-label="menu"
            onClick={() => setOpen(!open)}
            className="md:hidden grid place-items-center h-9 w-9 rounded-lg glass"
          >
            <span className="block w-4 h-px bg-foreground mb-1.5" />
            <span className="block w-4 h-px bg-foreground" />
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col"
          >
            {ITEMS.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {it.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
