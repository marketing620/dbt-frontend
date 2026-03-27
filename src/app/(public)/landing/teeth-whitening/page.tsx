"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Shield,
  Sparkles,
  ChevronRight,
  Star,
  Clock,
  Zap,
  MessageSquareQuote,
  ChevronDown,
  Check,
  ArrowRight,
} from "lucide-react";

export default function WhiteningLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
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
        backgroundColor: "#0f172a",
        color: "#f8fafc",
      }}
    >
      {/* Navbar Minimal - Dark Theme */}
      {/* <nav
        className="navbar py-3 sticky-top"
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          zIndex: 100,
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div
            className="fw-bold fs-4 d-flex align-items-center gap-2 text-white"
            style={{ letterSpacing: "-1px" }}
          >
            <div
              className="rounded-circle d-flex justify-content-center align-items-center bg-white text-dark shadow-sm"
              style={{ width: "36px", height: "36px" }}
            >
              <Sparkles size={20} color="#f59e0b" />
            </div>
            Dental
            <span
              className="fw-medium"
              style={{ fontSize: "16px", color: "#f59e0b" }}
            >
              Glow
            </span>
          </div>
          <a
            href="#booking"
            className="btn rounded-pill px-4 py-2 fw-bold shadow-sm d-none d-sm-block text-dark transition-all"
            style={{ backgroundColor: "#f59e0b", border: "none" }}
          >
            Book Your Session
          </a>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section
        className="position-relative overflow-hidden"
        style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}
      >
        {/* Glow Effects */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(15, 23, 42, 0) 70%)",
            top: "10%",
            left: "-100px",
            zIndex: 0,
          }}
        ></div>
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(0, 27, 255, 0.1) 0%, rgba(15, 23, 42, 0) 70%)",
            bottom: "-20%",
            right: "-200px",
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative z-1 py-5 my-md-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-white pe-lg-5">
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4 shadow"
                style={{
                  backgroundColor: "rgba(245, 158, 11, 0.15)",
                  border: "1px solid rgba(245, 158, 11, 0.4)",
                  color: "#f59e0b",
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                <Sparkles size={16} /> Professional Laser Whitening Special
              </div>
              <h1
                className="display-3 fw-bold mb-4 text-white"
                style={{
                  letterSpacing: "-1.5px",
                  lineHeight: "1.05",
                  textShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                Get a Camera-Ready Smile in{" "}
                <span style={{ color: "#f59e0b" }}>One Hour.</span>
              </h1>
              <p
                className="lead mb-4 fw-medium"
                style={{
                  color: "#94a3b8",
                  fontSize: "1.25rem",
                  lineHeight: "1.6",
                }}
              >
                Say goodbye to yellow stains from coffee, tea, and wine.
                Experience professional-grade laser whitening with zero
                sensitivity and instant results.
              </p>

              <div className="d-flex flex-column gap-3 mb-5">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center me-3"
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      color: "#10b981",
                    }}
                  >
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                  <span className="fw-medium text-light fs-5">
                    Up to 8 shades lighter instantly
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center me-3"
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      color: "#10b981",
                    }}
                  >
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                  <span className="fw-medium text-light fs-5">
                    Zero painful tooth sensitivity
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center me-3"
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      color: "#10b981",
                    }}
                  >
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                  <span className="fw-medium text-light fs-5">
                    Results last up to 12 entire months
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1" id="booking">
              <div
                className="card shadow-lg border-0 rounded-4 overflow-hidden position-relative"
                style={{
                  backgroundColor: "#1e293b",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Sale Banner */}
                <div
                  className="p-4 text-center border-bottom border-dark"
                  style={{ backgroundColor: "#f59e0b" }}
                >
                  <h3
                    className="fw-bold text-dark mb-1"
                    style={{ letterSpacing: "-0.5px", fontSize: "28px" }}
                  >
                    Claim Your Special Offer
                  </h3>
                  <p
                    className="text-dark fw-bold mb-0 opacity-75 d-inline-block bg-white px-3 py-1 rounded-pill mt-1 shadow-sm"
                    style={{ fontSize: "14px", letterSpacing: "0.5px" }}
                  >
                    Limited Time Promotion
                  </p>
                </div>

                <div className="p-4 p-md-5">
                  {submitted ? (
                    <div className="text-center py-5">
                      <div
                        className="d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white mb-4 shadow-lg mx-auto position-relative"
                        style={{
                          width: "80px",
                          height: "80px",
                          boxShadow: "0 0 40px rgba(16, 185, 129, 0.4)",
                        }}
                      >
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="fw-bold text-white mb-3">Seat Secured!</h3>
                      <p className="text-white fs-5">
                        We've reserved your promotional pricing. Our booking
                        specialist will text you shortly to pick your exact
                        time.
                      </p>
                      <button
                        className="btn btn-outline-light mt-3 w-100 py-3 rounded-3 fw-bold"
                        onClick={() => setSubmitted(false)}
                      >
                        Book Another Friend
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          className="form-label text-light fw-bold"
                          style={{ fontSize: "12px", letterSpacing: "1px" }}
                        >
                          YOUR FULL NAME
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg border-0 bg-dark text-white rounded-3 px-4 py-3 shadow-none"
                          placeholder="Jane Doe"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          style={{
                            boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="form-label text-light fw-bold"
                          style={{ fontSize: "12px", letterSpacing: "1px" }}
                        >
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg border-0 bg-dark text-white rounded-3 px-4 py-3 shadow-none"
                          placeholder="jane@email.com"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          style={{
                            boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="form-label text-light fw-bold"
                          style={{ fontSize: "12px", letterSpacing: "1px" }}
                        >
                          MOBILE NUMBER{" "}
                          <span className="text-secondary fw-normal">
                            (For appointment SMS)
                          </span>
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg border-0 bg-dark text-white rounded-3 px-4 py-3 shadow-none"
                          placeholder="(555) 123-4567"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          style={{
                            boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-lg w-100 rounded-3 shadow-lg fw-bold d-flex justify-content-center align-items-center mt-3 text-dark transition-all"
                        style={{
                          backgroundColor: "#f59e0b",
                          border: "none",
                          padding: "18px 0",
                          letterSpacing: "0.5px",
                        }}
                      >
                        CLAIM MY SPECIAL OFFER{" "}
                        <ChevronRight
                          size={20}
                          className="ms-2"
                          strokeWidth={3}
                        />
                      </button>
                      <p
                        className="text-center text-white-50 mt-4 mb-0"
                        style={{ fontSize: "12px" }}
                      >
                        <Shield
                          size={14}
                          className="me-1 d-inline position-relative"
                          style={{ top: "-1px" }}
                        />{" "}
                        Your data is privately secured and encrypted.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Badges Section */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#0b1120",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container text-center">
          <p
            className="text-white fw-bold mb-4"
            style={{
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Our Technique Featured In
          </p>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5 opacity-25">
            <h3 className="fw-bold mb-0 text-white font-serif">VOGUE</h3>
            <h3
              className="fw-bold mb-0 text-white"
              style={{ fontFamily: "Arial Black" }}
            >
              ELLE
            </h3>
            <h3 className="fw-bold mb-0 text-white">COSMOPOLITAN</h3>
            <h3 className="fw-bold mb-0 text-white font-monospace">GLAMOUR</h3>
          </div>
        </div>
      </section>

      {/* Feature Grid / The Superior Choice */}
      <section className="py-5 my-5 position-relative">
        {/* Background accent */}
        <div
          className="position-absolute end-0 top-50 translate-middle-y"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, rgba(15, 23, 42, 0) 70%)",
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative z-1 py-4">
          <div className="text-center mb-5 pb-4">
            <h2
              className="display-6 fw-bold text-white mb-3"
              style={{ letterSpacing: "-1px" }}
            >
              Why Laser Whitening?
            </h2>
            <p
              className="lead text-white mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Stop wasting money on store-bought strips that cause sensitivity
              and only whiten the surface. Discover the professional difference.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div
                className="bg-dark p-5 rounded-4 h-100 border"
                style={{ borderColor: "rgba(255,255,255,0.05) !important" }}
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center mb-4 text-dark shadow"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f59e0b",
                  }}
                >
                  <Zap size={28} />
                </div>
                <h4 className="fw-bold text-white mb-3">Instant Results</h4>
                <p className="text-white mb-0 lh-lg">
                  Our advanced blue-light laser accelerates the peroxide gel,
                  breaking down deepest stains in just a single 60-minute
                  session.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-dark p-5 rounded-4 h-100 border"
                style={{ borderColor: "rgba(255,255,255,0.05) !important" }}
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center mb-4 text-dark shadow"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f59e0b",
                  }}
                >
                  <Shield size={28} />
                </div>
                <h4 className="fw-bold text-white mb-3">Enamel Safe</h4>
                <p className="text-white mb-0 lh-lg">
                  The procedure is carefully monitored by our dental
                  professionals to ensure your enamel is completely protected
                  from any damage.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-dark p-5 rounded-4 h-100 border"
                style={{ borderColor: "rgba(255,255,255,0.05) !important" }}
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center mb-4 text-dark shadow"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f59e0b",
                  }}
                >
                  <Clock size={28} />
                </div>
                <h4 className="fw-bold text-white mb-3">Long Lasting</h4>
                <p className="text-white mb-0 lh-lg">
                  Coupled with our complimentary maintenance plan instructions,
                  your new white smile can literally last over an entire year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Image Teaser Section */}
      <section
        className="py-5 border-top border-bottom"
        style={{
          backgroundColor: "#0b1120",
          borderColor: "rgba(255,255,255,0.05) !important",
        }}
      >
        <div className="container py-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-4">
            <div>
              <h3
                className="display-6 fw-bold text-white mb-2"
                style={{ letterSpacing: "-1px" }}
              >
                Real Client Transformations
              </h3>
              <p className="lead text-white mb-0">
                See these amazing 60-minute results.
              </p>
            </div>
            <div className="d-flex gap-2">
              <div
                className="rounded-circle bg-dark d-flex justify-content-center align-items-center"
                style={{
                  width: "48px",
                  height: "48px",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                &larr;
              </div>
              <div
                className="rounded-circle bg-dark d-flex justify-content-center align-items-center text-warning"
                style={{
                  width: "48px",
                  height: "48px",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                &rarr;
              </div>
            </div>
          </div>

          <div
            className="row flex-nowrap overflow-auto hide-scroll pb-4 pb-md-0"
            style={{
              scrollBehavior: "smooth",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80",
                name: "Jessica Alba",
              },
              {
                img: "https://images.unsplash.com/photo-1544507851-f3b143c7bfe8?auto=format&fit=crop&w=400&q=80",
                name: "Mariah K.",
              },
              {
                img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80",
                name: "David S.",
              },
              {
                img: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&w=400&q=80",
                name: "Rachel M.",
              },
            ].map((vid, i) => (
              <div key={i} className="col-10 col-md-5 col-lg-3 flex-shrink-0">
                <div
                  className="position-relative overflow-hidden rounded-4 cursor-pointer shadow-lg w-100 transition-all border"
                  style={{
                    height: "350px",
                    backgroundColor: "#1e293b",
                    backgroundImage: `url('${vid.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderColor: "rgba(255,255,255,0.1) !important",
                  }}
                >
                  {/* Overlay Gradient */}
                  <div
                    className="position-absolute w-100 h-100 top-0 start-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.2) 50%, rgba(0,0,0,0) 100%)",
                    }}
                  ></div>

                  <div className="position-absolute bottom-0 start-0 p-4 w-100 text-center">
                    <h6 className="fw-bold text-white mb-1">{vid.name}</h6>
                    <div className="d-flex justify-content-center gap-1">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <Star
                          key={j}
                          size={12}
                          fill="#f59e0b"
                          color="#f59e0b"
                        />
                      ))}
                    </div>
                    <p
                      className="text-warning small text-uppercase mb-0 mt-2 fw-bold"
                      style={{ fontSize: "10px", letterSpacing: "1px" }}
                    >
                      8 Shades Whiter
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Testimonial Blocks */}
      <section className="py-5 my-md-4">
        <div className="container py-4">
          <div className="row g-4">
            {[
              {
                name: "Sophie T.",
                review:
                  "I am a coffee addict so my teeth were terrible. Honestly I didn't think the laser would work this well. I almost cried when they handed me the mirror.",
              },
              {
                name: "Aaron J.",
                review:
                  "Got this done 3 days before my wedding. Super relaxing 60 minutes, literally zero pain or zings, and the wedding photos turned out incredible.",
              },
              {
                name: "Chloe V.",
                review:
                  "Way better than Crest white strips. My teeth haven't felt this smooth or looked this white since I was a teenager! Will be back next year.",
              },
            ].map((t, idx) => (
              <div className="col-lg-4" key={idx}>
                <div
                  className="card border p-4 h-100 position-relative rounded-4 shadow-sm"
                  style={{
                    backgroundColor: "#1e293b",
                    borderColor: "rgba(255,255,255,0.05) !important",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#f59e0b"
                          color="#f59e0b"
                        />
                      ))}
                    </div>
                    <CheckCircle2 color="#10b981" size={20} />
                  </div>

                  <p
                    className="text-white fw-medium fs-5 mb-4 opacity-75"
                    style={{ lineHeight: "1.7" }}
                  >
                    "{t.review}"
                  </p>

                  <div className="mt-auto pt-3 d-flex align-items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/100?img=${idx + 40}`}
                      className="rounded-circle border border-warning"
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                      }}
                      alt={t.name}
                    />
                    <div>
                      <h6 className="fw-bold text-white mb-0">{t.name}</h6>
                      <div className="text-white-50 small">
                        Verified Treatment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Dark */}
      <section
        className="py-5 border-top"
        style={{
          backgroundColor: "#0b1120",
          borderColor: "rgba(255,255,255,0.05) !important",
        }}
      >
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-white mb-3">
              Questions? We Have Answers.
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {[
                {
                  q: "Does laser teeth whitening hurt?",
                  a: 'Not at all. Unlike aggressive bleaching trays, our proprietary gel mixed with the laser light is specifically formulated to prevent enamel dehydration, creating zero "zings" or sensitivity.',
                },
                {
                  q: "How long does the appointment take?",
                  a: "The entire appointment takes about 60 minutes. We do three 15-minute intervals under the light, plus setup and take-down time.",
                },
                {
                  q: "How many shades whiter will I get?",
                  a: "Most patients see results between 5-8 shades lighter on the very first visit. Individual results depend on starting shade and lifestyle habits.",
                },
                {
                  q: "Is the promotional special for everyone?",
                  a: "Yes! But it is only valid for the first 50 bookings this month. Once the slots are filled, the promotion ends.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-4 mb-3 border bg-dark shadow-sm"
                  style={{ borderColor: "rgba(255,255,255,0.05) !important" }}
                >
                  <div
                    className="p-4 d-flex justify-content-between align-items-center"
                    onClick={() => toggleFaq(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <h5 className="fw-bold text-white mb-0 fs-5 opacity-85">
                      {faq.q}
                    </h5>
                    <ChevronDown
                      size={20}
                      className="text-warning"
                      style={{
                        transform:
                          activeFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  {activeFaq === idx && (
                    <div
                      className="p-4 pt-0 text-white fs-6"
                      style={{ lineHeight: "1.6" }}
                    >
                      <div className="border-top pt-3 border-dark">{faq.a}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep CTA Footer */}
      <section className="py-5 position-relative overflow-hidden">
        <div
          className="position-absolute w-100 h-100 top-0 start-0 z-0"
          style={{ backgroundColor: "#f59e0b", opacity: 0.1 }}
        ></div>
        <div className="container py-5 text-center position-relative z-1 px-4">
          <h2
            className="display-4 fw-bold text-white mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Don't miss our special promotion.
          </h2>
          <p
            className="text-white-50 lead mb-5 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Book your appointment today and secure your promotion. It only takes
            60 seconds to lock in this price.
          </p>
          <a
            href="#booking"
            className="btn btn-lg rounded-pill px-5 fw-bold shadow-lg d-inline-flex align-items-center gap-2 text-dark"
            style={{
              backgroundColor: "#f59e0b",
              border: "none",
              padding: "18px 40px",
              fontSize: "18px",
            }}
          >
            Lock In Promo Price <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <footer className="py-5 bg-black text-center border-top border-dark">
        <div className="container d-flex flex-column align-items-center">
          <div
            className="fw-bold fs-3 d-flex align-items-center gap-2 mb-3 text-white"
            style={{ letterSpacing: "-1px" }}
          >
            <Sparkles size={24} color="#f59e0b" />
            Dental
            <span
              className="fw-medium"
              style={{ fontSize: "18px", color: "#f59e0b" }}
            >
              Glow
            </span>
          </div>
          <p className="text-white-50 mb-4 small" style={{ maxWidth: "400px" }}>
            Premium laser whitening without the premium price tag. Fast,
            effective, and sensitivity-free.
          </p>
          <div className="d-flex gap-4 mb-4">
            <span className="text-white-50 text-decoration-none fw-bold small cursor-pointer">
              Terms
            </span>
            <span className="text-white-50 text-decoration-none fw-bold small cursor-pointer">
              Privacy
            </span>
            <span className="text-white-50 text-decoration-none fw-bold small cursor-pointer">
              Contact
            </span>
          </div>
          <p
            className="text-white-50 mb-0 fw-medium"
            style={{ fontSize: "12px" }}
          >
            &copy; 2026 DentalGlow Inc. All Rights Reserved.
          </p>
        </div>
      </footer>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        html { scroll-behavior: smooth; }
        .hide-scroll::-webkit-scrollbar { display: none; }
      `,
        }}
      />
    </div>
  );
}
