import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Code, Palette, Zap, Heart } from "lucide-react";

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
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "30+", label: "Happy Clients" },
  { number: "24/7", label: "Support Available" }
];

const features: Feature[] = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
    color: "text-chart-1"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user experiences",
    color: "text-chart-2"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality",
    color: "text-chart-3"
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Dedicated to delivering exceptional results",
    color: "text-chart-4"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                About Me
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight">
                Crafting Digital Excellence
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                I'm a passionate full-stack developer and UI/UX designer with a love for 
                creating digital experiences that not only look stunning but also solve 
                real-world problems. My journey in tech spans over 3 years, during which 
                I've helped businesses transform their ideas into powerful digital solutions.
              </p>
              <p>
                From responsive web applications to complex backend systems, I believe in 
                writing clean, maintainable code while never compromising on user experience. 
                Every project is an opportunity to learn something new and push the boundaries 
                of what's possible.
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Technologies I Love</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Figma", "Tailwind CSS"].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-chart-2 rounded-xl flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                  MR
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-chart-3/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-chart-4/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors ${feature.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}