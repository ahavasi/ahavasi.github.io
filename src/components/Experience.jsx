import { motion } from "framer-motion";
import resumeData from "../resumeData";
import "./Experience.css";

const { experience, education } = resumeData;

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Experience
      </motion.h2>

      <ol className="experience-timeline">
        {experience.map(({ id, title, desc }, i) => (
          <motion.li
            className="experience-item"
            key={id ?? title}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="experience-node" aria-hidden="true" />
            <h3 className="experience-item-title">{title}</h3>
            <p className="experience-item-desc">{desc}</p>
          </motion.li>
        ))}

        <motion.li
          className="experience-item experience-item--education"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: experience.length * 0.08 }}
        >
          <span className="experience-node" aria-hidden="true" />
          <h3 className="experience-item-title">Education</h3>
          <p className="experience-item-desc">{education}</p>
        </motion.li>
      </ol>
    </section>
  );
}
