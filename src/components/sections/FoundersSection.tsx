
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Twitter, Mail } from "lucide-react";

const founders = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image: "https://source.unsplash.com/random/400x400/?portrait&1",
    bio: "Former tech executive with 15+ years of experience in HR and recruitment. Passionate about connecting talent with opportunities.",
    linkedin: "https://linkedin.com/in/sarah-johnson",
    twitter: "https://twitter.com/sarahjohnson",
    email: "sarah@skillseeker.com"
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "https://source.unsplash.com/random/400x400/?portrait&2",
    bio: "Tech entrepreneur with multiple successful startups. Specialized in AI and machine learning applications in recruitment.",
    linkedin: "https://linkedin.com/in/michael-chen",
    twitter: "https://twitter.com/michaelchen",
    email: "michael@skillseeker.com"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Lead",
    image: "https://source.unsplash.com/random/400x400/?portrait&3",
    bio: "UX/UI expert with a decade of experience in product design. Focused on creating intuitive and accessible user experiences.",
    linkedin: "https://linkedin.com/in/emily-rodriguez",
    twitter: "https://twitter.com/emilyrodriguez",
    email: "emily@skillseeker.com"
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    image: "https://source.unsplash.com/random/400x400/?portrait&4",
    bio: "Growth strategist with expertise in digital marketing and partnerships. Previously led marketing at several Fortune 500 companies.",
    linkedin: "https://linkedin.com/in/david-kim",
    twitter: "https://twitter.com/davidkim",
    email: "david@skillseeker.com"
  }
];

const FoundersSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent to-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Meet Our Founders
          </h2>
          <p className="text-muted-foreground text-lg">
            Bringing together decades of experience in tech and recruitment to revolutionize how people find their dream jobs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder) => (
            <Card key={founder.name} className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="w-20 h-20 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <AvatarImage src={founder.image} alt={founder.name} className="object-cover" />
                      <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">{founder.name}</h3>
                      <p className="text-muted-foreground">{founder.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {founder.bio}
                  </p>
                  
                  <div className="flex gap-4 pt-2">
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={founder.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${founder.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;

