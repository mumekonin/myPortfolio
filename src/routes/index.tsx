import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mulualem Mekonin — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mulualem Mekonin — Full-Stack Developer and 3rd-year IT student at Jimma University. React, Node.js, NestJS, MongoDB & MySQL.",
      },
      { property: "og:title", content: "Mulualem Mekonin — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack developer crafting modern, scalable web apps with React, Node.js and NestJS.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}
