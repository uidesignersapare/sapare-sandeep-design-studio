import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", value: 95 },
      { name: "Adobe Creative Suite", value: 90 },
      { name: "Sketch", value: 85 },
      { name: "Principle", value: 80 },
    ],
  },
  {
    title: "UX Research",
    skills: [
      { name: "User Interviews", value: 90 },
      { name: "Usability Testing", value: 88 },
      { name: "Analytics", value: 82 },
      { name: "A/B Testing", value: 78 },
    ],
  },
  {
    title: "Strategy",
    skills: [
      { name: "Design Systems", value: 92 },
      { name: "Information Architecture", value: 88 },
      { name: "Wireframing", value: 95 },
      { name: "Prototyping", value: 90 },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", value: 92 },
      { name: "Figma Make", value: 88 },
      { name: "Firebase Studio", value: 95 },
      { name: "Gemini", value: 90 },
    ],
  },
];

const AnimatedBar = ({ name, value, delay }: { name: string; value: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1400;
      const step = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-semibold">{count}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-primary relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: [0, 0.8, 0] } : {}}
            transition={{ duration: 1.6, delay }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-foreground/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <section className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Skills & <span className="text-primary">Expertise</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A versatile toolkit built through years of learning, experimenting, and solving real-world design challenges.
        </p>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, j) => (
                <AnimatedBar key={skill.name} name={skill.name} value={skill.value} delay={0.1 + i * 0.1 + j * 0.08} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
