import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Globe, MessageCircle } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:saparesandeep07@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Sapare%20Sandeep%2C%0AI%20saw%20your%20UI%2FUX%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project%20opportunity.",
    className: "",
    hasTooltip: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sapare-sandeep07",
    className: "",
    hasTooltip: false,
  },
  {
    icon: Globe,
    label: "Behance",
    href: "https://www.behance.net/saparesandeep1",
    className: "",
    hasTooltip: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/917989061925?text=Hello%20Sapare%20Sandeep%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you",
    className: "!border-[hsl(142_70%_49%)]/40 !text-[hsl(142_70%_49%)] hover:!bg-[hsl(142_70%_49%)]/10 hover:!border-[hsl(142_70%_49%)]",
    hasTooltip: false,
  },
];

const ContactSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
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
            {links.map((l, i) => (
              <div key={l.label} className="relative">
                {/* Email tooltip */}
                {l.hasTooltip && (
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20"
                      >
                        <div className="rounded-xl border border-border bg-card px-4 py-3 shadow-xl text-left min-w-[240px]">
                          <a href="mailto:saparessandeep07@gmail.com" className="block text-sm text-primary hover:underline">
                            saparessandeep07@gmail.com
                          </a>
                          <a href="mailto:saparedesign@gmail.com" className="block text-sm text-primary hover:underline mt-1">
                            saparedesign@gmail.com
                          </a>
                        </div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-border" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                <motion.a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onMouseEnter={() => l.hasTooltip && setShowTooltip(true)}
                  onMouseLeave={() => l.hasTooltip && setShowTooltip(false)}
                  onTouchStart={() => l.hasTooltip && setShowTooltip((p) => !p)}
                  className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:glow-orange transition-all ${l.className}`}
                >
                  <l.icon size={18} className={l.label === "WhatsApp" ? "text-[hsl(142_70%_49%)]" : "text-primary"} />
                  {l.label}
                </motion.a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
