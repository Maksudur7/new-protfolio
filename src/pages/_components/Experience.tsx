interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading frontend development initiatives and mentoring junior developers while building scalable web applications."
  },
  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    period: "2020 - 2022",
    description: "Designed user interfaces and experiences for various clients, focusing on minimal and intuitive designs."
  },
  {
    title: "Full Stack Developer",
    company: "Startup Labs",
    period: "2018 - 2020",
    description: "Built complete web applications from concept to deployment, working with modern JavaScript frameworks."
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-muted pl-6 pb-8">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-medium">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-muted-foreground font-medium">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}