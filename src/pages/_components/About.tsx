import { useQuery } from "@tanstack/react-query";
import {
  Code,
  Database,
  Github,
  Heart,
  Linkedin,
  Mail,
  Shield,
  Zap,
  Loader2
} from "lucide-react";

import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";

const CMS_URL = import.meta.env.VITE_CMS_URL || "";

const resolveImageUrl = (link: string | any): string => {
  if (!link) return "";
  if (typeof link === 'object' && link.url) {
    link = link.url;
  }
  if (link.startsWith("http://") || link.startsWith("https://") || link.startsWith("data:")) return link;
  return `${CMS_URL}${link.startsWith("/") ? "" : "/"}${link}`;
};

const fetchAboutFromCMS = async () => {
  const response = await fetch(`${CMS_URL}/api/globals/about`);
  if (!response.ok) throw new Error("Failed to fetch about data");
  return response.json();
};

const fetchEducationFromCMS = async () => {
  const response = await fetch(`${CMS_URL}/api/education?limit=100&sort=order`);
  if (!response.ok) throw new Error("Failed to fetch education data");
  return response.json();
};

const fetchExperienceFromCMS = async () => {
  const response = await fetch(`${CMS_URL}/api/experiences?limit=2&sort=order`);
  if (!response.ok) throw new Error("Failed to fetch experiences");
  return response.json();
};

export default function About() {
  const { data: aboutData, isLoading: aboutLoading } = useQuery({
    queryKey: ["about"],
    queryFn: fetchAboutFromCMS,
    staleTime: 1000 * 60 * 5,
  });

  const { data: educationData, isLoading: eduLoading } = useQuery({
    queryKey: ["education"],
    queryFn: fetchEducationFromCMS,
    staleTime: 1000 * 60 * 5,
  });

  const { data: experienceData, isLoading: expLoading } = useQuery({
    queryKey: ["experiences"],
    queryFn: fetchExperienceFromCMS,
    staleTime: 1000 * 60 * 5,
  });

  if (aboutLoading) {
    return (
      <section id="about" className="py-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </section>
    );
  }

  const getLucideIcon = (name: string) => {
    switch (name) {
      case 'Shield': return Shield;
      case 'Code': return Code;
      case 'Database': return Database;
      case 'Zap': return Zap;
      default: return Heart;
    }
  };

  const stats = aboutData?.stats || [
    { number: "10+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
  ];

  const features = aboutData?.features || [];
  const taglines = aboutData?.taglines || [];

  return (
    <section
      id="about"
      className="py-10 px-4 text-foreground font-sans relative overflow-hidden -mt-[1px]"
    >
      {/* Gradient blend overlay - seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none z-20" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.12),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.08),_transparent_25%)]" />
      <div className="absolute top-20 right-16 w-52 h-52 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-16 w-40 h-40 bg-sky-400/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-foreground shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              About Me
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {aboutData?.title || "Maksudur Rahaman — Full-Stack Developer"}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {aboutData?.paragraph1 || "Innovative Full-Stack Developer specializing in Next.js and scalable backend architecture."}
            </p>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-7">
              <p>
                {aboutData?.paragraph2 || "Based in Barishal, Bangladesh, I manage contractual projects from architecture through deployment."}
              </p>
              <p>
                {aboutData?.paragraph3 || "I have hands-on experience with Prisma, Better-Auth, JWT, PostgreSQL, and AI API integrations."}
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 rounded-[2rem] bg-muted/30 border border-border shadow-[0_0_120px_rgba(139,92,246,0.15)]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/95 p-6 shadow-sm">

              <div className="absolute -top-6 -right-6 hidden lg:block">
                <p className="text-xs font-mono text-muted-foreground mb-1 italic">
                  Hello! I am <span className="text-primary">Maksudur</span>
                </p>
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                  className="rotate-12"
                >
                  <path
                    d="M1 39C15.5 -5.5 54.5 4.5 58.5 12.5M58.5 12.5L50 11M58.5 12.5L59.5 21"
                    stroke="#9d4edd"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
              <div className="relative rounded-[1.5rem] overflow-hidden bg-muted p-6 shadow-sm">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-[1.5rem] animate-pulse" />

                <div className="relative flex flex-col items-center justify-center gap-6">
                  <div className="w-52 h-52 rounded-full border border-border bg-gradient-to-br from-primary/20 to-transparent p-1 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-muted">
                      <span className="text-6xl font-bold text-foreground">
                        <img 
                          src={resolveImageUrl(aboutData?.profileImage) || "https://i.ibb.co.com/HT76bKkk/maksudur-rahaman.png"} 
                          alt="Profile" 
                        />
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                      Portfolio Identity
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-foreground">
                      Design meets code.
                    </h2>
                    <div className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
                      {taglines.map((t: any, i: number) => (
                        <p key={i}>{t.text}</p>
                      ))}
                      {taglines.length === 0 && (
                        <>
                          <p>Barishal, Bangladesh · +8801880829496</p>
                          <p>Contract backend work with Better-Auth, Prisma & PostgreSQL</p>
                          <p>Experienced in Next.js App Router, Nest.js, RBAC, and AI integrations</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-border bg-muted p-5 text-foreground shadow-sm">
                <p className="text-sm">
                  I turn ideas into complete experiences — from wireframes to
                  deployment. Every project is crafted to be intuitive,
                  responsive, and memorable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-12">
          {stats.map((stat: any, index: number) => (
            <Card
              key={index}
              className="border border-border bg-card/90 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature: any, index: number) => {
            const Icon = getLucideIcon(feature.iconName);
            return (
              <Card
                key={index}
                className="group border border-border bg-card/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-0 text-left">
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-muted text-2xl text-current transition-colors ${feature.colorClass || 'text-primary'}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="border border-border bg-card/95 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Experience</h3>
              {expLoading ? (
                <div className="py-4 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" /></div>
              ) : (
                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  {experienceData?.docs?.map((exp: any, i: number) => (
                    <li key={i}>
                      <p className="font-medium">
                        {exp.title} · {exp.company}
                      </p>
                      <p>{exp.period}</p>
                      <p>{exp.description}</p>
                    </li>
                  ))}
                  {(!experienceData?.docs || experienceData.docs.length === 0) && (
                    <li>No recent experiences found.</li>
                  )}
                </ul>
              )}
            </CardContent>
          </Card>
          <Card className="border border-border bg-card/95 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Education & Training
              </h3>
              {eduLoading ? (
                <div className="py-4 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" /></div>
              ) : (
                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  {educationData?.docs?.map((edu: any, i: number) => (
                    <li key={i}>
                      <p className="font-medium">
                        {edu.degree} · {edu.institute}
                      </p>
                      <p>{edu.period}</p>
                    </li>
                  ))}
                  {(!educationData?.docs || educationData.docs.length === 0) && (
                    <li>No education data found.</li>
                  )}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
