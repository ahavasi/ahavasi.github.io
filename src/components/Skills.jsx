import { motion } from "framer-motion";
import resumeData from "../resumeData";
import "./Skills.css";

const { skills } = resumeData;

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

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <motion.div
        className="skills-inner"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={item}>
          Skills
        </motion.h2>

        <div className="skills-groups">
          {skills.map(({ label, items = [] }) => {
            if (!items.length) return null;
            return (
              <motion.div className="skills-group" variants={item} key={label}>
                <span className="skills-group-label">{label}</span>
                <div className="skills-chips">
                  {items.map((value) => (
                    <span className="skills-chip" key={value}>
                      {value}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
