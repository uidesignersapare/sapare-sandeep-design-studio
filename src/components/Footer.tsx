import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="border-t border-border py-10 px-6 md:px-12"
  >
    <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 Sapare Sandeep</p>
      <p>UI/UX Designer</p>
      <p>All Rights Reserved</p>
    </div>
  </motion.footer>
);

export default Footer;
