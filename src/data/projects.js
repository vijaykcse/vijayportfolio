import lmsDashboard from '../assets/LMS Dashboard.png';
import chickenApp from '../assets/chicken/app-view.jpg';
import geoMap from '../assets/geovalue/dashboard.jpg';
import studentMain from '../assets/portal/main.png';
import apolloPreview from '../assets/apollo.jpg';

export const projectsData = [
  {
    id: "apollo-peripherals",
    title: "Apollo Peripherals Corporate Website",
    subtitle: "Modern IT Infrastructure Corporate Portal",
    category: "WordPress & Web",
    description: "Developed a responsive corporate website for Apollo Peripherals, an IT infrastructure company, using WordPress and Elementor. Features custom layouts, modern UI/UX design, mobile responsiveness, and on-page SEO optimization with Rank Math.",
    tech: ["WordPress", "Elementor", "SEO", "UI/UX", "CSS3"],
    highlights: [
      "Designed & deployed production-ready responsive corporate pages",
      "Optimized search engine visibility using Rank Math SEO",
      "Collaborated directly with client for customized layout delivery"
    ],
    images: [
      apolloPreview,
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    ]
  },
  {
    id: "student-portal",
    title: "RIT Student Data Entry Portal",
    subtitle: "High-Traffic Data Entry & Form Automation",
    category: "Full-Stack Web",
    description: "Built a high-concurrency student data entry portal serving 1,800+ students at Rajalakshmi Institute of Technology. Designed in Figma and developed using React and Node.js with REST API integration, supporting 200+ concurrent live users.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Figma"],
    highlights: [
      "Serves 1,800+ students with instant responsive UI",
      "Tested and validated under 200+ live concurrent users",
      "Robust client & server form validation with MongoDB storage"
    ],
    images: [
      studentMain,
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "sales-management-app",
    title: "Flutter Sales & Customer Management App",
    subtitle: "Mobile Business Operations Digitization",
    category: "Mobile & Backend",
    description: "Built a cross-platform mobile application using Flutter integrated with Spring Boot REST APIs and MySQL database. Digitized manual business sales, customer management, inventory tracking, and revenue reporting.",
    tech: ["Flutter", "Spring Boot", "Java", "REST APIs", "MySQL"],
    highlights: [
      "Seamless cross-platform mobile UI built in Flutter",
      "Spring Boot RESTful microservices for customer data",
      "Automated daily sales tracking & real-time revenue analytics"
    ],
    images: [
      chickenApp,
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "library-system",
    title: "RIT Library Management System",
    subtitle: "Automated Book & Student Entry Tracking",
    category: "Full-Stack Web & IP",
    description: "Web-based system automating book issue/return tracking and student entry/exit logs for RIT Library. Improved operational efficiency with intuitive workflows. Registered under Copyright IP (Registration No.: 23099/2024-CO/SW).",
    tech: ["HTML5", "CSS3", "JavaScript", "Python", "MongoDB"],
    highlights: [
      "Official Copyrighted Software (Reg No: 23099/2024-CO/SW)",
      "Automated book issue/return tracking to eliminate manual registers",
      "Instant database lookups and reporting for library staff"
    ],
    images: [
      lmsDashboard,
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "geovalue-ai",
    title: "GeoValue AI",
    subtitle: "Livability-Centered Land Valuation System",
    category: "AI / ML & GIS",
    description: "An advanced land valuation system combining AI/ML models with GIS spatial analysis. Built a custom dataset for Chennai to evaluate livability parameters and visualize real estate trends through an interactive React dashboard.",
    tech: ["Python", "Machine Learning", "GIS", "React", "Data Analytics"],
    highlights: [
      "Custom Chennai geospatial dataset creation",
      "ML-driven livability indexing algorithm",
      "Interactive map dashboard visualization"
    ],
    images: [
      geoMap,
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop"
    ]
  }
];