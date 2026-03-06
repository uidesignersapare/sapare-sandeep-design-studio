import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Services", "Work", "About", "Process", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold text-foreground">
          Sapare Designz<span className="text-primary">.</span>
        </a>

        {/* Center nav - desktop */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-secondary/50 backdrop-blur-md px-2 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            Available for work
          </span>
          <a
            href="https://drive.google.com/uc?export=download&id=1ZrB8iWqeua0FzUZ5LdPu-dcKhmvPkIIi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground px-5 py-1.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm text-muted-foreground">Available for work</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
