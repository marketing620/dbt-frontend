"use client";

import React, { useState } from "react";
import {
  Building,
  Bell,
  Lock,
  Globe,
  Upload,
  Save,
  Clock,
  Smartphone,
  Mail,
  Check,
  ShieldAlert
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="animation-fade-in">
            <h5 className="fw-bold text-dark mb-1">General Clinic Details</h5>
            <p className="text-muted small mb-4">Manage your clinic's public-facing information and brand identity.</p>
            
            <form onSubmit={handleSave}>
              <div className="row g-4 mb-4">
                <div className="col-12 col-md-8">
                  <div className="mb-3">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>CLINIC NAME</label>
                    <input type="text" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue="DentalGlow Premium Co." />
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>PUBLIC EMAIL</label>
                      <input type="email" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue="hello@dentalglow.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>PUBLIC PHONE</label>
                      <input type="tel" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue="(555) 123-4567" />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>CLINIC LOGO</label>
                  <div className="border border-2 border-dashed border-light-subtle rounded-4 p-4 text-center cursor-pointer bg-light hover-bg-gray transition-all d-flex flex-column align-items-center h-100 justify-content-center">
                    <div className="rounded-circle bg-white d-inline-flex justify-content-center align-items-center shadow-sm mb-3" style={{width: '48px', height: '48px', color: '#001BFF'}}>
                      <Upload size={20} />
                    </div>
                    <h6 className="fw-bold mb-1 fs-6">Upload Avatar</h6>
                    <p className="text-secondary small mb-0 fw-medium">PNG or JPG up to 2MB</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>PHYSICAL ADDRESS</label>
                <input type="text" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium mb-2" defaultValue="123 Main Street, Suite 400" />
                <div className="row g-2">
                  <div className="col-md-6">
                    <input type="text" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue="Los Angeles, CA" placeholder="City, State" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue="90001" placeholder="Zip Code" />
                  </div>
                </div>
              </div>

              <hr className="border-light-subtle my-5" />
              
              <div className="d-flex justify-content-end gap-3">
                <button type="button" className="btn btn-light bg-white border text-secondary fw-bold px-4 shadow-sm">Discard Changes</button>
                <button type="submit" className="btn btn-primary fw-bold shadow px-4 text-white d-flex align-items-center gap-2" style={{ backgroundColor: "#001BFF", border: "none" }}>
                  {saved ? <><Check size={18} /> Saved successfully!</> : <><Save size={18} /> Save Settings</>}
                </button>
              </div>
            </form>
          </div>
        );
      case "booking":
        return (
          <div className="animation-fade-in">
            <h5 className="fw-bold text-dark mb-1">Booking & Scheduling Preferences</h5>
            <p className="text-muted small mb-4">Control how patients can book appointments from landing pages.</p>
            
            <form onSubmit={handleSave}>
              <div className="card border-light-subtle bg-light rounded-4 p-4 mb-4">
                <h6 className="fw-bold text-dark mb-3"><Clock size={16} className="me-2 text-primary d-inline" style={{ marginTop: "-2px" }}/> Business Hours</h6>
                <div className="row g-3 align-items-center mb-2">
                  <div className="col-4 fw-medium text-secondary">Monday - Friday</div>
                  <div className="col-4">
                    <input type="time" className="form-control form-control-sm border-light-subtle" defaultValue="09:00" />
                  </div>
                  <div className="col-4">
                    <input type="time" className="form-control form-control-sm border-light-subtle" defaultValue="17:00" />
                  </div>
                </div>
                <div className="row g-3 align-items-center mb-2">
                  <div className="col-4 fw-medium text-secondary">Saturday</div>
                  <div className="col-4">
                    <input type="time" className="form-control form-control-sm border-light-subtle" defaultValue="10:00" />
                  </div>
                  <div className="col-4">
                    <input type="time" className="form-control form-control-sm border-light-subtle" defaultValue="14:00" />
                  </div>
                </div>
                <div className="row g-3 align-items-center">
                  <div className="col-4 fw-medium text-secondary">Sunday</div>
                  <div className="col-8">
                    <span className="badge bg-white text-danger border">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold text-dark mb-3">Appointment Approval</h6>
                <div className="form-check form-switch mb-3">
                  <input className="form-check-input text-primary" type="checkbox" role="switch" id="autoApprove" defaultChecked style={{cursor: "pointer", transform: "scale(1.2)", marginLeft: "-2rem", marginRight: "1rem"}}/>
                  <label className="form-check-label fw-medium" htmlFor="autoApprove">Auto-Approve Landing Page Leads</label>
                  <p className="text-muted small mt-1">If enabled, leads from landing pages will skip the 'Pending' status and instantly be slotted into your calendar.</p>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold text-dark mb-3">Buffer Time</h6>
                <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>MINUTES BETWEEN APPOINTMENTS</label>
                <select className="form-select border-light-subtle rounded-3 py-2 bg-light font-medium" style={{maxWidth: "200px"}} defaultValue="15">
                  <option value="0">0 minutes</option>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">60 minutes</option>
                </select>
              </div>

              <hr className="border-light-subtle my-5" />
              
              <div className="d-flex justify-content-end gap-3">
                <button type="button" className="btn btn-light bg-white border text-secondary fw-bold px-4 shadow-sm">Discard Changes</button>
                <button type="submit" className="btn btn-primary fw-bold shadow px-4 text-white d-flex align-items-center gap-2" style={{ backgroundColor: "#001BFF", border: "none" }}>
                  {saved ? <><Check size={18} /> Saved successfully!</> : <><Save size={18} /> Save Preferences</>}
                </button>
              </div>
            </form>
          </div>
        );
      case "notifications":
        return (
          <div className="animation-fade-in">
            <h5 className="fw-bold text-dark mb-1">Notification Settings</h5>
            <p className="text-muted small mb-4">Manage how you are alerted when a new lead is captured.</p>
            
            <form onSubmit={handleSave}>
              <div className="card shadow-sm border-light-subtle rounded-4 overflow-hidden mb-4">
                <div className="list-group list-group-flush">
                  <div className="list-group-item p-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="d-flex gap-3">
                        <div className="rounded-circle d-flex justify-content-center align-items-center text-primary bg-primary bg-opacity-10" style={{width: "40px", height: "40px"}}>
                          <Mail size={20} />
                        </div>
                        <div>
                          <h6 className="fw-bold text-dark mb-1">Email Notifications</h6>
                          <p className="text-muted small mb-0">Receive a daily digest and instant alerts for high-value leads.</p>
                        </div>
                      </div>
                      <div className="form-check form-switch pt-1">
                        <input className="form-check-input" type="checkbox" role="switch" defaultChecked style={{cursor: "pointer", transform: "scale(1.2)"}}/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="list-group-item p-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="d-flex gap-3">
                        <div className="rounded-circle d-flex justify-content-center align-items-center text-success bg-success bg-opacity-10" style={{width: "40px", height: "40px"}}>
                          <Smartphone size={20} />
                        </div>
                        <div>
                          <h6 className="fw-bold text-dark mb-1">SMS Alerts</h6>
                          <p className="text-muted small mb-0">Get a text message the moment someone requests a booking.</p>
                        </div>
                      </div>
                      <div className="form-check form-switch pt-1">
                        <input className="form-check-input" type="checkbox" role="switch" defaultChecked style={{cursor: "pointer", transform: "scale(1.2)"}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>SEND EMAIL NOTIFICATIONS TO</label>
                <div className="d-flex gap-2">
                  <input type="email" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue="hello@dentalglow.com" />
                  <button type="button" className="btn btn-outline-primary fw-bold text-nowrap rounded-3">Add Email</button>
                </div>
              </div>

              <hr className="border-light-subtle my-5" />
              
              <div className="d-flex justify-content-end gap-3">
                <button type="submit" className="btn btn-primary fw-bold shadow px-4 text-white d-flex align-items-center gap-2" style={{ backgroundColor: "#001BFF", border: "none" }}>
                  {saved ? <><Check size={18} /> Saved successfully!</> : <><Save size={18} /> Save Notifications</>}
                </button>
              </div>
            </form>
          </div>
        );
      case "security":
        return (
          <div className="animation-fade-in">
            <h5 className="fw-bold text-dark mb-1">Security & Access</h5>
            <p className="text-muted small mb-4">Update your password and manage authentication settings.</p>

            <form onSubmit={handleSave}>
              <div className="row g-4 mb-4">
                <div className="col-12 col-md-8">
                  <h6 className="fw-bold text-dark mb-3"><Lock size={16} className="me-2 text-danger d-inline" style={{ marginTop: "-2px" }}/> Change Password</h6>
                  
                  <div className="mb-3">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>CURRENT PASSWORD</label>
                    <input type="password" className="form-control border-light-subtle rounded-3 py-2 bg-light" placeholder="••••••••" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>NEW PASSWORD</label>
                    <input type="password" className="form-control border-light-subtle rounded-3 py-2 bg-light" placeholder="Leave blank to keep same" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>CONFIRM NEW PASSWORD</label>
                    <input type="password" className="form-control border-light-subtle rounded-3 py-2 bg-light" placeholder="Leave blank to keep same" />
                  </div>
                </div>

                <div className="col-12 col-md-4 d-flex align-items-end">
                   <div className="card border-warning bg-warning bg-opacity-10 p-3 rounded-4 shadow-sm">
                      <h6 className="fw-bold text-warning-emphasis mb-2 d-flex align-items-center gap-2"><ShieldAlert size={16}/> Two-Factor Auth</h6>
                      <p className="text-warning-emphasis small mb-3">Two factor authentication is currently disabled for this account.</p>
                      <button type="button" className="btn btn-warning btn-sm fw-bold shadow-sm w-100 rounded-pill">Enable 2FA</button>
                   </div>
                </div>
              </div>
              
              <hr className="border-light-subtle my-5" />
              
              <div className="d-flex justify-content-between align-items-center gap-3">
                <button type="button" className="btn btn-outline-danger fw-bold border-0 bg-danger bg-opacity-10 text-danger rounded-pill px-4">Sign Out of All Devices</button>
                <button type="submit" className="btn btn-primary fw-bold shadow px-4 text-white d-flex align-items-center gap-2" style={{ backgroundColor: "#001BFF", border: "none" }}>
                  {saved ? <><Check size={18} /> Security Saved!</> : <><Save size={18} /> Update Password</>}
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column h-100 p-2 p-md-4" style={{ backgroundColor: "#f8fafc", minHeight: "calc(100vh - 70px)" }}>
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1" style={{ color: "#0f172a", letterSpacing: "-0.5px" }}>Admin Settings</h2>
        <p className="text-muted mb-0 small">Configure your workspace, booking engine, and security preferences.</p>
      </div>

      <div className="row flex-grow-1 min-h-0 g-4">
        {/* Left Side: Navigation Tabs */}
        <div className="col-12 col-lg-3">
           <div className="card shadow-sm border-0 rounded-4 sticky-top" style={{top: "20px", zIndex: 1}}>
             <div className="list-group list-group-flush rounded-4 overflow-hidden py-2 p-2 gap-1 d-flex flex-row flex-lg-column overflow-auto hide-scroll" style={{ backgroundColor: "#ffffff" }}>
               <button 
                  className={`list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center gap-3 py-3 px-3 transition-all ${activeTab === "general" ? "bg-primary text-white shadow-sm fw-bold" : "text-dark fw-medium"}`}
                  onClick={() => setActiveTab("general")}
                  style={{ backgroundColor: activeTab === "general" ? "#001BFF" : "transparent" }}
               >
                 <Building size={18} /> <span className="d-none d-md-inline">General Profile</span>
               </button>
               
               <button 
                  className={`list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center gap-3 py-3 px-3 transition-all ${activeTab === "booking" ? "bg-primary text-white shadow-sm fw-bold" : "text-dark fw-medium"}`}
                  onClick={() => setActiveTab("booking")}
                  style={{ backgroundColor: activeTab === "booking" ? "#001BFF" : "transparent" }}
               >
                 <Globe size={18} /> <span className="d-none d-md-inline">Booking Engine</span>
               </button>

               <button 
                  className={`list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center gap-3 py-3 px-3 transition-all ${activeTab === "notifications" ? "bg-primary text-white shadow-sm fw-bold" : "text-dark fw-medium"}`}
                  onClick={() => setActiveTab("notifications")}
                  style={{ backgroundColor: activeTab === "notifications" ? "#001BFF" : "transparent" }}
               >
                 <Bell size={18} /> <span className="d-none d-md-inline">Notifications</span>
               </button>

               <button 
                  className={`list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center gap-3 py-3 px-3 transition-all ${activeTab === "security" ? "bg-primary text-white shadow-sm fw-bold" : "text-dark fw-medium"}`}
                  onClick={() => setActiveTab("security")}
                  style={{ backgroundColor: activeTab === "security" ? "#001BFF" : "transparent" }}
               >
                 <Lock size={18} /> <span className="d-none d-md-inline">Security & Access</span>
               </button>
             </div>
           </div>
        </div>

        {/* Right Side: Tab Content pane */}
        <div className="col-12 col-lg-9">
           <div className="card shadow-sm border-0 rounded-4 h-100 p-4 p-md-5">
              {renderTabContent()}
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .min-h-0 { min-height: 0; }
        .hover-bg-gray:hover { background-color: #f1f5f9 !important; }
        .border-dashed { border-style: dashed !important; }
        .animation-fade-in { animation: fadeIn 0.3s ease-in-out; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .transition-all { transition: all 0.2s ease; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}}/>
    </div>
  );
}
