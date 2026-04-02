
export const RESUME_DATA = {
  name: "Jay PATEL",
  initials: "JP",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  about: "I am currently a third year computer science student at EPITA and Software Engineering Intern at Dassault Systèmes, all the way from India. I enjoy pushing boundaries, staying current with new tech and building products that make a difference. Outside of study, I'm interested in following the developments of science. I also play a lot of video games and watch f1.",
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
      company: "Dassault Systèmes",
      link: "https://www.3ds.com/",
      badges: ["On-site", "Python", "TypeScript", "FastAPI", "Docker", "React"],
      title: "Software Engineer Intern",
      logo: "/assets/dassault-logo.png",
      start: "March 2026",
      end: "Sept 2026",
      description: `
• Working in the Life Sciences R&D team on a node-based workflow platform for computational pipelines  
• Contributing across backend and frontend, focusing on secure execution of user-defined scripts in containerized environments  
• Designing and building an end-to-end MVP (execution logic, workflows, integration readiness)  
• Preparing integration into a larger internal ecosystem related to healthcare digital twin initiatives (e.g., MEDITWIN)  
• Exploring AI-assisted workflows and automation for future improvements.
`
    },
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
    devops: ["Git", "Docker", "Maven", "CI/CD", "Shell"],
    cloud: ["Azure", "AWS"],
    concepts: ["Microservices", "REST API", "Event-driven systems", "AI Agents", "Prompt Engineering"],
    soft: ["Meticulous", "Adaptable", "Resilient", "Curious", "Creative", "Disciplined", "Fast learner"]
  },
  languages: [
    "English - Fluent",
    "French - Intermediate (B1)",
    "Hindi - Native"
  ],
  certifications: [
    {
      title: "Meta Full-Stack Developer Specialization",
      link: "https://www.credly.com/badges/5ee970d3-e09c-4ea8-a17d-5e272e747e8d/public_url",
      issuer: "Meta",
      year: "2024"
    },
    {
      title: "Google Cybersecurity Specialization",
      link: "https://www.credly.com/badges/87e3b98f-0386-42fe-91ef-d403ad982285/linked_in_profile",
      issuer: "Google",
      year: "2024"
    },
    {
      title: "Google AI Agents Intensive",
      link: "https://www.kaggle.com/certification/badges/jay11012005/105",
      issuer: "Google",
      year: "2025"
    }
  ],
  projects: [
    {
      title: "ThreatIQ_Agent",
      techStack: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "Google ADK"],
      description: "Autonomous AI agent system with multiple agents that analyzes and detects emails, URLs and messages for phishing.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/ThreatIQ_Agent",
      },
      demo: {
        label: "Demo",
        href: "https://threat-iq-agent.vercel.app",
      },
      image: "/assets/ThreatIQ_Agent.png",
      impact: "Production-ready security assistant. Coached user awareness using multi-agent workflow powered by Gemini 2.0.",
      keyFeatures: [
        "Multi-agent orchestration for threat analysis",
        "Real-time URL and content scanning",
        "Automated phishing detection reports",
        "Integration with Google Gemini and OAuth 2.0"
      ],
      challenges: "Coordinating state between multiple autonomous agents and ensuring consistent JSON output from LLMs for the frontend.",
      solutions: "Implemented a robust agent orchestration layer with strict schema validation and retry logic.",
      learnings: "Deepened understanding of agentic workflows, prompt engineering at scale, and asynchronous state management."
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
      impact: "Integrated Neo4j for recommendation graph scoring and user preference tracking.",
      keyFeatures: [
        "Graph-based recommendation engine",
        "Interactive itinerary builder",
        "Real-time collaboration on trips",
        "Personalized city scoring algorithms"
      ],
      challenges: "Modeling complex travel relationships efficiently and querying them in real-time without latency.",
      solutions: "Utilized Neo4j for relationship-heavy data and Redis for caching frequent user queries.",
      learnings: "Mastered graph database concepts and hybrid database architectures (SQL/NoSQL/Graph)."
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
      impact: "Real-time tracking for users and drivers.",
      keyFeatures: [
        "Real-time location tracking (WebSocket)",
        "Driver-passenger matching algorithm",
        "Route optimization and fare estimation",
        "Responsive mobile-first design"
      ],
      challenges: "Handling real-time state synchronization between drivers and riders with low latency.",
      solutions: "Implemented generic WebSocket handlers and optimized payload sizes for position updates.",
      learnings: "Gained practical experience with WebSockets, geolocation APIs, and real-time system design."
    },
    {
      title: "Fit Company Microservices",
      techStack: ["Python", "Flask", "Docker", "RabbitMQ", "MongoDB"],
      description: "Scalable backend fitness platform evolved from monolith to microservices using event-driven workflows and Saga pattern.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/fit-company",
      },
      impact: "Implemented Strangler Fig pattern for migration. Handled complex distributed processes.",
      keyFeatures: [
        "Event-driven microservices architecture",
        "Saga pattern for distributed transactions",
        "Dockerized deployment for all services",
        "Centralized logging and monitoring"
      ],
      challenges: "Ensuring data consistency across distributed services during complex transactions (e.g., booking + payment).",
      solutions: "Adopted the Saga pattern with compensating transactions to handle failures gracefully.",
      learnings: "Internalized distributed system patterns, eventual consistency, and message queue management."
    },
    {
      title: "EPITA Student Management",
      techStack: ["Python (Flask)", "JavaScript", "HTML", "CSS", "SQL"],
      description: "Dynamic transcript portal displaying students, courses, and grades with data visualization.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/Student-Transcript-Website",
      },
      image: "/assets/epita2.png",
      keyFeatures: [
        "Role-based access control (Admin/Student)",
        "Interactive grade visualization charts",
        "Bulk data import/export tools",
        "Secure authentication system"
      ],
      challenges: "Designing a clean, intuitive UI for viewing complex academic data hierarchies.",
      solutions: "Used modern CSS grid layouts and Chart.js for clear data presentation.",
      learnings: "Improved skills in full-stack Python development and SQL database design."
    },
    {
      title: "Scriptoria",
      techStack: ["C#", "SQL Server", "Azure", "React.js", "TailwindCSS"],
      description: "Full-stack CRUD platform featuring a .NET 8 Web API deployed on Azure.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/Scriptoria",
      },
      keyFeatures: [
        "Robust .NET 8 Web API backend",
        "Azure App Service deployment",
        "Type-safe React frontend",
        "Entity Framework Core integration"
      ],
      challenges: "Setting up a continuous deployment pipeline to Azure for a split frontend/backend repo.",
      solutions: "Configured GitHub Actions workflows for automated build and deploy to Azure.",
      learnings: "Learned .NET ecosystem, Entity Framework, and Azure cloud deployment services."
    },
    {
      title: "E2EE Share",
      techStack: ["React.js", "Python (Flask)", "PostgreSQL", "Redis", "OpenStack Swift"],
      description: "Secure end-to-end encrypted file-sharing platform with client-side encryption and one-time links.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/e2ee_share",
      },
      keyFeatures: [
        "Client-side AES-GCM encryption",
        "One-time view/download links",
        "Secure key management",
        "Object storage with OpenStack Swift"
      ],
      challenges: "Implementing secure cryptography in the browser without exposing keys to the server.",
      solutions: "Used Web Crypto API for performance and security, handling all encryption before upload.",
      learnings: "Deep dived into browser security models, cryptography primitives, and secure API design."
    }
  ],
} as const;
