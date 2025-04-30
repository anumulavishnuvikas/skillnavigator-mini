
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import JobPostForm from "@/components/forms/JobPostForm";
import { useToast } from "@/components/ui/use-toast";

const PostJobPage = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user is logged in and is a recruiter
    if (user && profile && profile.role !== 'recruiter' && profile.role !== 'admin') {
      toast({
        title: "Access Denied",
        description: "Only recruiters can post job listings.",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [user, profile, navigate, toast]);

  // Show nothing until profile is loaded
  if (!profile) return null;
  
  // Only render content if user is a recruiter or admin
  if (profile.role !== 'recruiter' && profile.role !== 'admin') return null;

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-2">Post a New Job</h1>
      <p className="text-muted-foreground mb-8">
        Fill out the form below to add a new job listing
      </p>
      
      <JobPostForm />
    </div>
  );
};

export default PostJobPage;
