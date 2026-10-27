import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import siteConfig from "../data/siteConfig";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Development", href: "#development" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const toggleRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-35% 0px -55%" }
    );
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          {siteConfig.name.toUpperCase()}
        </a>

        <nav id="primary-navigation" className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={activeSection === link.href.slice(1) ? "active" : ""}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-socials">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>

        <button
          ref={toggleRef}
          className="navbar-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;