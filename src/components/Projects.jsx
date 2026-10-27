import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import projects from "../data/projects";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Projects.css";

const filters = [
  { key: "all", label: "All Projects" },
  { key: "web-app", label: "Web Applications" },
  { key: "hand-coded", label: "Hand-Coded" },
];

function ProjectPreview({ project }) {
  return (
    <div className="project-preview" data-project={project.preview} aria-hidden="true">
      <div className="preview-frame">
        <div className="preview-bar">
          <span></span>
          <span></span>
          <span></span>
          <span className="preview-address"></span>
        </div>
        <div className="preview-content">
          <span className="preview-index">{String(project.id).padStart(2, "0")}</span>
          <span className="preview-name">{project.name}</span>
          <span className="preview-subtitle">{project.subtitle}</span>
          <span className="preview-rule"></span>
        </div>
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
        rel="noopener noreferrer"
        className="project-link"
      >
        Live Demo <FiArrowUpRight />
      </a>
    );
  }

  return null;
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
      rel="noopener noreferrer"
      className="project-link"
    >
      <FaGithub /> GitHub Repository
    </a>
  );
}

function ProjectCard(props) {
  const project = props.project;

  const categoryLabel =
    project.category === "web-app"
      ? "Web Application"
      : project.category === "concept"
      ? "Concept Project"
      : "Web Project";

  return (
    <article className="project-card">
      <ProjectPreview project={project} />

      <div className="project-card-body">
        <div className="project-labels">
          <span className="project-category">{categoryLabel}</span>
          {project.status ? <span className="project-status">{project.status}</span> : null}
        </div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>

        {project.tech && project.tech.length > 0 ? (
          <ul className="project-tech" aria-label="Technologies">
            {project.tech.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}

        {project.liveUrl || project.github ? (
          <div className="project-actions" aria-label={`${project.name} links`}>
            <ProjectLiveLink project={project} />
            <ProjectGithubLink project={project} />
          </div>
        ) : (
          <div className="project-actions project-actions-showcase" aria-label={`${project.name} status`}>
            <span className="project-preview-note">{project.status || "Design Showcase"}</span>
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [ref, isVisible] = useScrollReveal();

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.tags.includes(activeFilter) || project.category === activeFilter
        );

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          Web projects and applications built across frontend development,
          APIs, and browser-based data persistence.
        </p>

        <div className="projects-filters" role="group" aria-label="Filter projects">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;

            return (
              <button
                key={f.key}
                type="button"
                className={`filter-btn${isActive ? " filter-btn-active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
                aria-pressed={isActive}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}.
        </p>

        <div ref={ref} className={`projects-grid reveal ${isVisible ? "is-visible" : ""}`}>
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
