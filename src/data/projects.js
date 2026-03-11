import lmsDashboard from '../assets/LMS Dashboard.png';
import chickenApp from '../assets/chicken/app-view.jpg';
import geoMap from '../assets/geovalue/dashboard.jpg';
import studentMain from '../assets/portal/main.png';
export const projectsData = [
  {
    id: "geovalue-ai",
    title: "GeoValue AI",
    subtitle: "Livability-Centered Land Evaluation System",
    description: "An advanced land valuation system using AI/ML and GIS. Built a dataset specifically for Chennai and developed a web application dashboard to visualize land livability and value.",
    tech: ["Python", "Machine Learning", "GIS", "React"],
    // Add an array of images! The first one will be the giant header image.
    images: [
        geoMap,
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop", // Graph view
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop", // Map/GIS view
    ]
  },
  {
    id: "student-portal",
    title: "RIT Student Data Portal",
    subtitle: "High-Traffic Data Entry System",
    description: "Developed a data entry portal for 1,800+ students focusing on UI/UX. Successfully handled 200+ concurrent users during live usage with robust form validation.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Figma"],
    images: [
        studentMain,
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop", // Mobile view
    ]
  },
  // Add an empty images array to the rest so the code doesn't break!
  {
    id: "chicken-center-app",
    title: "Sales & Dashboard App",
    subtitle: "Cross-platform Business Management",
    description: "Built a cross-platform Flutter app for a local Chicken Center to track daily sales, customer records, and revenue. Digitized their manual operations using real-time data.",
    tech: ["Flutter", "Spring Boot", "Java", "SQL"],
    images: [
       chickenApp,
       "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "library-system",
    title: "Library Management System",
    subtitle: "Automated Book & Student Tracking",
    description: "Web-based system to manage book availability and student entry/exit records. Automated the lending process to drastically reduce manual effort for the RIT library.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "MongoDB"],
    images: [lmsDashboard] 
  }
];