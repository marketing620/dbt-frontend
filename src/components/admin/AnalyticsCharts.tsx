export default function AnalyticsCharts() {
  return (
    <div className="row g-4 mb-4">
      {/* Top Value Cards */}
      <div className="col-12 col-sm-6 col-xl-3">
        <div
          className="card-custom p-4 border border-1"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6
              className="text-muted fw-bold mb-0 text-uppercase"
              style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
            >
              Total Revenue
            </h6>
            <div
              className="icon-bg rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              <i className="fa-solid fa-dollar-sign"></i>
            </div>
          </div>
          <h3 className="fw-bold mb-1" style={{ color: "var(--text-dark)" }}>
            $284,500
          </h3>
          <p className="mb-0 text-success small fw-medium">
            <i className="fa-solid fa-arrow-trend-up me-1"></i> +12.5%{" "}
            <span className="text-muted">vs last month</span>
          </p>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-xl-3">
        <div
          className="card-custom p-4 border border-1"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6
              className="text-muted fw-bold mb-0 text-uppercase"
              style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
            >
              Active Leads
            </h6>
            <div
              className="icon-bg rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(32, 201, 151, 0.15)",
                color: "var(--secondary)",
              }}
            >
              <i className="fa-solid fa-users"></i>
            </div>
          </div>
          <h3 className="fw-bold mb-1" style={{ color: "var(--text-dark)" }}>
            142
          </h3>
          <p className="mb-0 text-success small fw-medium">
            <i className="fa-solid fa-arrow-trend-up me-1"></i> +5.2%{" "}
            <span className="text-muted">vs last month</span>
          </p>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-xl-3">
        <div
          className="card-custom p-4 border border-1"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6
              className="text-muted fw-bold mb-0 text-uppercase"
              style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
            >
              Claims Clean Rate
            </h6>
            <div
              className="icon-bg rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(110, 193, 228, 0.15)",
                color: "var(--accent)",
              }}
            >
              <i className="fa-solid fa-file-invoice"></i>
            </div>
          </div>
          <h3 className="fw-bold mb-1" style={{ color: "var(--text-dark)" }}>
            98.2%
          </h3>
          <p className="mb-0 text-success small fw-medium">
            <i className="fa-solid fa-arrow-trend-up me-1"></i> +1.1%{" "}
            <span className="text-muted">vs last month</span>
          </p>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-xl-3">
        <div
          className="card-custom p-4 border border-1"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6
              className="text-muted fw-bold mb-0 text-uppercase"
              style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
            >
              Avg AR Days
            </h6>
            <div
              className="icon-bg rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(220, 53, 69, 0.1)",
                color: "#dc3545",
              }}
            >
              <i className="fa-regular fa-clock"></i>
            </div>
          </div>
          <h3 className="fw-bold mb-1" style={{ color: "var(--text-dark)" }}>
            24 <span className="fs-6 text-muted fw-normal">days</span>
          </h3>
          <p className="mb-0 text-danger small fw-medium">
            <i className="fa-solid fa-arrow-trend-down me-1"></i> -3{" "}
            <span className="text-muted">days vs last month</span>
          </p>
        </div>
      </div>

      {/* Mock Bar Chart - Traffic Sources */}
      <div className="col-12 col-lg-8">
        <div
          className="card-custom p-4 border border-1 h-100"
          style={{ borderColor: "#e5e7eb" }}
        >
          <h5 className="fw-bold mb-4">Traffic Sources & Leads</h5>
          <div
            className="d-flex h-100 align-items-end gap-3 pb-3 pt-4"
            style={{ minHeight: "250px" }}
          >
            <div className="flex-fill text-center d-flex flex-column justify-content-end h-100">
              <div
                className="w-100 rounded-top"
                style={{ height: "60%", backgroundColor: "var(--primary)" }}
              ></div>
              <span className="small text-muted mt-2 d-block">Organic</span>
            </div>
            <div className="flex-fill text-center d-flex flex-column justify-content-end h-100">
              <div
                className="w-100 rounded-top"
                style={{ height: "35%", backgroundColor: "var(--accent)" }}
              ></div>
              <span className="small text-muted mt-2 d-block">Direct</span>
            </div>
            <div className="flex-fill text-center d-flex flex-column justify-content-end h-100">
              <div
                className="w-100 rounded-top"
                style={{ height: "80%", backgroundColor: "var(--secondary)" }}
              ></div>
              <span className="small text-muted mt-2 d-block">Paid Ads</span>
            </div>
            <div className="flex-fill text-center d-flex flex-column justify-content-end h-100">
              <div
                className="w-100 rounded-top"
                style={{
                  height: "45%",
                  backgroundColor: "var(--primary)",
                  opacity: 0.6,
                }}
              ></div>
              <span className="small text-muted mt-2 d-block">Referral</span>
            </div>
            <div className="flex-fill text-center d-flex flex-column justify-content-end h-100">
              <div
                className="w-100 rounded-top"
                style={{ height: "20%", backgroundColor: "#e2e8f0" }}
              ></div>
              <span className="small text-muted mt-2 d-block">Social</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="col-12 col-lg-4">
        <div
          className="card-custom p-4 border border-1 h-100"
          style={{ borderColor: "#e5e7eb" }}
        >
          <h5 className="fw-bold mb-4">Recent Activity</h5>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex gap-3">
              <div
                className="rounded-circle bg-secondary-custom d-flex align-items-center justify-content-center text-white"
                style={{ width: "35px", height: "35px", flexShrink: 0 }}
              >
                <i className="fa-solid fa-check fs-6"></i>
              </div>
              <div>
                <p
                  className="mb-0 fw-medium text-dark"
                  style={{ fontSize: "0.95rem" }}
                >
                  New Lead Received
                </p>
                <span className="text-muted small">
                  Dental Care Plus contacted via form
                </span>
                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                  10 mins ago
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div
                className="rounded-circle bg-primary-custom d-flex align-items-center justify-content-center text-white"
                style={{ width: "35px", height: "35px", flexShrink: 0 }}
              >
                <i className="fa-solid fa-file-invoice fs-6"></i>
              </div>
              <div>
                <p
                  className="mb-0 fw-medium text-dark"
                  style={{ fontSize: "0.95rem" }}
                >
                  Audit Report Sent
                </p>
                <span className="text-muted small">
                  Sent to Dr. Ramirez Clinic
                </span>
                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                  2 hours ago
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center text-white"
                style={{
                  backgroundColor: "var(--accent)",
                  width: "35px",
                  height: "35px",
                  flexShrink: 0,
                }}
              >
                <i className="fa-solid fa-user-plus fs-6"></i>
              </div>
              <div>
                <p
                  className="mb-0 fw-medium text-dark"
                  style={{ fontSize: "0.95rem" }}
                >
                  New Client Onboarded
                </p>
                <span className="text-muted small">
                  Smiles Orthodontics completed setup
                </span>
                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                  1 day ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
