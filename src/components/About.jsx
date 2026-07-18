import { motion } from "framer-motion";
import resumeData from "../resumeData";
import "./About.css";

const { about, stats } = resumeData;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About
      </motion.h2>

      <motion.div
        className="about-copy"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {about.map((paragraph) => (
          <motion.p key={paragraph.slice(0, 24)} variants={item}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="about-stats"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map(({ value, label }) => (
          <motion.div className="about-stat" variants={item} key={label}>
            <span className="about-stat-value">{value}</span>
            <span className="about-stat-label">{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
