import { FiAward, FiBookOpen } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Education.css";

function Education() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="education" className="section">
      <div className="container">
        <span className="section-eyebrow">Education</span>
        <h2 className="section-title">Academic Background</h2>

        <div ref={ref} className={`education-list reveal ${isVisible ? "is-visible" : ""}`}>
          <article className="education-card"><div className="education-icon"><FiAward /></div><div><span className="education-year">2023 — 2025</span><h3>ADP Computer Science</h3><p className="education-institute">Riphah International University Lahore</p><p className="education-detail">CGPA 3.41 / 4.00 (85%)</p></div></article>
          <article className="education-card"><div className="education-icon"><FiBookOpen /></div><div><span className="education-year">Previous education</span><h3>ICS Statistics</h3><p className="education-institute">Islamia College Lahore</p></div></article>
          <article className="education-card"><div className="education-icon"><FiBookOpen /></div><div><span className="education-year">Matriculation</span><h3>Computer Science</h3><p className="education-institute">Madrassa Tul Binnat Lahore</p></div></article>
        </div>
      </div>
    </section>
  );
}

export default Education;