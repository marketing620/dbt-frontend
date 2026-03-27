"use client";

import Link from "next/link";
import Counter from "@/components/Counter";

export default function About() {
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
          data-aos="fade-down"
          data-aos-duration="1000"
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
              Company Story
            </span>
            <span className="fs-6 fw-medium text-white">Who We Are</span>
          </div>

          <h1
            className="display-3 fw-bold mb-4 text-white"
            style={{ letterSpacing: "-1px", lineHeight: "1.1" }}
          >
            We handle billing, <br />
            <span style={{ color: "#d4af37" }}>you focus on dentistry.</span>
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
            We are a team of dedicated dental billing professionals committed to
            maximizing your practice's revenue and reducing administrative
            burdens.
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

      {/* About Us & Mission - Bento Layout */}
      <section
        className="py-5"
        style={{ backgroundColor: "#f8fafc" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container py-5 mt-4">
          <div className="row g-5 align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#0f172a", letterSpacing: "-0.5px" }}
                data-aos="fade-up"
              >
                Our mission is to empower dental practices nationwide.
              </h2>
              <p
                className="fs-5 mb-4"
                style={{ color: "#334155", lineHeight: "1.8" }}
              >
                Our team delivers reliable dental billing services in the USA,
                allowing dentists and staff to dedicate more time to patients.
                At the same time, we manage claims, documentation, and insurance
                coordination behind the scenes.
              </p>
              <p
                className="fs-5 mb-5"
                style={{ color: "#334155", lineHeight: "1.8" }}
              >
                With structured systems and proactive follow-ups, we help
                eliminate delays and improve overall collections.
              </p>

              <div className="d-flex gap-4">
                {/* Stats Minimal */}
                <div>
                  <h3
                    className="display-6 fw-bold mb-1"
                    style={{ color: "#e2e8f0" }}
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    <Counter end={40} suffix="+" />
                  </h3>
                  <p
                    className="fw-medium text-uppercase small"
                    style={{ color: "#475569", letterSpacing: "1px" }}
                  >
                    National Awards
                  </p>
                </div>
                <div>
                  <h3
                    className="display-6 fw-bold mb-1"
                    style={{ color: "#2563eb" }}
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    <Counter end={220} suffix="+" />
                  </h3>
                  <p
                    className="fw-medium text-uppercase small"
                    style={{ color: "#475569", letterSpacing: "1px" }}
                  >
                    Expert Doctors
                  </p>
                </div>
              </div>
            </div>

            {/* Right Bento Boxes */}
            <div className="col-lg-6">
              <div className="d-flex flex-column gap-4">
                <div
                  className="p-5 bg-white rounded-4 shadow-sm border border-1"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "56px",
                      height: "56px",
                      backgroundColor: "#dbeafe",
                      color: "#2563eb",
                    }}
                  >
                    <i className="fa-solid fa-bullseye fs-4"></i>
                  </div>
                  <h3 className="fw-bold mb-3 h4" style={{ color: "#0f172a" }}>
                    Our Mission
                  </h3>
                  <p
                    className="mb-0 fs-6"
                    style={{ color: "#475569", lineHeight: "1.7" }}
                  >
                    To provide accurate and transparent billing solutions that
                    maximize reimbursements, reduce denials, and strengthen
                    long-term financial stability for dental practices.
                  </p>
                </div>

                <div
                  className="p-5 bg-white rounded-4 shadow-sm border border-1"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "56px",
                      height: "56px",
                      backgroundColor: "#f1f5f9",
                      color: "#2563eb",
                    }}
                  >
                    <i className="fa-solid fa-eye fs-4"></i>
                  </div>
                  <h3 className="fw-bold mb-3 h4" style={{ color: "#0f172a" }}>
                    Our Vision
                  </h3>
                  <p
                    className="mb-0 fs-6"
                    style={{ color: "#475569", lineHeight: "1.7" }}
                  >
                    To become the most dependable dental insurance billing
                    partner, recognized for innovation, accountability, and
                    measurable revenue growth for practices nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-5 bg-white"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container py-5 mt-4">
          <div className="row mb-5 text-center justify-content-center">
            <div className="col-lg-8">
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0f172a", letterSpacing: "-0.5px" }}
                data-aos="fade-up"
              >
                What Drives Us Forward
              </h2>
              <p className="fs-5 mb-0" style={{ color: "#475569" }}>
                The core principles that guide our work every single day.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Integrity",
                icon: "fa-shield-halved",
                text: "We operate with the highest level of honesty and transparency in every claim we submit and every report we generate.",
              },
              {
                title: "Excellence",
                icon: "fa-star",
                text: "We strive for perfection, ensuring zero-error billing to get you paid faster and maximize your revenue cycle.",
              },
              {
                title: "Partnership",
                icon: "fa-handshake",
                text: "We don't just work for you; we work with you as an extension of your own in-house dental team.",
              },
              {
                title: "Innovation",
                icon: "fa-lightbulb",
                text: "We constantly adapt to the latest coding changes and billing technology to keep your practice ahead of the curve.",
              },
            ].map((value, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div
                  className="card h-100 border-0 shadow-sm p-4 text-center rounded-4"
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="d-flex justify-content-center mb-4 mt-2">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center shadow-sm bg-white"
                      style={{
                        width: "70px",
                        height: "70px",
                        color: "#2563eb",
                      }}
                    >
                      <i className={`fa-solid ${value.icon} fs-3`}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3 h5" style={{ color: "#0f172a" }}>
                    {value.title}
                  </h4>
                  <p
                    className="small mb-0"
                    style={{
                      color: "#475569",
                      lineHeight: "1.7",
                      fontSize: "1rem",
                    }}
                  >
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "#f8fafc" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container py-5">
          <div className="row mb-5 text-center justify-content-center">
            <div className="col-lg-8">
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0f172a", letterSpacing: "-0.5px" }}
                data-aos="fade-up"
              >
                The Experts Behind Your Success
              </h2>
              <p className="fs-5 mb-0" style={{ color: "#475569" }}>
                Meet the leadership team dedicated to optimizing your revenue
                cycle.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                name: "Farha Ahmed",
                role: "Project Manager",
                desc: "Oversees all billing operations and ensures strategic goals are met for every practice securely.",
              },
              {
                name: "Arthur Sajid HR",
                role: "Human Resources / Client Relations",
                desc: "Maintains open communication with dental practices and ensures top-tier service delivery.",
              },
              {
                name: "Alex Ijaz",
                role: "Group Manager",
                desc: "Stays ahead of billing regulations and manages our specialized group of billing experts.",
              },
            ].map((member, idx) => (
              <div key={idx} className="col-12 col-md-4 text-center">
                <div
                  className="card border-0 rounded-4 shadow-sm h-100 bg-white"
                  style={{ border: "1px solid #e2e8f0" }}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                    className="card-body p-5"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div
                      className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                      style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#dbeafe",
                      }}
                    >
                      <i
                        className="fa-solid fa-user-tie"
                        style={{ fontSize: "2.5rem", color: "#2563eb" }}
                      ></i>
                    </div>
                    <h5
                      className="fw-bold mb-1 h4"
                      style={{ color: "#0f172a" }}
                    >
                      {member.name}
                    </h5>
                    <p
                      className="fw-semibold mb-4"
                      style={{ color: "#2563eb" }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="px-lg-3 mb-0"
                      style={{
                        color: "#475569",
                        lineHeight: "1.8",
                        fontSize: "1.05rem",
                      }}
                    >
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
            <span className="fs-6 fw-medium text-white">Get Started</span>
          </div>
          <h2
            className="display-4 fw-bold mb-4 text-white"
            style={{ letterSpacing: "-1px" }}
            data-aos="fade-up"
          >
            Ready to Grow Your Practice?
          </h2>
          <p
            className="lead mx-auto mb-5 fw-light"
            style={{ maxWidth: "650px", opacity: 0.9 }}
          >
            Join the hundreds of dental practices nationwide that trust us to
            handle their revenue cycle. Let's maximize your collections
            together.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <Link
              href="/contact"
              className="btn btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                fontSize: "1.1rem",
                border: "none",
              }}
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                fontSize: "1.1rem",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              Contact Us
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
