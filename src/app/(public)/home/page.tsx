"use client";

import Link from "next/link";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div>
      {/* SaaS Hero Section - Modern Full Height */}
      <section
        className="position-relative overflow-hidden d-flex flex-column justify-content-center"
        style={{
          backgroundColor: "#0f172a",
          minHeight: "100vh",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div
              className="col-12 col-lg-7 text-center text-lg-start mb-5 mb-lg-0"
              data-aos="fade-right"
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
                  Dental Billing Team
                </span>
                <span className="fs-6 fw-medium text-white">
                  Streamline Your Revenue
                </span>
              </div>

              <h1
                className="display-3 fw-bold mb-4 text-white"
                style={{ letterSpacing: "-1px", lineHeight: "1.15" }}
              >
                Stop chasing claims. <br className="d-none d-md-block" />
                Start increasing your{" "}
                <span style={{ color: "#d4af37" }}>clinic's revenue.</span>
              </h1>

              <p
                className="lead mb-5 fw-light"
                style={{
                  maxWidth: "600px",
                  fontSize: "1.25rem",
                  lineHeight: "1.8",
                  color: "#e2e8f0",
                }}
              >
                We handle the end-to-end medical and dental billing process,
                eliminating administrative burdens so your team can focus
                entirely on patient care. Reduce denials and maximize your cash
                flow today.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
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
                  href="/services"
                  className="btn btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm"
                  style={{
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    border: "2px solid rgba(255,255,255,0.4)",
                  }}
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Side Visual Graphic */}
            <div
              className="col-12 col-lg-5 position-relative text-center px-lg-4"
              data-aos="fade-left"
            >
              <div
                className="position-relative z-2 rounded-4 overflow-hidden shadow-lg border border-3 border-dark"
                style={{ transform: "rotate(2deg)" }}
              >
                <img
                  src="/images/dental_doctor.png"
                  alt="Dental Professional"
                  className="img-fluid bg-white"
                  style={{ maxHeight: "600px", objectFit: "cover" }}
                />
              </div>

              {/* 3D Floating Element */}
              <div
                className="position-absolute bg-white rounded-4 shadow-lg p-3 d-flex align-items-center gap-3"
                style={{
                  bottom: "40px",
                  left: "-30px",
                  zIndex: 3,
                  border: "1px solid #e2e8f0",
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center bg-success bg-opacity-10"
                  style={{ width: "48px", height: "48px" }}
                >
                  <i className="fa-solid fa-arrow-trend-up text-success fs-5"></i>
                </div>
                <div className="text-start">
                  <p className="mb-0 text-success fw-bold">+ 34% Increase</p>
                  <p className="mb-0 text-muted small fw-medium">
                    Average Collections
                  </p>
                </div>
              </div>

              {/* Ambient Blurs */}
              <div
                className="position-absolute rounded-circle"
                style={{
                  width: "400px",
                  height: "400px",
                  bottom: "-50px",
                  right: "-50px",
                  filter: "blur(80px)",
                  backgroundColor: "#2563eb",
                  zIndex: 0,
                  opacity: 0.4,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Global Background Element */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none"
          style={{ zIndex: 1, opacity: 0.15 }}
        >
          <div
            className="position-absolute rounded-circle bg-white"
            style={{
              width: "600px",
              height: "600px",
              top: "-200px",
              left: "-200px",
              filter: "blur(90px)",
            }}
          ></div>
        </div>
      </section>

      {/* Trusted By / Stats Bar */}
      <section
        className="py-4 border-bottom"
        style={{ backgroundColor: "#ffffff", borderColor: "#f1f5f9" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          <div className="row text-center justify-content-center align-items-center g-4">
            <div
              className="col-12 col-md-3 border-end"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3
                className="display-6 fw-bold mb-1"
                style={{ color: "#0f172a" }}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Counter end={40} suffix="+" />
              </h3>
              <p
                className="fw-medium text-uppercase small"
                style={{ color: "#64748b", letterSpacing: "1px" }}
              >
                National Awards
              </p>
            </div>
            <div
              className="col-12 col-md-3 border-end"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3
                className="display-6 fw-bold mb-1"
                style={{ color: "#0f172a" }}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Counter end={220} suffix="+" />
              </h3>
              <p
                className="fw-medium text-uppercase small"
                style={{ color: "#64748b", letterSpacing: "1px" }}
              >
                Expert Doctors
              </p>
            </div>
            <div
              className="col-12 col-md-3 border-end"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3
                className="display-6 fw-bold mb-1"
                style={{ color: "#0f172a" }}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Counter end={5} suffix="k+" />
              </h3>
              <p
                className="fw-medium text-uppercase small"
                style={{ color: "#64748b", letterSpacing: "1px" }}
              >
                Satisfied Patients
              </p>
            </div>
            <div
              className="col-12 col-md-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3
                className="display-6 fw-bold mb-1"
                style={{ color: "#0f172a" }}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Counter end={8} suffix="k+" />
              </h3>
              <p
                className="fw-medium text-uppercase small"
                style={{ color: "#64748b", letterSpacing: "1px" }}
              >
                Clean Claims
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Our System Works - Bento Box Layout */}
      <section
        className="py-5"
        style={{ backgroundColor: "#f8fafc" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container py-5">
          <div className="row mb-5 text-center justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <p
                className="fw-bold text-uppercase mb-2"
                style={{ color: "#2563eb", letterSpacing: "1px" }}
              >
                The Process
              </p>
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0f172a", letterSpacing: "-0.5px" }}
                data-aos="fade-up"
              >
                Built for Dental Success
              </h2>
              <p className="fs-5 mb-0" style={{ color: "#475569" }}>
                We eliminate the friction between offering care and getting
                paid.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div
                className="card h-100 border-0 shadow-sm rounded-4 p-5 text-start bg-white"
                style={{ border: "1px solid #e2e8f0" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  <i className="fa-solid fa-file-invoice-dollar fs-3"></i>
                </div>
                <h4 className="fw-bold mb-3 h4" style={{ color: "#0f172a" }}>
                  01. Verification
                </h4>
                <p
                  className="mb-0"
                  style={{
                    color: "#475569",
                    lineHeight: "1.7",
                    fontSize: "1.05rem",
                  }}
                >
                  Real-time insurance breakdown to prevent denials and ensure
                  patients are fully covered before the drill turns on.
                </p>
              </div>
            </div>

            <div
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div
                className="card h-100 border-0 shadow-sm rounded-4 p-5 text-start bg-white"
                style={{ border: "1px solid #e2e8f0" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  <i className="fa-solid fa-paper-plane fs-3"></i>
                </div>
                <h4 className="fw-bold mb-3 h4" style={{ color: "#0f172a" }}>
                  02. Submission
                </h4>
                <p
                  className="mb-0"
                  style={{
                    color: "#475569",
                    lineHeight: "1.7",
                    fontSize: "1.05rem",
                  }}
                >
                  Clean claims submitted within 24 hours. We handle
                  cross-coding, attachments, and complex narratives flawlessly.
                </p>
              </div>
            </div>

            <div
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div
                className="card h-100 border-0 shadow-sm rounded-4 p-5 text-start bg-white"
                style={{ border: "1px solid #e2e8f0" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  <i className="fa-solid fa-money-bill-transfer fs-3"></i>
                </div>
                <h4 className="fw-bold mb-3 h4" style={{ color: "#0f172a" }}>
                  03. Revenue Recovery
                </h4>
                <p
                  className="mb-0"
                  style={{
                    color: "#475569",
                    lineHeight: "1.7",
                    fontSize: "1.05rem",
                  }}
                >
                  Aggressive follow-ups on aging AR and immediate denial
                  appeals. Your cashflow stays consistent and predictable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section
        className="py-5 bg-white"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md-8 text-start">
              <p
                className="fw-bold text-uppercase mb-2"
                style={{ color: "#2563eb", letterSpacing: "1px" }}
              >
                Core Solutions
              </p>
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0f172a", letterSpacing: "-0.5px" }}
                data-aos="fade-up"
              >
                Outsource the heavy lifting.
              </h2>
            </div>
            <div className="col-12 col-md-4 text-md-end mt-4 mt-md-0">
              <Link
                href="/services"
                className="btn btn-lg rounded-pill fw-bold shadow-sm px-4"
                style={{
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                }}
              >
                View All Services{" "}
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Accounts Receivable",
                icon: "fa-chart-line",
                link: "/services/accounts-receivable-management",
                desc: "Recover lost revenue with aggressive AR follow-up and aging bucket management.",
              },
              {
                title: "Claims Submission",
                icon: "fa-file-invoice",
                link: "/services/dental-claims-submission",
                desc: "Reduce overhead with accurate, 24-hour clean claim generation and submission.",
              },
              {
                title: "Insurance Verification",
                icon: "fa-shield-halved",
                link: "/services/dental-insurance-verification",
                desc: "Prevent denials before they happen with exhaustive patient eligibility breakdowns.",
              },
              {
                title: "Credentialing",
                icon: "fa-id-badge",
                link: "/services/dental-practice-credentialing",
                desc: "Enroll smoothly with payer networks and maintain strict compliance seamlessly.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="col-12 col-md-6 col-lg-3"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <Link href={service.link} className="text-decoration-none">
                  <div
                    className="card h-100 border-0 shadow-sm p-4 rounded-4 transition-hover-lift"
                    style={{
                      backgroundColor: "#f8fafc",
                      border: "1px solid #f1f5f9",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center mb-4 bg-white shadow-sm"
                      style={{
                        width: "50px",
                        height: "50px",
                        color: "#2563eb",
                      }}
                    >
                      <i className={`fa-solid ${service.icon} fs-5`}></i>
                    </div>
                    <h4
                      className="fw-bold mb-2 h5"
                      style={{ color: "#0f172a" }}
                    >
                      {service.title}
                    </h4>
                    <p
                      className="small mb-0"
                      style={{ color: "#64748b", lineHeight: "1.6" }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Split - Asymmetric */}
      <section
        className="py-5"
        style={{ backgroundColor: "#f8fafc" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container py-5 mt-4">
          <div className="row align-items-center gy-5">
            <div
              className="col-12 col-lg-5 order-2 order-lg-1"
              data-aos="fade-right"
            >
              <div className="position-relative">
                <div
                  className="position-absolute w-100 h-100 rounded-4"
                  style={{
                    backgroundColor: "#2563eb",
                    top: "20px",
                    left: "-20px",
                    zIndex: 0,
                  }}
                ></div>
                <img
                  src="/images/consultant.png"
                  alt="Dental Billing Consultants"
                  className="img-fluid rounded-4 position-relative shadow-lg w-100"
                  style={{ zIndex: 1, objectFit: "cover", minHeight: "500px" }}
                />
              </div>
            </div>

            <div
              className="col-12 col-lg-6 offset-lg-1 order-1 order-lg-2"
              data-aos="fade-left"
            >
              <p
                className="fw-bold text-uppercase mb-2"
                style={{ color: "#2563eb", letterSpacing: "1px" }}
              >
                Our Advantage
              </p>
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#0f172a", letterSpacing: "-0.5px" }}
                data-aos="fade-up"
              >
                We operate as an extension of your own team.
              </h2>
              <p
                className="fs-5 mb-4"
                style={{ color: "#475569", lineHeight: "1.8" }}
              >
                Our dedicated account managers integrate seamlessly with your
                existing practice management software (Open Dental, Dentrix,
                Eaglesoft, etc.) to handle the heavy lifting of revenue cycle
                management.
              </p>

              <div className="d-flex flex-column gap-3 mt-4">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="mt-1 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#dbeafe",
                      color: "#2563eb",
                    }}
                  >
                    <i
                      className="fa-solid fa-check fs-6 text-center"
                      style={{ transform: "scale(0.7)" }}
                    ></i>
                  </div>
                  <p
                    className="mb-0 fw-medium"
                    style={{ color: "#334155", fontSize: "1.1rem" }}
                  >
                    Zero setup fees and flexible monthly contracts.
                  </p>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="mt-1 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#dbeafe",
                      color: "#2563eb",
                    }}
                  >
                    <i
                      className="fa-solid fa-check fs-6 text-center"
                      style={{ transform: "scale(0.7)" }}
                    ></i>
                  </div>
                  <p
                    className="mb-0 fw-medium"
                    style={{ color: "#334155", fontSize: "1.1rem" }}
                  >
                    Daily transparent reporting & dedicated Slack channels.
                  </p>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="mt-1 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#dbeafe",
                      color: "#2563eb",
                    }}
                  >
                    <i
                      className="fa-solid fa-check fs-6 text-center"
                      style={{ transform: "scale(0.7)" }}
                    ></i>
                  </div>
                  <p
                    className="mb-0 fw-medium"
                    style={{ color: "#334155", fontSize: "1.1rem" }}
                  >
                    HIPAA-Compliant data protection standard across all
                    accounts.
                  </p>
                </div>
              </div>
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
            <span className="fs-6 fw-medium text-white">
              Ready for more revenue?
            </span>
          </div>
          <h2
            className="display-4 fw-bold mb-4 text-white"
            style={{ letterSpacing: "-1px" }}
            data-aos="fade-up"
          >
            Take control of your practice's{" "}
            <span style={{ color: "#d4af37" }}>growth.</span>
          </h2>
          <p
            className="lead mx-auto mb-5 fw-light"
            style={{ maxWidth: "650px", color: "#e2e8f0" }}
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
              Get Consultation
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
            opacity: 0.15,
            bottom: "-200px",
            left: "-100px",
            zIndex: 1,
            filter: "blur(60px)",
          }}
        ></div>
      </section>

      {/* Global Transition Handle embedded in styled JSX to lift cards globally */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .transition-hover-lift {
           transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .transition-hover-lift:hover {
           transform: translateY(-5px);
           box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `,
        }}
      />
    </div>
  );
}
