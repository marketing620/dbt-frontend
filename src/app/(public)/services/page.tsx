"use client";

import Link from "next/link";

export default function Services() {
  const coreServices = [
    {
      title: "Dental Insurance Billing",
      description:
        "Efficient dental insurance billing is critical to maintaining steady cash flow. We ensure accurate claim preparation, submission, and follow-up so you can focus on patient care.",
      icon: "fa-file-invoice-dollar",
      link: "/services/dental-insurance-billing",
    },
    {
      title: "Dental Claims Submission",
      description:
        "Our submission service ensures that every claim is accurately prepared and electronically submitted for faster processing and higher acceptance rates.",
      icon: "fa-upload",
      link: "/services/dental-claims-submission",
    },
    {
      title: "Insurance Payment Posting",
      description:
        "Accurate posting is essential for clear financial records. We ensure all payments are properly posted, reconciled, and reflected in your system.",
      icon: "fa-money-check-dollar",
      link: "/services/insurance-payment-posting",
    },
  ];

  const specializedServices = [
    {
      title: "Accounts Receivable Management",
      description:
        "We help reduce outstanding balances and accelerate collections by actively monitoring unpaid claims and following up strongly.",
      icon: "fa-chart-line",
      link: "/services/accounts-receivable-management",
    },
    {
      title: "Dental Insurance Verification",
      description:
        "Ensure patient insurance benefits are verified before treatment, reducing billing errors and improving patient satisfaction.",
      icon: "fa-shield-halved",
      link: "/services/dental-insurance-verification",
    },
    {
      title: "Practice Credentialing",
      description:
        "Enroll with insurance networks smoothly and maintain strict compliance with payer requirements without the administrative headache.",
      icon: "fa-certificate",
      link: "/services/dental-practice-credentialing",
    },
  ];

  return (
    <>
      {/* SaaS Style Hero */}
      <section
        className="position-relative overflow-hidden d-flex flex-column justify-content-center"
        style={{
          backgroundColor: "#0f172a",
          minHeight: "40vh",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
       data-aos="fade-up" data-aos-duration="800">
        <div
          className="container position-relative z-2 text-center text-white"
          style={{ maxWidth: "900px" }}
         data-aos="fade-down" data-aos-duration="1000">
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
              Services
            </span>
            <span className="fs-6 fw-medium text-white">
              Complete Revenue Cycle Management
            </span>
          </div>

          <h1
            className="display-4 fw-bold mb-4 text-white"
            style={{ letterSpacing: "-1px", lineHeight: "1.1" }}
          >
            Outsource your billing stress, <br />
            <span style={{ color: "#d4af37" }}>increase your gains.</span>
          </h1>
          <p
            className="lead mx-auto mb-5 fw-light"
            style={{
              maxWidth: "750px",
              fontSize: "1.25rem",
              lineHeight: "1.8",
              opacity: 0.9,
            }}
          >
            Comprehensive dental billing solutions designed to maximize your
            revenue, minimize denials, and streamline your practice operations.
            Choose where to start and grow with us.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Link
              href="/contact"
              className="btn btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                fontSize: "1.1rem",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Background Gradients */}
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

      {/* Core Services */}
      <section className="py-5" style={{ backgroundColor: "#f8fafc" }} data-aos="fade-up" data-aos-duration="800">
        <div className="container py-5 mt-4">
          <div className="row mb-5 align-items-end">
            <div className="col-lg-8">
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0f172a", letterSpacing: "-0.5px" }}
               data-aos="fade-up">
                Core services
              </h2>
              <p className="fs-5 text-muted mb-0">
                The foundation of a healthy dental practice revenue cycle.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {coreServices.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={service.link} className="text-decoration-none">
                  <div
                    className="card h-100 border-0 rounded-4 p-4 p-lg-5 text-start"
                    style={{
                      backgroundColor: "#ffffff",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                    data-aos="fade-up" data-aos-delay="100" onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 35px rgba(0,0,0,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(0,0,0,0.03)";
                    }}
                  >
                    <div className="mb-5">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "64px",
                          height: "64px",
                          backgroundColor: "#dbeafe",
                          color: "#2563eb",
                        }}
                      >
                        <i className={`fa-solid ${service.icon} fs-3`}></i>
                      </div>
                    </div>
                    <div>
                      <h3
                        className="fw-bold h4 mb-3"
                        style={{ color: "#0f172a" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-muted mb-4"
                        style={{ lineHeight: "1.7" }}
                      >
                        {service.description}
                      </p>
                      <div
                        className="mt-auto d-inline-flex align-items-center fw-bold"
                        style={{ color: "#2563eb", letterSpacing: "0.5px" }}
                      >
                        Learn more{" "}
                        <i className="fa-solid fa-arrow-right ms-2 transition-transform"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }} data-aos="fade-up" data-aos-duration="800">
        <div className="container py-5 mt-4">
          <div className="row mb-5 align-items-end">
            <div className="col-lg-8">
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0f172a", letterSpacing: "-0.5px" }}
               data-aos="fade-up">
                Add on services
              </h2>
              <p className="fs-5 text-muted mb-0">
                Enhance your front-desk efficiency, credentialing, and
                collections.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {specializedServices.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={service.link} className="text-decoration-none">
                  <div
                    className="card h-100 rounded-4 p-4 p-lg-5 text-start"
                    style={{
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e9ecef",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    data-aos="fade-up" data-aos-delay="100" onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#2563eb";
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(37, 99, 235, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e9ecef";
                      e.currentTarget.style.backgroundColor = "#f8fafc";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="mb-4">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "56px",
                          height: "56px",
                          backgroundColor: "#ffffff",
                          border: "1px solid #e9ecef",
                          color: "#2563eb",
                        }}
                      >
                        <i className={`fa-solid ${service.icon} fs-4`}></i>
                      </div>
                    </div>
                    <div>
                      <h3
                        className="fw-bold h5 mb-3"
                        style={{ color: "#0f172a" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-muted mb-4"
                        style={{ lineHeight: "1.6" }}
                      >
                        {service.description}
                      </p>
                      <div
                        className="mt-auto d-inline-flex align-items-center fw-bold"
                        style={{ color: "#2563eb", letterSpacing: "0.5px" }}
                      >
                        Learn more{" "}
                        <i className="fa-solid fa-arrow-right ms-2 transition-transform"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong Modern CTA */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{ backgroundColor: "#0f172a" }}
       data-aos="fade-up" data-aos-duration="800">
        <div className="container py-5 position-relative z-2 text-center text-white">
          <div
            className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span className="fs-6 fw-medium text-white">
              Join the ecosystem
            </span>
          </div>
          <h2
            className="display-4 fw-bold mb-4 text-white"
            style={{ letterSpacing: "-1px" }}
           data-aos="fade-up">
            Ready to Simplify Operations?
          </h2>
          <p
            className="lead mx-auto mb-5 fw-light fs-5"
            style={{ maxWidth: "650px", opacity: 0.9 }}
          >
            Join the team of practices building a new era of dental billing.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link
              href="/contact"
              className="btn btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                fontSize: "1.1rem",
              }}
            >
              Book a consultation
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
    </>
  );
}
