
import { Company, Job, Skill } from "@/types";

// Mock skills data
export const skills: Skill[] = [
  { id: "1", name: "JavaScript" },
  { id: "2", name: "React" },
  { id: "3", name: "TypeScript" },
  { id: "4", name: "Node.js" },
  { id: "5", name: "HTML/CSS" },
  { id: "6", name: "Python" },
  { id: "7", name: "Java" },
  { id: "8", name: "SQL" },
  { id: "9", name: "MongoDB" },
  { id: "10", name: "AWS" },
  { id: "11", name: "Docker" },
  { id: "12", name: "Git" },
  { id: "13", name: "Redux" },
  { id: "14", name: "GraphQL" },
  { id: "15", name: "REST API" },
];

// Mock jobs data
export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    companyId: "1",
    location: "New York, NY",
    type: "Full-time",
    experience: "Mid-level",
    description: "Looking for a talented Frontend Developer to join our team and help build amazing user interfaces for our products.",
    skills: [skills[0], skills[1], skills[2], skills[4]],
    salary: "$90,000 - $120,000",
    postedDate: "2023-04-15",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "TechCorp",
    companyId: "1",
    location: "New York, NY",
    type: "Full-time",
    experience: "Senior",
    description: "Join our backend team to develop scalable and efficient server-side applications.",
    skills: [skills[3], skills[5], skills[8], skills[9]],
    salary: "$110,000 - $140,000",
    postedDate: "2023-04-10",
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "InnovateSoft",
    companyId: "2",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "Senior",
    description: "Looking for a full stack developer who can work on both frontend and backend technologies.",
    skills: [skills[0], skills[1], skills[3], skills[7], skills[8]],
    salary: "$120,000 - $150,000",
    postedDate: "2023-04-05",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudNine",
    companyId: "3",
    location: "Remote",
    type: "Full-time",
    experience: "Mid-level",
    description: "Join our DevOps team to build and maintain our cloud infrastructure and deployment pipelines.",
    skills: [skills[9], skills[10], skills[11], skills[3]],
    salary: "$100,000 - $130,000",
    postedDate: "2023-04-12",
  },
  {
    id: "5",
    title: "Mobile Developer",
    company: "AppWorks",
    companyId: "4",
    location: "Austin, TX",
    type: "Full-time",
    experience: "Mid-level",
    description: "Develop mobile applications using React Native for both iOS and Android platforms.",
    skills: [skills[0], skills[1], skills[2]],
    salary: "$95,000 - $125,000",
    postedDate: "2023-04-08",
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "DataDriven",
    companyId: "5",
    location: "Boston, MA",
    type: "Full-time",
    experience: "Senior",
    description: "Apply machine learning and statistical techniques to derive insights from large datasets.",
    skills: [skills[5], skills[7]],
    salary: "$130,000 - $160,000",
    postedDate: "2023-04-03",
  },
  {
    id: "7",
    title: "UI/UX Designer",
    company: "DesignHub",
    companyId: "6",
    location: "Seattle, WA",
    type: "Full-time",
    experience: "Mid-level",
    description: "Create user-centered designs and experiences for our digital products.",
    skills: [skills[4]],
    salary: "$85,000 - $110,000",
    postedDate: "2023-04-18",
  },
  {
    id: "8",
    title: "QA Engineer",
    company: "QualityTech",
    companyId: "7",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "Entry-level",
    description: "Test and ensure the quality of our software products through manual and automated testing.",
    skills: [skills[0], skills[11], skills[6]],
    salary: "$70,000 - $90,000",
    postedDate: "2023-04-20",
  },
];

// Mock companies data
export const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: "https://cdn-icons-png.flaticon.com/512/2537/2537338.png",
    description: "Leading technology company specializing in software development and cloud services.",
    industry: "Technology",
    location: "New York, NY",
    website: "https://www.techcorp.com",
    jobs: jobs.filter(job => job.companyId === "1"),
  },
  {
    id: "2",
    name: "InnovateSoft",
    logo: "https://cdn-icons-png.flaticon.com/512/2537/2537432.png",
    description: "Innovative software development company focused on creating cutting-edge applications.",
    industry: "Software",
    location: "San Francisco, CA",
    website: "https://www.innovatesoft.com",
    jobs: jobs.filter(job => job.companyId === "2"),
  },
  {
    id: "3",
    name: "CloudNine",
    logo: "https://cdn-icons-png.flaticon.com/512/2537/2537415.png",
    description: "Cloud infrastructure provider helping businesses scale their operations.",
    industry: "Cloud Computing",
    location: "Remote",
    website: "https://www.cloudnine.com",
    jobs: jobs.filter(job => job.companyId === "3"),
  },
  {
    id: "4",
    name: "AppWorks",
    logo: "https://cdn-icons-png.flaticon.com/512/2537/2537378.png",
    description: "Mobile app development studio creating innovative solutions for businesses.",
    industry: "Mobile Development",
    location: "Austin, TX",
    website: "https://www.appworks.com",
    jobs: jobs.filter(job => job.companyId === "4"),
  },
  {
    id: "5",
    name: "DataDriven",
    logo: "https://cdn-icons-png.flaticon.com/512/2537/2537382.png",
    description: "Data analytics company helping businesses make informed decisions through data.",
    industry: "Data Science",
    location: "Boston, MA",
    website: "https://www.datadriven.com",
    jobs: jobs.filter(job => job.companyId === "5"),
  },
  {
    id: "6",
    name: "DesignHub",
    logo: "https://cdn-icons-png.flaticon.com/512/2537/2537358.png",
    description: "Design agency specializing in UI/UX design for digital products.",
    industry: "Design",
    location: "Seattle, WA",
    website: "https://www.designhub.com",
    jobs: jobs.filter(job => job.companyId === "6"),
  },
  {
    id: "7",
    name: "QualityTech",
    logo: "https://cdn-icons-png.flaticon.com/512/2537/2537417.png",
    description: "Quality assurance company helping businesses deliver high-quality software.",
    industry: "QA & Testing",
    location: "Chicago, IL",
    website: "https://www.qualitytech.com",
    jobs: jobs.filter(job => job.companyId === "7"),
  },
];

// Service functions
export const getAllSkills = (): Skill[] => {
  return skills;
};

export const getAllJobs = (): Job[] => {
  return jobs;
};

export const getAllCompanies = (): Company[] => {
  return companies;
};

export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};

export const getJobsBySkills = (skillNames: string[]): Job[] => {
  if (!skillNames.length) return jobs;
  
  return jobs.filter(job => {
    const jobSkillNames = job.skills.map(skill => skill.name.toLowerCase());
    return skillNames.some(skillName => 
      jobSkillNames.includes(skillName.toLowerCase())
    );
  });
};

export const getCompaniesBySkills = (skillNames: string[]): Company[] => {
  if (!skillNames.length) return companies;
  
  const matchingJobs = getJobsBySkills(skillNames);
  const companyIds = [...new Set(matchingJobs.map(job => job.companyId))];
  
  return companies.filter(company => companyIds.includes(company.id));
};
