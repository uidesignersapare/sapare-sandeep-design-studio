import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const displayProjects = projects.slice(0, 5);

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.3, 0.8], [1, 0.92]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{ top: `${80 + index * 20}px`, zIndex: index + 1 }}
    >
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="view"
        style={{ scale }}
        className="block relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-colors group cursor-pointer"
      >
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{ scale: imageScale }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div className="absolute top-6 right-6 md:top-8 md:right-8">
            <span className="font-display text-6xl md:text-8xl font-bold text-foreground/10">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
              <ArrowUpRight size={20} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="text-xs font-medium tracking-widest text-primary uppercase">
              {project.category}
            </span>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
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
      </motion.a>
    </div>
  );
};

const WorkSection = () => (
  <section id="work" className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-7xl">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            onClick={() => window.scrollTo(0, 0)}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all"
          >
            View All <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div className="relative space-y-8 pb-[200px]">
        {displayProjects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
