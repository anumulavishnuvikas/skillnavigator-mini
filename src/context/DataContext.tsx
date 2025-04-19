
import React, { createContext, useContext, useState } from "react";
import { Company, Job, Skill } from "@/types";
import { 
  getAllCompanies, 
  getAllJobs, 
  getAllSkills, 
  getCompaniesBySkills, 
  getJobsBySkills 
} from "@/data/mockData";

interface DataContextType {
  skills: Skill[];
  companies: Company[];
  jobs: Job[];
  filteredCompanies: Company[];
  filteredJobs: Job[];
  selectedSkills: string[];
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  clearSkills: () => void;
  searchJobsBySkills: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(getAllCompanies());
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(getAllJobs());

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  const clearSkills = () => {
    setSelectedSkills([]);
    setFilteredCompanies(getAllCompanies());
    setFilteredJobs(getAllJobs());
  };

  const searchJobsBySkills = () => {
    if (selectedSkills.length === 0) {
      setFilteredCompanies(getAllCompanies());
      setFilteredJobs(getAllJobs());
    } else {
      const companies = getCompaniesBySkills(selectedSkills);
      const jobs = getJobsBySkills(selectedSkills);
      setFilteredCompanies(companies);
      setFilteredJobs(jobs);
    }
  };

  const value = {
    skills: getAllSkills(),
    companies: getAllCompanies(),
    jobs: getAllJobs(),
    filteredCompanies,
    filteredJobs,
    selectedSkills,
    addSkill,
    removeSkill,
    clearSkills,
    searchJobsBySkills,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
