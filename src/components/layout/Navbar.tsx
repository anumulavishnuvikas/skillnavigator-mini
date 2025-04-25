
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Success",
        description: "You have been signed out successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-hero-gradient p-2 rounded-md">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">SkillNaviagtor</span>
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

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Button variant="ghost" asChild>
                <Link to="/search">Search Jobs</Link>
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="flex items-center"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild className="flex items-center">
                <Link to="/auth">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              </Button>
              <Button asChild className="bg-hero-gradient hover:opacity-90">
                <Link to="/auth">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
