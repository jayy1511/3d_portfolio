
export const RESUME_DATA = {
  name: "Jay PATEL",
  initials: "JP",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  about: "I’m a third-year Computer Science student at EPITA and Software Engineering & AI Intern at Dassault Systèmes R&D in Paris. My work focuses on backend systems, secure execution workflows, containerized environments, and AI-assisted automation. I’m especially interested in LLM agents, RAG systems, multi-agent workflows, and applying AI to complex industrial software.",
  summary: "AI Engineer focused on LLM agents, backend systems, and production-ready AI workflows. Currently working in R&D at Dassault Systèmes on secure workflow automation, containerized execution, and AI-assisted systems.",
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
        url: "https://www.linkedin.com/in/jayy1511/",
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
      badges: ["R&D", "Python", "FastAPI", "Docker", "Kubernetes", "WebSocket", "LLM", "LangChain"],
      title: "Software Engineering & AI Intern",
      logo: "/assets/dassault-logo.png",
      start: "March 2026",
      end: "Sept 2026",
      description: `
• Working in the Life Sciences R&D team on a node-based workflow platform for scientific and computational pipelines.
• Designed and developed a secure Script Node for isolated execution of user-defined Python scripts in Docker containers.
• Built backend services with FastAPI and real-time execution feedback via WebSocket.
• Designed execution orchestration logic including validation, job registry, watchdog monitoring, and log streaming.
• Prepared integration roadmap for Kubernetes-based execution and AI-assisted workflow automation using LLMs and LangChain.
• Contributing to healthcare digital twin initiatives such as MEDITWIN.
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
    ai: ["LLMs", "RAG", "LangChain", "LangGraph", "AI Agents", "Prompt Engineering", "Google ADK", "Scikit-learn"],
    backend: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs", "WebSocket"],
    systems: ["Docker", "Kubernetes", "CI/CD", "Git", "Linux", "Azure", "AWS"],
    data: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Neo4j", "Pandas", "NumPy"],
    frontend: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
    concepts: ["Multi-agent systems", "Microservices", "Event-driven architecture", "Secure execution", "Distributed systems"],
    soft: ["Meticulous", "Adaptable", "Resilient", "Curious", "Creative", "Disciplined", "Fast learner"]
  },
  languages: [
    "English - Fluent",
    "French - Intermediate (B1)",
    "Hindi - Native"
  ],
  certifications: [
    {
      title: "Google AI Agents Intensive",
      link: "https://www.kaggle.com/certification/badges/jay11012005/105",
      issuer: "Google",
      year: "2025"
    },
    {
      title: "Microsoft AI Skills",
      link: "https://www.credly.com/badges/9d86a751-64ff-48b3-bb46-73c8686e4565",
      issuer: "Microsoft",
      year: "2026"
    },
    {
      title: "Google Cybersecurity Specialization",
      link: "https://www.credly.com/badges/87e3b98f-0386-42fe-91ef-d403ad982285/linked_in_profile",
      issuer: "Google",
      year: "2024"
    },
    {
      title: "Meta Full-Stack Developer Specialization",
      link: "https://www.credly.com/badges/5ee970d3-e09c-4ea8-a17d-5e272e747e8d/public_url",
      issuer: "Meta",
      year: "2024"
    }
  ],
  projects: [
    {
      title: "ThreatIQ - Multi-Agent Phishing Detection",
      techStack: ["Python", "FastAPI", "Next.js", "TypeScript", "MongoDB", "Google ADK", "LLM Agents"],
      description: "Multi-agent AI system for phishing detection across emails, URLs, and messages using LLM-based reasoning, structured agent workflows, and automated threat reports.",
      link: {
        label: "GitHub",
        href: "https://github.com/jayy1511/ThreatIQ_Agent",
      },
      demo: {
        label: "Demo",
        href: "https://threat-iq-agent.vercel.app",
      },
      image: "/assets/ThreatIQ_Agent.png",
      impact: "Designed a production-style AI security assistant with multi-agent orchestration, structured outputs, OAuth integration, and user-facing threat explanations.",
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
    }
  ],
} as const;
