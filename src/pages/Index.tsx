import { useState, useEffect } from "react";
import Navigation from "./_components/Navigation.tsx";
import Hero from "./_components/Hero.tsx";
import About from "./_components/About.tsx";
import Experience from "./_components/Experience.tsx";
import Projects from "./_components/Projects.tsx";
import Contact from "./_components/Contact.tsx";
import Footer from "./_components/Footer.tsx";

export default function Index() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Unified seamless background with prominent gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.25),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.18),_transparent_40%),radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_60%)]" />
        <div className="absolute top-20 right-20 h-60 w-60 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 h-52 w-52 rounded-full bg-sky-400/15 blur-3xl animate-pulse delay-500" />
      </div>
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}