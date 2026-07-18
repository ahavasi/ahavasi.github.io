import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import resumeData from "../resumeData";
import "./Contact.css";

const { name, social } = resumeData;

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

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <motion.div
        className="contact-inner"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="contact-glow" aria-hidden="true" />

        <motion.h2 className="contact-title" variants={item}>
          Let&rsquo;s build something.
        </motion.h2>

        <motion.p className="contact-sub" variants={item}>
          Have a product, app, or idea you need shipped? I take on a limited
          number of freelance and contract projects — reach out and let&rsquo;s
          talk about what you&rsquo;re building.
        </motion.p>

        <motion.div className="contact-cta" variants={item}>
          <a
            href={`mailto:${social.email}`}
            className="contact-btn contact-btn--primary"
          >
            <Mail size={18} aria-hidden="true" />
            Get in touch
          </a>
        </motion.div>

        <motion.div className="contact-social" variants={item}>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="contact-social-link"
          >
            <GithubIcon width={20} height={20} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="contact-social-link"
          >
            <LinkedinIcon width={20} height={20} />
          </a>
        </motion.div>
      </motion.div>

      <footer className="contact-footer">
        <p className="contact-footer-name">{name}</p>
        <p className="contact-footer-copy">&copy; 2026. All rights reserved.</p>
      </footer>
    </section>
  );
}
