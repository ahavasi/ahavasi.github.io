import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import resumeData from "../resumeData";
import ProjectCard from "./ProjectCard";
import "./Work.css";

const { projects } = resumeData;

const CATEGORY_ORDER = ["iOS", "Web", "Client"];
const FILTERS = [
  "All",
  ...CATEGORY_ORDER.filter((c) => projects.some((p) => p.category === c)),
];
const countFor = (c) => projects.filter((p) => p.category === c).length;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Work() {
  const [active, setActive] = useState("All");
  const shown = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <section id="work" className="section work">
      <motion.div
        className="work-inner"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.h2 className="section-title" variants={item}>
          Selected Work
        </motion.h2>

        <motion.p className="work-intro" variants={item}>
          Products I&apos;ve founded, shipped, and maintained — plus client
          builds. From idea to the App Store or the open web.
        </motion.p>

        <motion.div
          className="work-filters"
          variants={item}
          role="group"
          aria-label="Filter projects by type"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`work-filter${active === f ? " is-active" : ""}`}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
            >
              {f}
              {f !== "All" && (
                <span className="work-filter-count">{countFor(f)}</span>
              )}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="work-grid" layout>
        <AnimatePresence mode="popLayout">
          {shown.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
