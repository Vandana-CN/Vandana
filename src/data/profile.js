
const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Vandana Cendrollu Nagesh",
  title: "Full‑Stack Developer",
  photo:`${BASE}me.jpg`, 
  summary:
    "Master’s student in Computer Science at UF with hands‑on experience across Java/Spring Boot, ASP.NET, and React. Comfortable building end‑to‑end features, improving data workflows with PL/SQL, and shipping clean, accessible UIs. Always learning; focused on reliability and thoughtful design.",
  links: {
    resume: `${BASE}resume.pdf`,
    linkedin: "https://www.linkedin.com/in/c-n-vandana",
    github: "https://github.com/dashboard",
  },
  contact: {
    email: "cnvandana@gmail.com",
    phone: "+1 260 410 4523",
  },
  contact_blurb:
    "Feel free to reach out for internships, software roles, or collaboration. I’m happy to share more context on projects or walk through code.",
  skills: {
    "Programming": ["Java", "JavaScript", "C#", "C++", "Python"],
    "Backend": ["Spring Boot", "Node.js", "Express.js", ".NET", "ASP.NET", "MVC", "REST APIs", "Kafka"],
    "Frontend": ["React", "Next.js", "Angular", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "jQuery"],
    "Data": ["SQL", "MySQL", "MSSQL", "Oracle", "PL/SQL", "MongoDB", "PostgreSQL"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Azure DevOps", "Git", "Jenkins", "Jira", "Vercel"]
  },
  experience: [
    {
      company: "Insight Tutors",
      role: "Web Developer Intern",
      period: "Jan 2025 – Apr 2025",
      location: "United States",
      points: [
        "Built a responsive website with React, Next.js, TypeScript, and Tailwind CSS.",
        "Integrated Supabase for authentication and dynamic content.",
        "Deployed on Vercel to streamline releases and updates."
      ],
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"]
    },
    {
      company: "Entain (formerly Ivy)",
      role: "Software Engineer",
      period: "Aug 2022 – Dec 2023",
      location: "India",
      points: [
        "Developed REST APIs in Java & Spring Boot for high\u2011traffic gaming platforms (e.g., BetMGM), handling millions of requests per day.",
        "Implemented data fixes that updated 10.3M+ player records to align with new application changes and business rules.",
        "Built PL/SQL stored procedures and designed Oracle schemas/tables to improve data integrity and performance.",
        "Automated cron jobs to check KYC verification status and restrict unverified players after 72 hours of registration."
      ],
      stack: ["Java", "Spring Boot", "Oracle", "PL/SQL", "REST APIs", "Cron"]
    },
    {
      company: "Hexagon",
      role: "Full‑Stack Developer Intern",
      period: "Aug 2021 – Jun 2022",
      location: "India",
      points: [
        "Developed and optimized web applications with React and Angular, improving load times and supporting 2,500+ employees.",
        "Built backend features using ASP.NET MVC, Web API, and Entity Framework; wrote production-grade controllers and services in C#.",
        "Created SQL Server tables and stored procedures via Entity Framework, enabling structured, consistent data handling across modules.",
        "Containerized internal applications with Docker and Kubernetes, and set up CI/CD pipelines in Azure DevOps for scalable cloud deployments."
      ],

      stack: ["React", "Angular", "ASP.NET MVC", "Web API", "Entity Framework", "SQL Server", "Azure DevOps", "Docker", "Kubernetes"]
    }
  ],
  projects: [
    {
      title: "E‑Market",
      period: "Jan 2024 – Mar 2024",
      description:
        "An e‑commerce platform to support handcrafted product sellers. Focused on simple flows for listing, cart, and checkout while keeping the stack lightweight.",
      tech: ["Node.js", "Express.js", "JavaScript", "MySQL"],
      demo: "",
      code: "https://github.com/Vandana-CN/Handiva"
    },
    {
      title: "Disease Prediction System",
      period: "Jan 2021 – Mar 2021",
      description:
        "A Django application that uses basic ML models to assess risk factors and predict likely health conditions from user inputs.",
      tech: ["Python", "Django", "Machine Learning"],
      demo: "",
      code: "https://github.com/Vandana-CN/DiseasePrediction"
    }
  ],
  education: [
    {
      school: "University of Florida, USA",
      degree: "MS in Computer Science",
      period: "Jan 2024 – Dec 2025",
      details: ""
    },
    {
      school: "Vellore Institute of Technology – AP, India",
      degree: "M. Tech. Integrated Software Engineering",
      period: "Jun 2017 – May 2022",
      details: ""
    }
  ],
}
