import { FiArrowRight, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import siteConfig from "../data/siteConfig";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow">{siteConfig.location}</span>
          <h1 className="hero-title">{siteConfig.name}</h1>
          <p className="hero-role">
            {siteConfig.role} · {siteConfig.focus}
          </p>
          <p className="hero-summary">
            Building responsive web applications with React and Node.js,
            while exploring AI-powered tools, chatbots, and automation to
            create smarter digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            {siteConfig.linkedin ? (
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin size={20} />
              </a>
            ) : null}

            {siteConfig.github ? (
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                <FaGithub size={20} />
              </a>
            ) : null}

            <a href={"mailto:" + siteConfig.email}>
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-panel">
            <div className="code-panel-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="code-panel-name">profile.js</span>
            </div>
            <div className="code-panel-body">
              <div>const developer = {"{"}</div>
              <div>&nbsp;&nbsp;name: 'Hibba Hammad',</div>
              <div>&nbsp;&nbsp;role: 'Full-Stack Developer',</div>
              <div>&nbsp;&nbsp;focus: 'AI & Automation',</div>
              <div>&nbsp;&nbsp;stack: ['React', 'Node.js', 'MongoDB'],</div>
              <div>&nbsp;&nbsp;location: 'Lahore, PK',</div>
              <div>&nbsp;&nbsp;available: true</div>
              <div>{"}"};</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;