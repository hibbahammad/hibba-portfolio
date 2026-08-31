import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import siteConfig from "../data/siteConfig";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{siteConfig.name}</p>
          <p className="footer-role">
            {siteConfig.role} | {siteConfig.focus}
          </p>
          <p className="footer-location">{siteConfig.location}</p>
        </div>

        <div className="footer-socials">
          {siteConfig.linkedin && (
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          )}
          {siteConfig.github && (
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
          )}
          <a href={`mailto:${siteConfig.email}`} aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>
      </div>

      <p className="footer-copyright">
        © 2026 {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;