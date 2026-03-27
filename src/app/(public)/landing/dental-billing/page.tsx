import Counter from "@/components/Counter";
import Link from "next/link";

export default function LandingDentalBilling() {
  console.log("What type of component is this?");
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="container py-5">
          <div className="row align-items-center justify-content-between">
            <div
              className="col-12 col-lg-6 text-center text-lg-start"
              data-aos="fade-right"
            >
              <h1 className="display-5 fw-bold mb-4">
                Dental Billing & Insurance Support Servates
              </h1>
              <p className="lead mb-4">
                We provide comprehensive Dental billing services designed to
                help dental practices streamline their revenue cycle, improve
                cash flow and focus more on patient care. Our team manages every
                step of the billing process with precision, from accurate
                patient data entry and insurance verification to claim
                submission, payment posting and follow-up on outstanding
                accounts.
              </p>

              <p className="lead mb-5">
                As a trusted Dental Billing Company, we ensure accuracy,
                compliance and faster reimbursements so your practice can
                operate efficiently without administrative stress.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                <Link
                  href="/contact"
                  className="btn btn-light btn-lg px-4 py-3"
                  style={{ backgroundColor: "#0d9488", color: "white" }}
                >
                  Get Consultation
                </Link>
                <button
                  className="btn btn-outline-light btn-lg px-4 py-3"
                  style={{ backgroundColor: "#1c3b63", color: "white" }}
                >
                  Book a Consultation
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-5 position-relative text-center mt-5 mt-lg-0 px-lg-4">
              {/* Custom Deep Blue Background Shape */}
              <div
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                  backgroundColor: "#1c3b63" /* Exact shade from reference */,
                  borderTopLeftRadius: "300px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  height: "80%",
                  zIndex: 0,
                }}
              ></div>

              {/* Foreground Cutout Image */}
              <div className="position-relative" style={{ zIndex: 1 }}>
                <img
                  src="/images/dental_doctor.png"
                  alt="Dental Professional"
                  className="img-fluid pe-3"
                  style={{ maxHeight: "600px" }}
                />
              </div>

              {/* Floating Stethoscope Badge */}
              <div
                className="position-absolute bg-white rounded-circle shadow d-flex align-items-center justify-content-center border"
                style={{
                  width: "90px",
                  height: "90px",
                  bottom: "0px",
                  left: "-35px",
                  zIndex: 2,
                }}
              >
                <i
                  className="fa-solid fa-stethoscope fs-2"
                  style={{ color: "#1c3b63" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-5 overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center justify-content-between gy-5">
            <div
              className="col-12 col-lg-5 position-relative text-center text-lg-start"
              data-aos="fade-up"
            >
              {/* Light Blue Background Shape */}
              <div
                className="position-absolute rounded-circle"
                style={{
                  backgroundColor: "#f4f8fb",
                  width: "140%",
                  paddingBottom: "140%",
                  top: "0%",
                  left: "-20%",
                  zIndex: 0,
                }}
              ></div>

              <img
                src="/images/billing.jpg"
                alt="About Us"
                className="img-fluid position-relative shadow"
                style={{ zIndex: 1, borderRadius: "5px" }}
              />
            </div>
            <div
              className="col-12 col-lg-6 text-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <i
                  className="fa-solid fa-stethoscope"
                  style={{ color: "#13a195" }}
                ></i>
                <span
                  className="fw-bold text-uppercase"
                  style={{ color: "#13a195", letterSpacing: "1px" }}
                >
                  About Us
                </span>
              </div>
              <h2
                className="display-6 fw-bold mb-4"
                style={{ lineHeight: "1.3" }}
              >
                We Handle Billing, You Focus on Dentistry
              </h2>
              <p
                className="text-muted mb-4 fs-6 pb-2"
                style={{ lineHeight: "1.8" }}
              >
                Our team delivers reliable dental billing services in USA,
                allowing dentists and staff to dedicate more time to patients.
                At the same time, we manage claims, documentation and insurance
                coordination behind the scenes. With structured systems and
                proactive follow-ups, we help eliminate delays and improve
                overall collections.
              </p>

              <div
                className="card border-0 rounded-4 p-4 mb-5"
                style={{ backgroundColor: "#f4f8fb" }}
              >
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <h5 className="fw-bold mb-3 fs-5">Our Mission</h5>
                    <p
                      className="text-muted mb-0 small"
                      style={{ lineHeight: "1.7" }}
                    >
                      Our mission is to provide accurate and transparent billing
                      solutions that maximize reimbursements, reduce denials and
                      strengthen long-term financial stability for dental
                      practices.
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <h5 className="fw-bold mb-3 fs-5">Our Vision</h5>
                    <p
                      className="text-muted mb-0 small"
                      style={{ lineHeight: "1.7" }}
                    >
                      Our vision is to become one of the most dependable dental
                      insurance billing companies, recognized for innovation,
                      accountability and measurable revenue growth for practices
                      nationwide.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="btn px-5 py-3 text-white rounded-3 shadow-sm"
                style={{ backgroundColor: "#13a195" }}
              >
                About More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container py-4">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-dark mb-2">
                <Counter end={40} suffix="+" />
              </h2>
              <p className="fw-semibold mb-0" style={{ color: "#1c3b63" }}>
                National Awards
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-dark mb-2">
                <Counter end={220} suffix="+" />
              </h2>
              <p className="fw-semibold mb-0" style={{ color: "#1c3b63" }}>
                Expert Doctors
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-dark mb-2">
                <Counter end={5} suffix="k+" />
              </h2>
              <p className="fw-semibold mb-0" style={{ color: "#1c3b63" }}>
                Satisfied Patients
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-dark mb-2">
                <Counter end={8} suffix="k+" />
              </h2>
              <p className="fw-semibold mb-0" style={{ color: "#1c3b63" }}>
                Oparation Success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-5" style={{ backgroundColor: "#f4f8fb" }}>
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <i
                className="fa-solid fa-stethoscope"
                style={{ color: "#13a195" }}
              ></i>
              <span
                className="fw-bold text-uppercase"
                style={{ color: "#1c3b63", letterSpacing: "1px" }}
              >
                Services
              </span>
            </div>
            <h2 className="display-4 fw-bold text-dark">Our Services</h2>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Insurance verification, eligibility",
                icon: "fa-syringe",
                text: "Insurance verification is the process of confirming the validity and coverage of an insurance policy.",
                highlighted: false,
              },
              {
                title: "Claim Submission, eob's posting",
                icon: "fa-lungs",
                text: "Dental claim submission refers to the process of submitting a claim for reimbursement for dental services. It is important to note that dental claim submission can vary depending on the specific insurance plan and provider.",
                highlighted: true,
              },
              {
                title: "Outstanding claim resolution, aging working",
                icon: "fa-pills",
                text: "Outstanding claim resolution refers to the process of resolving and settling outstanding claims or disputes in a timely and fair manner.",
                highlighted: false,
              },
              {
                title: "Denial Management",
                icon: "fa-head-side-virus",
                text: "Our team identifies, corrects, and resubmits denied claims quickly. We address root causes, reduce repeat denials, and protect your revenue from unnecessary loss.",
                highlighted: false,
              },
              {
                title: "AR Follow-up",
                icon: "fa-arrow-down",
                text: "We aggressively follow up on outstanding claims, reduce aging, and recover revenue stuck in 30-120+ day buckets. Your cashflow stays consistent and predictable.",
                highlighted: false,
              },
              {
                title: "Patient Scheduling",
                icon: "fa-capsules",
                text: "We assist practices with streamlined appointment scheduling, reminders, and patient communication — ensuring smoother operations and fewer no-shows.",
                highlighted: false,
              },
              {
                title: "Eligibility & Benefits Verification",
                icon: "fa-user-nurse",
                text: "Real-time insurance verification to prevent denials, improve clean claim rates, and ensure patients are covered before services are delivered.",
                highlighted: false,
              },
              {
                title: "Payment Posting & Reconciliation",
                icon: "fa-heart-pulse",
                text: "Accurate posting of EOBs, ERAs, patient payments, and adjustments to maintain clean financial records.",
                highlighted: false,
              },
            ].map((feature, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div
                  className={`card h-100 border-0 rounded-4 p-4 shadow-sm ${feature.highlighted ? "" : "bg-white"}`}
                  style={
                    feature.highlighted
                      ? { backgroundColor: "#13a195", color: "white" }
                      : {}
                  }
                >
                  <div className="card-body p-0">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: feature.highlighted
                          ? "rgba(255,255,255,0.2)"
                          : "#e6f5f4",
                        color: feature.highlighted ? "white" : "#13a195",
                      }}
                    >
                      <i className={`fa-solid ${feature.icon} fs-5`}></i>
                    </div>
                    <h4
                      className={`h5 fw-bold mb-3 ${feature.highlighted ? "text-white" : "text-dark"}`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={`mb-0 small ${feature.highlighted ? "text-white" : "text-muted"}`}
                      style={{ lineHeight: "1.6" }}
                    >
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Pledge Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5 pb-3">
            <h6
              className="text-uppercase fw-semibold mb-3 text-muted"
              style={{ letterSpacing: "1px", fontSize: "0.85rem" }}
            >
              Our Pledge To You
            </h6>
            <h2 className="display-4 fw-bold text-dark">
              Why You Should Hire Our Firm
            </h2>
          </div>

          <div className="row justify-content-center g-5 mb-5 text-start">
            <div className="col-12 col-lg-4 px-lg-4">
              <p
                className="text-muted mb-4 pb-2"
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                  fontWeight: "500",
                }}
              >
                My pledge is to handle all billing-related tasks which includes
                verifying insurance coverage, submitting claims, managing
                accounts receivable and payable and generating reports.
              </p>
              <h6 className="fw-bold text-dark fs-5 mb-1">-Farha Ahmed</h6>
              <p className="text-dark fw-bold mb-0">Project Manager</p>
            </div>

            <div className="col-12 col-lg-4 px-lg-4">
              <p
                className="text-muted mb-4 pb-2"
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                  fontWeight: "500",
                }}
              >
                My primary responsibility is to ensure that the dental practice
                receives timely and accurate payments for their services and my
                pledge also to maintain open communication with the dental
                practice
              </p>
              <h6 className="fw-bold text-dark fs-5 mb-0">-Arthur Sajid HR</h6>
            </div>

            <div className="col-12 col-lg-4 px-lg-4">
              <p
                className="text-muted mb-4 pb-2"
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                  fontWeight: "500",
                }}
              >
                My pledge is to keep up with changes in billing regulations and
                technology to ensure that my group of team providing the best
                possible service to the dental practice
              </p>
              <h6 className="fw-bold text-dark fs-5 mb-1">
                – Alex Ijaz Group-
                <br />
                <span className="mt-1 d-inline-block">Manager</span>
              </h6>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link
              href="/services"
              className="btn px-5 py-3 text-white fw-bold shadow-sm"
              style={{
                backgroundColor: "#13a195",
                letterSpacing: "0.5px",
                borderRadius: "8px",
              }}
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 position-relative bg-white overflow-hidden">
        {/* Faint Background Image */}
        <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{
            backgroundImage: "url('/images/consultant.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.07,
            zIndex: 0,
          }}
        ></div>

        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-5">
              <img
                src="/images/consultant.png"
                alt="Dental Consultants"
                className="img-fluid shadow-lg w-100"
                style={{ borderRadius: "20px", objectFit: "cover" }}
              />
            </div>
            <div className="col-12 col-lg-7 ps-lg-5 text-start">
              <h2
                className="display-4 fw-bold text-dark mb-4 pb-3"
                style={{ lineHeight: "1.2" }}
              >
                Benefits of Hiring a Dental
                <br />
                Consultant
              </h2>

              <div className="mb-4">
                <p
                  style={{
                    lineHeight: "1.8",
                    color: "#4a4a4a",
                    fontSize: "1.05rem",
                  }}
                >
                  <strong className="text-dark fw-bold">
                    Increase Practice Revenue:{" "}
                  </strong>
                  We identify financial gaps, optimize workflows, and improve
                  collections through strategic billing improvements and
                  efficient dental AR management.
                </p>
              </div>

              <div className="mb-4 pb-4">
                <p
                  style={{
                    lineHeight: "1.8",
                    color: "#4a4a4a",
                    fontSize: "1.05rem",
                  }}
                >
                  <strong className="text-dark fw-bold">
                    Drive Strategic Growth & Ensure Compliance:{" "}
                  </strong>
                  Collaborate with seasoned experts in dental insurance billing
                  to maintain regulatory standards, submit claims accurately and
                  support the long-term success and expansion of your practice.
                </p>
              </div>

              <div
                className="mt-2"
                style={{
                  height: "1px",
                  width: "100%",
                  backgroundColor: "#13a195",
                  opacity: 0.8,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Services Help Section */}
      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <i
              className="fa-solid fa-stethoscope"
              style={{ color: "#13a195" }}
            ></i>
            <span
              className="fw-bold text-uppercase text-muted"
              style={{ letterSpacing: "1px", fontSize: "0.85rem" }}
            >
              Why Choose Us
            </span>
          </div>
          <h2 className="display-5 fw-bold text-dark mb-4">
            How Our Dental Billing Services Help
          </h2>
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-12 col-lg-9">
              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                Our expertise in dental medical billing services allows
                practices to handle complex cross-coding between medical and
                dental claims with confidence. We ensure accurate submissions,
                timely insurance follow-ups, and reduced denials.
              </p>
            </div>
          </div>

          <div className="row align-items-center g-5">
            {/* Left Column Features */}
            <div className="col-12 col-lg-4 text-center text-lg-end">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-4">
                  <h5
                    className="fw-bold mb-0 text-dark fs-5 text-lg-end"
                    style={{ lineHeight: "1.4" }}
                  >
                    0% Claim Rejections
                  </h5>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{
                      width: "65px",
                      height: "65px",
                      backgroundColor: "#32958e",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-solid fa-exclamation fs-3"></i>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-4">
                  <h5
                    className="fw-bold mb-0 text-dark fs-5 text-lg-end"
                    style={{ lineHeight: "1.4" }}
                  >
                    Faster Payments &<br className="d-none d-lg-block" /> Cash
                    Flow
                  </h5>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{
                      width: "65px",
                      height: "65px",
                      backgroundColor: "#32958e",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-solid fa-credit-card fs-4"></i>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-4">
                  <h5
                    className="fw-bold mb-0 text-dark fs-5 text-lg-end"
                    style={{ lineHeight: "1.4" }}
                  >
                    Dedicated Account
                    <br className="d-none d-lg-block" /> Manager
                  </h5>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{
                      width: "65px",
                      height: "65px",
                      backgroundColor: "#32958e",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-solid fa-sitemap fs-4"></i>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-4">
                  <h5
                    className="fw-bold mb-0 text-dark fs-5 text-lg-end"
                    style={{ lineHeight: "1.4" }}
                  >
                    Expertise in All
                    <br className="d-none d-lg-block" /> Specialties
                  </h5>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{
                      width: "65px",
                      height: "65px",
                      backgroundColor: "#32958e",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-solid fa-dna fs-4"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-12 col-lg-4 px-4 py-4 py-lg-0">
              <img
                src="/images/services.png"
                alt="Dental Billing Team"
                className="img-fluid shadow"
                style={{
                  borderTopLeftRadius: "60px",
                  borderTopRightRadius: "60px",
                  borderBottomLeftRadius: "60px",
                  borderBottomRightRadius: "60px",
                  maxHeight: "450px",
                  height: "100%",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>

            {/* Right Column Features */}
            <div className="col-12 col-lg-4 text-center text-lg-start">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{
                      width: "65px",
                      height: "65px",
                      backgroundColor: "#32958e",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-regular fa-calendar fs-4"></i>
                  </div>
                  <h5
                    className="fw-bold mb-0 text-dark fs-5 text-lg-start"
                    style={{ lineHeight: "1.4" }}
                  >
                    Reduced AR Days
                  </h5>
                </div>

                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{
                      width: "65px",
                      height: "65px",
                      backgroundColor: "#32958e",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-regular fa-newspaper fs-4"></i>
                  </div>
                  <h5
                    className="fw-bold mb-0 text-dark fs-5 text-lg-start"
                    style={{ lineHeight: "1.4" }}
                  >
                    Transparent Reporting
                  </h5>
                </div>

                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{
                      width: "65px",
                      height: "65px",
                      backgroundColor: "#32958e",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-solid fa-check-double fs-4"></i>
                  </div>
                  <h5
                    className="fw-bold mb-0 text-dark fs-5 text-lg-start"
                    style={{ lineHeight: "1.4" }}
                  >
                    HIPAA-Compliant &<br className="d-none d-lg-block" /> Secure
                    Operations
                  </h5>
                </div>

                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{
                      width: "65px",
                      height: "65px",
                      backgroundColor: "#32958e",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa-regular fa-clock fs-4"></i>
                  </div>
                  <h5
                    className="fw-bold mb-0 text-dark fs-5 text-lg-start"
                    style={{ lineHeight: "1.4" }}
                  >
                    End-to-End Revenue
                    <br className="d-none d-lg-block" /> Cycle Management
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section
        className="py-0 position-relative overflow-hidden"
        style={{ backgroundColor: "#f8f9fA" }}
      >
        {/* Soft Opacity Background Image */}
        <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{
            backgroundImage:
              "url('/images/teamwork.png')" /* Reusing a generic photo for the backdrop */,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12 /* Faintly visible */,
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center justify-content-between pt-5 mt-3">
            {/* Left Text Column */}
            <div className="col-12 col-lg-6 text-start pb-5 mb-lg-5">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i
                  className="fa-solid fa-stethoscope"
                  style={{ color: "#13a195" }}
                ></i>
                <span
                  className="fw-bold text-uppercase"
                  style={{
                    color: "#2a3b4c",
                    letterSpacing: "1px",
                    fontSize: "0.85rem",
                  }}
                >
                  Get an appointment
                </span>
              </div>

              <h2
                className="display-4 fw-bold text-dark mb-4 pb-2"
                style={{ lineHeight: "1.2" }}
              >
                Schedule Your Appointment
                <br />
                Today
              </h2>

              <p className="text-muted fs-6 mb-5" style={{ lineHeight: "1.9" }}>
                Connect with our billing experts today to streamline your claims
                process and boost reimbursements. We will evaluate your current
                billing system, identify areas for improvement, and create a
                customized strategy to enhance financial performance.
              </p>

              <p
                className="text-muted fs-6 mb-4 pb-2"
                style={{ lineHeight: "1.9" }}
              >
                Book your consultation now and take the first step toward a more
                profitable and stress-free practice.
              </p>
            </div>

            {/* Right Doctor Image Placement */}
            <div
              className="col-12 col-lg-5 text-center text-lg-end d-flex align-items-end justify-content-center justify-content-lg-end"
              style={{ alignSelf: "flex-end" }}
            >
              {/* Note: In order for the doctor image to naturally "sit" on the bottom border like the mockup, margin-bottom is set to 0. */}
              <img
                src="/images/doctor-min.png"
                alt="Doctor"
                className="img-fluid"
                style={{
                  maxHeight: "600px",
                  objectFit: "contain",
                  marginBottom: "-10px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teal CTA Banners Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "#f8f9fa", position: "relative" }}
      >
        <div className="container mt-4 mb-5">
          {/* Top Slim Appointment Banner */}
          <div
            className="card border-0 mb-5 shadow-sm"
            style={{ backgroundColor: "#13a195", borderRadius: "12px" }}
          >
            <div className="card-body p-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
              <div className="d-flex align-items-center gap-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "65px",
                    height: "65px",
                    backgroundColor: "rgba(0,0,0,0.1)",
                  }}
                >
                  <i className="fa-regular fa-calendar-check text-white fs-4"></i>
                </div>
                <h3 className="text-white fw-bold mb-0 fs-4">
                  Open for Appointments
                </h3>
              </div>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link
                  href="/contact"
                  className="btn bg-white text-dark fw-semibold px-4 py-2"
                  style={{ color: "#1c3b63", borderRadius: "6px" }}
                >
                  Make Appointment
                </Link>
                <Link
                  href="/services"
                  className="btn text-white fw-semibold px-4 py-2"
                  style={{
                    backgroundColor: "#1c3b63",
                    borderRadius: "6px",
                    border: "1px solid #1c3b63",
                  }}
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Newsletter & Doctor Banner */}
          <div
            className="card border-0 shadow-sm"
            style={{
              backgroundColor: "#13a195",
              borderRadius: "12px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="row g-0">
              <div className="col-12 col-md-7 col-lg-8 p-5 z-1">
                <h2 className="text-white fw-bold mb-4 display-6">
                  Subscribe Our Newsletter
                </h2>
                <p
                  className="text-white mb-0 fs-6"
                  style={{ lineHeight: "1.8", opacity: "0.9", maxWidth: "80%" }}
                >
                  Get the latest insights on dental billing, updates, and proven
                  strategies to maximize your practice's revenue cycle delivered
                  straight to your inbox.
                </p>
              </div>
              <div
                className="col-12 col-md-5 col-lg-4 d-flex align-items-end justify-content-end justify-content-md-center position-relative mt-4 mt-md-0"
                style={{ minHeight: "200px" }}
              >
                <img
                  src="/images/female_doctor.png"
                  alt="Doctor"
                  className="position-md-absolute bottom-0 z-2"
                  style={{
                    maxHeight: "350px",
                    objectFit: "contain",
                    right: "2rem",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us
      <section className="py-5">
        <div className="container py-5 text-center d-flex align-items-center justify-content-between gap-3">
          <div>
            <h1 className="fw-bold mb-3 ">Why Partner with a Dental Consultant?</h1>
            <p className="text-muted mb-4 fw-bold mt-5">✔ Higher Collections & Reduced Claim Denials – Get paid faster with improved claim accuracy.</p>
            <p className="text-muted mb-4 fw-bold">✔ More Time for Patient Care – Less time spent on billing means more focus on dentistry.</p>
            <p className="text-muted mb-4 fw-bold">✔ Custom Strategies for Your Practice – We tailor our solutions based on your unique needs.</p>
            <p className="text-muted mb-4 fw-bold">✔ Compliance & Industry Expertise – Stay updated with insurance policies, coding changes, and regulations.</p>
            <p className="mt-5 text-muted">Let us help your practice thrive! </p>
          </div>
          <div>
            <img src="/images/dentist_success.png" alt="" className="img-fluid" style={{borderRadius: "50%"}}/>
          </div>
        </div>
      </section> */}

      {/* Contact Call To Action */}
      {/* <section className="py-5">
        <div className="container py-5 text-center">
          <h2 className="fw-bold mb-3">Ready to transform your practice?</h2>
          <p className="text-muted mb-4">Join hundreds of dental professionals who trust us with their revenue cycle.</p>
          <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow">Contact Us Today</button>
        </div>
      </section> */}
    </>
  );
}
