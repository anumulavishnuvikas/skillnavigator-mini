
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Hero: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="bg-gradient-to-b from-accent to-background py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Perfect Job Match with <span className="text-transparent bg-clip-text bg-hero-gradient">SkillSeeker</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700">
              Enter your skills and discover companies and jobs that are looking for professionals just like you. Fast, simple, and effective job matching.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {user ? (
                <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90">
                  <Link to="/search">Search Jobs</Link>
                </Button>
              ) : (
                <>
                  <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90">
                    <Link to="/auth">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/auth?mode=signin">Sign In</Link>
                  </Button>
                </>
              )}
            </div>
            
            <div className="mt-12">
              <p className="text-sm text-gray-600 mb-4">Trusted by professionals from leading companies</p>
              <div className="flex flex-wrap gap-8 items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/5969/5969170.png" alt="Google" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
                <img src="https://cdn-icons-png.flaticon.com/512/5969/5969242.png" alt="Microsoft" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
                <img src="https://cdn-icons-png.flaticon.com/512/5969/5969083.png" alt="Amazon" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
                <img src="https://cdn-icons-png.flaticon.com/512/5969/5969098.png" alt="Apple" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
                <img src="https://cdn-icons-png.flaticon.com/512/5969/5969152.png" alt="Facebook" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Right Content - Video Demo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm">
            <video 
              className="w-full h-full rounded-2xl"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://cdn.dribbble.com/uploads/47181/original/963b4f8739cbdf86ca3f5a9a4321d469.mp4?1686834502" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
