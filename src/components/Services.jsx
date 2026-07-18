import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Server } from "lucide-react";
import resumeData from "../resumeData";
import "./Services.css";

const ICONS = { Globe, Smartphone, Server };

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

const scrollToId = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

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
          I build web &amp; iOS apps for people — from idea to App Store or
          the open web.
        </motion.p>

        <div className="services-grid">
          {services.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div className="service-card" variants={item} key={s.title}>
                <div className="service-icon" aria-hidden="true">
                  {Icon ? <Icon size={26} /> : null}
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="services-cta-wrap" variants={item}>
          <button
            type="button"
            className="services-cta"
            onClick={() => scrollToId("contact")}
          >
            Start a project
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
