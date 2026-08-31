import useScrollReveal from "../hooks/useScrollReveal";
import "./About.css";

function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          ref={ref}
          className={`about-inner reveal ${isVisible ? "is-visible" : ""}`}
        >
          <div>
            <span className="section-eyebrow">About Me</span>
            <h2 className="section-title">
              Full-stack development, with an eye on AI.
            </h2>
          </div>

          <div className="about-text">
            <p>
              I'm a Computer Science graduate with a strong interest in
              full-stack web development, AI solutions, automation, and AI
              agents. My core stack is built around React on the frontend and
              Node.js, Express.js, and MongoDB on the backend — connected
              through clean, well-structured REST APIs.
            </p>
            <p>
              Alongside traditional development, I'm building expertise at
              the intersection of full-stack engineering and artificial
              intelligence: AI-powered applications, chatbots, agents, and
              automation workflows. I enjoy using AI-assisted tools to design
              and prototype faster, without losing sight of solid engineering
              fundamentals.
            </p>
            <p>
              I'm currently looking for opportunities as a Full-Stack or
              Frontend Developer — remote or on-site — where I can keep
              growing across both web development and AI-powered products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;