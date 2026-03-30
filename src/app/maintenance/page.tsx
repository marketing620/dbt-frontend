import React from 'react';

export default function Maintenance() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden" style={{ backgroundColor: '#f4f8fb' }}>
      
      {/* Decorative Blur Elements */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "#2563eb",
          opacity: 0.15,
          bottom: "-150px",
          left: "-150px",
          zIndex: 0,
          filter: "blur(70px)",
        }}
      ></div>
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "#0d9488",
          opacity: 0.15,
          top: "-50px",
          right: "-100px",
          zIndex: 0,
          filter: "blur(60px)",
        }}
      ></div>

      <div className="container position-relative z-1 text-center px-4">
        {/* Animated Custom Icon Box */}
        <div className="mb-4 d-inline-block position-relative">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center shadow-lg mx-auto"
            style={{ 
              width: '120px', 
              height: '120px', 
              backgroundColor: '#ffffff',
              border: '4px solid #f8fafc',
              animation: "pulse 2.5s infinite"
            }}
          >
            <i className="fa-solid fa-tooth" style={{ fontSize: '3rem', color: '#13a195' }}></i>
          </div>
          {/* Subtle Sparkle/Tool accents */}
          <i className="fa-solid fa-sparkles position-absolute" style={{ color: '#d4af37', top: '0', right: '-15px', fontSize: '1.2rem', animation: 'sparkle 1.5s infinite alternate' }}></i>
        </div>

        <h1 className="display-4 fw-bold mb-3" style={{ color: '#0f172a', letterSpacing: '-1px' }}>
          Polishing Things Up!
        </h1>
        
        <p className="lead mx-auto mb-5" style={{ color: '#475569', maxWidth: '650px', lineHeight: '1.8' }}>
          Our website is currently undergoing a deep clean to better support your practice. We are building a smoother, faster experience to streamline your dental revenue cycle. We will be back online shortly!
        </p>

        {/* Contact Assistance Box */}
        <div className="card mx-auto rounded-4 p-4 p-lg-5 text-start" style={{ maxWidth: '500px', backgroundColor: '#ffffff', border: '1px solid #e9ecef', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
          <h5 className="fw-bold mb-3" style={{ color: '#1c3b63' }}>Need Immediate Assistance?</h5>
          <p className="mb-4 text-muted small" style={{ lineHeight: '1.7' }}>
            If you have an urgent inquiry regarding an existing billing audit, credentialing, or patient A/R process, please reach out to our team directly:
          </p>
          <div className="d-flex flex-column gap-3">
            <a href="mailto:info@dentalbillingteam.com" className="text-decoration-none">
              <div className="d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', transition: 'all 0.2s ease' }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center bg-white shadow-sm" style={{ width: '40px', height: '40px' }}>
                  <i className="fa-solid fa-envelope" style={{ color: '#2563eb' }}></i>
                </div>
                <span className="fw-semibold" style={{ color: '#0f172a' }}>info@dentalbillingteam.com</span>
              </div>
            </a>
          </div>
        </div>

        {/* Global Styles for Animations */}
        <div dangerouslySetInnerHTML={{__html: `
          <style>
            @keyframes pulse {
              0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(19, 161, 149, 0.4); }
              70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(19, 161, 149, 0); }
              100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(19, 161, 149, 0); }
            }
            @keyframes sparkle {
              0% { transform: scale(0.8) translateY(0); opacity: 0.5; }
              100% { transform: scale(1.1) translateY(-5px); opacity: 1; }
            }
          </style>
        `}} />
      </div>
    </div>
  );
}
