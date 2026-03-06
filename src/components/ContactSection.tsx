import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, MessageCircle } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:hello@saparesandeep.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Globe, label: "Behance", href: "https://behance.net" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919999999999" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Let's Work Together
        </h2>
        <p className="mt-4 text-muted-foreground">
          Have a project idea or want to collaborate? Feel free to reach out.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:glow-orange transition-all"
            >
              <l.icon size={18} className="text-primary" />
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
