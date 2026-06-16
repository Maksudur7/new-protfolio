import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Briefcase, MapPin, Calendar, ArrowUpRight, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";

interface ExperienceItem {
  id: number | string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  icon: string;
  order?: number;
}

const DEFAULT_EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    icon: "💼",
    title: "Frontend Developer",
    company: "DALONEXT",
    period: "Mar 2026 - Present",
    location: "Bangladesh · Remote",
    description: "Building responsive, production-ready interfaces using React.js, Next.js, and Tailwind CSS while collaborating with backend teams.",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    order: 1,
  },
  {
    id: 2,
    icon: "🔐",
    title: "Backend Developer (Contractual)",
    company: "Gurdia-Auth Project",
    period: "Oct 2024 - Nov 2024",
    location: "Remote",
    description: "Designed a secure authentication platform with Better-Auth, Prisma ORM, PostgreSQL, and RBAC for enterprise access control.",
    skills: ["Better-Auth", "Prisma", "PostgreSQL", "RBAC", "JWT"],
    order: 2,
  },
  {
    id: 3,
    icon: "🌍",
    title: "MERN Stack Developer (Intern)",
    company: "Airepro Solution Pvt Ltd",
    period: "Apr 2024 - Aug 2024",
    location: "India · Remote",
    description: "Developed reusable UI components with Tailwind CSS, optimized API integration logic, and improved UX with React Query.",
    skills: ["React.js", "Node.js", "Express.js", "React Query", "Tailwind CSS"],
    order: 3,
  },
  {
    id: 4,
    icon: "🏫",
    title: "Industrial Attachment",
    company: "EPD IT Solutions",
    period: "6 Months",
    location: "Barishal",
    description: "Supported full-stack development workflows by building responsive layouts, integrating backend APIs, and applying debugging best practices.",
    skills: ["HTML", "CSS", "JavaScript", "API Integration", "Debugging"],
    order: 4,
  },
];

const CMS_URL = import.meta.env.VITE_CMS_URL || "http://localhost:3000";

const fetchExperiencesFromCMS = async (): Promise<ExperienceItem[]> => {
  const response = await fetch(`${CMS_URL}/api/experiences?limit=100&sort=order`);
  if (!response.ok) {
    throw new Error("Failed to fetch experiences");
  }
  const data = await response.json();

  // Transform Payload CMS schema to fit frontend schema
  return (data.docs || []).map((doc: any) => ({
    id: doc.id,
    icon: doc.icon || "💼",
    title: doc.title,
    company: doc.company,
    period: doc.period,
    location: doc.location,
    description: doc.description,
    order: doc.order ?? 0,
    // CMS stores skills as array of {id, name} objects
    skills: (doc.skills || []).map((skill: any) =>
      typeof skill === "string" ? skill : skill.name
    ),
  }));
};

/** Loading skeleton card for experience */
function ExperienceSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl bg-card/60 border border-border p-6 space-y-3">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-muted/60 shrink-0" />
        <div className="space-y-2 flex-1">
          <div className="h-5 w-2/3 rounded bg-muted/60" />
          <div className="h-3 w-1/3 rounded bg-muted/50" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="h-3 w-24 rounded bg-muted/50" />
        <div className="h-3 w-20 rounded bg-muted/50" />
      </div>
      <div className="h-12 rounded bg-muted/40" />
      <div className="flex gap-2">
        <div className="h-5 w-16 rounded bg-muted/50" />
        <div className="h-5 w-20 rounded bg-muted/50" />
        <div className="h-5 w-14 rounded bg-muted/50" />
      </div>
    </div>
  );
}

export default function Experience() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const {
    data: cmsExperiences,
    isLoading,
    isError,
  } = useQuery<ExperienceItem[]>({
    queryKey: ["experiences"],
    queryFn: fetchExperiencesFromCMS,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

  // Fallback to hardcoded mock experiences if CMS is down or has no data
  const experiences =
    cmsExperiences && cmsExperiences.length > 0
      ? [...cmsExperiences].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      : DEFAULT_EXPERIENCES;

  const totalPages = Math.ceil(experiences.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExperiences = experiences.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section 
      id="experience" 
      className="min-h-screen text-foreground font-sans px-6 py-20 flex flex-col items-center relative overflow-hidden -mt-[1px]"
    >
      {/* Gradient blend overlay - seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none z-20" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-32 right-20 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-fuchsia-500/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl w-full">

        {/* Section Header */}
        <div className="mb-10 space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-4 text-sm text-foreground shadow-sm">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>My Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-950 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg dark:text-gray-300">
            A showcase of my professional growth, roles, and the impact I've created through various projects and positions.
          </p>
          {/* CMS status indicator */}
          {isLoading && (
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="w-3 h-3 animate-spin text-purple-400" />
              <span>Loading from CMS...</span>
            </div>
          )}
          {isError && (
            <div className="inline-flex items-center gap-2 text-xs text-yellow-500/80">
              <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
              <span>Showing cached data — CMS offline</span>
            </div>
          )}
          {!isLoading && !isError && cmsExperiences && cmsExperiences.length > 0 && (
            <div className="inline-flex items-center gap-2 text-xs text-emerald-500/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
              <span>Live from CMS</span>
            </div>
          )}
        </div>

        {/* Loading skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ExperienceSkeleton />
            <ExperienceSkeleton />
            <ExperienceSkeleton />
            <ExperienceSkeleton />
          </div>
        )}

        {/* Experience Grid */}
        {!isLoading && <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {currentExperiences.map((exp) => (
            <div 
              key={exp.id}
              className="group relative p-6 rounded-2xl bg-card/95 border border-border shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.12)] overflow-hidden flex flex-col"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-transparent group-hover:from-purple-600/10 transition-all duration-300 pointer-events-none" />
              
              <div className="relative z-10 space-y-3 flex flex-col h-full">
                {/* Icon & Title Section */}
                <div className="flex items-start gap-3">
                  <div className="text-3xl min-w-fit">{exp.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-950 mb-0.5 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-purple-600 font-medium text-xs dark:text-purple-300">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground pb-3 border-b border-border">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed text-xs dark:text-slate-300">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="px-2 py-0.5 text-xs text-foreground bg-muted/70 border border-border hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Learn More Link */}
                <button className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors group/btn pt-2">
                  View Details
                  <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-end gap-4 mt-12">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted/80 text-foreground hover:bg-accent/10 hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground border border-primary"
                      : "border border-border bg-muted/80 text-foreground hover:bg-accent/10 hover:text-foreground"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted/80 text-foreground hover:bg-accent/10 hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
