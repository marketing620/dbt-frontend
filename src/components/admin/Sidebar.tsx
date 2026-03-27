"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ bottom: 0, left: 0 });
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLElement>,
    label: string,
  ) => {
    if (isOpen || isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    // Since the inner container is always 260px wide but the outer is cut to 80px when closed,
    // rect.right will be 260. We manually clamp it to 80px (the visible width) + 10px margin.
    setTooltipPos({
      top: rect.top + rect.height / 2,
      left: rect.left + 80,
    });
    setHoveredLabel(label);
  };

  const handleMouseLeave = () => {
    setHoveredLabel(null);
  };

  const handleDropdownClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDropdownOpen) {
      const rect = e.currentTarget.getBoundingClientRect();
      if (isOpen) {
        setDropdownPos({
          bottom: window.innerHeight - rect.top + 10,
          left: rect.left,
        });
      } else {
        // Force the left position to the edge of the 80px visible sidebar
        setDropdownPos({
          bottom: window.innerHeight - rect.bottom,
          left: rect.left + 80,
        });
      }
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => setIsDropdownOpen(false);
    if (isDropdownOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDropdownOpen]);

  useEffect(() => {
    // Keep track of the last mobile state to prevent resize events (like scrollbars appearing)
    // from re-triggering the sidebar open state when it shouldn't.
    let lastIsMobile = window.innerWidth < 992;

    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      if (mobile !== lastIsMobile) {
        setIsMobile(mobile);
        setIsOpen(!mobile);
        lastIsMobile = mobile;
      }
    };

    // Initial check
    setIsMobile(lastIsMobile);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSideBar = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button (Only visible on small screens to open sidebar) */}
      {isMobile && !isOpen && (
        <button
          type="button"
          className="btn btn-dark shadow-sm position-fixed rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "50px",
            height: "50px",
            bottom: "30px",
            right: "30px",
            zIndex: 1045,
          }}
          onClick={toggleSideBar}
          aria-label="Open sidebar"
        >
          <i className="fa-solid fa-bars fs-4"></i>
        </button>
      )}

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 transition-all"
          style={{ zIndex: 1040 }}
          onClick={toggleSideBar}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`flex-shrink-0 transition-all border-end border-secondary shadow-sm ${
          isMobile
            ? "position-fixed h-100 top-0 start-0"
            : "h-100 position-relative"
        }`}
        style={{
          width: isOpen ? "260px" : isMobile ? "0px" : "80px",
          transition: "width 0.3s ease, transform 0.3s ease",
          transform: isMobile && !isOpen ? "translateX(-100%)" : "none",
          zIndex: isMobile ? 1050 : 1,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <div className="d-flex flex-column h-100" style={{ width: "260px" }}>
          {/* Sidebar Header */}
          <div
            className="d-flex align-items-center border-secondary position-relative"
            style={{ minHeight: "80px" }}
          >
            <button
              className="btn d-flex align-items-center justify-content-center p-0"
              onClick={toggleSideBar}
              style={{
                position: "absolute",
                left: "20px",
                zIndex: 10,
                width: "40px",
                height: "40px",
                backgroundColor: "#001BFF",
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 2px 4px rgba(0,27,255,0.2)"
              }}
              aria-label="Toggle sidebar"
            >
              <i
                className={`fa-solid ${isOpen ? "fa-tooth" : "fa-bars"}`}
                style={{
                  color: "#ffffff",
                  fontSize: "18px"
                }}
              ></i>
            </button>
            <div
              className="d-flex flex-column justify-content-center text-nowrap"
              style={{
                marginLeft: "75px",
                opacity: isOpen ? 1 : 0,
                transition: "opacity 0.2s",
                pointerEvents: isOpen ? "auto" : "none",
              }}
            >
              <span
                className="fw-bold"
                style={{
                  fontSize: "20px",
                  color: "#0a2540",
                  lineHeight: "1.1",
                  letterSpacing: "-0.5px"
                }}
              >
                DentalCRM
              </span>
              <span
                className="text-muted fw-semibold"
                style={{
                  fontSize: "13px",
                  lineHeight: "1",
                  letterSpacing: "0.2px",
                  color: "#6c757d"
                }}
              >
                Marketing System
              </span>
            </div>
          </div>

          {/* Sidebar Nav Links */}
          <ul className="nav nav-pills flex-column mb-auto gap-2 px-2">
            {[
              {
                label: "Dashboard",
                href: "/admin/dashboard",
                icon: "fa-chart-pie",
              },
              {
                label: "Leads Management",
                href: "/admin/leads",
                icon: "fa-users",
              },
              // {
              //   label: "Analytics",
              //   href: "/admin/analytics",
              //   icon: "fa-chart-line",
              // },
              { label: "Services", href: "/admin/services", icon: "fa-tooth" },
              {
                label: "Testimonials",
                href: "/admin/testimonials",
                icon: "fa-quote-left",
              },
              // { label: "Users", href: "/admin/users", icon: "fa-user" },
              {
                label: "Contact Messages",
                href: "/admin/contact-messages",
                icon: "fa-envelope",
              },
              { label: "Settings", href: "/admin/settings", icon: "fa-gear" },
            ].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link
                  href={item.href}
                  className="nav-link text-dark px-3 py-2 rounded-3 sidebar-link d-flex align-items-center w-100"
                  onMouseEnter={(e) => handleMouseEnter(e, item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <i
                    className={`fa-solid ${item.icon}`}
                    style={{ width: "24px", textAlign: "center" }}
                  ></i>
                  <span
                    className="ms-3 text-nowrap"
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transition: "opacity 0.2s",
                      fontSize: "14px",
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Sidebar Footer / User Info */}
          <div className="p-3 border-top border-secondary mt-auto">
            <div className="dropdown position-relative">
              <a
                href="#"
                className="d-flex align-items-center text-dark text-decoration-none px-2 rounded sidebar-link"
                onClick={handleDropdownClick}
                aria-expanded={isDropdownOpen}
              >
                <img
                  src="https://ui-avatars.com/api/?name=Admin+User&background=20C997&color=fff"
                  alt="Admin User"
                  width="35"
                  height="35"
                  className="rounded-circle"
                />
                <strong
                  className="ms-2 text-nowrap"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity 0.2s",
                    fontSize: "14px",
                  }}
                >
                  Admin Menu
                </strong>
              </a>
              <ul
                className={`dropdown-menu dropdown-menu-dark shadow ${
                  isDropdownOpen ? "show" : ""
                }`}
                style={{
                  position: "fixed",
                  bottom: dropdownPos.bottom,
                  left: dropdownPos.left,
                  margin: 0,
                  zIndex: 1060,
                }}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip Portal-ish */}
      {!isOpen && !isMobile && hoveredLabel && (
        <div
          className="bg-dark text-white px-3 py-2 rounded shadow"
          style={{
            position: "fixed",
            top: tooltipPos.top,
            left: tooltipPos.left,
            transform: "translateY(-50%)",
            zIndex: 1060,
            fontSize: "14px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {hoveredLabel}
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .sidebar-link {
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .sidebar-link:hover {
          background-color: rgba(255,255,255,0.1);
          color: #20C997 !important;
        }
      `,
        }}
      />
    </>
  );
}
