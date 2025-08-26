import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and sales tracking.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Web App"
  },
  {
    title: "Task Management Pro",
    description: "A collaborative project management tool with drag-and-drop functionality, team chat, and advanced reporting features.",
    technologies: ["Next.js", "Prisma", "tRPC", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "SaaS"
  },
  {
    title: "Weather Analytics",
    description: "Beautiful weather application with detailed forecasts, historical data visualization, and location-based insights.",
    technologies: ["Vue.js", "Chart.js", "Express", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
  },
  {
    title: "Portfolio CMS",
    description: "A headless CMS specifically designed for creative portfolios with drag-and-drop page builder and SEO optimization.",
    technologies: ["Nuxt.js", "Strapi", "GraphQL", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#",
    category: "CMS"
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-responsive fitness application with workout planning, progress tracking, and social features.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile"
  },
  {
    title: "Design System",
    description: "Comprehensive design system with React components, documentation, and design tokens for consistent UI development.",
    technologies: ["Storybook", "React", "SCSS", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Design System"
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications, mobile apps, and design systems
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden border-2 border-primary/20">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-primary/20 via-chart-2/20 to-chart-3/20 flex items-center justify-center">
                  <div className="text-6xl text-primary/40 font-bold">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  {project.liveUrl && (
                    <Button className="flex-1 group/btn">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Other Projects Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                  <div className="text-3xl text-muted-foreground/60 font-bold">
                    {project.title.charAt(0)}
                  </div>
                  <Badge variant="secondary" className="absolute top-2 right-2 text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs px-2 py-0.5">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}