import { motion } from "framer-motion";
import { Figma, Pen, PenTool, Paintbrush, Frame } from "lucide-react";

const tools = [
  { icon: Figma, name: "Figma" },
  { icon: Pen, name: "Adobe XD" },
  { icon: Paintbrush, name: "Photoshop" },
  { icon: PenTool, name: "Illustrator" },
  { icon: Frame, name: "Framer" },
];

const ToolsSection = () => (
  <section className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16"
      >
        Tools I Use
      </motion.h2>
      <div className="flex flex-wrap gap-6">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 hover:border-primary/40 hover:glow-orange transition-all"
          >
            <t.icon size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsSection;
