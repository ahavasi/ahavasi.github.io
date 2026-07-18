import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import liftlogic from "../assets/logos/liftlogic-logo.png";
import equine from "../assets/logos/equine-logo.png";
import bodytree from "../assets/logos/bodytree-logo.png";
import drivway from "../assets/logos/drivway-logo.png";
import cardstock from "../assets/logos/cardstock-logo.png";
import simpleselfbudget from "../assets/logos/simpleselfbudget-logo.png";
import valzcorner from "../assets/logos/valzcorner-logo.png";
import "./ProjectCard.css";

const LOGOS = {
  liftlogic,
  equine,
  bodytree,
  drivway,
  cardstock,
  simpleselfbudget,
  valzcorner,
};

const ROLE_CLASS = {
  Founder: "role-badge--founder",
  Contract: "role-badge--contract",
  Personal: "role-badge--personal",
};

const LINK_LABELS = {
  site: "Visit Site",
  appStore: "App Store",
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const getInitials = (name) => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
};

export default function ProjectCard({ project }) {
  const { id, name, logoKey, role, pitch, tags = [], bullets = [], links = {} } =
    project;
  const logoSrc = LOGOS[logoKey];
  const linkEntries = Object.entries(links).filter(([, href]) => Boolean(href));

  return (
    <motion.article className="project-card" variants={item}>
      <div className="project-card-header">
        {logoSrc ? (
          <img className="project-logo" src={logoSrc} alt={name} loading="lazy" />
        ) : (
          <div className="project-monogram" aria-hidden="true">
            {getInitials(name)}
          </div>
        )}

        <div className="project-heading">
          <h3 className="project-name">{name}</h3>
          <span
            className={`role-badge ${ROLE_CLASS[role] || "role-badge--personal"}`}
          >
            {role}
          </span>
        </div>
      </div>

      <p className="project-pitch">{pitch}</p>

      {tags.length > 0 && (
        <ul className="project-tags">
          {tags.map((tag) => (
            <li className="project-tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}

      {bullets.length > 0 && (
        <ul className="project-bullets">
          {bullets.map((bullet, i) => (
            <li key={`${id}-${i}`}>{bullet}</li>
          ))}
        </ul>
      )}

      {linkEntries.length > 0 && (
        <div className="project-links">
          {linkEntries.map(([key, href]) => (
            <a
              key={key}
              className="project-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {LINK_LABELS[key] || key}
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}
