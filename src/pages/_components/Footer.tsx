import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-foreground border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-start">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Final Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Ready to build a polished digital experience together?
            </h2>
            <p className="max-w-2xl text-muted-foreground leading-relaxed">
              I create modern web products with clean UX, fast performance, and a refined dark + white visual system. Let’s turn your idea into a memorable website.
            </p>
          </div>

          <div className="space-y-4 border border-border rounded-3xl bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 text-foreground">
              <Mail className="w-5 h-5" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">maksudurrahamanmishu7@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Github className="w-5 h-5" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">GitHub</p>
                <a href="https://github.com/Maksudur7" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-accent transition-colors">
                  github.com/Maksudur7
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Linkedin className="w-5 h-5" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</p>
                <a href="https://www.linkedin.com/in/maksudur-rahaman" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-accent transition-colors">
                  linkedin.com/in/maksudur-rahaman
                </a>
              </div>
            </div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-3 text-sm font-medium text-foreground transition hover:bg-accent/20"
            >
              Back to top
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Maksudur Rahaman. Designed with a polished dark + white theme.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
