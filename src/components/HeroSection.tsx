import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Particles from "./Particles";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setOffset({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient pt-20"
      id="hero"
    >
      <Particles />
      <div className="mx-auto max-w-7xl w-full px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            UI / UX Design Studio
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            We craft digital experiences that{" "}
            <span className="text-gradient">matter</span>
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
            I design intuitive, user-centered digital experiences that solve real problems. My focus is creating clean interfaces, seamless interactions, and meaningful user journeys.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#work"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View Work
            </a>
            <a
              href="#about"
              className="rounded-full border border-foreground px-7 py-3 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              About Me
            </a>
          </div>
        </motion.div>

        {/* Right - parallax name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:flex flex-col items-center justify-center select-none"
        >
          <motion.div
            style={{ x: offset.x, y: offset.y }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-center"
          >
            <h2 className="font-display text-7xl lg:text-[8rem] xl:text-[9rem] font-bold text-foreground/90 leading-none tracking-tight">
              SAPARE
            </h2>
            <h2 className="font-display text-7xl lg:text-[8rem] xl:text-[9rem] font-bold text-foreground/90 leading-none tracking-tight">
              SANDEEP
            </h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Scroll to discover</span>
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>

      {/* Stats in corner */}
      <div className="absolute bottom-10 right-6 md:right-12 hidden md:flex gap-8">
        {[
          { num: "12+", label: "PROJECTS" },
          { num: "2+", label: "YEARS" },
        ].map((s) => (
          <div key={s.label} className="text-right">
            <span className="text-3xl font-display font-bold text-primary">{s.num}</span>
            <p className="text-xs tracking-wider text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
