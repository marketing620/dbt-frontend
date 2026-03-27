"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Star,
  ShieldCheck,
  Clock,
  ArrowRight,
  Activity,
  Calendar,
  Award,
  MessageSquareQuote,
  ChevronDown,
  Smile,
} from "lucide-react";

export default function InvisalignLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div
      style={{
        fontFamily: "var(--font-geist-sans), sans-serif",
        backgroundColor: "#fff",
      }}
    >
      {/* Navbar Minimal */}
      {/* <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm sticky-top" style={{zIndex: 50}}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="fw-bold fs-4 d-flex align-items-center gap-2" style={{ color: "#0f172a", letterSpacing: "-1px" }}>
            <div className="rounded-circle d-flex justify-content-center align-items-center bg-primary text-white shadow-sm" style={{ width: "36px", height: "36px", backgroundColor: "#001BFF" }}>
              <Smile size={20} />
            </div>
            DentalCRM<span className="text-primary fw-medium" style={{ fontSize: "16px", color: "#001BFF" }}>Ortho</span>
          </div>
          <div className="d-flex align-items-center gap-4">
            <span className="d-none d-md-block fw-bold text-dark" style={{fontSize: "14px"}}>Call us: (555) 123-4567</span>
            <a href="#offer" className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm" style={{ backgroundColor: "#001BFF", border: "none" }}>
              Claim Free Scan
            </a>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section
        className="position-relative overflow-hidden"
        style={{ minHeight: "85vh", backgroundColor: "#f8fafc" }}
      >
        {/* Background decorative blob */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(0,27,255,0.08) 0%, rgba(255,255,255,0) 70%)",
            top: "-100px",
            right: "-300px",
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative z-1 py-5 my-md-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-7 pe-lg-5">
              <span
                className="badge bg-white text-primary px-3 py-2 rounded-pill fw-bold mb-4 d-inline-flex align-items-center gap-2 shadow-sm"
                style={{ fontSize: "13px", color: "#001BFF" }}
              >
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                #1 Rated Invisalign Provider in the City
              </span>
              <h1
                className="display-4 fw-bold text-dark mb-4"
                style={{ letterSpacing: "-1.5px", lineHeight: "1.15" }}
              >
                Straighten Your Smile{" "}
                <span style={{ color: "#001BFF" }}>Without the Wires.</span>
              </h1>
              <p
                className="lead text-secondary mb-5"
                style={{ fontSize: "1.25rem", lineHeight: "1.6" }}
              >
                Get the perfect smile you've always wanted up to 50% faster than
                traditional braces. Transform your confidence discreetly. Book a
                free 3D scan today to see your future smile.
              </p>

              <div className="row g-4 mb-5">
                <div className="col-sm-6 d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center bg-white shadow-sm flex-shrink-0"
                    style={{ width: "48px", height: "48px", color: "#10b981" }}
                  >
                    <CheckCircle2 size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">
                      Virtually Invisible
                    </h6>
                    <p
                      className="text-muted small mb-0"
                      style={{ lineHeight: "1.5" }}
                    >
                      Clear aligners that nobody will even notice you're
                      wearing.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center bg-white shadow-sm flex-shrink-0"
                    style={{ width: "48px", height: "48px", color: "#10b981" }}
                  >
                    <Activity size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">
                      Eat What You Want
                    </h6>
                    <p
                      className="text-muted small mb-0"
                      style={{ lineHeight: "1.5" }}
                    >
                      Removable trays mean zero food restrictions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="d-flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      className="rounded-circle border border-2 border-white ms-n2 position-relative"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        marginLeft: i > 1 ? "-10px" : "0",
                        zIndex: 10 - i,
                      }}
                      alt="Patient"
                    />
                  ))}
                </div>
                <div>
                  <div className="d-flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="fw-bold text-dark small">
                    500+ Happy Patients
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-5" id="offer">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden position-relative">
                <div
                  className="bg-primary text-white p-4 text-center"
                  style={{ backgroundColor: "#001BFF" }}
                >
                  <h3
                    className="fw-bold mb-1"
                    style={{ letterSpacing: "-0.5px" }}
                  >
                    Get a Free 3D Smile Scan
                  </h3>
                  <div
                    className="d-inline-block bg-white text-primary rounded-pill px-3 py-1 fw-bold mt-2 shadow-sm"
                    style={{ fontSize: "14px", color: "#001BFF" }}
                  >
                    Receive a Special Discount if you start today
                  </div>
                </div>

                <div className="p-4 p-md-5 bg-white">
                  {submitted ? (
                    <div className="text-center py-4">
                      <div
                        className="d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white mb-4 shadow"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <CheckCircle2 size={40} />
                      </div>
                      <h4 className="fw-bold text-dark mb-2">
                        You're on the list!
                      </h4>
                      <p className="text-muted">
                        Our orthodontic coordinator will call you shortly to
                        schedule your free consultation.
                      </p>
                      <button
                        className="btn btn-outline-primary w-100 fw-bold mt-3"
                        onClick={() => setSubmitted(false)}
                      >
                        Book For Someone Else
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          className="form-label text-dark fw-bold"
                          style={{ fontSize: "12px", letterSpacing: "0.5px" }}
                        >
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg bg-light border-0 shadow-sm rounded-3 px-3 py-3"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          style={{ fontSize: "15px" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label text-dark fw-bold"
                          style={{ fontSize: "12px", letterSpacing: "0.5px" }}
                        >
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg bg-light border-0 shadow-sm rounded-3 px-3 py-3"
                          placeholder="john@email.com"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          style={{ fontSize: "15px" }}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="form-label text-dark fw-bold"
                          style={{ fontSize: "12px", letterSpacing: "0.5px" }}
                        >
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg bg-light border-0 shadow-sm rounded-3 px-3 py-3"
                          placeholder="(555) 123-4567"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          style={{ fontSize: "15px" }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 rounded-3 shadow fw-bold d-flex justify-content-center align-items-center text-white"
                        style={{
                          backgroundColor: "#001BFF",
                          border: "none",
                          padding: "16px 0",
                        }}
                      >
                        Claim My Offer <ArrowRight size={20} className="ms-2" />
                      </button>
                      <p
                        className="text-center text-muted mt-3 mb-0"
                        style={{ fontSize: "12px" }}
                      >
                        <ShieldCheck
                          size={14}
                          className="me-1 d-inline position-relative"
                          style={{ top: "-1px" }}
                        />
                        No credit card required. 100% Secure.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Logos Section */}
      <section className="py-4 border-bottom bg-white">
        <div className="container text-center">
          <p
            className="text-muted fw-bold mb-4"
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Recognized Elite Provider Status By
          </p>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5 opacity-50">
            <h4 className="fw-bold mb-0 text-dark">Invisalign Platinum</h4>
            <h4 className="fw-bold mb-0 text-dark">Dental Digest</h4>
            <h4 className="fw-bold mb-0 text-dark">Health & Wellness</h4>
            <h4 className="fw-bold mb-0 text-dark">Top Dentists 2026</h4>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5 my-5 bg-white">
        <div className="container">
          <div className="text-center mb-5 pb-3">
            <h2
              className="display-6 fw-bold text-dark mb-3"
              style={{ letterSpacing: "-1px" }}
            >
              Your Journey to a Perfect Smile
            </h2>
            <p
              className="text-muted lead mx-auto"
              style={{ maxWidth: "700px" }}
            >
              We've streamlined the entire process. From your first scan to your
              final retainer, we make sure everything is seamless, painless, and
              fast.
            </p>
          </div>

          <div className="row g-4 position-relative">
            {/* Connecting lines for desktop */}
            <div
              className="d-none d-lg-block position-absolute"
              style={{
                top: "40px",
                left: "15%",
                right: "15%",
                height: "2px",
                backgroundColor: "#e2e8f0",
                zIndex: 0,
              }}
            ></div>

            <div className="col-lg-4 text-center position-relative z-1">
              <div
                className="rounded-circle bg-white shadow-lg d-flex justify-content-center align-items-center mx-auto mb-4 border border-5 border-white"
                style={{ width: "80px", height: "80px", color: "#001BFF" }}
              >
                <Calendar size={32} />
              </div>
              <h4 className="fw-bold text-dark mb-3">1. Free 3D Scan</h4>
              <p className="text-muted px-md-3">
                Come in for a 15-minute consultation. We use a precise 3D
                scanner to map your teeth—no messy putty required. You'll
                literally see your future smile on screen.
              </p>
            </div>

            <div className="col-lg-4 text-center position-relative z-1">
              <div
                className="rounded-circle bg-white shadow-lg d-flex justify-content-center align-items-center mx-auto mb-4 border border-5 border-white"
                style={{ width: "80px", height: "80px", color: "#001BFF" }}
              >
                <Award size={32} />
              </div>
              <h4 className="fw-bold text-dark mb-3">2. Custom Trays Arrive</h4>
              <p className="text-muted px-md-3">
                Within a few weeks, your custom clear aligners arrive. We'll
                ensure the first set fits perfectly and give you everything you
                need to begin your journey.
              </p>
            </div>

            <div className="col-lg-4 text-center position-relative z-1">
              <div
                className="rounded-circle bg-white shadow-lg d-flex justify-content-center align-items-center mx-auto mb-4 border border-5 border-white"
                style={{ width: "80px", height: "80px", color: "#001BFF" }}
              >
                <Smile size={32} />
              </div>
              <h4 className="fw-bold text-dark mb-3">3. Reveal Your Smile</h4>
              <p className="text-muted px-md-3">
                Swap trays every 1-2 weeks. Watch your teeth shift into
                perfection. Complete the treatment faster than traditional
                braces, and enjoy your new look!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className="rounded-4 overflow-hidden shadow-lg position-relative"
                style={{
                  height: "500px",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                >
                  <p className="text-white fw-medium mb-0 fs-5">
                    "I couldn't believe how fast my teeth became perfectly
                    straight."
                  </p>
                  <p className="text-white-50 small mb-0 mt-1">
                    — Sarah T., Patient
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h2
                className="display-6 fw-bold text-dark mb-4"
                style={{ letterSpacing: "-1px" }}
              >
                Why Choose Us for Invisalign?
              </h2>
              <p className="text-muted mb-4 fs-5" style={{ lineHeight: "1.6" }}>
                Not all providers are the same. We have achieved{" "}
                <strong>Platinum Status</strong>, meaning we have successfully
                transformed hundreds of smiles with advanced clear aligner
                technology.
              </p>

              <div className="mb-4 d-flex align-items-start gap-3">
                <div
                  className="rounded-circle bg-white shadow-sm d-flex justify-content-center align-items-center flex-shrink-0"
                  style={{ width: "50px", height: "50px", color: "#001BFF" }}
                >
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">
                    Platinum Provider Status
                  </h5>
                  <p className="text-muted">
                    Ranked in the top echelon of providers nationwide based on
                    successful case volume.
                  </p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start gap-3">
                <div
                  className="rounded-circle bg-white shadow-sm d-flex justify-content-center align-items-center flex-shrink-0"
                  style={{ width: "50px", height: "50px", color: "#001BFF" }}
                >
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">
                    Advanced 3D Technology
                  </h5>
                  <p className="text-muted">
                    We use the iTero Element scanner. See your final result
                    digitally mapped before even starting.
                  </p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start gap-3">
                <div
                  className="rounded-circle bg-white shadow-sm d-flex justify-content-center align-items-center flex-shrink-0"
                  style={{ width: "50px", height: "50px", color: "#001BFF" }}
                >
                  <Award size={24} />
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Flexible Financing</h5>
                  <p className="text-muted">
                    0% interest payment plans starting as low as $99/month. We
                    make your dream smile affordable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 my-5 bg-white">
        <div className="container text-center mb-5 pb-3">
          <h2
            className="display-6 fw-bold text-dark mb-3"
            style={{ letterSpacing: "-1px" }}
          >
            Real Patients. Real Smiles.
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "600px" }}>
            Don't just take our word for it. See what our patients have to say
            about their confidence transformation.
          </p>
        </div>

        <div className="container">
          <div className="row g-4">
            {[
              {
                name: "Emily R.",
                review:
                  "I had a gap in my front teeth my whole life. In just 6 months it was completely closed. The team was amazing and so supportive.",
                bg: "#f8fafc",
              },
              {
                name: "James L.",
                review:
                  "I avoided braces because of my job in sales. Invisalign was perfect. Nobody even knew I had them on. Highly recommend this clinic.",
                bg: "#f0f9ff",
              },
              {
                name: "Melissa K.",
                review:
                  "The free 3D scan blew my mind. Seeing the exact progression of my teeth made me so excited to start. Worth every penny.",
                bg: "#f8fafc",
              },
            ].map((t, idx) => (
              <div className="col-lg-4" key={idx}>
                <div
                  className="card border-0 rounded-4 p-4 h-100 position-relative mt-4 pt-5 shadow-sm"
                  style={{ backgroundColor: t.bg }}
                >
                  <div
                    className="position-absolute rounded-circle d-flex justify-content-center align-items-center shadow"
                    style={{
                      width: "60px",
                      height: "60px",
                      top: "-30px",
                      left: "30px",
                      backgroundColor: "#001BFF",
                    }}
                  >
                    <MessageSquareQuote color="white" />
                  </div>
                  <div className="d-flex gap-1 mb-3 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p
                    className="text-dark fw-medium fs-5 mb-4"
                    style={{ lineHeight: "1.6" }}
                  >
                    "{t.review}"
                  </p>
                  <div
                    className="mt-auto border-top pt-3 d-flex align-items-center gap-3"
                    style={{ borderColor: "rgba(0,0,0,0.05) !important" }}
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${idx + 20}`}
                      className="rounded-circle"
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                      }}
                      alt={t.name}
                    />
                    <div>
                      <h6 className="fw-bold text-dark mb-0">{t.name}</h6>
                      <div className="text-muted small">Verified Patient</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-dark mb-3">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {[
                {
                  q: "How long does treatment usually take?",
                  a: "Treatment time varies depending on the severity of your case, but on average, Invisalign takes between 12 to 18 months. You will start seeing noticeable results in just a few weeks!",
                },
                {
                  q: "Is Invisalign painful?",
                  a: "Invisalign is generally much more comfortable than traditional metal braces. You may experience temporary, minor discomfort for a day or two when you switch to a new set of aligners, which just means they are working.",
                },
                {
                  q: "Do I have to wear the aligners all day?",
                  a: "For the best and fastest results, you should wear your aligners for 20 to 22 hours a day. You should only take them out to eat, drink anything besides water, and brush your teeth.",
                },
                {
                  q: "Are there flexible payment options?",
                  a: "Yes! We offer 0% interest in-house financing, care credit, and we accept most major dental insurance plans which often cover up to $2,000 of orthodontic treatment.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-4 shadow-sm mb-3 border"
                >
                  <div
                    className="p-4 d-flex justify-content-between align-items-center"
                    onClick={() => toggleFaq(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <h5 className="fw-bold text-dark mb-0 fs-5">{faq.q}</h5>
                    <ChevronDown
                      size={20}
                      className="text-muted"
                      style={{
                        transform:
                          activeFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  {activeFaq === idx && (
                    <div
                      className="p-4 pt-0 border-top mt-3 text-muted fs-6"
                      style={{ lineHeight: "1.6" }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Bottom Call to Action */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#001BFF",
          backgroundImage:
            "radial-gradient(circle at 50% -20%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
        }}
      >
        <div className="container py-5 text-center px-4">
          <h2
            className="display-4 fw-bold text-white mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Ready to start your transformation?
          </h2>
          <p
            className="text-white-50 lead mb-5 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Don't let another year go by hiding your smile. Claim your special
            discount voucher and free 3D scan by booking a consultation today.
          </p>
          <a
            href="#offer"
            className="btn btn-light btn-lg rounded-pill px-5 fw-bold shadow-lg d-inline-flex align-items-center gap-2"
            style={{ color: "#001BFF", padding: "18px 40px", fontSize: "18px" }}
          >
            Claim Your Free Scan <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-5 bg-dark text-center border-top"
        style={{ borderColor: "rgba(255,255,255,0.05) !important" }}
      >
        <div className="container d-flex flex-column align-items-center">
          <div
            className="fw-bold fs-3 d-flex align-items-center gap-2 mb-3 text-white"
            style={{ letterSpacing: "-1px" }}
          >
            <Smile size={28} />
            DentalCRM
            <span
              className="fw-medium"
              style={{ fontSize: "18px", opacity: 0.7 }}
            >
              Ortho
            </span>
          </div>
          <p className="text-white-50 mb-4 small" style={{ maxWidth: "400px" }}>
            Dedicated to bringing healthy, confident smiles to our community
            through advanced digital orthodontics.
          </p>
          <div className="d-flex gap-4 mb-4">
            <span
              className="text-white-50 text-decoration-none fw-bold small cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              Terms
            </span>
            <span
              className="text-white-50 text-decoration-none fw-bold small cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              Privacy Policy
            </span>
            <span
              className="text-white-50 text-decoration-none fw-bold small cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              Contact Us
            </span>
          </div>
          <p className="text-white-50 mb-0" style={{ fontSize: "12px" }}>
            &copy; 2026 DentalCRM Orthodontics. All Rights Reserved. 123 Main
            St, Suite 400.
          </p>
        </div>
      </footer>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        html { scroll-behavior: smooth; }
      `,
        }}
      />
    </div>
  );
}
