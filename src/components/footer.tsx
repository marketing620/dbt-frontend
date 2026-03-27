import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer position-relative pt-5 pb-4 overflow-hidden"
      style={{ backgroundColor: "#f8fafc" }}
    >
      {/* Faint Background Image */}
      <div
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          backgroundImage:
            "url('/images/teamwork.png')" /* Using the teamwork image as the faint medical background */,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative pt-4" style={{ zIndex: 1 }}>
        <div className="row justify-content-between g-5">
          {/* Column 1: Brand & Desc */}
          <div className="col-12 col-md-4 col-lg-3">
            {/* <Link href="/" className="text-decoration-none d-flex align-items-center gap-2 mb-4">
              <i className="fa-solid fa-dharmachakra fs-1" style={{ color: "#f5a623" }}></i>
              <div className="lh-sm">
                <span className="fw-bold fs-6 d-block" style={{ color: "#2a3b4c", letterSpacing: "1px" }}>DENTALBILLING</span>
                <span className="fw-bold fs-6 d-block" style={{ color: "#2a3b4c", letterSpacing: "1px" }}>TEAM &amp; ASSOCIATES</span>
              </div>
            </Link> */}

            <img
              src="/images/logo.png"
              alt=""
              style={{
                width: "300px",
                height: "200px",
                marginTop: "-50px",
                marginBottom: "-60px",
                objectFit: "contain",
              }}
            />

            <p
              className="text-muted mb-5 pe-md-3 fw-medium"
              style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
            >
              Automate and simplify your dental practice operations with secure
              and efficient billing solutions.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-2 mb-4">
              {[
                { name: "facebook", icon: "fa-facebook-f" },
                { name: "twitter", icon: "fa-x-twitter" },
                { name: "linkedin", icon: "fa-linkedin-in" },
                { name: "youtube", icon: "fa-youtube" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href="#"
                  className="social-icon d-flex align-items-center justify-content-center text-white text-decoration-none rounded-circle shadow-sm"
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#2563eb",
                    transition: "transform 0.2s",
                  }}
                  aria-label={platform.name}
                >
                  <i className={`fa-brands ${platform.icon} fs-6`}></i>
                </a>
              ))}
            </div>
            {/* Note: In your globals.css, you will need to add: .social-icon:hover { transform: translateY(-3px) !important; } and .hover-focus-teal:hover { color: #13a195 !important; } */}
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-12 col-md-4 col-lg-2">
            <h4 className="fw-bold text-dark mb-4 pb-2">Quick Links</h4>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              {[
                { href: "/", label: "Home" },
                { href: "#", label: "Testimonials" },
                { href: "#", label: "Our Services" },
                { href: "#", label: "About Us" },
                { href: "#", label: "Contact Us" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="d-flex align-items-center gap-2"
                >
                  <i
                    className="fa-solid fa-angle-right"
                    style={{ color: "#2563eb", fontSize: "0.85rem" }}
                  ></i>
                  <Link
                    href={item.href}
                    className="text-decoration-none text-muted fw-medium hover-focus-teal"
                    style={{ transition: "color 0.2s" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="col-12 col-md-4 col-lg-3">
            <h4 className="fw-bold text-dark mb-4 pb-2">Our Services</h4>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              {[
                "RCM",
                "Dental Billing",
                "Cedentialing",
                "Denial Management",
                "Ar - FollowUp",
              ].map((service) => (
                <li key={service} className="d-flex align-items-center gap-2">
                  <i
                    className="fa-solid fa-angle-right"
                    style={{ color: "#2563eb", fontSize: "0.85rem" }}
                  ></i>
                  <Link
                    href="#"
                    className="text-decoration-none text-muted fw-medium hover-focus-teal"
                    style={{ transition: "color 0.2s" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="col-12 col-md-12 col-lg-3 mt-5 mt-lg-0">
            <h4 className="fw-bold text-dark mt-5 pb-2">Get in Touch</h4>
            <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
              <li className="d-flex align-items-start gap-3">
                <i
                  className="fa-solid fa-phone mt-1"
                  style={{ color: "#2563eb", width: "20px" }}
                ></i>
                <a
                  href="tel:+14754346464"
                  className="text-decoration-none text-muted fw-medium hover-focus-teal"
                  style={{ transition: "color 0.2s" }}
                >
                  (475) 434-6464
                </a>
              </li>
              <li className="d-flex align-items-start gap-3">
                <i
                  className="fa-regular fa-envelope mt-1"
                  style={{ color: "#2563eb", width: "20px" }}
                ></i>
                <a
                  href="mailto:admin@dentalbilingteam.com"
                  className="text-decoration-none text-muted fw-medium text-break hover-focus-teal"
                  style={{ transition: "color 0.2s" }}
                >
                  admin@dentalbilingteam.com
                </a>
              </li>
              <li className="d-flex align-items-start gap-3">
                <i
                  className="fa-solid fa-location-dot mt-1"
                  style={{ color: "#2563eb", width: "20px" }}
                ></i>
                <span className="text-muted fw-medium">
                  Brookfield, CT 06804
                </span>
              </li>
              <li className="d-flex align-items-start gap-3">
                <i
                  className="fa-regular fa-clock mt-1"
                  style={{ color: "#2563eb", width: "20px" }}
                ></i>
                <div className="text-muted fw-medium">
                  Mon-Fri : 8:00 am-9:00pm
                  <span className="d-block mt-3">
                    Saturday 8:00 am to 8:00 pm
                  </span>
                  <span className="d-block mt-3">Closed on Sundays</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          className="mt-5 pt-4 pb-2"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          <div className="row flex-column-reverse flex-md-row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start text-muted fw-medium mt-3 mt-md-0">
              Copyright &copy; {currentYear !== 2026 ? "2026" : currentYear}{" "}
              DBT. All Rights Reserved.
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end gap-3 text-muted fw-medium">
              <Link
                href="#"
                className="text-decoration-none text-muted hover-focus-teal"
              >
                Terms &amp; Service
              </Link>
              <span>|</span>
              <Link
                href="#"
                className="text-decoration-none text-muted hover-focus-teal"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
