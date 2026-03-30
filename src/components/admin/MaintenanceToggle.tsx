"use client";

import React, { useState, useEffect } from "react";
import { AlertTriangle, Power, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function MaintenanceToggle() {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Automatically fetch the current state from the database
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${API_URL}/api/settings/maintenance`);
        const data = await res.json();
        setIsActive(data.maintenanceActive || false);
      } catch (error) {
        console.error("Failed to load maintenance status", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStatus();
  }, []);

  const toggleMaintenance = async () => {
    setIsLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      
      // Hit the secure route to flip it in Firestore
      const res = await fetch(`${API_URL}/api/settings/maintenance`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          // Adding authorization header if your backend requires it
          // "Authorization": `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ maintenanceActive: !isActive }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setIsActive(data.maintenanceActive);
      toast.success(
        `Maintenance Mode is now ${data.maintenanceActive ? 'ACTIVE' : 'DISABLED'}! (May take up to 30 seconds to propagate)`,
        { duration: 5000 }
      );
    } catch (error: any) {
      toast.error("Failed to toggle: " + (error.message || "Unknown error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden mt-4" style={{ maxWidth: "500px" }}>
      <div className={`card-header text-white border-0 px-4 py-3 d-flex align-items-center gap-2 \${isActive ? 'bg-danger' : 'bg-primary'}`}>
        <AlertTriangle size={20} />
        <h5 className="mb-0 fw-bold">Live Status Controller</h5>
      </div>
      
      <div className="card-body p-4 d-flex align-items-center justify-content-between">
        <div>
          <h6 className="fw-bold mb-1" style={{ color: "#334155" }}>Maintenance Mode</h6>
          <p className="text-muted small mb-0">
            {isActive 
              ? "Consumers are currently locked out of the website."
              : "Website is live and fully operative for all consumers."}
          </p>
        </div>

        <div>
          <button 
            className={`btn d-flex align-items-center gap-2 fw-bold px-4 py-2 \${isActive ? 'btn-outline-danger' : 'btn-secondary'}`}
            onClick={toggleMaintenance}
            disabled={isLoading}
            style={{ borderRadius: "50px", transition: "all 0.3s" }}
          >
            {isLoading ? (
              <Loader2 size={18} className="spin" style={{ animation: "spin 1s linear infinite" }} />
            ) : isActive ? (
              <>Deactivate <Power size={18} /></>
            ) : (
              <>Activate <Power size={18} /></>
            )}
          </button>
        </div>
      </div>
      
      {/* Inline styles for spinner and animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
