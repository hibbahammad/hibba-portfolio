import useScrollReveal from "../hooks/useScrollReveal";
import "./About.css";

function About() {
	const [ref, isVisible] = useScrollReveal();

	return (
		<section id="about" className="section">
			<div className="container">
				<div ref={ref} className={`about-inner reveal ${isVisible ? "is-visible" : ""}`}>
					<div>
						<span className="section-eyebrow">About Me</span>
						<h2 className="section-title">Building useful things with a curious mind.</h2>
						<div className="about-mark">HH<span>／</span>01</div>
					</div>

					<div className="about-text">
						<p>I&apos;m a Full-Stack Developer focused on building modern web applications using JavaScript, React, Node.js, Express, MongoDB, and modern development tools.</p>
						<p>I care about responsive interfaces that feel clear, considered, and useful, and I continue to build my experience across APIs, databases, and authentication.</p>
						<div className="about-focuses">
							<span>Full-Stack Development</span><span>MERN Stack</span><span>REST APIs</span><span>Responsive UI</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;