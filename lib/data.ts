// ============================================================
// PORTFOLIO DATA — edit this file to update all site content
// ============================================================

export const profile = {
  name: "Barzi Bahaalddin Abdallah",
  title: "Data Analyst & IT Engineer",
  tagline:
    "Turning raw data into decisions — from IT infrastructure to Power BI dashboards.",
  email: "barzibahadin@yahoo.com",
  phone: "+964 771 0297 793",
  linkedin: "https://www.linkedin.com/in/barzibahadin",
  github: "", // add your GitHub URL here when ready
  location: "Kurdistan Region, Iraq",
  summary:
    "I hold a Bachelor's Degree in Computer Engineering from Komar University of Science and Technology and have built a diverse career in IT support, database administration, data analysis, and customer care leadership at Ruyat Technologies. Starting as an IT Help Desk Specialist, I advanced through Database Administrator, Data Analyst, and now lead the Customer Care department — building data pipelines, Power BI dashboards, and actionable reporting for management. Alongside my corporate work, I have been an Academic Writer and Editor since 2020, producing research and theses across Business, Accounting, Medicine, Engineering, and Science.",
};

export interface Experience {
  title: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: "Customer Care Lead",
    company: "Ruyat Technologies",
    period: "Dec 2024 – Present",
    current: true,
    bullets: [
      "Supervise the call center and manage day-to-day customer complaints.",
      "Report data to commercial managers using Power BI and mining system logs.",
      "Build data engineering pipelines that transform unstructured data into fully structured, labelled, and measurable datasets.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Ruyat Technologies",
    period: "Jan 2024 – Dec 2024",
    current: false,
    bullets: [
      "Collected, cleaned, and interpreted data to identify patterns and trends.",
      "Created reports and dashboards with Power BI and Power Automate.",
      "Collaborated with stakeholders on requirements and ensured reporting accuracy.",
    ],
  },
  {
    title: "Database Administrator",
    company: "Ruyat Technologies",
    period: "Dec 2023 – Dec 2024",
    current: false,
    bullets: [
      "Administered customer care and billing databases, resolving data-related issues.",
      "Executed UAT for new releases to prevent data corruption.",
      "Developed documentation and trained end-users on new system features.",
    ],
  },
  {
    title: "IT Help Desk Support",
    company: "Ruyat Technologies",
    period: "Dec 2022 – Dec 2023",
    current: false,
    bullets: [
      "Provided networking, hardware/software, and VoIP support to employees.",
      "Administered Linux systems and managed Microsoft domain controller.",
      "Handled IP phone installation and general systems troubleshooting.",
    ],
  },
  {
    title: "Academic Writer & Editor",
    company: "Freelance",
    period: "2020 – Present",
    current: true,
    bullets: [
      "Produced research papers, essays, and academic theses across multiple disciplines.",
      "Topics include Business, Accounting, Medicine, Engineering, and Science.",
      "Multiple works published under client authorship.",
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Technical",
    items: [
      "SQL",
      "Python",
      "Pandas",
      "Power BI",
      "Power Automate",
      "Excel",
      "Git",
      "Linux",
      "Dynamics 365",
      "SPSS",
      "Unit & Integration Testing",
    ],
  },
  {
    label: "Soft Skills",
    items: [
      "Leadership",
      "Natural Negotiator",
      "Problem Solving",
      "Critical Thinking",
      "Stress Management",
      "Multitasking",
      "Time Management",
      "Employee Management",
    ],
  },
  {
    label: "Languages",
    items: [
      "Kurdish — Native",
      "English — IELTS 6.5 (B2)",
      "Arabic — Upper Intermediate",
      "Persian — Reading / Listening",
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  reference?: string;
}

export const certifications: Certification[] = [
  {
    name: "IELTS Academic 6.5 (B2)",
    issuer: "British Council Iraq",
    date: "July 2025",
    reference: "A3-IQ016-A-13475059",
  },
  {
    name: "Customer Service",
    issuer: "PDI – American University of Iraq, Sulaimani",
    date: "June 2024",
  },
  {
    name: "Strategic Communication",
    issuer: "PDI – American University of Iraq, Sulaimani",
    date: "April 2024",
  },
  {
    name: "Project Management (PMP)",
    issuer: "PDI – American University of Iraq, Sulaimani",
    date: "January 2024",
  },
  {
    name: "Business English",
    issuer: "PDI – American University of Iraq, Sulaimani",
    date: "November 2023",
  },
];

export interface Education {
  degree: string;
  field: string;
  university: string;
  period: string;
  gpa: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Science",
    field: "Computer Engineering",
    university: "Komar University of Science and Technology",
    period: "2018 – 2022",
    gpa: "2.76 / 4.0",
  },
];

// ── Nav links ── add or remove sections here
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
