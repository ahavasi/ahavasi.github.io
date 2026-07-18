import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import resumeData from "../resumeData";
import "./Nav.css";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isMenuOpen]);

  // Close the mobile menu automatically if the viewport grows past the
  // mobile breakpoint while it's open.
  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  const handleNavClick = (id) => {
    scrollToId(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`nav${scrolled ? " scrolled" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-inner">
        <button
          type="button"
          className="nav-brand"
          onClick={() => handleNavClick("hero")}
        >
          {resumeData.name}
        </button>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className="nav-link"
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-cta"
            onClick={() => handleNavClick("contact")}
          >
            Hire Me
          </button>

          <button
            type="button"
            className="nav-toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              className="nav-mobile-menu"
              aria-label="Mobile"
              initial={{ y: "-16px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-16px", opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  className="nav-mobile-link"
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                className="nav-cta nav-cta-mobile"
                onClick={() => handleNavClick("contact")}
              >
                Hire Me
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
