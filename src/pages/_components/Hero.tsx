import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  BarChart3,
  Bird,
  Code2,
  Cpu,
  CreditCard,
  Database,
  Download,
  Droplet,
  FileJson,
  Github,
  HardDrive,
  Key,
  Linkedin,
  Lock,
  LogIn,
  Mail,
  Palette,
  RatIcon,
  Server,
  Shield,
  Sparkles,
  Unlock,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function Hero() {
  const words = [
    "Full-Stack Developer",
    "Next.js & React Expert",
    "Secure Backend Architect",
    "Mern-Stack Developer",
    "Pern-Stack Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
    {
      name: "JavaScript (ES6+)",
      icon: "https://skillicons.dev/icons?i=javascript",
    },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "D3.js", icon: "https://skillicons.dev/icons?i=d3" },
    { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
    { name: "Nest.js", icon: "https://skillicons.dev/icons?i=nest" },
    { name: "Prisma ORM", icon: "https://skillicons.dev/icons?i=prisma" },
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
    {
      name: "Better-Auth",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAPFBMVEX///8AAADQ0NDX19eKioqqqqogICDw8PDm5uaioqJlZWX7+/spKSnz8/OVlZXHx8cICAgQEBBfX1/BwcFeiOahAAAAv0lEQVR4nO3aWw6CMBBAUajKQwRF979XN8CMxIAk5pz/mdx+tmlVAQAAAABspzsFypBMDSUaS4yro85zs6xus6PUwVRiLuuj6kge9QVRokSJEiVKlChRokSJ+klUdk07LGrqY1MkXrdNVKaJ1g0HRt2idaMoUaJEiRIlSpQoUaJEifqHqMMuo89rotyXvXaOaodQ1dWPwN5RyZT3KVGiRIkSJUqUKFGiRIlaUC6BPvvQPPbRWKJbHQUAAAAA8NkbjQ4p2sg5NPsAAAAASUVORK5CYII=",
    },
    {
      name: "JWT",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Auth0",
      icon: "data:image/png;base64,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",
    },
    { name: "Firebase Auth", icon: "https://skillicons.dev/icons?i=firebase" },
    {
      name: "Bcrypt",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEVsXOf///9qWueFeOtiUObV0fd3aelnVuZkUuZmVeZgTuZpWefDvvRkU+aSiOzg3fqIfOvp5/uqovDn5ft0Zej49/6PhOyime+/ufS4sfKXje319P3Mx/bc2fl7bemck+7u7fxcSOWxqvGNgeynn/CAc+rIw/VwYOi7tPOvp/HX1PjPy/Z9cOmake7loPXUAAAG4ElEQVR4nO2da3fqKhBAAbExYDQ+YnxVU2tr1fb//70LxNZaH/ecU0YGFvtr05a9mEASmIHQWxSP4/5HvhgSnAwX+XLb3s1uOpDrP9r1F1xkiWTMtclVmEySjPNF//HvDbslFyletVNYKtJ1768Mmw2R+KJXoyTz5h8b7hdCum7xPyDFS/ePDKvcSz+NFJ3zUefM8M1bP03Cx/9jWOTCdSN/BxOdm4YDkrhu4q9Jh9V1w73wawC9jOSP1wxfgxDUkbq/bPj65Lpp1niaXzJsej7GnCCa54aDQEK0honeT8OChCSohptN8cMw93+aOCUdnRqOQ7oJa0T7u2HFw4pRDWvNvhk+hxajmmR6NHwML0Y1ovtl+OLz68R1ZOPTcBdmFx46URs2wuxCdSd2asNBqF1ICK+MYT913RAwsokxRPw99LewB23YDTdI1VhTKcNVuEGqwnSsDAOdDGvkiJIiC/c2VDfihpKA5wqNqMi85boRoPAdCXqgUUNNm5QhvjgdSbdkFPJQqh5NS9IIeShV08U0eMPn0A1ZIxr6TjT0n2joP9HQf6Kh/0RD/4mG/hMN/Sca+k809J9o6D/R0H+iof9Ew1///Z8A/q8rLYA1lDI5JU0zLgTPkrstWsIa8rOEwKKYVb3u/G3ZaInWXTIc7234jd5rORTwO10cGpocj9UGOhfwDobd7wx6VVGcSO6eYR3vYEjED1Ly3tnOj3nJ3RfIbJ07GD6c/X0mk1SNqPlkcHCcAw6tTgwPyEwMJ3XIzhYZVBtcGup/n4myTvvoQO09c2yoSPlbrQjUi+4NCeONAjBtB4EhIQkxqckw6YEoDNXj6wwsrwWHIUnedSeOIOIUiSHhK3VlBdGJWAzJk47TZ4CJH41hulaX7rn9NqAxZFK/PQJM+2gMidipa3P7YYrHMN2qa7f2d9XjMZS5uvbVfpjiMWQ61RMgHxmPIeEUJNcTk6F6/u4FbwjwVIPJMPQoZWnoI42pDgDw2IbHMNEPpgB5dHgMua7s1An5qU0PpVTabwsaw+QDZqDBY/ikv/JDFHfAYpiV5vUQoClIDM1jN11BfBTGYci4jtEKogtxGEpuqh3BVMnBYJhtzFriCuAzFMFgKMXarMy0gUo7uDZkojEAFXRt2NocCo2WYMU5nBomYnLYkgG3BOx2lbs87MroCsCtCg4N2cux2u98CFa30WUfMp6uv2qozxlQiRW3Iw1LxcPkUJq6KGFC1fVsoXdjjHaHbgSJVOeGRM/5D/Wc0YPYOITBUM/7IxOrFcCBGjgM1dT4ZLYxDuwHKhZD1Y3mTINX6882aAw/y6hb34+ByLAup1rZfofCZMiY7sSl5U7EZEgyvanG9gIbKkMiCvsfM3AZtnQV9Te7b1K4DOW7/TDFZagrxlK6sdogZIbmF+zeiMgMzWi6tjpfIDNMluoXJlaHGmyGU+uDKTJDs/WrbXXrFzbDhvXNbdgM9dkw45Cj1NyHQY80ad/6Wjcyw5Z+C7a7URiZoRgE/tTGNqE/eZvb0O5QiszQnAYX8huwOfemsnwIIypD04W2i+BjMjQrwrOAvyZm5pTbTrhfhDNzgtg82K/6TJhz7nqhrsywtF6XKTZh7hFmWWttdmXMhiGukLJEbA6FFXoEYuueU0MmM7EpP/ectL3dqTBM5QlfxZRam9HbZ+0P2oM60/0Ohh+dH0w/luvVeN+dfW0YorMSrEiN4xpDNd2pgDuvyL3h43oI6AduuLvlVgzm21wIgB0m34E1TPrtC4wnq+1y9DLMBE/hy7YBV6RLWhfIsixNJEAC0EVi3UT/iYb+Ew39Jxr6TzT0n2joP9HQf6Kh/0RD/4mG/hMN/Sca+k809J9o6D/R0H+iof8oQ4Aa2piQORkFbjgittPDkZGUpB+4YZ9Y3v2PjWxMmjC17rDAmwSgSjgmREUgStvigRFKIA6VwIMcKUO7GY3IyMbKEKDUOx5ETxlaTvhDBRtSbRhwmGYTYwhykhQOeGUMYY4Dw4DJ99OG3VA70RTXMpW0YcowO8cUoagNA+1EkxpeG9JpiHdiuqRHwwL++Oi7w5LimyFctWl3iEOd6YMh1EGn7sim9NQQIrvRJXJIfxjSHuTp2HeH8erMEOgsV0eIYyntoyGdWy5n4JCnPb1kSOeBBCoTc3rZkDaDUGTiJCvwxJAOpP+TRiIH9LohLXLPu5GJvKC3DCkdc5+7MeHtn0JnhrTKwdKOoZHieXbmc26oZsaFl45SvD9esLlkSOn+BTT9GACWiMb+ostlQzWqloInvgw6So+Xgysm1wwVzfKBiyyRDK8okzLJBH9Y38gav2GoKLrt/jRfbFybXGG4yD/67W5x0+E/+oVS0k+vyaUAAAAASUVORK5CYII=",
    },
    {
      name: "SSLCommerz",
      icon: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div>
      <section
        id="hero"
        className="min-h-screen text-foreground font-sans px-6 py-20 flex items-center justify-center relative overflow-hidden selection:bg-purple-500/30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.12),_transparent_20%)]" />
        <div className="absolute top-16 right-16 w-44 h-44 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 left-16 w-28 h-28 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-6xl w-full grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/10 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
              Hello! I am{" "}
              <span className="text-slate-950 font-semibold dark:text-white">
                Maksudur Rahaman
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="text-sm tracking-widest uppercase text-gray-400 border-b border-white/10 pb-2 inline-block">
                  <div className=" overflow-hidden w-full">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className=" font-mono"
                      >
                        {words[index]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>

                <h1 className="text-5xl md:text-4xl font-semibold leading-tight tracking-tight">
                  I build secure, scalable web applications with modern frontend
                  and backend architecture.
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed dark:text-gray-300">
                  I deliver production-ready apps using Next.js, Nest.js,
                  Prisma, PostgreSQL, and Tailwind CSS, with a strong focus on
                  RBAC, performance, and AI-enabled workflows.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                      title={skill.name}
                    >
                      <img
                        className="w-12 h-12 rounded-lg object-contain transition-transform group-hover:scale-110"
                        src={skill.icon}
                        alt={skill.name}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  size="lg"
                  className="px-8 py-3 text-base font-medium"
                  onClick={scrollToContact}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
                <a
                  href="../../../public/maksudur-rahaman.pdf" 
                  download="Maksudur_Rahaman_CV.pdf" 
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-base font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl" />
            <div className=" hidden lg:block relative overflow-hidden rounded-[2rem] border border-border  shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="relative h-[540px] w-full ">
                <img
                  src="https://i.ibb.co.com/k2JR21GB/your-image-name-removebg-preview.png"
                  alt="Maksudur Rahaman"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-6 py-6 backdrop-blur-sm">
                  <div className="space-y-1 text-white">
                    <div className="text-sm uppercase tracking-[0.3em] text-slate-200/80">
                      <div className=" overflow-hidden w-full">
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className=" font-mono"
                          >
                            {words[index]}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold">Maksudur Rahaman</h3>
                    <p className="text-sm text-slate-200/80">
                      Next.js · Prisma · Secure Backend
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a
                href="https://www.linkedin.com/in/maksudur-rahaman"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-3 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/50 hover:bg-primary/10"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Maksudur7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-3 text-sm font-medium text-foreground shadow-sm transition hover:border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:maksudurrahamanmishu7@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-3 text-sm font-medium text-foreground shadow-sm transition hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800"
              >
                <Mail className="h-4 w-4 text-emerald-500" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-8 bottom-8 flex items-center gap-3 text-sm text-gray-400">
          <span className="block h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          Scroll to explore more
        </div>
      </section>
    </div>
  );
}
