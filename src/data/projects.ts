import projectEthanmax from "@/assets/project-ethanmax.jpg";
import projectFixsphere from "@/assets/project-fixsphere.jpg";
import projectCarcare from "@/assets/project-carcare.jpg";
import projectCleaning from "@/assets/project-cleaning.jpg";
import projectZesty from "@/assets/project-zesty.jpg";
import projectMemora from "@/assets/project-memora.jpg";
import projectAniexpo from "@/assets/project-aniexpo.jpg";
import projectFitgrowth from "@/assets/project-fitgrowth.jpg";
import projectVeggibites from "@/assets/project-veggibites.jpg";
import projectSangeeth from "@/assets/project-sangeeth.jpg";

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
  {
    title: "Elagant",
    subtitle: "Elegant Design Showcase",
    category: "UI/UX DESIGN · 2025",
    tags: ["Branding", "UI/UX", "Web Design"],
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/placeholder.jpg",
    link: "https://www.behance.net/gallery/235706577/ELAGANT",
  },
  {
    title: "Zesty Meal",
    subtitle: "Food Delivery App Design",
    category: "UI/UX DESIGN · 2025",
    tags: ["Food", "Mobile App", "UI/UX"],
    image: projectZesty,
    link: "https://www.behance.net/gallery/225507065/Zesty-Meal",
  },
  {
    title: "Memora",
    subtitle: "Memory & Notes Application",
    category: "UI/UX DESIGN · 2025",
    tags: ["Productivity", "Mobile App", "UI/UX"],
    image: projectMemora,
    link: "https://www.behance.net/gallery/233779103/Memora",
  },
  {
    title: "Aniexpo Website",
    subtitle: "Anime Expo Event Platform",
    category: "WEB DESIGN · 2025",
    tags: ["Events", "Web Design", "Entertainment"],
    image: projectAniexpo,
    link: "https://www.behance.net/gallery/226627163/Aniexpo-website",
  },
  {
    title: "Fit Growth",
    subtitle: "Fitness & Wellness Platform",
    category: "UI/UX DESIGN · 2025",
    tags: ["Fitness", "Health", "Mobile App"],
    image: projectFitgrowth,
    link: "https://www.behance.net/gallery/217812007/Fit-Growth",
  },
  {
    title: "Veggi Bites",
    subtitle: "Vegetarian Food Delivery",
    category: "UI/UX DESIGN · 2025",
    tags: ["Food", "Delivery", "Mobile App"],
    image: projectVeggibites,
    link: "https://www.behance.net/gallery/226089909/Veggi-Bites",
  },
  {
    title: "Sangeeth Music App",
    subtitle: "Music Streaming Application",
    category: "UI/UX DESIGN · 2025",
    tags: ["Music", "Streaming", "Mobile App"],
    image: projectSangeeth,
    link: "https://www.behance.net/gallery/221291815/Sangeeth-Music-App",
  },
];
