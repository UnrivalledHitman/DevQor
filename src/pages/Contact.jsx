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
  const [submitCount, setSubmitCount] = useState(0);

  const maxSubmitAttempts = 2;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitCount >= maxSubmitAttempts) {
      setError(
        "Maximum submission attempts reached. Please refresh the page or contact us directly.",
      );
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSubmitCount((prev) => prev + 1);

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
                        setSubmitCount(0);
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

                    {/* Name + Email */}
                    <div className="contact-form__row">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          className="form-input"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="emailAddress"
                          className="form-input"
                          placeholder="john@example.com"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Company + Service */}
                    <div className="contact-form__row">
                      <div className="form-group">
                        <label className="form-label">Company</label>
                        <input
                          type="text"
                          name="company"
                          className="form-input"
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Service Interested In
                        </label>

                        <select
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

                    {/* Budget */}
                    <div className="form-group">
                      <label className="form-label">Budget Range</label>

                      <select
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

                    {/* Project Details */}
                    <div className="form-group">
                      <label className="form-label">Project Details *</label>

                      <textarea
                        name="projectDetails"
                        className="form-input form-textarea"
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={formData.projectDetails}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg contact-form__submit hover-shine"
                      disabled={
                        isSubmitting || submitCount >= maxSubmitAttempts
                      }
                    >
                      <span>
                        {isSubmitting
                          ? "Sending..."
                          : submitCount >= maxSubmitAttempts
                            ? "Limit Reached"
                            : "Send Message"}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
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
