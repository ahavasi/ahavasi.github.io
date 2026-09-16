import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import resumeData from "../resumeData";
import "./Hero.css";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.02-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
  </svg>
);

const { name, heroHeadline, heroSupport, credentials, social } = resumeData;

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

export default function Hero() {
  const [inView, setInView] = useState(true);
  const sectionRef = useRef(null);

  // Looping decoration costs frames for as long as it runs, so it stops once
  // the hero is scrolled past.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className={`hero${inView ? "" : " is-idle"}`}
      ref={sectionRef}
    >
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-glow hero-glow--violet" />
        <span className="hero-glow hero-glow--blue" />
        <span className="hero-grid" />
      </div>

      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero-copy">
          <motion.p className="hero-eyebrow" variants={item}>
            <span className="hero-status-dot" aria-hidden="true" />
            Available for freelance &amp; contract work
          </motion.p>

          <motion.h1 className="hero-headline" variants={item}>
            {heroHeadline}
          </motion.h1>

          <motion.p className="hero-support" variants={item}>
            {heroSupport}
          </motion.p>

          <motion.p className="hero-credentials" variants={item}>
            <span className="hero-credentials-name">{name}</span>
            {credentials.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </motion.p>

          <motion.div className="hero-cta" variants={item}>
            <a className="hero-btn hero-btn--primary" href="#contact">
              Start a project
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="hero-btn hero-btn--ghost" href="#work">
              View work
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={item}>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hero-social-link"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hero-social-link"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href={`mailto:${social.email}`}
              aria-label="Email"
              className="hero-social-link"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div className="hero-portrait" variants={item}>
          <div className="hero-portrait-frame">
            <img src="/andrehavasi.jpg" alt="Andre Havasi" loading="eager" />
          </div>
        </motion.div>
      </motion.div>

      <a
        className="hero-scroll"
        href="#services"
        aria-label="Skip to what I can build for you"
      >
        <span className="hero-scroll-line" aria-hidden="true" />
        Scroll
      </a>
    </section>
  );
}
