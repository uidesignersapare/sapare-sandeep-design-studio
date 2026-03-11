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
  <section id="process" className="py-24 px-6 md:px-12 relative overflow-hidden">
    <div className="mx-auto max-w-5xl relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16"
      >
        My Design Process
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

        <div className="space-y-10">
          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={s.num} className="relative pl-14 md:pl-16">
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
                  className="absolute left-2 md:left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 group-hover:shadow-[0_0_12px_hsl(24_100%_50%/0.5)]"
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 md:p-8 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <span className="text-3xl font-display font-bold text-primary/30 group-hover:text-primary transition-colors">
                    {s.num}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
