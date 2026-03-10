import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, MessageCircle } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:saparesandeep07@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Sapare%20Sandeep%2C%0AI%20saw%20your%20UI%2FUX%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project%20opportunity.",
    className: "",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sapare-sandeep07",
    className: "",
  },
  {
    icon: Globe,
    label: "Behance",
    href: "https://www.behance.net/saparesandeep1",
    className: "",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/917989061925?text=Hello%20Sapare%20Sandeep%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you",
    className: "!border-[#25D366]/40 !text-[#25D366] hover:!bg-[#25D366]/10 hover:!border-[#25D366]",
  },
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
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:glow-orange transition-all ${l.className}`}
            >
              <l.icon size={18} className={l.label === "WhatsApp" ? "text-[hsl(142_70%_49%)]" : "text-primary"} />
              {l.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
