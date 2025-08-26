import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Minimal Portfolio",
    description: "A clean, responsive portfolio website built with modern web technologies and minimalist design principles.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A simple yet powerful task management application with drag-and-drop functionality and clean interface.",
    technologies: ["Next.js", "MongoDB", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "An elegant weather application featuring beautiful data visualization and location-based forecasts.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  {project.liveUrl && (
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}