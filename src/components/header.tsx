// app/components/Header.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    // Dynamically import bootstrap JS for the navbar toggler to work
    import("bootstrap/dist/js/bootstrap.bundle.min.js" as any).catch((err) =>
      console.error("Bootstrap JS could not be loaded", err),
    );
  }, []);

  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          {/* Logo */}
          {/* <Link
            href="/"
            className="navbar-brand d-flex align-items-center gap-2"
          >
            <span className="fs-4 fw-bolder" style={{ color: "#0d9488" }}>
              DBT
            </span>
            <span className="fs-5 fw-medium text-secondary">
              Dental Billing Team & Associates
            </span>
          </Link> */}

          <div className="navbar-brand d-flex align-items-center">
            <img
              src="/images/logo.png"
              alt="Dental Billing Team Logo"
              className="w-15 img-fluid"
              style={{
                width: "250px",
                height: "150px",
                marginTop: "-50px",
                marginBottom: "-60px",
                objectFit: "contain",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="navbar-toggler border-0 shadow-none ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ position: "relative", zIndex: 10 }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Navigation + CTA */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
            style={{ visibility: "visible" }}
          >
            <ul className="navbar-nav align-items-lg-center gap-lg-4 gap-3 mb-2 mb-lg-0 mt-3 mt-lg-0">
              <li className="nav-item">
                <Link
                  href="/home"
                  className={`nav-link fw-medium ${pathname === "/" ? "active" : "text-dark"}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link fw-medium ${pathname === "/about" ? "active" : "text-dark"}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle fw-medium ${pathname.startsWith("/services") ? "active" : "text-dark"}`}
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu border-0 shadow mt-2 rounded-3"
                  aria-labelledby="servicesDropdown"
                >
                  <li>
                    <Link
                      href="/services"
                      className="dropdown-item py-2 fw-medium"
                    >
                      All Services
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      href="/services/dental-insurance-billing"
                      className="dropdown-item py-2"
                    >
                      Dental Insurance Billing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/dental-claims-submission"
                      className="dropdown-item py-2"
                    >
                      Dental Claims Submission
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/insurance-payment-posting"
                      className="dropdown-item py-2"
                    >
                      Insurance Payment Posting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/accounts-receivable-management"
                      className="dropdown-item py-2"
                    >
                      Accounts Receivable Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/dental-insurance-verification"
                      className="dropdown-item py-2"
                    >
                      Dental Insurance Verification
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/dental-practice-credentialing"
                      className="dropdown-item py-2"
                    >
                      Dental Practice Credentialing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link fw-medium ${pathname === "/contact" ? "active" : "text-dark"}`}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="btn px-4 py-2 shadow-sm d-block d-lg-inline-block rounded-3 fw-bold btn-primary-custom"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
