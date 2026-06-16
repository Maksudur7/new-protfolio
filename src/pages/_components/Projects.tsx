import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Calendar,
  Code,
  Eye,
  Github,
  Loader2,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  imageLink: string;
  featured: boolean;
  stats?: {
    stars?: number;
    users?: number;
    completion?: number;
  };
  featuredOrder?: number;
}

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "NGV - Video Streaming Platform",
    description:
      "A modern, fully dynamic video streaming platform with 11+ responsive pages, advanced filtering, and a comprehensive admin dashboard. Features high-performance media listing, user watch history, and rental/subscription flows.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "Radix UI",
    ],
    liveUrl: "https://ngv-black.vercel.app",
    githubUrl: "https://github.com/Maksudur7/assinment5",
    category: "Full-Stack App",
    imageLink: "https://i.ibb.co.com/6JV74646/ngv.png",
    featured: true,
    featuredOrder: 1,
    stats: {
      stars: 45,
      users: 120,
      completion: 85,
    },
  },
  {
    id: 2,
    title: "Student Hub Platform",
    description:
      "A comprehensive web platform for students featuring user authentication, content management, and feedback systems. Built with modern MERN stack technologies for seamless user experience and scalable architecture.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://studyhub-f26cc.web.app",
    githubUrl: "https://github.com/Maksudur7/Study-Hub",
    category: "Full-Stack Web App",
    imageLink: "https://i.ibb.co.com/nq8rnJmr/studenthub.png",
    featured: true,
    featuredOrder: 1,
    stats: {
      stars: 24,
      users: 150,
      completion: 100,
    },
  },
  {
    id: 3,
    title: "MediStore - Premium Online Pharmacy",
    description:
      "A sophisticated healthcare e-commerce platform built with Next.js 15. Features a premium dark-themed UI, real-time cart management, and a multi-step checkout process. Optimized for lightning-fast medicine browsing and secure OTC purchases.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Context API",
    ],
    liveUrl: "https://medistore-woad.vercel.app",
    githubUrl: "https://github.com/Maksudur7/MediStore-Frontend",
    category: "E-Commerce",
    imageLink: "https://i.ibb.co.com/k2B4h3Y6/madistore.png",
    featured: false,
    featuredOrder: 3,
    stats: {
      stars: 12,
      users: 50,
      completion: 100,
    },
  },
  {
    id: 4,
    title: "ConnectMe VPN - Reseller Panel",
    description:
      "A professional VPN management and reseller platform. It provides real-time user management, bandwidth monitoring, and a seamless dashboard for administrators and sub-resellers to manage connections efficiently.",
    technologies: ["Node.js", "Express.js", "React", "MongoDB", "REST API"],
    liveUrl: "https://reseller.cntbdvpn.win",
    githubUrl: "https://github.com/Maksudur7",
    category: "Admin Panel",
    imageLink: "https://i.ibb.co.com/tp4nhNbj/connect-me.png",
    featured: false,
    stats: {
      stars: 15,
      users: 450,
      completion: 100,
    },
  },
];


const CMS_URL = import.meta.env.VITE_CMS_URL || "http://localhost:3000";

/** Resolve imageLink: if it's a relative path, prefix with CMS base URL */
const resolveImageUrl = (link: string): string => {
  if (!link) return "";
  if (link.startsWith("http://") || link.startsWith("https://")) return link;
  return `${CMS_URL}${link.startsWith("/") ? "" : "/"}${link}`;
};

const fetchProjectsFromCMS = async (): Promise<ProjectItem[]> => {
  const response = await fetch(`${CMS_URL}/api/projects?limit=100&sort=featuredOrder`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();

  // Transform Payload CMS schema to fit frontend schema
  return (data.docs || []).map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    category: doc.category,
    imageLink: resolveImageUrl(doc.imageLink || ""),
    liveUrl: doc.liveUrl || undefined,
    githubUrl: doc.githubUrl || undefined,
    featured: doc.featured || false,
    featuredOrder: doc.featuredOrder ?? undefined,
    technologies: (doc.technologies || []).map((tech: any) =>
      typeof tech === "string" ? tech : tech.name
    ),
    stats: doc.stats
      ? {
          stars: doc.stats.stars || undefined,
          users: doc.stats.users || undefined,
          completion: doc.stats.completion || undefined,
        }
      : undefined,
  }));
};

/** Loading skeleton card */
function ProjectSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl bg-card/60 border border-border p-6 space-y-4">
      <div className="h-4 w-1/3 rounded bg-muted/60" />
      <div className="h-6 w-2/3 rounded bg-muted/60" />
      <div className="h-40 rounded-xl bg-muted/40" />
      <div className="flex gap-2">
        <div className="h-6 w-20 rounded bg-muted/50" />
        <div className="h-6 w-20 rounded bg-muted/50" />
        <div className="h-6 w-16 rounded bg-muted/50" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [projectPage, setProjectPage] = useState(1);

  const {
    data: cmsProjects,
    isLoading,
    isError,
  } = useQuery<ProjectItem[]>({
    queryKey: ["projects"],
    queryFn: fetchProjectsFromCMS,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

  // Fallback to hardcoded mock projects if CMS is down or has no data
  const projects =
    cmsProjects && cmsProjects.length > 0 ? cmsProjects : DEFAULT_PROJECTS;

  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));
  const otherProjects = projects.filter((p) => !p.featured);
  const projectsPerPage = 2;
  const totalProjectPages = Math.max(
    1,
    Math.ceil(otherProjects.length / projectsPerPage),
  );
  const pagedProjects = otherProjects.slice(
    (projectPage - 1) * projectsPerPage,
    projectPage * projectsPerPage,
  );

  const handleProjectPrev = () =>
    setProjectPage((page) => Math.max(1, page - 1));
  const handleProjectNext = () =>
    setProjectPage((page) => Math.min(totalProjectPages, page + 1));

  return (
    <section
      id="projects"
      className="py-20 px-4 text-foreground font-sans relative overflow-hidden -mt-[1px]"
    >
      {/* Gradient blend overlay - seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none z-20" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.12),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.08),transparent_50%)]" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-start mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
            A polished portfolio of my top projects built with a refined dark
            and white visual system.
          </p>
          {/* CMS status indicator */}
          {isLoading && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="w-3 h-3 animate-spin text-purple-400" />
              <span>Loading from CMS...</span>
            </div>
          )}
          {isError && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-yellow-500/80">
              <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
              <span>Showing cached data — CMS offline</span>
            </div>
          )}
          {!isLoading && !isError && cmsProjects && cmsProjects.length > 0 && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-emerald-500/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
              <span>Live from CMS</span>
            </div>
          )}
        </div>

        {/* Loading skeletons */}
        {isLoading && (
          <div className="space-y-6 mb-10">
            <ProjectSkeleton />
            <div className="grid md:grid-cols-2 gap-6">
              <ProjectSkeleton />
              <ProjectSkeleton />
            </div>
          </div>
        )}

        {/* Featured Projects - Hero Layout */}
        {!isLoading && <div className="space-y-20 mb-10">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8`}
            >
              {/* Project Content */}
              <div className={`w-full lg:w-1/2  `}>
                {/* Project Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-600/90 text-white border-0 px-3 py-1 text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      {project.category}
                    </Badge>
                    {project.stats && (
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        {project.stats.stars && (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{project.stats.stars}</span>
                          </div>
                        )}
                        {project.stats.users && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span>{project.stats.users}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-4 py-2 text-sm text-foreground bg-muted/70 border border-border hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                {project.stats?.completion && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Project Completion</span>
                      <span>{project.stats.completion}%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${project.stats.completion}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm">
                        <Eye className="w-5 h-5 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="px-6 py-2 border-white/20 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 text-sm text-foreground"
                      >
                        <Github className="w-5 h-5 mr-2 " />
                        View Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Visual */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-3xl bg-card/80 border border-border shadow-2xl">
                  {/* Image Container */}
                  <div className="aspect-video relative overflow-hidden">
                    {project.imageLink.startsWith("http") ? (
                      <img
                        src={project.imageLink}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                        <div className="text-center text-white/50">
                          <Code className="w-20 h-20 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-semibold">
                            {project.title}
                          </p>
                          <p className="text-sm text-white/30 mt-2">
                            Project Preview
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Stats */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 text-foreground text-sm border border-border">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{project.stats?.stars || 0} stars</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span>{project.stats?.users || 0} users</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/90 to-transparent p-4">
                    <div className="flex justify-between items-center text-foreground">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span>2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Code className="w-4 h-4 text-blue-400" />
                          <span>{project.technologies.length} tech</span>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-0">
                        Featured
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>}

        {/* Other Projects - Grid Layout */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              More Projects
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional projects showcasing various technologies and
              problem-solving approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pagedProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card/80 border border-border rounded-2xl p-4 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-transparent group-hover:from-purple-600/5 transition-all duration-500" />

                <div className="relative z-10 space-y-3">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <Badge className="bg-blue-600/90 text-white border-0 text-[10px] uppercase tracking-[0.12em]">
                        {project.category}
                      </Badge>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <div className="text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.category === "Productivity" ? "📋" : "📊"}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-2 py-1 text-xs text-foreground bg-muted/60 border border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="px-2 py-1 text-xs text-foreground bg-muted/60 border border-border"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-blue-400" />
                        <span>{project.stats.users}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{project.stats.completion}%</span>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-purple-600/80 hover:bg-purple-600 text-white border-0 text-xs"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-white/20 text-foreground hover:bg-white/10 text-xs"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 items-center justify-between sm:flex-row sm:gap-0">
            <div className="text-sm text-gray-400">
              Page {projectPage} of {totalProjectPages}
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="h-10 rounded-full border border-border bg-muted/80 text-foreground hover:bg-accent/10"
                disabled={projectPage === 1}
                onClick={handleProjectPrev}
              >
                Previous
              </Button>
              <Button
                size="sm"
                className="h-10 rounded-full border border-border bg-muted/80 text-foreground hover:bg-accent/10"
                disabled={projectPage === totalProjectPages}
                onClick={handleProjectNext}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
