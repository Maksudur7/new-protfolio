import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button.tsx";
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail, Moon, Sun } from "lucide-react";

const CMS_URL = import.meta.env.VITE_CMS_URL || "";

const resolveImageUrl = (link: string | any): string => {
  if (!link) return "";
  if (typeof link === 'object' && link.url) {
    link = link.url;
  }
  if (link.startsWith("http://") || link.startsWith("https://") || link.startsWith("data:")) return link;
  return `${CMS_URL}${link.startsWith("/") ? "" : "/"}${link}`;
};

const fetchNavigationFromCMS = async () => {
  const response = await fetch(`${CMS_URL}/api/globals/navigation`);
  if (!response.ok) throw new Error("Failed to fetch navigation data");
  return response.json();
};

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const { data: navData } = useQuery({
    queryKey: ["navigation"],
    queryFn: fetchNavigationFromCMS,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTheme = mounted ? resolvedTheme : "light";
  const toggleTheme = () => setTheme(currentTheme === "dark" ? "light" : "dark");

  const getLucideIcon = (name: string) => {
    switch (name) {
      case 'Home': return Home;
      case 'User': return User;
      case 'Briefcase': return Briefcase;
      case 'FolderOpen': return FolderOpen;
      case 'Mail': return Mail;
      default: return Home;
    }
  };

  const navItems = navData?.navItems || [
    { id: 'hero', label: 'Home', iconName: 'Home' },
    { id: 'about', label: 'About', iconName: 'User' },
    { id: 'experience', label: 'Experience', iconName: 'Briefcase' },
    { id: 'projects', label: 'Projects', iconName: 'FolderOpen' },
    { id: 'contact', label: 'Contact', iconName: 'Mail' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold gradient-text">
              <img 
                className="h-10 w-10 object-contain rounded-full border border-border" 
                src={resolveImageUrl(navData?.logo) || "https://i.ibb.co.com/HT76bKkk/maksudur-rahaman.png"} 
                alt="Logo" 
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="hidden md:inline-flex items-center gap-2"
                onClick={toggleTheme}
              >
                {currentTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {currentTheme === "dark" ? "Light" : "Dark"}
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-card border-l border-border p-6">
            <div className="flex flex-col space-y-4 mt-16">
              {navItems.map((item: any) => {
                const Icon = getLucideIcon(item.iconName);
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-colors hover:bg-accent/10 ${
                      activeSection === item.id ? 'bg-accent/10 text-primary' : 'text-foreground'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <button
                onClick={toggleTheme}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:bg-accent/10"
              >
                {currentTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}