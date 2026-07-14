import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Mail, MapPin, Phone, Clock, Send, MessageSquare, Loader2 } from "lucide-react";

const CMS_URL = import.meta.env.VITE_CMS_URL || "";

const fetchContactFromCMS = async () => {
  const response = await fetch(`${CMS_URL}/api/globals/contact`);
  if (!response.ok) throw new Error("Failed to fetch contact data");
  return response.json();
};

export default function Contact() {
  const { data: contactData, isLoading } = useQuery({
    queryKey: ["contact"],
    queryFn: fetchContactFromCMS,
    staleTime: 1000 * 60 * 5,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    try {
      const result = await emailjs.sendForm(
        "service_vda5frn",
        "template_k90nwb7",
        form,
        "DzjufpvFNv2KyKloe"
      );
      console.log("Email sent!", result.text);

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you, I will get back to you soon.",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      form.reset(); 
    } catch (error: any) {
      console.error("Error:", error.text || error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Message pathano jayna. Console check koro!",
      });
    }
  };

  const getLucideIcon = (name: string) => {
    switch (name) {
      case 'Mail': return Mail;
      case 'Phone': return Phone;
      case 'MessageSquare': return MessageSquare;
      case 'Clock': return Clock;
      case 'MapPin': return MapPin;
      default: return Mail;
    }
  };

  if (isLoading) {
    return (
      <section id="contact" className="py-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </section>
    );
  }

  const contactInfo = contactData?.contactInfo || [
    { iconName: 'Mail', title: "Email", value: "maksudurrahamanmishu7@gmail.com", description: "Best way to reach me", colorClass: "text-chart-1" },
    { iconName: 'Phone', title: "Phone", value: "+8801880829496", description: "Available during business hours", colorClass: "text-chart-2" },
    { iconName: 'MessageSquare', title: "Whats App", value: "8801315906086", description: "Available during business hours", colorClass: "text-chart-3" },
    { iconName: 'Clock', title: "Response Time", value: "Within 24 hours", description: "Usually much faster", colorClass: "text-chart-4" }
  ];

  return (
    <section id="contact" className="py-10 px-4 text-foreground relative overflow-hidden -mt-[1px]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none z-20" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">{contactData?.badgeText || "Let's Connect"}</Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">{contactData?.title || "Get In Touch"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contactData?.subtitle || "Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">{contactData?.conversationTitle || "Let's Start a Conversation"}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {contactData?.conversationText || "I'm always excited to work on new projects and meet interesting people. Whether you have a specific project in mind or just want to say hello, don't hesitate to reach out."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info: any, index: number) => {
                const Icon = getLucideIcon(info.iconName);
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary bg-card">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors ${info.colorClass}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1 flex-1 text-foreground">
                          <h4 className="font-semibold text-sm">{info.title}</h4>
                          <p className="font-medium text-sm text-foreground break-all whitespace-normal">{info.value}</p>
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border shadow-sm">
              <CardContent className="p-6 text-center space-y-4">
                <MessageSquare className="w-12 h-12 mx-auto text-primary" />
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Prefer a Quick Chat?</h4>
                  <p className="text-sm text-muted-foreground">Schedule a 15-minute call to discuss your project</p>
                </div>
                <Button variant="outline" className="w-full">Schedule a Call</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-2xl border-2 border-border bg-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{contactData?.formHeading || "Send Me a Message"}</h3>
                  <p className="text-muted-foreground">
                    {contactData?.formSubheading || "Fill out the form below and I'll get back to you as soon as possible"}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="user_name" placeholder="John" className="h-12" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="to_name" placeholder="Doe" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="user_email" type="email" placeholder="john@example.com" className="h-12" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Let's work together" className="h-12" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell me about your project, goals, and timeline..." className="min-h-[150px] resize-none" required />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 text-base">
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
