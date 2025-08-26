import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading frontend development initiatives and mentoring junior developers while building scalable web applications with modern React ecosystem.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    color: "bg-chart-1"
  },
  {
    title: "UI/UX Designer & Developer",
    company: "Creative Studio",
    period: "2020 - 2022",
    location: "New York, NY",
    description: "Designed and developed user interfaces for various clients, focusing on minimal and intuitive designs that enhance user experience.",
    skills: ["Figma", "React", "CSS", "Design Systems"],
    color: "bg-chart-2"
  },
  {
    title: "Full Stack Developer",
    company: "Startup Labs",
    period: "2018 - 2020",
    location: "Austin, TX",
    description: "Built complete web applications from concept to deployment, working with modern JavaScript frameworks and cloud technologies.",
    skills: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    color: "bg-chart-3"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            My Journey
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey, showcasing growth and expertise in web development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-chart-3 transform md:-translate-x-0.5" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full ${exp.color} transform md:-translate-x-2 z-10 shadow-lg`} />
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1 flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs px-2 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}