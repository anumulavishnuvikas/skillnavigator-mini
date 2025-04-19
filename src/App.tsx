
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "@/context/DataContext";
import { AuthProvider } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";
import SearchPage from "@/pages/SearchPage";
import JobsPage from "@/pages/JobsPage";
import CompaniesPage from "@/pages/CompaniesPage";
import CompanyDetailsPage from "@/pages/CompanyDetailsPage";
import JobDetailsPage from "@/pages/JobDetailsPage";
import AuthPage from "@/pages/AuthPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/jobs/:id" element={<JobDetailsPage />} />
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/companies/:id" element={<CompanyDetailsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </TooltipProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
