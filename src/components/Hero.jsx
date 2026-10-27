import { FiArrowRight, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import siteConfig from "../data/siteConfig";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow">Available for thoughtful builds · {siteConfig.location}</span>
          <h1 className="hero-title">Hi, I&apos;m <span>Hibba.</span><br />I build for the <em>web.</em></h1>
          <p className="hero-role">
            {siteConfig.role} · {siteConfig.focus}
          </p>
          <p className="hero-summary">
            {siteConfig.summary}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="btn btn-quiet">
              <FaGithub /> GitHub
            </a>
          </div>

          <div className="hero-socials">
            {siteConfig.linkedin ? (
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            ) : null}

            {siteConfig.github ? (
              <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            ) : null}

            <a href={"mailto:" + siteConfig.email} aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>
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
              <div>&nbsp;&nbsp;focus: 'MERN Stack Development',</div>
              <div>&nbsp;&nbsp;stack: ['React', 'Express', 'Node.js', 'MongoDB'],</div>
              <div>&nbsp;&nbsp;location: 'Lahore, PK',</div>
              <div>&nbsp;&nbsp;available: <span className="tok-bool">true</span></div>
              <div>{"}"};</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;