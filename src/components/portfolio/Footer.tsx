import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 mt-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md gradient-bg text-primary-foreground text-xs font-bold">M</span>
          <span>© {new Date().getFullYear()} Mulualem Mekonin. Crafted with care.</span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/mumekonin" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com/in/mulualem-mekonin-0b399a345" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:mulualem@example.com" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
