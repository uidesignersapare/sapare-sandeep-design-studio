import { motion } from "framer-motion";

const experiences = [
  {
    title: "UI/UX Designer",
    company: "Techxplorers Private Limited",
    location: "Anantapur, AP",
    period: "2025 – Present",
    type: "Full-time",
    current: true,
    description:
      "Designed and delivered intuitive digital experiences for startups and small businesses, focusing on usability, accessibility, and visual identity.",
    achievements: [
      "Redesigned core product interface, increasing user engagement by 35%",
      "Created responsive web and mobile designs for e-commerce and SaaS products",
      "Led user research initiatives that informed product strategy",
      "Collaborated with developers to ensure smooth handoff & pixel-perfect implementation",
    ],
  },
  {
    title: "Intern UI/UX Designer",
    company: "Techxplorers Private Limited",
    location: "Anantapur, AP",
    period: "2025",
    type: "Full-time",
    current: false,
    description:
      "Designed mobile-first experiences for fintech applications, collaborated with cross-functional teams, and conducted user research to drive product decisions.",
    achievements: [
      "Designed award-winning mobile banking app with 4.8 App Store rating",
      "Reduced user onboarding time by 60% through UX optimization",
      "Conducted 50+ user interviews and usability testing sessions",
      "Collaborated with engineering teams to ensure pixel-perfect implementation",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 md:px-12">
    <div className="mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A journey of growth, learning, and creating impactful design solutions across various industries.
        </p>
      </motion.div>

      <div className="mt-16 relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-14 md:pl-16">
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.15 }}
                className="absolute left-2 md:left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${exp.current ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {exp.period}
                    </span>
                    <span className="rounded-full px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((a, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.05 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {a}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
