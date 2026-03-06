import { motion } from "framer-motion";
import { Palette, Search, Box, Layers } from "lucide-react";

const services = [
  { icon: Palette, title: "UI Design", desc: "Designing modern, visually appealing interfaces for web and mobile applications." },
  { icon: Search, title: "UX Research", desc: "Understanding user behavior to create intuitive experiences." },
  { icon: Box, title: "Product Design", desc: "End-to-end product design from idea to final interface." },
  { icon: Layers, title: "Design Systems", desc: "Building scalable UI component systems for consistency." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16"
      >
        Services I Provide
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 hover:glow-orange transition-all"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
