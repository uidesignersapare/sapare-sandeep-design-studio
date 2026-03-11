import { motion } from "framer-motion";

const items = [
  "Sapare Sandeep",
  "//",
  "UI/UX DESIGN",
  "//",
  "Sapare Designz.",
  "//",
  "Web Designer",
  "//",
  "Mobile Designer",
  "//",
  "Brand Design",
  "//",
];

const MarqueeRow = () => (
  <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
    {[...items, ...items].map((item, i) => (
      <span
        key={i}
        className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase ${
          item === "//" ? "text-primary" : "text-foreground/80"
        }`}
      >
        {item}
      </span>
    ))}
  </div>
);

const MarqueeSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="py-6 overflow-hidden border-y border-border bg-secondary/30 group"
  >
    <div className="flex gap-8 group-hover:[animation-duration:60s]">
      <MarqueeRow />
      <MarqueeRow />
    </div>
  </motion.section>
);

export default MarqueeSection;
