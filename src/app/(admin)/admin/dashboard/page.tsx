"use client";

import { useEffect, useState } from "react";
import TrafficSourceChart from "@/components/admin/TrafficSourceChart";
import Chart from "@/components/admin/VisitorsChart";

export default function DashboardPage() {
  const [visitorsToday, setVisitorsToday] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [totalLeads, setTotalLeads] = useState(0);
  const [conversionRate, setConversionRate] = useState("0");
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const response = await fetch(`${API_URL}/api/analytics/dashboard`);
        if (response.ok) {
          const resData = await response.json();
          setVisitorsToday(resData.visitorsToday || 0);
          setTotalVisitors(resData.totalVisitors || 0);
          setTotalLeads(resData.totalLeads || 0);
          setConversionRate(resData.conversionRate || "0");
          if (resData.recentLeads) {
            setRecentLeads(resData.recentLeads);
          }
        }
      } catch (error) {
        console.error("Failed to fetch analytics summary", error);
      } finally {
        setLoadingLeads(false);
      }
    };
    fetchAnalytics();
  }, []);

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
              <p className="fs-3 fw-bold text-dark mb-0">{visitorsToday}</p>
              <div className="mt-2 text-success" style={{ fontSize: "12px", fontWeight: "600" }}>
                <i className="fa-solid fa-arrow-up me-1"></i> <span className="text-muted fw-normal ms-1">Active Tracker</span>
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
              <p className="fs-3 fw-bold text-dark mb-0">{totalVisitors}</p>
              <div className="mt-2 text-success" style={{ fontSize: "12px", fontWeight: "600" }}>
                <i className="fa-solid fa-arrow-up me-1"></i> <span className="text-muted fw-normal ms-1">Active Tracker</span>
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
              <p className="fs-3 fw-bold text-dark mb-0">{totalLeads}</p>
              <div className="mt-2 text-success" style={{ fontSize: "12px", fontWeight: "600" }}>
                <i className="fa-solid fa-arrow-up me-1"></i> <span className="text-muted fw-normal ms-1">Auto Synchronized</span>
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
              <p className="fs-3 fw-bold text-dark mb-0">{conversionRate}%</p>
              <div className="mt-2 text-primary" style={{ fontSize: "12px", fontWeight: "600" }}>
                <i className="fa-solid fa-chart-line me-1"></i> <span className="text-muted fw-normal ms-1">Calculated</span>
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
                      {loadingLeads ? (
                        <tr>
                          <td colSpan={3} className="text-center py-4 text-muted small">Loading...</td>
                        </tr>
                      ) : recentLeads.length > 0 ? (
                        recentLeads.map((lead: any) => {
                          const getInitials = (name: string) => name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase();
                          const colors = [
                            { bg: "#eef2ff", text: "#4f46e5" },
                            { bg: "#fae8ff", text: "#a21caf" },
                            { bg: "#ffedd5", text: "#c2410c" },
                            { bg: "#ecfccb", text: "#4d7c0f" },
                            { bg: "#fce7f3", text: "#be185d" }
                          ];
                          const color = colors[lead.name.length % colors.length];

                          return (
                            <tr key={lead.id} style={{ borderBottom: "1px solid #f8f9fa" }}>
                              <td className="py-3 ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px", backgroundColor: color.bg, color: color.text, fontWeight: "bold", fontSize: "14px" }}>
                                    {getInitials(lead.name)}
                                  </div>
                                  <div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "14px" }}>{lead.name}</div>
                                    <div className="text-muted" style={{ fontSize: "12px" }}>{lead.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 text-secondary" style={{ fontSize: "14px" }}>
                                {lead.service.length > 15 ? lead.service.substring(0, 15) + '...' : lead.service}
                              </td>
                              <td className="py-3 pe-0 text-end">
                                <span className="badge rounded-pill" style={{ 
                                  backgroundColor: lead.status === "NEW" ? "#dcfce7" : lead.status === "CLOSED" ? "#f3e8ff" : "#dbeafe", 
                                  color: lead.status === "NEW" ? "#166534" : lead.status === "CLOSED" ? "#7e22ce" : "#1e40af", 
                                  fontSize: "10px", padding: "6px 12px" }}>
                                  {lead.status.toUpperCase()}
                                </span>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={3} className="text-center py-4 text-muted small">No recent leads found.</td>
                        </tr>
                      )}
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
