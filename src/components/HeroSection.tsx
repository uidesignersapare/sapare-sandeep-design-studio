import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Particles from "./Particles";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    setOffset({ x: (nx - 0.5) * 30, y: (ny - 0.5) * 20 });
    setMousePos({ x: nx, y: ny });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex flex-col overflow-hidden pt-20"
      id="hero"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(24_100%_30%/0.25),hsl(24_100%_20%/0.1)_40%,transparent_70%)] blur-2xl pointer-events-none" />

      <Particles />

      <div className="flex-1 flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ x: offset.x, y: offset.y }}
          className="text-center select-none relative"
        >
          {/* Liquid light effect following cursor */}
          <div
            className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle 200px at ${mousePos.x * 100}% ${mousePos.y * 100}%, hsl(0 0% 100% / 0.15), transparent 70%)`,
              mixBlendMode: "overlay",
            }}
          />

          <h2
            className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] tracking-tight"
            style={{
              color: "transparent",
              backgroundImage: `radial-gradient(circle 250px at ${mousePos.x * 100}% ${mousePos.y * 100}%, hsl(0 0% 100% / 0.35), hsl(0 0% 100% / 0.12) 60%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            SAPARE
          </h2>
          <h2
            className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] tracking-tight"
            style={{
              color: "transparent",
              backgroundImage: `radial-gradient(circle 250px at ${mousePos.x * 100}% ${mousePos.y * 100}%, hsl(0 0% 100% / 0.35), hsl(0 0% 100% / 0.12) 60%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            SANDEEP
          </h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div animate={{ rotate: 45 }} className="w-4 h-4 bg-primary" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 px-6 md:px-12 pb-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-md"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              UI / UX Design Studio
            </span>
            <h1 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground">
              We craft digital experiences that{" "}
              <span className="text-gradient">matter</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Turning complex problems into elegant, intuitive interfaces that users love.
            </p>
            <div className="mt-6 flex gap-3">
              <motion.a
                href="#work"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                View Work
              </motion.a>
              <motion.a
                href="#about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="rounded-full border border-foreground px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                About Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Scroll to discover
            </span>
            <div className="h-10 w-5 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="h-1.5 w-1 rounded-full bg-primary"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-8"
          >
            {[
              { num: "12+", label: "PROJECTS" },
              { num: "2+", label: "YEARS" },
            ].map((s) => (
              <div key={s.label} className="text-right">
                <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                  {s.num}
                </span>
                <p className="text-[10px] tracking-wider text-muted-foreground mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
