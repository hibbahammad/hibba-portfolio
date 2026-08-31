import skills from "../data/skills";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Skills.css";

function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="section section-bg-alt">
      <div className="container">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">What I work with</h2>
        <p className="section-subtitle">
          Tools and technologies I use across the frontend, backend, and
          AI-driven parts of a project.
        </p>

        <div
          ref={ref}
          className={`skills-grid reveal ${isVisible ? "is-visible" : ""}`}
        >
          {skills.map((group) => (
            <div className="skills-card" key={group.category}>
              <h3 className="skills-card-title">{group.category}</h3>
              <div className="skills-tags">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span className="skills-tag" key={item.name}>
                      <Icon size={15} />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;