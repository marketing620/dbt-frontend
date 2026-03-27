"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Modern SaaS Hero Section */}
      <section
        className="position-relative overflow-hidden d-flex flex-column justify-content-center"
        style={{
          backgroundColor: "#0f172a",
          minHeight: "40vh",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div
          className="container position-relative z-2 text-center text-white"
          style={{ maxWidth: "900px" }}
          data-aos="fade-in"
        >
          <div
            className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span
              className="badge rounded-pill fw-bold"
              style={{ backgroundColor: "#2563eb", color: "#fff" }}
            >
              Contact Us
            </span>
            <span className="fs-6 fw-medium text-white">
              We are here to help
            </span>
          </div>

          <h1
            className="display-3 fw-bold mb-4 text-white"
            style={{
              letterSpacing: "-1px",
              lineHeight: "1.1",
            }}
          >
            Reach out to our dental{" "}
            <span style={{ color: "#d4af37" }}>billing experts today.</span>
          </h1>
          <p
            className="lead mx-auto mb-5"
            style={{
              maxWidth: "800px",
              fontSize: "1.25rem",
              lineHeight: "1.8",
              color: "#e2e8f0",
            }}
          >
            We are here to answer your questions and help your practice thrive.
            Connect with our billing professionals below.
          </p>
        </div>

        {/* Decorative background element background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none"
          style={{ zIndex: 1, opacity: 0.15 }}
        >
          <div
            className="position-absolute rounded-circle bg-white"
            style={{
              width: "500px",
              height: "500px",
              top: "-150px",
              right: "-100px",
              filter: "blur(60px)",
            }}
          ></div>
          <div
            className="position-absolute rounded-circle"
            style={{
              width: "400px",
              height: "400px",
              bottom: "-100px",
              left: "-100px",
              filter: "blur(80px)",
              backgroundColor: "#2563eb",
            }}
          ></div>
        </div>
      </section>

      {/* Contact Info Bento Layout */}
      <section
        className="py-5"
        style={{ backgroundColor: "#f8fafc" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container py-5 mt-4">
          <div
            className="row g-4 justify-content-center"
            style={{ marginTop: "-120px", position: "relative", zIndex: 5 }}
          >
            {/* Phone Card */}
            <div className="col-12 col-md-4">
              <div
                className="h-100 p-5 bg-white rounded-4 shadow-sm border border-1 text-center"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  <i className="fa-solid fa-phone fs-3"></i>
                </div>
                <h3 className="fw-bold mb-3 h4" style={{ color: "#0f172a" }}>
                  Call Us
                </h3>
                <p className="fs-6 mb-3" style={{ color: "#475569" }}>
                  Speak directly with a specialist.
                </p>
                <a
                  href="tel:+14754346464"
                  className="fw-bold fs-5 text-decoration-none"
                  style={{ color: "#2563eb" }}
                >
                  +1 (475) 434-6464
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="col-12 col-md-4">
              <div
                className="h-100 p-5 bg-white rounded-4 shadow-sm border border-1 text-center"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  <i className="fa-solid fa-envelope fs-3"></i>
                </div>
                <h3 className="fw-bold mb-3 h4" style={{ color: "#0f172a" }}>
                  Email Us
                </h3>
                <p className="fs-6 mb-3" style={{ color: "#475569" }}>
                  We reply within 24 hours.
                </p>
                <a
                  href="mailto:admin@dentalbilingteam.com"
                  className="fw-bold fs-5 text-decoration-none text-break"
                  style={{ color: "#2563eb" }}
                >
                  admin@dentalbilingteam.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="col-12 col-md-4">
              <div
                className="h-100 p-5 bg-white rounded-4 shadow-sm border border-1 text-center"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  <i className="fa-solid fa-location-dot fs-3"></i>
                </div>
                <h3 className="fw-bold mb-3 h4" style={{ color: "#0f172a" }}>
                  Visit Us
                </h3>
                <p className="fs-6 mb-3" style={{ color: "#475569" }}>
                  Corporate Headquarters
                </p>
                <span className="fw-bold fs-5" style={{ color: "#2563eb" }}>
                  Brookfield, CT 06804
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-5 bg-white"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container py-5">
          <div className="row g-5 align-items-stretch">
            {/* Left Column: Form */}
            <div className="col-12 col-lg-7">
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#0f172a", letterSpacing: "-0.5px" }}
                data-aos="fade-up"
              >
                Send Us A Message
              </h2>
              <p
                className="fs-5 mb-5"
                style={{ color: "#475569", lineHeight: "1.7" }}
              >
                Whether you need a free revenue cycle consultation, have questions
                about our credentialing process, or want to explore outsourcing
                options, fill out the form below.
              </p>

              {isSuccess && (
                <div
                  className="alert alert-success d-flex align-items-center rounded-3 mb-4 p-4 border-0"
                  style={{ backgroundColor: "#dcfce7", color: "#166534" }}
                  role="alert"
                >
                  <i className="fa-solid fa-circle-check fs-4 me-3"></i>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <br />
                    One of our billing specialists will contact you shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="row g-4 p-0">
                <div className="col-md-6">
                  <label
                    htmlFor="name"
                    className="form-label fw-bold small"
                    style={{ color: "#0f172a" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg border-1"
                    style={{
                      backgroundColor: "#f8fafc",
                      borderColor: "#e2e8f0",
                      color: "#0f172a",
                    }}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr. John Doe"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="email"
                    className="form-label fw-bold small"
                    style={{ color: "#0f172a" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg border-1"
                    style={{
                      backgroundColor: "#f8fafc",
                      borderColor: "#e2e8f0",
                      color: "#0f172a",
                    }}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@dentalpractice.com"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="phone"
                    className="form-label fw-bold small"
                    style={{ color: "#0f172a" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-lg border-1"
                    style={{
                      backgroundColor: "#f8fafc",
                      borderColor: "#e2e8f0",
                      color: "#0f172a",
                    }}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="subject"
                    className="form-label fw-bold small"
                    style={{ color: "#0f172a" }}
                  >
                    Subject Inquiry *
                  </label>
                  <select
                    className="form-select form-select-lg border-1"
                    style={{
                      backgroundColor: "#f8fafc",
                      borderColor: "#e2e8f0",
                      color: "#0f172a",
                    }}
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a topic...
                    </option>
                    <option value="Free Consultation">
                      Request Free Billing Consultation
                    </option>
                    <option value="General Billing">
                      General Billing Services
                    </option>
                    <option value="Credentialing">Credentialing</option>
                    <option value="AR Recovery">Aging AR Recovery</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="message"
                    className="form-label fw-bold small"
                    style={{ color: "#0f172a" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control border-1"
                    style={{
                      backgroundColor: "#f8fafc",
                      borderColor: "#e2e8f0",
                      color: "#0f172a",
                    }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="How can we help maximize your revenue..."
                  ></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-lg w-100 text-white py-3 rounded-pill fw-bold shadow-sm"
                    style={{
                      backgroundColor: "#2563eb",
                      letterSpacing: "0.5px",
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Image */}
            <div className="col-12 col-lg-5 text-center d-flex align-items-center">
              <div
                className="rounded-4 overflow-hidden w-100 shadow-lg"
                style={{
                  height: "100%",
                  minHeight: "500px",
                  background: "url('/images/consultant.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA Section */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{ backgroundColor: "#212529" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container py-5 position-relative z-2 text-center text-white">
          <div
            className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span className="fs-6 fw-medium text-white">Let's talk</span>
          </div>
          <h2
            className="display-4 fw-bold mb-4 text-white"
            style={{ letterSpacing: "-1px" }}
            data-aos="fade-up"
          >
            Dental Billing Without The Hassle
          </h2>
          <p
            className="lead mx-auto mb-5 fw-light"
            style={{ maxWidth: "650px", opacity: 0.9 }}
          >
            Don't let denied claims and unpaid AR slow your practice down. Let
            our team of professionals optimize your revenue.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link
              href="/services"
              className="btn btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                fontSize: "1.1rem",
                border: "none",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Decorative Circles */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "600px",
            height: "600px",
            backgroundColor: "rgba(255,255,255,0.02)",
            top: "-300px",
            right: "-200px",
            zIndex: 1,
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        ></div>
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#2563eb",
            opacity: 0.25,
            bottom: "-200px",
            left: "-100px",
            zIndex: 1,
            filter: "blur(60px)",
          }}
        ></div>
      </section>
    </>
  );
}
