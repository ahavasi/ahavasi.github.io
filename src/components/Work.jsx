import { motion } from "framer-motion";
import resumeData from "../resumeData";
import ProjectCard from "./ProjectCard";
import "./Work.css";

const { projects } = resumeData;

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

export default function Work() {
  return (
    <section id="work" className="section work">
      <motion.div
        className="work-inner"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.h2 className="section-title" variants={item}>
          Selected Work
        </motion.h2>

        <motion.p className="work-intro" variants={item}>
          Products I&apos;ve founded, shipped, and maintained — end to end,
          from idea to the App Store or the open web.
        </motion.p>

        <div className="work-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
