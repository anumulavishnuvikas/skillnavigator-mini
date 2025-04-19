
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-accent to-background py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Find Your Perfect Job Match with <span className="text-transparent bg-clip-text bg-hero-gradient">SkillSeeker</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
            Enter your skills and discover companies and jobs that are looking for professionals just like you. Fast, simple, and effective job matching.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90">
              <Link to="/search">Search Jobs</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/companies">Browse Companies</Link>
            </Button>
          </div>
          <div className="mt-12 text-sm text-gray-600">
            <p>Trusted by professionals from leading companies</p>
            <div className="mt-4 flex flex-wrap justify-center gap-8">
              <img src="https://cdn-icons-png.flaticon.com/512/5969/5969170.png" alt="Google" className="h-8 opacity-50" />
              <img src="https://cdn-icons-png.flaticon.com/512/5969/5969242.png" alt="Microsoft" className="h-8 opacity-50" />
              <img src="https://cdn-icons-png.flaticon.com/512/5969/5969083.png" alt="Amazon" className="h-8 opacity-50" />
              <img src="https://cdn-icons-png.flaticon.com/512/5969/5969098.png" alt="Apple" className="h-8 opacity-50" />
              <img src="https://cdn-icons-png.flaticon.com/512/5969/5969152.png" alt="Facebook" className="h-8 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
