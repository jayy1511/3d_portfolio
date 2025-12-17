
export const RESUME_DATA = {
  name: "Jay PATEL",
  initials: "JP",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  about: "I am currently a third year computer science student at EPITA, all the way from India. I enjoy pushing boundaries, staying current with new tech and building products that make a difference. Outside of study, I'm interested in following the developments of science. I also play a lot of video games and watch f1.",
  summary: "I'm a Fullstack Engineer & AI Enthusiast from Paris, France. I'm fascinated by large-scale, high-impact products and I enjoy turning ideas into polished products using modern web technologies.",
  avatarUrl: "/assets/me8.jpg",
  personalWebsiteUrl: "https://3d-portfolio-steel-tau.vercel.app/",
  contact: {
    email: "jaypatel260660@gmail.com",
    tel: "+33 7 49 83 77 04",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jayy1511",
        icon: "Github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jay-patel-11012005j11012005/",
        icon: "Linkedin",
      },
    ],
  },
  education: [
    {
      school: "EPITA - School of Engineering and Computer Science",
      degree: "Bachelors in Computer Science",
      badges: ["On-site"],
      start: "Sept 2023",
      end: "Sept 2026",
    },
  ],
  work: [
    {
      company: "RGIS-Malakoff",
      link: "https://www.rgis.com/",
      badges: ["On-site"],
      title: "Inventory Specialist",
      logo: "/assets/rgis-logo.png",
      start: "Sept 2024",
      end: "Sept 2025",
      description: "Performed on-site inventory audits for major retailers (Hermès, Sephora, Decathlon), delivering accurate counts under tight deadlines. Built strong attention to detail, teamwork, and process discipline in fast-paced operations."
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Remote"],
      title: "Web Designer & Developer",
      logo: "/assets/freelance-logo.png",
      start: "April 2022",
      end: "Sept 2023",
      description: "Designed and developed responsive websites for small shops and local enterprises, handling end-to-end delivery from requirements to deployment. Improved online presence with clean UI, mobile optimization, and basic SEO/performance best practices."
    }
  ],
  skills: {
    languages: ["Python", "Java", "C#", "PHP", "JavaScript", "TypeScript"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Neo4j"],
    backend: ["FastAPI", "Flask", "Node.js", "Spring Boot"],
    frontend: ["React.js", "Next.js", "TailwindCSS"],
    devops: ["Git", "Docker/K8s", "Maven", "CI/CD", "Shell", "RabbitMQ", "Linux"],
    cloud: ["Azure", "AWS"],
    concepts: ["Microservices", "REST API", "Event-driven systems", "Saga pattern", "Strangler Fig pattern", "AI Agents", "Prompt Engineering"],
    soft: ["Meticulous", "Adaptable", "Resilient", "Curious", "Creative", "Disciplined", "Fast learner"]
  },
  languages: [
    "English - Fluent",
    "French - Intermediate (B1)",
    "Hindi - Native"
  ],
  certifications: [
    {
      title: "META Full-Stack Developer Specialization",
      link: "https://coursera.org/"
    },
    {
      title: "Google Cybersecurity Specialization",
      link: "https://coursera.org/"
    },
    {
      title: "Google AI Agents (ongoing)",
      link: "https://coursera.org/"
    }
  ],
  projects: [
    {
      title: "ThreatIQ_Agent",
      techStack: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "Google ADK"],
      description: "Autonomous AI agent system with multiple agents that analyzes and detects emails, URLs and messages for phishing. Assigns risk scores and generates detailed threat reports.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/ThreatIQ_Agent",
      },
      demo: {
        label: "Demo",
        href: "https://threat-iq-agent.vercel.app",
      },
      image: "/assets/ThreatIQ_Agent.png",
      impact: "Production-ready security assistant. Coached user awareness using multi-agent workflow powered by Gemini 2.0."
    },
    {
      title: "Solea",
      techStack: ["Node.js", "React.js", "MongoDB", "Express.js", "Redis", "Neo4j"],
      description: "Smart travel planner for personalized city recommendations and day-by-day itineraries.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/Solea",
      },
      image: "/assets/Solea.png",
      impact: "Integrated Neo4j for recommendation graph scoring and user preference tracking."
    },
    {
      title: "Voyager",
      techStack: ["Node.js", "React.js", "TailwindCSS"],
      description: "Modern Uber-style ride-booking app offering seamless ride requests and real-time tracking.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/Voyager",
      },
      image: "/assets/voyager.png",
      impact: "Real-time tracking for users and drivers."
    },
    {
      title: "Fit Company Microservices",
      techStack: ["Python", "Flask", "Docker", "RabbitMQ", "MongoDB"],
      description: "Scalable backend fitness platform evolved from monolith to microservices using event-driven workflows and Saga pattern.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/fit-company",
      },
      impact: "Implemented Strangler Fig pattern for migration. Handled complex distributed processes."
    },
    {
      title: "EPITA Student Management",
      techStack: ["Python (Flask)", "JavaScript", "HTML", "CSS", "SQL"],
      description: "Dynamic transcript portal displaying students, courses, and grades with data visualization.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/Student-Transcript-Website",
      },
      image: "/assets/epita2.png"
    },
    {
      title: "Scriptoria",
      techStack: ["C#", "SQL Server", "Azure", "React.js", "TailwindCSS"],
      description: "Full-stack CRUD platform featuring a .NET 8 Web API deployed on Azure.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/Scriptoria",
      }
    },
    {
      title: "E2EE Share",
      techStack: ["React.js", "Python (Flask)", "PostgreSQL", "Redis", "OpenStack Swift"],
      description: "Secure end-to-end encrypted file-sharing platform with client-side encryption and one-time links.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/e2ee_share",
      }
    }
  ],
} as const;
