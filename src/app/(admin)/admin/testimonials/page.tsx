"use client";

import React, { useState } from "react";
import {
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Star,
  Quote,
  Clock,
  ThumbsUp,
  Image as ImageIcon
} from "lucide-react";

// Mock Data
const initialTestimonials = [
  {
    id: 1,
    patientName: "Sarah Jenkins",
    rating: 5,
    source: "Google",
    status: "Published",
    date: "Oct 15, 2026",
    content: "The free 3D scan blew my mind. Seeing the exact progression of my teeth made me so excited to start. Worth every penny.",
    service: "Invisalign",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    id: 2,
    patientName: "Michael Rodriguez",
    rating: 5,
    source: "Facebook",
    status: "Published",
    date: "Oct 12, 2026",
    content: "I avoided braces because of my job in sales. Invisalign was perfect. Nobody even knew I had them on. Highly recommend this clinic.",
    service: "Invisalign",
    avatar: "https://i.pravatar.cc/100?img=11"
  },
  {
    id: 3,
    patientName: "Emily Chen",
    rating: 4,
    source: "Website",
    status: "Pending",
    date: "Oct 10, 2026",
    content: "I am a coffee addict so my teeth were terrible. Honestly I didn't think the laser would work this well. I almost cried when they handed me the mirror.",
    service: "Teeth Whitening",
    avatar: "https://i.pravatar.cc/100?img=5"
  },
  {
    id: 4,
    patientName: "David Smith",
    rating: 5,
    source: "Yelp",
    status: "Published",
    date: "Oct 05, 2026",
    content: "Got this done 3 days before my wedding. Super relaxing 60 minutes, literally zero pain or zings, and the wedding photos turned out incredible.",
    service: "Teeth Whitening",
    avatar: "https://i.pravatar.cc/100?img=15"
  },
  {
    id: 5,
    patientName: "Amanda White",
    rating: 3,
    source: "Google",
    status: "Rejected",
    date: "Sep 28, 2026",
    content: "The cleaning was fine but I had to wait 20 minutes past my appointment time.",
    service: "Routine Cleaning",
    avatar: "https://i.pravatar.cc/100?img=20"
  },
];

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  
  // Side Panel State
  const [selectedReview, setSelectedReview] = useState<any | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // Filters
  const filteredTestimonials = testimonials.filter((t) => {
    const matchesSearch = t.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Published": return { bg: "#dcfce7", text: "#15803d" }; // Green
      case "Pending": return { bg: "#fef3c7", text: "#d97706" }; // Yellow
      case "Rejected": return { bg: "#fee2e2", text: "#b91c1c" }; // Red
      default: return { bg: "#f3f4f6", text: "#374151" }; // Gray
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} fill={i < rating ? "#f59e0b" : "#e2e8f0"} color={i < rating ? "#f59e0b" : "#e2e8f0"} />
    ));
  };

  const handleRowClick = (review: any) => {
    setSelectedReview(review);
    setIsAdding(false);
  };

  const closePanel = () => {
    setSelectedReview(null);
    setIsAdding(false);
  };

  return (
    <div className="d-flex flex-column h-100 p-2 p-md-4" style={{ backgroundColor: "#f8fafc", minHeight: "calc(100vh - 70px)" }}>
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: "#0f172a", letterSpacing: "-0.5px" }}>Testimonials Management</h2>
          <p className="text-muted mb-0 small">Review, moderate, and publish patient feedback.</p>
        </div>
        <button 
          className="btn btn-primary d-flex align-items-center gap-2 rounded-pill shadow-sm px-4 py-2"
          style={{ backgroundColor: "#001BFF", border: "none", fontWeight: "600" }}
          onClick={() => {
            setSelectedReview(null);
            setIsAdding(true);
          }}
        >
          <Plus size={18} /> Add Testimonial
        </button>
      </div>

      {/* Main Content Area */}
      <div className="row flex-grow-1 min-h-0 g-4">
        
        {/* Left Side: Table & Filters */}
        <div className={`col-12 ${selectedReview || isAdding ? 'col-lg-7 d-none d-lg-block' : 'col-lg-12'}`}>
          <div className="card border-0 shadow-sm rounded-4 h-100 d-flex flex-column">
            
            {/* Filters */}
            <div className="p-4 border-bottom bg-white rounded-top-4">
              <div className="row g-3">
                <div className="col-md-7">
                  <div className="position-relative">
                    <Search size={18} className="position-absolute text-muted" style={{ top: "12px", left: "14px" }} />
                    <input 
                      type="text" 
                      className="form-control rounded-pill ps-5 bg-light border-0 shadow-none py-2" 
                      placeholder="Search patient name or comments..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="d-flex align-items-center bg-light rounded-pill px-3 py-1">
                    <span className="text-muted small fw-bold me-2">STATUS:</span>
                    <select 
                      className="form-select border-0 bg-transparent shadow-none fw-semibold p-1"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="All">All Statuses</option>
                      <option value="Published">Published</option>
                      <option value="Pending">Pending</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive flex-grow-1 bg-white rounded-bottom-4">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light sticky-top" style={{ zIndex: 10 }}>
                  <tr>
                    <th className="text-muted fw-semibold small py-3 ps-4 border-bottom-0">PATIENT</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">RATING</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0 d-none d-xl-table-cell">SERVICE</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">STATUS</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">DATE</th>
                    <th className="text-end py-3 pe-4 border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody className="border-top-0">
                  {filteredTestimonials.length > 0 ? (
                    filteredTestimonials.map((review) => {
                      const badgeColors = getStatusBadgeColor(review.status);
                      const isSelected = selectedReview?.id === review.id;
                      
                      return (
                        <tr 
                          key={review.id} 
                          onClick={() => handleRowClick(review)}
                          style={{ 
                            cursor: "pointer", 
                            backgroundColor: isSelected ? "#f8fafc" : "white",
                            borderLeft: isSelected ? "4px solid #001BFF" : "4px solid transparent"
                          }}
                          className="transition-all"
                        >
                          <td className="py-3 ps-4">
                            <div className="d-flex align-items-center gap-2">
                              <img src={review.avatar} alt={review.patientName} className="rounded-circle border border-2 border-white shadow-sm" style={{width: "40px", height: "40px", objectFit: "cover"}} />
                              <div>
                                <div className="fw-bold" style={{ color: "#1e293b", fontSize: "14px" }}>{review.patientName}</div>
                                <div className="text-muted small" style={{fontSize: "12px"}}>{review.source}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3">
                            <div className="d-flex gap-1">
                              {renderStars(review.rating)}
                            </div>
                          </td>
                          <td className="py-3 text-secondary fw-medium small d-none d-xl-table-cell">{review.service}</td>
                          <td className="py-3">
                            <span className="badge rounded-pill" style={{ backgroundColor: badgeColors.bg, color: badgeColors.text, padding: "5px 10px", fontWeight: "600", fontSize: "11px", letterSpacing: "0.5px" }}>
                              {review.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="py-3 text-secondary fw-medium small">{review.date}</td>
                          <td className="py-3 pe-4 text-end">
                            <button className="btn btn-sm btn-light rounded-circle text-muted p-2 hover-bg-gray">
                              <MoreVertical size={16} />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-5 text-muted">
                        No testimonials found matching your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* Right Side: Edit/Add Panel */}
        {(selectedReview || isAdding) && (
          <div className="col-12 col-lg-5">
            <div className="card border-0 shadow-lg rounded-4 h-100 d-flex flex-column overflow-hidden animation-fade-in pointer-events-auto">
              
              {/* Panel Header */}
              <div className="p-4 bg-white border-bottom d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px", backgroundColor: isAdding ? "#dcfce7" : "#e0e7ff", color: isAdding ? "#16a34a" : "#4f46e5" }}>
                    {isAdding ? <Plus size={20} /> : <ThumbsUp size={20} />}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0 text-dark">{isAdding ? "Add New Testimonial" : "Review Details"}</h5>
                    <p className="text-muted small mb-0">{isAdding ? "Manually add patient feedback" : `ID: #${selectedReview?.id}`}</p>
                  </div>
                </div>
                <button className="btn btn-sm text-secondary bg-light rounded-circle p-2 border-0" onClick={closePanel}>
                  <XCircle size={20} />
                </button>
              </div>

              {/* Panel Body */}
              <div className="p-4 bg-white flex-grow-1 overflow-auto">
                <form>
                  {/* Basic Info */}
                  <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                    <h6 className="fw-bold text-dark mb-0 fs-6 d-flex align-items-center gap-2">Patient Feedback</h6>
                    {!isAdding && selectedReview && (
                      <span className="badge rounded-pill" style={{ backgroundColor: getStatusBadgeColor(selectedReview.status).bg, color: getStatusBadgeColor(selectedReview.status).text, padding: "5px 10px", fontWeight: "600", fontSize: "10px", letterSpacing: "0.5px" }}>
                        {selectedReview.status.toUpperCase()}
                      </span>
                    )}
                  </div>

                  {!isAdding && selectedReview && (
                    <div className="card border-light-subtle bg-light shadow-sm rounded-4 p-4 mb-4">
                      <div className="d-flex justify-content-between mb-3">
                        <div className="d-flex gap-1">
                          {renderStars(selectedReview.rating)}
                        </div>
                        <div className="text-secondary small fw-medium d-flex align-items-center gap-1">
                          <Clock size={12}/> {selectedReview.date}
                        </div>
                      </div>
                      <p className="text-dark fw-medium fs-6" style={{ lineHeight: "1.6" }}>
                        "{selectedReview.content}"
                      </p>
                    </div>
                  )}

                  {isAdding && (
                     <div className="mb-4">
                       <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>REVIEW CONTENT</label>
                       <textarea className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" rows={4} placeholder="Type the review content here..."></textarea>
                     </div>
                  )}

                  <div className="row g-3 mb-4">
                    <div className="col-12 col-md-6">
                      <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>PATIENT NAME</label>
                      <input type="text" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue={selectedReview?.patientName || ""} placeholder="e.g. John Doe" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>RATING</label>
                      <select className="form-select border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue={selectedReview?.rating || "5"}>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                      </select>
                    </div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-12 col-md-6">
                      <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>SOURCE</label>
                      <select className="form-select border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue={selectedReview?.source || "Direct"}>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Yelp">Yelp</option>
                        <option value="Website">Website</option>
                        <option value="Direct">Direct / In-Person</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>RELATED SERVICE</label>
                      <select className="form-select border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue={selectedReview?.service || ""}>
                        <option value="Invisalign">Invisalign</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Routine Cleaning">Routine Cleaning</option>
                        <option value="Dental Implants">Dental Implants</option>
                      </select>
                    </div>
                  </div>

                  <hr className="border-light-subtle my-4" />

                  <h6 className="fw-bold text-dark mb-3 fs-6 d-flex align-items-center gap-2"><ImageIcon size={16}/> Media</h6>
                  <div className="mb-2">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>AVATAR OR BEFORE/AFTER PHOTO</label>
                    <div className="border border-2 border-dashed border-light-subtle rounded-4 p-4 text-center cursor-pointer bg-light hover-bg-gray transition-all d-flex flex-column align-items-center">
                      {selectedReview?.avatar && !isAdding ? (
                        <div className="mb-3 position-relative">
                          <img src={selectedReview.avatar} alt="Avatar" className="rounded-circle shadow-sm" style={{ width: "64px", height: "64px", objectFit: "cover" }}/>
                        </div>
                      ) : (
                        <div className="rounded-circle bg-white d-inline-flex justify-content-center align-items-center shadow-sm mb-2" style={{width: '40px', height: '40px', color: '#001BFF'}}>
                          <ImageIcon size={18} />
                        </div>
                      )}
                      <p className="text-secondary small mb-0 fw-medium">Click to upload or drag image here</p>
                    </div>
                  </div>
                </form>
              </div>

              {/* Panel Footer / Actions */}
              <div className="p-3 bg-light border-top d-flex justify-content-between align-items-center rounded-bottom-4">
                <div className="d-flex gap-2">
                   {!isAdding && selectedReview && selectedReview.status !== "Rejected" && (
                    <button className="btn btn-outline-danger btn-sm px-3 fw-bold shadow-sm d-flex align-items-center gap-1">
                      <XCircle size={14} /> Reject
                    </button>
                   )}
                </div>
                
                <div className="d-flex gap-2">
                  <button className="btn btn-light border bg-white text-secondary fw-bold px-4 shadow-sm" onClick={closePanel}>Cancel</button>
                  <button className="btn btn-primary fw-bold shadow px-4" style={{ backgroundColor: "#001BFF", border: "none" }}>
                    {isAdding ? "Publish Testimonial" : (selectedReview?.status === "Pending" ? "Approve & Publish" : "Save Changes")}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .min-h-0 { min-height: 0; }
        .hover-bg-gray:hover { background-color: #f1f5f9 !important; }
        .border-dashed { border-style: dashed !important; }
        .animation-fade-in { animation: fadeIn 0.3s ease-in-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}}/>
    </div>
  );
}
