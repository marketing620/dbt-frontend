"use client";
import { useState } from "react";

export default function AdminNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom px-3 py-1 shadow-sm sticky-top w-100"
      style={{ zIndex: 10 }}
    >
      <div className="container-fluid align-items-center">
        {/* Logo exact match from Header */}
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
              position: "relative",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Mobile Hamburger Toggler */}
        <button
          className="navbar-toggler border-0 shadow-none ms-auto"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div
          className={`collapse navbar-collapse mt-3 mt-lg-0 ${isNavOpen ? "show" : ""}`}
          id="adminNavbarContent"
        >
          {/* Search Bar */}
          <form
            className="d-flex flex-grow-1 mx-lg-4 mb-3 mb-lg-0"
            style={{ maxWidth: "400px" }}
          >
            <div className="input-group">
              <span
                className="input-group-text bg-light border-end-0"
                id="search-icon"
              >
                <i className="fa-solid fa-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control bg-light border-start-0 ps-0 shadow-none"
                placeholder="Search leads, reports..."
                aria-label="Search"
                aria-describedby="search-icon"
              />
            </div>
          </form>

          {/* Profile and Notifications */}
          <div className="d-flex align-items-center gap-3 ms-lg-auto mb-2 mb-lg-0">
            <button
              className="btn btn-light rounded-circle position-relative p-2"
              style={{ width: "40px", height: "40px" }}
            >
              <i className="fa-regular fa-bell text-muted"></i>
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </button>

            <div className="text-start text-lg-end">
              <div
                className="fw-bold mb-0"
                style={{ fontSize: "0.9rem", color: "var(--text-dark)" }}
              >
                Sarah Jenkins
              </div>
              <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                Super Admin
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
