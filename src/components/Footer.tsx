import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="border-t border-border py-10 px-6 md:px-12"
  >
    <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Sapare Designz"
          className="h-8 hover:scale-105 hover:rotate-2 hover:drop-shadow-[0_0_8px_hsl(24_100%_50%/0.5)] transition-all duration-300"
        />
        <p>© 2026 Sapare Sandeep</p>
      </div>
      <p>UI/UX Designer</p>
      <p>All Rights Reserved</p>
    </div>
  </motion.footer>
);

export default Footer;
