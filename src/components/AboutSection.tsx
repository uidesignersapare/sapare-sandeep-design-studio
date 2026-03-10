import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">About Me</h2>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm Sapare Sandeep, a UI/UX designer passionate about creating meaningful digital experiences.
          </p>
          <p>
            With a background in Computer Science, I focus on designing user-centered interfaces that combine usability, clarity, and visual elegance.
          </p>
          <p>
            My goal is to transform complex ideas into simple, intuitive digital products that people love using.
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6"
      >
        {[
          { num: "04+", label: "Projects Completed" },
          { num: "02+", label: "Years Design Experience" },
          { num: "100+", label: "UI Screens Designed" },
          { num: "05+", label: "Design Tools Used" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 text-center hover:border-primary/40 transition-colors"
          >
            <span className="text-4xl font-display font-bold text-primary">{s.num}</span>
            <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
