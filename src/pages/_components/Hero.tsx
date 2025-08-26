import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            Maksudur Rahaman
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Designer & Developer
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with clean code and thoughtful design
        </p>
        
        <Button 
          variant="ghost" 
          onClick={scrollToAbout}
          className="rounded-full p-3 hover:bg-muted/50"
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}