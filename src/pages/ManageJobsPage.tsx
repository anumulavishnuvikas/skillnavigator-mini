
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { PlusCircle, Edit, Trash2, Eye } from "lucide-react";

const ManageJobsPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [jobToDelete, setJobToDelete] = useState<string | null>(null);

  // Fetch jobs posted by the current recruiter
  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ["recruiter-jobs", user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from("jobs")
        .select(`
          *,
          companies (
            id,
            name,
            logo
          )
        `)
        .order("posted_date", { ascending: false });
      
      if (error) {
        console.error("Error fetching jobs:", error);
        toast({
          title: "Error",
          description: "Failed to load your job listings",
          variant: "destructive",
        });
        return [];
      }
      
      return data || [];
    },
    enabled: !!user,
  });

  // Delete job mutation
  const deleteJobMutation = useMutation({
    mutationFn: async (jobId: string) => {
      const { error } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId);
      
      if (error) {
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recruiter-jobs"] });
      toast({
        title: "Success",
        description: "Job listing deleted successfully",
      });
      setJobToDelete(null);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete job listing",
        variant: "destructive",
      });
    },
  });

  const handleDeleteJob = (jobId: string) => {
    setJobToDelete(jobId);
  };

  const confirmDelete = () => {
    if (jobToDelete) {
      deleteJobMutation.mutate(jobToDelete);
    }
  };

  return (
    <div className="container-custom py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Manage Job Listings</h1>
          <p className="text-muted-foreground">
            Create, edit and manage all your job postings
          </p>
        </div>
        <Button asChild className="bg-hero-gradient hover:opacity-90">
          <Link to="/post-job" className="flex items-center">
            <PlusCircle className="mr-2 h-4 w-4" /> Post New Job
          </Link>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <p>Loading your job listings...</p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-12 bg-muted/50 rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-2">No Job Listings Yet</h3>
          <p className="text-muted-foreground mb-6">
            You haven't posted any jobs yet. Create your first job listing to get started.
          </p>
          <Button asChild className="bg-hero-gradient hover:opacity-90">
            <Link to="/post-job" className="flex items-center">
              <PlusCircle className="mr-2 h-4 w-4" /> Post Your First Job
            </Link>
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Posted Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.companies?.name || "N/A"}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>
                    {new Date(job.posted_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/jobs/${job.id}`)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/edit-job/${job.id}`)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!jobToDelete} onOpenChange={() => setJobToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this job listing? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete} 
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ManageJobsPage;
