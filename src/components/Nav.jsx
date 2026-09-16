import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import resumeData from "../resumeData";
import "./Nav.css";

const NAV_LINKS = [
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

const FOCUSABLE = 'a[href], button:not([disabled])';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    document.body.classList.add("mobile-menu-open");
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isMenuOpen]);

  // Close the mobile menu if the viewport grows past the breakpoint that hides
  // the toggle, so focus is never stranded in a menu no one can dismiss.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 769px)");
    const onChange = (e) => e.matches && setIsMenuOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Escape closes; Tab cycles inside the menu while it covers the page.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = mobileMenuRef.current?.querySelectorAll(FOCUSABLE);
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  // Move focus into the menu when it opens, and restore it to the toggle when
  // it closes. Skip the initial mount so the toggle isn't focused before the
  // user has interacted with it.
  const hasOpenedRef = useRef(false);
  useEffect(() => {
    if (isMenuOpen) {
      hasOpenedRef.current = true;
      mobileMenuRef.current?.focus();
    } else if (hasOpenedRef.current) {
      toggleRef.current?.focus();
    }
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <motion.header
      className={`nav${scrolled ? " scrolled" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-inner">
        <a className="nav-brand" href="#hero">
          {resumeData.name}
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.id} className="nav-link" href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-cta" href="#contact">
            Start a project
          </a>

          <button
            ref={toggleRef}
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
            onClick={closeMenu}
          >
            <motion.nav
              ref={mobileMenuRef}
              className="nav-mobile-menu"
              aria-label="Mobile"
              tabIndex={-1}
              initial={{ y: "-16px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-16px", opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  className="nav-mobile-link"
                  href={`#${link.id}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="nav-cta nav-cta-mobile"
                href="#contact"
                onClick={closeMenu}
              >
                Start a project
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
