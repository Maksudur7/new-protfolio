import Hero from "./_components/Hero.tsx";
import About from "./_components/About.tsx";
import Experience from "./_components/Experience.tsx";
import Projects from "./_components/Projects.tsx";
import Contact from "./_components/Contact.tsx";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}