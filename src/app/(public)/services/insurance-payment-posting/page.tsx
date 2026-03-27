import Link from "next/link";

export default function ServicePage() {
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
       data-aos="fade-up" data-aos-duration="800">
        <div
          className="container position-relative z-2 text-center text-white"
          style={{ maxWidth: "900px" }}
         data-aos="fade-down" data-aos-duration="1000">
          <div
            className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <span
              className="badge rounded-pill fw-bold"
              style={{ backgroundColor: "#2563eb", color: "#fff" }}
            >
              Service
            </span>
            <span className="fs-6 fw-medium text-white">Payment Posting</span>
          </div>

          <h1
            className="display-3 fw-bold mb-4 text-white"
            style={{ letterSpacing: "-1px", lineHeight: "1.1" }}
          >
            Accurate Dental Insurance Payment Posting Services
          </h1>
          <p
            className="lead mx-auto mb-5"
            style={{
              maxWidth: "800px",
              fontSize: "1.25rem",
              lineHeight: "1.8",
              opacity: 0.9,
            }}
          >
            Speed up collections with expert dental insurance payment posting.
            We ensure accurate, timely posting to improve your cash flow.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Link
              href="/contact"
              className="btn btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                fontSize: "1.1rem",
              }}
            >
              Get Started with Payment Posting
            </Link>
          </div>
        </div>

        {/* Decorative background element background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none"
          style={{ zIndex: 1, opacity: 0.1 }}
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
              backgroundColor: "#6EC1E4",
            }}
          ></div>
        </div>
      </section>

      {/* Overview Area */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }} data-aos="fade-up" data-aos-duration="800">
        <div className="container py-5 mt-4">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2
                className="display-5 fw-bold mb-5"
                style={{ color: "#212529", letterSpacing: "-0.5px" }}
               data-aos="fade-up">
                The Process Overview
              </h2>
              <div
                className="fs-5 text-muted text-start mx-auto"
                style={{ lineHeight: 1.8, maxWidth: "800px" }}
              >
                <p className="mb-4">
                  Prompt posting of insurance checks and EFTs to keep your
                  revenue cycle on track and updated inside your ledger.
                </p>
                <p className="mb-4">
                  Close monitoring of EFTs to ensure deposits are confirmed and
                  accurate against your bank drops.
                </p>
                <p className="mb-4">
                  Precise write-offs tailored to individual contracts and
                  providers for accurate financial records.
                </p>
                <p className="mb-4">
                  Detailed posting notes for each payment, ensuring transparency
                  and accuracy in your billing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits - Structured Bento/Grid Layout */}
      <section className="py-5" style={{ backgroundColor: "#F8F9FA" }} data-aos="fade-up" data-aos-duration="800">
        <div className="container py-5">
          <div className="row mb-5 text-center justify-content-center">
            <div className="col-lg-8">
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#212529", letterSpacing: "-0.5px" }}
               data-aos="fade-up">
                Why it matters
              </h2>
              <p className="fs-5 text-muted mb-0">
                Discover the features and benefits of our dedicated approach.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Key Features Container */}
            <div className="col-lg-6">
              <div
                className="h-100 p-4 p-lg-5 bg-white rounded-4 shadow-sm border border-1"
                style={{ borderColor: "#e9ecef" }}
              >
                <div className="d-flex align-items-center mb-5">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      backgroundColor: "rgba(13, 110, 253, 0.1)",
                      color: "#0D6EFD",
                    }}
                  >
                    <i className="fa-solid fa-list-check fs-4"></i>
                  </div>
                  <h3 className="fw-bold mb-0 h4" style={{ color: "#212529" }}>
                    Key Features
                  </h3>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{ backgroundColor: "#F8F9FA" }}
                  >
                    <i
                      className="fa-solid fa-check fs-5 me-4"
                      style={{ color: "#0D6EFD", flexShrink: 0 }}
                    ></i>
                    <span className="fs-6 fw-medium text-dark">
                      Timely insurance payment posting
                    </span>
                  </div>
                  <div
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{ backgroundColor: "#F8F9FA" }}
                  >
                    <i
                      className="fa-solid fa-check fs-5 me-4"
                      style={{ color: "#0D6EFD", flexShrink: 0 }}
                    ></i>
                    <span className="fs-6 fw-medium text-dark">
                      Virtual credit card opt-out options
                    </span>
                  </div>
                  <div
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{ backgroundColor: "#F8F9FA" }}
                  >
                    <i
                      className="fa-solid fa-check fs-5 me-4"
                      style={{ color: "#0D6EFD", flexShrink: 0 }}
                    ></i>
                    <span className="fs-6 fw-medium text-dark">
                      EFT tracking and verification
                    </span>
                  </div>
                  <div
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{ backgroundColor: "#F8F9FA" }}
                  >
                    <i
                      className="fa-solid fa-check fs-5 me-4"
                      style={{ color: "#0D6EFD", flexShrink: 0 }}
                    ></i>
                    <span className="fs-6 fw-medium text-dark">
                      Contract-specific write-offs
                    </span>
                  </div>
                  <div
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{ backgroundColor: "#F8F9FA" }}
                  >
                    <i
                      className="fa-solid fa-check fs-5 me-4"
                      style={{ color: "#0D6EFD", flexShrink: 0 }}
                    ></i>
                    <span className="fs-6 fw-medium text-dark">
                      Clear, robust payment notes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Container */}
            <div className="col-lg-6">
              <div
                className="h-100 p-4 p-lg-5 bg-white rounded-4 shadow-sm border border-1"
                style={{ borderColor: "#e9ecef" }}
              >
                <div className="d-flex align-items-center mb-5">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      backgroundColor: "rgba(32, 201, 151, 0.1)",
                      color: "#20C997",
                    }}
                  >
                    <i className="fa-solid fa-star fs-4"></i>
                  </div>
                  <h3 className="fw-bold mb-0 h4" style={{ color: "#212529" }}>
                    Platform Benefits
                  </h3>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{ backgroundColor: "rgba(32, 201, 151, 0.05)" }}
                  >
                    <i
                      className="fa-solid fa-arrow-right fs-5 me-4"
                      style={{ color: "#20C997", flexShrink: 0 }}
                    ></i>
                    <span className="fs-6 fw-medium text-dark">
                      Comprehensive reporting for financial oversight
                    </span>
                  </div>
                  <div
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{ backgroundColor: "rgba(32, 201, 151, 0.05)" }}
                  >
                    <i
                      className="fa-solid fa-arrow-right fs-5 me-4"
                      style={{ color: "#20C997", flexShrink: 0 }}
                    ></i>
                    <span className="fs-6 fw-medium text-dark">
                      Make posting dental insurance payments fast and accurate
                    </span>
                  </div>
                  <div
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{ backgroundColor: "rgba(32, 201, 151, 0.05)" }}
                  >
                    <i
                      className="fa-solid fa-arrow-right fs-5 me-4"
                      style={{ color: "#20C997", flexShrink: 0 }}
                    ></i>
                    <span className="fs-6 fw-medium text-dark">
                      More control over your payments
                    </span>
                  </div>
                  <div
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{ backgroundColor: "rgba(32, 201, 151, 0.05)" }}
                  >
                    <i
                      className="fa-solid fa-arrow-right fs-5 me-4"
                      style={{ color: "#20C997", flexShrink: 0 }}
                    ></i>
                    <span className="fs-6 fw-medium text-dark">
                      Easier reconciliation of daily operations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{ backgroundColor: "#212529" }}
       data-aos="fade-up" data-aos-duration="800">
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
           data-aos="fade-up">
            Ready to Simplify Your Dental Billing?
          </h2>
          <p
            className="lead mx-auto mb-5 fw-light"
            style={{ maxWidth: "650px", opacity: 0.9 }}
          >
            Managing dental billing doesn&apos;t have to be complicated. Let our
            experienced billing professionals handle your insurance processes.
          </p>
          <div className="d-flex justify-content-center gap-3">
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
              Schedule a Free Consultation
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
            backgroundColor: "#0D6EFD",
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
