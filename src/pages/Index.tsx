
import React from "react";
import { useData } from "@/context/DataContext";
import Hero from "@/components/sections/hero";
import CompanyCard from "@/components/ui/company-card";
import JobCard from "@/components/ui/job-card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  const { companies, jobs } = useData();
  
  // Get featured companies (first 3)
  const featuredCompanies = companies.slice(0, 3);
  
  // Get latest jobs (first 4)
  const latestJobs = [...jobs].sort((a, b) => 
    new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
  ).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="container-custom py-20">
        {/* Featured Companies Section */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Companies</h2>
              <p className="text-muted-foreground">Discover top companies hiring right now</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/companies" className="flex items-center">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
        
        {/* Latest Jobs Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Jobs</h2>
              <p className="text-muted-foreground">Fresh opportunities added daily</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/jobs" className="flex items-center">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-accent py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your dream job?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enter your skills and discover companies and jobs that match your expertise. Start your job search journey today.
          </p>
          <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90">
            <Link to="/search">Search Jobs Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
