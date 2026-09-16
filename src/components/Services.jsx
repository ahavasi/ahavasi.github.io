import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Smartphone,
  Rocket,
  Sparkles,
  Server,
  Compass,
} from "lucide-react";
import resumeData from "../resumeData";
import { mailtoFor } from "../lib/mailto";
import "./Services.css";

const ICONS = { Globe, Smartphone, Rocket, Sparkles, Server, Compass };

const { services } = resumeData;

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

export default function Services() {
  return (
    <section id="services" className="section services">
      <motion.div
        className="services-inner"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={item}>
          Work with me
        </motion.h2>

        <motion.p className="services-intro" variants={item}>
          Have an idea? Here&apos;s how I can help bring it to life — a website,
          an app, or automating the busywork behind the scenes. Pick the closest
          one and it opens an email with the subject already filled in.
        </motion.p>

        <div className="services-grid">
          {services.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.a
                className="service-card"
                variants={item}
                key={s.title}
                href={mailtoFor(s.title)}
              >
                <div className="service-icon" aria-hidden="true">
                  {Icon ? <Icon size={26} /> : null}
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <span className="service-action">
                  Start this
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </motion.a>
            );
          })}
        </div>

        <motion.div className="services-cta-wrap" variants={item}>
          <a className="services-cta" href="#contact">
            Start a project
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
