import projectEthanmax from "@/assets/project-ethanmax.jpg";
import projectFixsphere from "@/assets/project-fixsphere.jpg";
import projectCarcare from "@/assets/project-carcare.jpg";
import projectCleaning from "@/assets/project-cleaning.jpg";

export interface Project {
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "EthanMax Interior Studio",
    subtitle: "Luxurious Interior Design",
    category: "WEB DESIGN · 2025",
    tags: ["Interior", "Luxury", "Mobile App"],
    image: projectEthanmax,
    link: "https://ethanmax-816e7.web.app/",
  },
  {
    title: "Car Care",
    subtitle: "Automotive Service Platform",
    category: "WEB DESIGN · 2025",
    tags: ["Automotive", "Booking", "Mobile App"],
    image: projectCarcare,
    link: "https://carcare-a4888.web.app/",
  },
  {
    title: "Fix Sphere",
    subtitle: "Home Service Booking Platform",
    category: "WEB DESIGN · 2025",
    tags: ["Services", "Dashboard", "Web App"],
    image: projectFixsphere,
    link: "https://gift-ea466.web.app/",
  },
  {
    title: "AM General Cleaning",
    subtitle: "Professional Cleaning Services Platform",
    category: "WEB DESIGN · 2025",
    tags: ["Services", "Booking", "Web Platform"],
    image: projectCleaning,
    link: "https://amgc-7c503.firebaseapp.com/",
  },
];
