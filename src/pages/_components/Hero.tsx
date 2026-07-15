import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button.tsx";
import { useGlobal } from "@/lib/api.ts";

export default function Hero() {
  const { data: heroData, isLoading } = useGlobal("hero-section");
  const [index, setIndex] = useState(0);

  const words = heroData?.roles?.map((r: any) => r.role) || ["Loading..."];

  useEffect(() => {
    if (!heroData?.roles) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroData, words.length]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 rounded-full border-4 border-purple-500 border-t-transparent animate-spin" />
        </div>
      </section>
    );
  }

  const skills = heroData?.skills || [];

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
              {heroData?.helloText || "Hello! I am"}{" "}
              <span className="text-slate-950 font-semibold dark:text-white">
                {heroData?.developerName}
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
                  {heroData?.heading}
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed dark:text-gray-300">
                  {heroData?.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill: any, idx: number) => {
                  return (
                    <div
                      key={idx}
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
                {heroData?.cvUrl && (
                  <a href={heroData.cvUrl} download>
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 py-3 text-base font-medium"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl" />
            <div className=" hidden lg:block relative overflow-hidden rounded-[2rem] border border-border  shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="relative h-[540px] w-full ">
                <img
                  src={heroData?.imageLink}
                  alt={heroData?.developerName}
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
                    <h3 className="text-2xl font-semibold">
                      {heroData?.developerName}
                    </h3>
                    <p className="text-sm text-slate-200/80">
                      {heroData?.roles?.[0]?.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a
                href={heroData?.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-3 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/50 hover:bg-primary/10"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </a>
              <a
                href={heroData?.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-3 text-sm font-medium text-foreground shadow-sm transition hover:border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={`mailto:${heroData?.email}`}
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
