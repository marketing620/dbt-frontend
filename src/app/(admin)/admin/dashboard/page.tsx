import TrafficSourceChart from "@/components/admin/TrafficSourceChart";
import Chart from "@/components/admin/VisitorsChart";
export default function DashboardPage() {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
          <div>
            <h3 className="fw-bold mb-1 text-dark">Admin Dashboard</h3>
            <p className="text-secondary mb-0" style={{ fontSize: "14px" }}>
              Welcome to the admin panel. Your data and statistics will appear here.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="card shadow-sm rounded-4 border-0 p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h6 className="fw-bold text-muted mb-0 text-uppercase" style={{ fontSize: "12px", letterSpacing: "0.5px" }}>Visitors Today</h6>
                <div className="bg-primary bg-opacity-10 p-2 rounded-3 text-primary d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px" }}>
                  <i className="fa-solid fa-users" style={{ fontSize: "14px" }}></i>
                </div>
              </div>
              <p className="fs-3 fw-bold text-dark mb-0">320</p>
              <div className="mt-2 text-success" style={{ fontSize: "12px", fontWeight: "600" }}>
                <i className="fa-solid fa-arrow-up me-1"></i> +12.5% <span className="text-muted fw-normal ms-1">from yesterday</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm rounded-4 border-0 p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h6 className="fw-bold text-muted mb-0 text-uppercase" style={{ fontSize: "12px", letterSpacing: "0.5px" }}>Total Visitors</h6>
                <div className="bg-info bg-opacity-10 p-2 rounded-3 text-info d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px" }}>
                  <i className="fa-solid fa-globe" style={{ fontSize: "14px" }}></i>
                </div>
              </div>
              <p className="fs-3 fw-bold text-dark mb-0">1,204</p>
              <div className="mt-2 text-success" style={{ fontSize: "12px", fontWeight: "600" }}>
                <i className="fa-solid fa-arrow-up me-1"></i> +5.2% <span className="text-muted fw-normal ms-1">from last month</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm rounded-4 border-0 p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h6 className="fw-bold text-muted mb-0 text-uppercase" style={{ fontSize: "12px", letterSpacing: "0.5px" }}>Total Leads</h6>
                <div className="bg-success bg-opacity-10 p-2 rounded-3 text-success d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px" }}>
                  <i className="fa-solid fa-user-plus" style={{ fontSize: "14px" }}></i>
                </div>
              </div>
              <p className="fs-3 fw-bold text-dark mb-0">410</p>
              <div className="mt-2 text-success" style={{ fontSize: "12px", fontWeight: "600" }}>
                <i className="fa-solid fa-arrow-up me-1"></i> +15.3% <span className="text-muted fw-normal ms-1">from last month</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm rounded-4 border-0 p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h6 className="fw-bold text-muted mb-0 text-uppercase" style={{ fontSize: "12px", letterSpacing: "0.5px" }}>Conversion %</h6>
                <div className="bg-warning bg-opacity-10 p-2 rounded-3 text-warning d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px" }}>
                  <i className="fa-solid fa-bolt" style={{ fontSize: "14px" }}></i>
                </div>
              </div>
              <p className="fs-3 fw-bold text-dark mb-0">3.2%</p>
              <div className="mt-2 text-danger" style={{ fontSize: "12px", fontWeight: "600" }}>
                <i className="fa-solid fa-arrow-down me-1"></i> -0.4% <span className="text-muted fw-normal ms-1">from last week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chart />
      <TrafficSourceChart />

      <div className="container mt-4 mb-5">
        <div className="row g-4">
          {/* Recent Leads */}
          <div className="col-lg-7">
            <div className="card shadow-sm rounded-4 border-0 h-100">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-2 px-4 d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0 text-dark">Recent Leads</h5>
                <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: "14px" }}>View All</a>
              </div>
              <div className="card-body px-4">
                <div className="table-responsive">
                  <table className="table table-borderless align-middle mb-0">
                    <thead>
                      <tr className="text-muted" style={{ fontSize: "11px", borderBottom: "1px solid #f0f0f0" }}>
                        <th className="fw-bold pb-3 ps-0">NAME</th>
                        <th className="fw-bold pb-3">SERVICE</th>
                        <th className="fw-bold pb-3 pe-0 text-end">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #f8f9fa" }}>
                        <td className="py-3 ps-0">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px", backgroundColor: "#eef2ff", color: "#4f46e5", fontWeight: "bold", fontSize: "14px" }}>
                              JD
                            </div>
                            <div>
                              <div className="fw-bold text-dark" style={{ fontSize: "14px" }}>John Doe</div>
                              <div className="text-muted" style={{ fontSize: "12px" }}>john@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-secondary" style={{ fontSize: "14px" }}>
                          Dental<br/>Implants
                        </td>
                        <td className="py-3 pe-0 text-end">
                          <span className="badge rounded-pill" style={{ backgroundColor: "#dcfce7", color: "#166534", fontSize: "10px", padding: "6px 12px" }}>NEW</span>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #f8f9fa" }}>
                        <td className="py-3 ps-0">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px", backgroundColor: "#fae8ff", color: "#a21caf", fontWeight: "bold", fontSize: "14px" }}>
                              MS
                            </div>
                            <div>
                              <div className="fw-bold text-dark" style={{ fontSize: "14px" }}>Mila Smith</div>
                              <div className="text-muted" style={{ fontSize: "12px" }}>mila.s@domain.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-secondary" style={{ fontSize: "14px" }}>
                          Teeth<br/>Whitening
                        </td>
                        <td className="py-3 pe-0 text-end">
                          <span className="badge rounded-pill" style={{ backgroundColor: "#dbeafe", color: "#1e40af", fontSize: "10px", padding: "6px 12px" }}>CONTACTED</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 ps-0">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px", backgroundColor: "#ffedd5", color: "#c2410c", fontWeight: "bold", fontSize: "14px" }}>
                              RB
                            </div>
                            <div>
                              <div className="fw-bold text-dark" style={{ fontSize: "14px" }}>Robert Brown</div>
                              <div className="text-muted" style={{ fontSize: "12px" }}>robert.b@web.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-secondary" style={{ fontSize: "14px" }}>
                          Root<br/>Canal
                        </td>
                        <td className="py-3 pe-0 text-end">
                          <span className="badge rounded-pill" style={{ backgroundColor: "#fef3c7", color: "#b45309", fontSize: "10px", padding: "6px 12px" }}>QUALIFIED</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Performance */}
          <div className="col-lg-5">
            <div className="card shadow-sm rounded-4 border-0 h-100">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-2 px-4 d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0 text-dark">Campaign Performance</h5>
                <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: "14px" }}>All Campaigns</a>
              </div>
              <div className="card-body px-4 pt-3 pb-4">
                
                {/* Campaign 1 */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold text-dark" style={{ fontSize: "14px" }}>Dental Implants Fall Drive</span>
                    <span className="fw-bold" style={{ fontSize: "13px", color: "#10b981" }}>82% Target</span>
                  </div>
                  <div className="progress mb-2" style={{ height: "6px", backgroundColor: "#f1f5f9" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "82%", backgroundColor: "#2563eb" }} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                  <div className="d-flex justify-content-between text-muted fw-bold" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>
                    <span>SPENT: $2,400</span>
                    <span>ROI: 3.4X</span>
                  </div>
                </div>

                {/* Campaign 2 */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold text-dark" style={{ fontSize: "14px" }}>Teeth Whitening Promo</span>
                    <span className="fw-bold text-primary" style={{ fontSize: "13px" }}>64% Target</span>
                  </div>
                  <div className="progress mb-2" style={{ height: "6px", backgroundColor: "#f1f5f9" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "64%", backgroundColor: "#2563eb" }} aria-valuenow={64} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                  <div className="d-flex justify-content-between text-muted fw-bold" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>
                    <span>SPENT: $1,200</span>
                    <span>ROI: 2.1X</span>
                  </div>
                </div>

                {/* Campaign 3 */}
                <div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold text-dark" style={{ fontSize: "14px" }}>Invisalign Awareness</span>
                    <span className="fw-bold text-secondary" style={{ fontSize: "13px" }}>45% Target</span>
                  </div>
                  <div className="progress mb-2" style={{ height: "6px", backgroundColor: "#f1f5f9" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "45%", backgroundColor: "#2563eb" }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                  <div className="d-flex justify-content-between text-muted fw-bold" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>
                    <span>SPENT: $4,800</span>
                    <span>ROI: 4.8X</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
