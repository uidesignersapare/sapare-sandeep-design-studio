import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "Understanding product goals and user needs." },
  { num: "02", title: "Research", desc: "Competitor analysis and user insights." },
  { num: "03", title: "Wireframe", desc: "Creating low-fidelity structures for user flows." },
  { num: "04", title: "Design", desc: "Building high-fidelity UI with strong visual hierarchy." },
  { num: "05", title: "Prototype", desc: "Interactive testing and user validation." },
  { num: "06", title: "Deliver", desc: "Final design handoff for development." },
];

const ProcessSection = () => (
  <section id="process" className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16"
      >
        My Design Process
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors group"
          >
            <span className="text-3xl font-display font-bold text-primary/30 group-hover:text-primary transition-colors">{s.num}</span>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
