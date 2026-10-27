import { FiCheckCircle, FiClock } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Development.css";

const items = [
  {
    provider: "CORVIT",
    title: "Full-Stack Development",
    status: "Completed",
    description: "Focused on modern web development and full-stack technologies.",
  },
];

function Development() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="development" className="section section-bg-alt">
      <div className="container">
        <span className="section-eyebrow">Professional Development</span>
        <h2 className="section-title">Continuous Learning</h2>

        <div
          ref={ref}
          className={`development-grid reveal ${isVisible ? "is-visible" : ""}`}
        >
          {items.map((item, index) => (
          <div className="development-card" key={item.title}>
            <div className="development-index">0{index + 1}</div>
              <div className="development-status">
                {item.status === "Completed" ? (
                  <FiCheckCircle color="#2f9e5c" />
                ) : (
                  <FiClock color="#4a47e0" />
                )}
                <span>{item.status}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="development-provider">{item.provider}</p>
              <p className="development-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Development;