import { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import siteConfig from "../data/siteConfig";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Contact.css";

function Contact() {
  const [ref] = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const updated = { ...formData };
    updated[e.target.name] = e.target.value;
    setFormData(updated);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section section-bg-alt">
      <div className="container">
        <div ref={ref} className="contact-inner reveal is-visible">

          <div className="contact-info">
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title">Let's Build Something Meaningful</h2>
            <p className="section-subtitle">
              Available for opportunities involving full-stack development,
              AI-powered applications, automation, and modern web solutions.
            </p>

            <div className="contact-links">
              <a href={"mailto:" + siteConfig.email}>
                <FiMail /> {siteConfig.email}
              </a>

              <a href={"https://wa.me/" + siteConfig.whatsapp.replace("+", "")} target="_blank" rel="noreferrer">
                <FaWhatsapp /> {siteConfig.whatsappDisplay}
              </a>

              {siteConfig.linkedin ? (
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
              ) : null}

              {siteConfig.github ? (
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              ) : null}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
              {errors.name ? <span className="form-error">{errors.name}</span> : null}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
              {errors.email ? <span className="form-error">{errors.email}</span> : null}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
              {errors.message ? <span className="form-error">{errors.message}</span> : null}
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message <FiSend />
            </button>

            {submitted ? (
              <p className="form-success">Thanks! Your message has been noted.</p>
            ) : null}

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;