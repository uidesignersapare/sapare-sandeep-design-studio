import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projectEthanmax from "@/assets/project-ethanmax.jpg";
import projectFixsphere from "@/assets/project-fixsphere.jpg";
import projectCarcare from "@/assets/project-carcare.jpg";
import projectCleaning from "@/assets/project-cleaning.jpg";

const projects = [
  {
    title: "Max-Ethan",
    subtitle: "Luxurious Interior Design",
    category: "UI/UX DESIGN · 2024",
    tags: ["Interior", "Luxury", "Mobile App"],
    image: projectEthanmax,
  },
  {
    title: "Car Care",
    subtitle: "Automotive Service App",
    category: "MOBILE DESIGN · 2024",
    tags: ["Automotive", "Booking", "Dark Mode"],
    image: projectCarcare,
  },
  {
    title: "Fix Sphere",
    subtitle: "Home Repair Service Platform",
    category: "UI/UX DESIGN · 2024",
    tags: ["Service", "Booking", "Web App"],
    image: projectFixsphere,
  },
  {
    title: "AM Cleaning",
    subtitle: "Professional Cleaning Services",
    category: "WEB DESIGN · 2024",
    tags: ["Cleaning", "Booking", "Minimal"],
    image: projectCleaning,
  },
];

const WorkSection = () => (
  <section id="work" className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mt-3 leading-[1.1]">
            Recent<br />Projects
          </h2>
        </motion.div>
        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all"
        >
          View All <ArrowRight size={16} />
        </motion.a>
      </div>

      {/* Projects */}
      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-colors"
          >
            {/* Image area */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

              {/* Number badge */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <span className="font-display text-6xl md:text-8xl font-bold text-foreground/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Arrow button */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="text-xs font-medium tracking-widest text-primary uppercase">
                  {p.category}
                </span>
                <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{p.subtitle}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
