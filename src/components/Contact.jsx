import { useState } from "react";
import { FiMail, FiSend, FiCopy, FiCheck } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import siteConfig from "../data/siteConfig";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Contact.css";

function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(siteConfig.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const subject = `Portfolio inquiry from ${formData.name.trim()}`;
      const body = [
        `Name: ${formData.name.trim()}`,
        `Email: ${formData.email.trim()}`,
        "",
        formData.message.trim(),
      ].join("\n");

      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="section section-bg-alt">
      <div className="container">
        <div ref={ref} className={`contact-inner reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="contact-info">
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title">Let&apos;s Build Something Meaningful</h2>
            <p className="section-subtitle">
              Available for opportunities involving full-stack development,
              MERN applications, and modern web solutions.
            </p>

            <div className="contact-links">
              <div className="contact-email-row">
                <a href={"mailto:" + siteConfig.email} aria-label={`Email ${siteConfig.email}`}>
                  <FiMail /> {siteConfig.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="contact-copy-btn"
                  aria-label="Copy email address to clipboard"
                  title="Copy email address"
                >
                  {copied ? <FiCheck color="#38bdf8" /> : <FiCopy />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

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

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
              {errors.name ? <span className="form-error" id="name-error">{errors.name}</span> : null}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
              {errors.email ? <span className="form-error" id="email-error">{errors.email}</span> : null}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined}></textarea>
              {errors.message ? <span className="form-error" id="message-error">{errors.message}</span> : null}
            </div>

            <button type="submit" className="btn btn-primary">
              Open Email App <FiSend />
            </button>

            <p className="form-success" role="status" aria-live="polite">
              {submitted
                ? "Your email application should open with your message details. Review and send the email there."
                : "Submitting opens your email application; your message is not sent or stored by this website."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;