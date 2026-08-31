import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import projects from "../data/projects";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Projects.css";

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Full-Stack / Web" },
  { key: "ai-assisted", label: "AI-Assisted" },
  { key: "hand-coded", label: "Hand-Coded" },
];

function ProjectPreview() {
  return (
    <div className="project-preview">
      <div className="preview-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="preview-body">
        <div className="preview-block preview-block-wide"></div>
        <div className="preview-row">
          <div className="preview-block"></div>
          <div className="preview-block"></div>
        </div>
        <div className="preview-block preview-block-tall"></div>
      </div>
    </div>
  );
}

function ProjectLiveLink(props) {
  const project = props.project;

  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        Live Demo <FiArrowUpRight />
      </a>
    );
  }

  return (
    <span className="project-link project-link-static">
      Project Details
    </span>
  );
}

function ProjectGithubLink(props) {
  const project = props.project;

  if (!project.github) {
    return null;
  }

  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="project-link"
    >
      <FaGithub /> Code
    </a>
  );
}

function ProjectCard(props) {
  const project = props.project;

  const categoryLabel =
    project.category === "ai-assisted" ? "AI-Assisted Build" : "Hand-Coded";

  return (
    <article className="project-card">
      <ProjectPreview />

      <div className="project-card-body">
        <span className="project-category">{categoryLabel}</span>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="project-actions">
          <ProjectLiveLink project={project} />
          <ProjectGithubLink project={project} />
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [ref] = useScrollReveal();

  let visibleProjects = projects;

  if (activeFilter !== "all") {
    visibleProjects = [];
    for (let i = 0; i < projects.length; i++) {
      const p = projects[i];
      if (p.tags.indexOf(activeFilter) !== -1) {
        visibleProjects.push(p);
      }
    }
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          A mix of hand-coded builds and AI-assisted web applications
          designed and published using AI-powered development tools.
        </p>

        <div className="projects-filters">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            const btnClass = isActive
              ? "filter-btn filter-btn-active"
              : "filter-btn";

            return (
              <button
                key={f.key}
                className={btnClass}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div ref={ref} className="projects-grid reveal is-visible">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
