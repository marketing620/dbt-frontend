"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Hook up your Firebase Auth here
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/admin/dashboard"; // Redirect to admin panel after fake login
    }, 1500);
  };

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: "#f8fafc" }}>
      {/* Left Column: Form */}
      <div className="col-12 col-lg-5 d-flex flex-column justify-content-center px-4 px-md-5 position-relative z-1 shadow-lg bg-white">
        <div className="w-100 mx-auto" style={{ maxWidth: "420px" }}>
          
          <div className="mb-5 text-center text-lg-start">
            <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{ width: "56px", height: "56px", backgroundColor: "#eff6ff", color: "#2563eb" }}>
              <Lock size={28} />
            </div>
            <h2 className="fw-bold mb-2 text-dark" style={{ letterSpacing: "-0.5px" }}>Admin Login</h2>
            <p className="text-secondary">Please enter your admin credentials to securely login to your dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
            <div>
              <label className="form-label small fw-bold text-dark" style={{ letterSpacing: "0.5px" }}>EMAIL ADDRESS</label>
              <div className="position-relative">
                <div className="position-absolute top-50 translate-middle-y ps-3 text-muted">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  className="form-control form-control-lg bg-light border-0 ps-5" 
                  placeholder="admin@dentalbillingteam.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ fontSize: "15px" }}
                  required
                />
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label small fw-bold text-dark mb-0" style={{ letterSpacing: "0.5px" }}>PASSWORD</label>
                <a href="#" className="small text-decoration-none fw-semibold" style={{ color: "#2563eb" }}>Forgot password?</a>
              </div>
              <div className="position-relative">
                <div className="position-absolute top-50 translate-middle-y ps-3 text-muted">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="form-control form-control-lg bg-light border-0 ps-5 pe-5" 
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  style={{ fontSize: "15px" }}
                  required
                />
                <button 
                  type="button" 
                  className="btn position-absolute top-50 end-0 translate-middle-y pe-3 border-0 shadow-none text-muted hover-text-dark bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100 fw-bold d-flex justify-content-center align-items-center gap-2 mt-2 shadow-sm rounded-3"
              style={{ padding: "14px", backgroundColor: "#2563eb", border: "none" }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : (
                <>Sign in to Dashboard <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <p className="text-center mt-5 text-muted small">
            Don't have an admin account? <Link href="/admin/register" className="fw-bold text-decoration-none" style={{ color: "#2563eb" }}>Register here</Link>
          </p>

        </div>
      </div>

      {/* Right Column: Hero Graphic */}
      <div className="d-none d-lg-flex col-lg-7 flex-column justify-content-center align-items-center position-relative overflow-hidden" style={{ backgroundColor: "#0f172a" }}>
        
        {/* Decorative elements */}
        <div className="position-absolute" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(15,23,42,0) 70%)", top: "-100px", right: "-100px" }}></div>
        <div className="position-absolute" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(15,23,42,0) 70%)", bottom: "-100px", left: "-100px" }}></div>

        <div className="z-1 text-center text-white px-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: "-1px" }}>Secure Dental Billing Access</h1>
          <p className="lead fw-light text-light" style={{ opacity: 0.8 }}>
            Manage client leads, incoming audit requests, and overall application data confidently through your dedicated administrative portal.
          </p>
        </div>
        
        {/* Abstract UI Mockup overlay */}
        <div className="position-absolute bottom-0 w-75 translate-middle-x start-50 rounded-top-4 shadow-lg border border-bottom-0 border-secondary bg-dark" style={{ height: "40%", opacity: 0.5 }}>
           <div className="d-flex p-3 gap-2 border-bottom border-secondary">
             <div className="rounded-circle bg-danger" style={{width:"12px", height:"12px"}}></div>
             <div className="rounded-circle bg-warning" style={{width:"12px", height:"12px"}}></div>
             <div className="rounded-circle bg-success" style={{width:"12px", height:"12px"}}></div>
           </div>
           <div className="p-4">
             <div className="w-50 bg-secondary rounded mb-3" style={{height:"20px", opacity: 0.3}}></div>
             <div className="w-75 bg-secondary rounded mb-2" style={{height:"12px", opacity: 0.2}}></div>
             <div className="w-100 bg-secondary rounded mb-2" style={{height:"12px", opacity: 0.2}}></div>
           </div>
        </div>

      </div>
    </div>
  );
}
