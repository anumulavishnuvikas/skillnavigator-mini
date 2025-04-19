
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-hero-gradient p-2 rounded-md">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">SkillSeeker</span>
        </Link>
        <div className="flex space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/companies">Companies</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/jobs">Jobs</Link>
          </Button>
        </div>
        <div>
          <Button asChild className="bg-hero-gradient hover:opacity-90">
            <Link to="/search">Find Jobs</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
