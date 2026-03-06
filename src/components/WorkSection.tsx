import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectEthanmax from "@/assets/project-ethanmax.jpg";
import projectFixsphere from "@/assets/project-fixsphere.jpg";
import projectCarcare from "@/assets/project-carcare.jpg";
import projectCleaning from "@/assets/project-cleaning.jpg";

const projects = [
  {
    title: "EthanMax Interior Studio",
    desc: "Interior design website UI/UX project focused on elegant layout, visual storytelling, and showcasing premium interior services.",
    image: projectEthanmax,
  },
  {
    title: "Fix Sphere",
    desc: "Service booking platform UI/UX that helps users easily find and schedule home repair services.",
    image: projectFixsphere,
  },
  {
    title: "Car Care",
    desc: "Automotive service booking application designed for scheduling vehicle maintenance and services.",
    image: projectCarcare,
  },
  {
    title: "AM General Cleaning",
    desc: "Cleaning service platform designed to simplify booking professional cleaning services with transparent pricing and easy scheduling.",
    image: projectCleaning,
  },
];

const WorkSection = () => (
  <section id="work" className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Selected Work</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          A collection of UI/UX design projects focused on solving real-world problems and delivering meaningful digital experiences.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                View Case Study <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
