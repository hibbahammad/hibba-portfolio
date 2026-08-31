import { FiAward } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Education.css";

function Education() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="education" className="section">
      <div className="container">
        <span className="section-eyebrow">Education</span>
        <h2 className="section-title">Academic Background</h2>

        <div
          ref={ref}
          className={`education-card reveal ${isVisible ? "is-visible" : ""}`}
        >
          <div className="education-icon">
            <FiAward size={26} />
          </div>
          <div>
            <h3>Associate Degree Program (ADP) — Computer Science</h3>
            <p className="education-institute">
              Riphah International University, Lahore
            </p>
            <div className="education-meta">
              <span>2023 – 2025</span>
              <span className="education-dot">•</span>
              <span>CGPA: 3.41 / 4.00 (85%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;