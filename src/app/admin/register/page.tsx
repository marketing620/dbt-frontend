"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserPlus, Mail, Eye, EyeOff, User, Lock, ArrowRight } from "lucide-react";

export default function AdminRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    // TODO: Hook up your Firebase Auth here
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/admin/login"; // Redirect to login panel after fake register
    }, 1500);
  };

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: "#f8fafc" }}>
      
      {/* Right Column: Hero Graphic (Swapped to Left for variety) */}
      <div className="d-none d-lg-flex col-lg-7 flex-column justify-content-center align-items-center position-relative overflow-hidden order-last order-lg-first" style={{ backgroundColor: "#1e293b" }}>
        
        {/* Decorative elements */}
        <div className="position-absolute" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(30,41,59,0) 70%)", top: "-100px", left: "-100px" }}></div>
        <div className="position-absolute" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(30,41,59,0) 70%)", bottom: "-100px", right: "-100px" }}></div>

        <div className="z-1 text-center text-white px-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: "-1px" }}>Join the Billing Team</h1>
          <p className="lead fw-light text-light" style={{ opacity: 0.8 }}>
            Create an administrative account to help streamline financial operations and process inbound audits effectively.
          </p>
        </div>
        
        {/* Abstract UI Mockup overlay */}
        <div className="position-absolute bottom-0 w-75 translate-middle-x start-50 rounded-top-4 shadow-lg border border-bottom-0 border-secondary bg-dark" style={{ height: "40%", opacity: 0.5 }}>
           <div className="d-flex p-3 gap-2 border-bottom border-secondary">
             <div className="rounded-circle bg-danger" style={{width:"12px", height:"12px"}}></div>
             <div className="rounded-circle bg-warning" style={{width:"12px", height:"12px"}}></div>
             <div className="rounded-circle bg-success" style={{width:"12px", height:"12px"}}></div>
           </div>
           <div className="p-4 d-flex justify-content-between align-items-start gap-4">
             <div className="w-25 bg-secondary rounded" style={{height:"120px", opacity: 0.2}}></div>
             <div className="w-75">
               <div className="w-100 bg-secondary rounded mb-2" style={{height:"16px", opacity: 0.3}}></div>
               <div className="w-75 bg-secondary rounded mb-2" style={{height:"12px", opacity: 0.2}}></div>
               <div className="w-50 bg-secondary rounded mb-2" style={{height:"12px", opacity: 0.2}}></div>
             </div>
           </div>
        </div>
      </div>

      {/* Left Column: Form */}
      <div className="col-12 col-lg-5 d-flex flex-column justify-content-center px-4 px-md-5 position-relative z-1 shadow-lg bg-white order-first order-lg-last">
        <div className="w-100 mx-auto" style={{ maxWidth: "420px" }}>
          
          <div className="mb-5 text-center text-lg-start">
            <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{ width: "56px", height: "56px", backgroundColor: "#f0fdf4", color: "#16a34a" }}>
              <UserPlus size={28} />
            </div>
            <h2 className="fw-bold mb-2 text-dark" style={{ letterSpacing: "-0.5px" }}>Create your account</h2>
            <p className="text-secondary">Register as an administrator to manage leads and internal data.</p>
          </div>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div>
              <label className="form-label small fw-bold text-dark" style={{ letterSpacing: "0.5px" }}>FULL NAME</label>
              <div className="position-relative">
                <div className="position-absolute top-50 translate-middle-y ps-3 text-muted">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  className="form-control form-control-lg bg-light border-0 ps-5" 
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ fontSize: "15px" }}
                  required
                />
              </div>
            </div>

            <div>
              <label className="form-label small fw-bold text-dark mt-2" style={{ letterSpacing: "0.5px" }}>EMAIL ADDRESS</label>
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

            <div className="row g-3 px-0 mx-0 mt-1">
              <div className="col-6 ps-0 pe-2">
                <label className="form-label small fw-bold text-dark" style={{ letterSpacing: "0.5px" }}>PASSWORD</label>
                <div className="position-relative">
                  <div className="position-absolute top-50 translate-middle-y ps-3 text-muted">
                    <Lock size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="form-control form-control-lg bg-light border-0 ps-5" 
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    style={{ fontSize: "15px" }}
                    required
                  />
                </div>
              </div>
              <div className="col-6 pe-0 ps-2">
                <label className="form-label small fw-bold text-dark" style={{ letterSpacing: "0.5px" }}>CONFIRM</label>
                <div className="position-relative">
                  <div className="position-absolute top-50 translate-middle-y ps-3 text-muted">
                    <Lock size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="form-control form-control-lg bg-light border-0 ps-5" 
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    style={{ fontSize: "15px" }}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="form-check mt-2 mb-3">
              <input className="form-check-input" type="checkbox" id="showPwd" onChange={() => setShowPassword(!showPassword)} />
              <label className="form-check-label text-muted small" htmlFor="showPwd">
                Show passwords
              </label>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100 fw-bold d-flex justify-content-center align-items-center gap-2 shadow-sm rounded-3"
              style={{ padding: "14px", backgroundColor: "#1e293b", border: "none" }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : (
                <>Complete Registration <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <p className="text-center mt-4 text-muted small">
            Already have an account? <Link href="/admin/login" className="fw-bold text-decoration-none" style={{ color: "#2563eb" }}>Sign in</Link>
          </p>

        </div>
      </div>

    </div>
  );
}
