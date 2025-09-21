import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = ["React", "Node.js", "TypeScript", "Express.js", "Mongodb"];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-chart-2/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center space-y-8 max-w-4xl fade-in-up">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-medium text-lg">Hello, I'm</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight gradient-text">
              Maksudur Rahaman
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Mern Stack Developer &  Designer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional digital experiences that make a difference.
          Let's build something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="px-8 py-3 text-base font-medium"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-base font-medium"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <Button variant="ghost" size="sm" className="p-3 rounded-full hover:bg-primary/10">
            <a href="https://github.com/Maksudur7">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="p-3 rounded-full hover:bg-primary/10">
            <a href="https://www.linkedin.com/in/maksudur-rahaman/">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            onClick={scrollToContact}
            variant="ghost" size="sm" className="p-3 rounded-full hover:bg-primary/10">
            <Mail className="w-5 h-5" />
          </Button>
        </div>

        <div className="pt-8">
          <Button
            variant="ghost"
            onClick={scrollToContact}
            className="rounded-full p-4 hover:bg-primary/10 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
}