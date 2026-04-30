import {
  Code,
  Database,
  Github,
  Heart,
  Linkedin,
  Mail,
  Shield,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";

interface Stat {
  number: string;
  label: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const stats: Stat[] = [
  { number: "10+", label: "Projects Completed" },
  { number: "1+", label: "Years Experience" },
  { number: "1+", label: "Contract Projects" },
  { number: "3+", label: "AI & Real-Time Systems" },
];

const features: Feature[] = [
  {
    icon: Shield,
    title: "Security-First Architecture",
    description:
      "Building RBAC, JWT, and Better-Auth solutions for secure, production-ready systems.",
    color: "text-red-500",
  },
  {
    icon: Code,
    title: "Next.js & React Expertise",
    description:
      "Developing polished interfaces with Next.js App Router, React, and Tailwind CSS.",
    color: "text-slate-900",
  },
  {
    icon: Database,
    title: "Prisma & PostgreSQL",
    description:
      "Designing scalable schemas and optimized queries for reliable backend performance.",
    color: "text-sky-500",
  },
  {
    icon: Zap,
    title: "AI & Real-Time Integrations",
    description:
      "Connecting OpenAI, Socket.io, and automation for smarter user experiences.",
    color: "text-purple-500",
  },
];

export default function About() {
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
              Maksudur Rahaman — Full-Stack Developer
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Innovative Full-Stack Developer specializing in Next.js and
              scalable backend architecture. I build secure, role-based systems
              and high-performance web applications with a focus on maintainable
              code, strong data integrity, and real-world product delivery.
            </p>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-7">
              <p>
                Based in Barishal, Bangladesh, I manage contractual projects
                from architecture through deployment. My process combines clean
                frontend design, efficient backend workflows, and secure
                authentication, so teams can move faster without compromising
                reliability.
              </p>
              <p>
                I have hands-on experience with Prisma, Better-Auth, JWT,
                PostgreSQL, and AI API integrations, and I enjoy building
                systems that scale while staying easy to maintain.
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

                        <img src="https://i.ibb.co.com/HT76bKkk/maksudur-rahaman.png" alt="" />
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

                      <p>Barishal, Bangladesh · +8801880829496</p>
                      <p>
                        Contract backend work with Better-Auth, Prisma &
                        PostgreSQL
                      </p>
                      <p>
                        Experienced in Next.js App Router, Nest.js, RBAC, and AI
                        integrations
                      </p>
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
          {stats.map((stat, index) => (
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group border border-border bg-card/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-0 text-left">
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-muted text-2xl text-current transition-colors ${feature.color}`}
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
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <p className="font-medium">
                    Backend Developer (Contractual) · Gurdia-Auth Project
                  </p>
                  <p>Oct 2024 – Present</p>
                  <p>
                    Designed Better-Auth integration and RBAC middleware for
                    secure role management.
                  </p>
                </li>
                <li>
                  <p className="font-medium">
                    Frontend Developer Intern · Airepro Solution Pvt Ltd
                  </p>
                  <p>Apr 2024 – Aug 2024</p>
                  <p>
                    Built responsive UI components, optimized API logic, and
                    collaborated via GitHub Flow.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-border bg-card/95 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Education & Training
              </h3>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <p className="font-medium">
                    B.Sc. in CSE · Uttara University
                  </p>
                  <p>2026 – 2029 (Ongoing)</p>
                </li>
                <li>
                  <p className="font-medium">
                    Diploma in Computer Technology · Barisal Polytechnic
                    Institute
                  </p>
                  <p>2021 – 2025</p>
                </li>
                <li>
                  <p className="font-medium">
                    Programming Hero · Full-Stack Web Development
                  </p>
                  <p>2023 – 2024</p>
                </li>
                <li>
                  <p className="font-medium">
                    Sheikh Kamal IT Training · Professional Web Development
                  </p>
                  <p>2022 – 2023</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
