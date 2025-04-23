
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LinkedIn, Twitter, Mail } from "lucide-react";

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
  }
];

const FoundersSection: React.FC = () => {
  return (
    <section className="bg-accent py-20">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-4">Meet Our Founders</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Bringing together decades of experience in tech and recruitment to revolutionize how people find their dream jobs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <Card key={founder.name} className="bg-white">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={founder.image} alt={founder.name} />
                    <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                  <p className="text-muted-foreground">{founder.role}</p>
                </div>
                
                <p className="text-gray-600 text-center mb-6">{founder.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <LinkedIn className="w-5 h-5" />
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
