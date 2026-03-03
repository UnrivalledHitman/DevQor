import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { API_ENDPOINTS } from "../config";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    company: "",
    serviceInterested: "",
    budgetRange: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err.message || "Failed to submit the form. Please try again.");
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "contact@devqor.in",
      link: "mailto:contact@devqor.in",
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+91 9804804973",
      link: "tel:+919804804973",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Kolkata, West Bengal, India",
      link: "#",
    },
  ];

  const services = [
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Cloud Solutions",
    "UI/UX Design",
    "Digital Transformation",
    "Maintenance & Support",
    "Other",
  ];

  const budgetRanges = [
    "Less than ₹1,00,000",
    "₹1,00,000 - ₹2,50,000",
    "₹2,50,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000+",
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <div className="contact-hero__glow"></div>
        </div>
        <div className="container">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title animate-fadeInUp">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="contact-hero__description animate-fadeInUp delay-200">
              Ready to start your next project? We'd love to hear from you. Fill
              out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <ScrollReveal animation="fadeLeft">
              <div className="contact-info">
                <h2 className="contact-info__title">
                  Let's Start a Conversation
                </h2>
                <p className="contact-info__description">
                  Whether you have a question about our services, pricing, or
                  just want to chat about your project ideas, our team is ready
                  to answer all your questions.
                </p>

                <div className="contact-info__list">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="contact-info__item hover-lift hover-glow"
                    >
                      <div className="contact-info__icon">{info.icon}</div>
                      <div>
                        <span className="contact-info__label">
                          {info.title}
                        </span>
                        <span className="contact-info__value">
                          {info.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="contact-info__hours">
                  <h3>Office Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                  <p>Weekend: By appointment only</p>
                </div>

                <div className="contact-info__social">
                  <h3>Follow Us</h3>
                  <div className="contact-info__social-links">
                    <a href="#" aria-label="LinkedIn" className="hover-scale">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover-scale">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="GitHub" className="hover-scale">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal animation="fadeRight" delay={200}>
              <div className="contact-form-wrapper">
                {submitted ? (
                  <div className="contact-success">
                    <div className="contact-success__icon">✓</div>
                    <h3>Thank You!</h3>
                    <p>
                      Your message has been sent successfully. We'll get back to
                      you within 24 hours.
                    </p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          emailAddress: "",
                          company: "",
                          serviceInterested: "",
                          budgetRange: "",
                          projectDetails: "",
                        });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <h2 className="contact-form__title">Send us a Message</h2>

                    {error && (
                      <div
                        className="form-error"
                        style={{
                          padding: "12px",
                          marginBottom: "20px",
                          backgroundColor: "#fee",
                          color: "#c33",
                          borderRadius: "4px",
                          border: "1px solid #fcc",
                        }}
                      >
                        {error}
                      </div>
                    )}

                    <div className="contact-form__row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="fullName">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className="form-input"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="emailAddress">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          className="form-input"
                          placeholder="john@example.com"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="contact-form__row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="company">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="form-input"
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="form-label"
                          htmlFor="serviceInterested"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="serviceInterested"
                          name="serviceInterested"
                          className="form-input"
                          value={formData.serviceInterested}
                          onChange={handleChange}
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="budgetRange">
                        Budget Range
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        className="form-input"
                        value={formData.budgetRange}
                        onChange={handleChange}
                      >
                        <option value="">Select your budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="projectDetails">
                        Project Details *
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        className="form-input form-textarea"
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={formData.projectDetails}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg contact-form__submit hover-shine"
                      disabled={isSubmitting}
                    >
                      <span>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      {!isSubmitting && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <ScrollReveal animation="fadeUp">
          <div className="map-placeholder">
            <div className="map-placeholder__content">
              <div className="map-placeholder__icon">📍</div>
              <h3>Kolkata, West Bengal</h3>
              <p>India</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

export default Contact;
