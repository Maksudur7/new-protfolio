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
    title: "MERN Stack Developer",
    company: "Airpro Private Solution Ltd.",
    period: "6 months",
    location: "India",
    description: "Developed full-stack web applications using MERN Stack (MySql, Express.js, React.js, Node.js) . Implemented responsive UI/UX with Tailwind CSS & DaisyUI",
    skills: ["React", "Node.js", "Express.js", "MySql", "Daisy UI"],
    color: "bg-chart-1"
  },
  {
    title: "programming Hero Corse Intern",
    company: "Programming Hero",
    period: "2 months",
    location: "Online",
    description: "Completed Level-1 course and built practical web projects . Gained hands-on experience in frontend & backend development . Focused on creating clean, functional, and scalable code",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express.js"],
    color: "bg-chart-2"
  },
  {
    title: "Student Hub (Recent Project)",
    company: "P-Hero Context",
    period: "10 days",
    location: "Online",
    description: "Developed Student Hub, a web platform for students . Added features for user authentication, content management, and feedback system . Designed intuitive UI/UX for seamless user experience",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framworks"],
    color: "bg-chart-3"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            My Journey
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey, showcasing growth and expertise in web development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400 transform -translate-x-1/2" />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-5 h-5 rounded-full border-4 border-white shadow-md bg-primary" />
                </div>

                {/* Connector line */}
                <div
                  className={`hidden md:block absolute top-1/2 w-1/8 h-0.5 bg-gray-300 z-10 ${index % 2 === 0 ? "right-1/2" : "left-1/2"
                    }`}
                />

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 mt-10 md:mt-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200">
                    <CardContent className="p-6 space-y-4">
                      {/* Title & Company */}
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>

                      {/* Time & Location */}
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

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs px-2 py-1"
                          >
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