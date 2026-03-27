"use client";

import React, { useState } from "react";
import {
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  Upload,
  CheckCircle2,
  XCircle,
  Clock,
  DollarSign,
  Tag,
  Stethoscope
} from "lucide-react";

// Mock Data
const initialServices = [
  {
    id: 1,
    name: "Professional Laser Whitening",
    category: "Cosmetic",
    price: "$299.00",
    duration: "60 mins",
    status: "Active",
    description: "Advanced blue-light laser treatment removing deep stains up to 8 shades lighter.",
  },
  {
    id: 2,
    name: "Invisalign Clear Aligners",
    category: "Orthodontics",
    price: "From $3,500",
    duration: "Consultation",
    status: "Active",
    description: "Clear, removable aligners that straighten smiles faster than metal braces.",
  },
  {
    id: 3,
    name: "Routine Dental Cleaning",
    category: "General",
    price: "$150.00",
    duration: "45 mins",
    status: "Active",
    description: "Standard prophylaxis, scaling, and polishing for healthy gums.",
  },
  {
    id: 4,
    name: "Dental Implants",
    category: "Surgical",
    price: "From $2,500",
    duration: "90 mins",
    status: "Active",
    description: "Permanent, natural-looking tooth replacements surgically anchored.",
  },
  {
    id: 5,
    name: "Porcelain Veneers",
    category: "Cosmetic",
    price: "$1,200 / tooth",
    duration: "120 mins",
    status: "Inactive",
    description: "Thin porcelain shells bonded to the front of teeth to improve appearance.",
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  
  // Side Panel State
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // Filters
  const filteredServices = services.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || s.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "cosmetic": return { bg: "#fce7f3", text: "#be185d" }; // Pink
      case "orthodontics": return { bg: "#dbeafe", text: "#1d4ed8" }; // Blue
      case "general": return { bg: "#dcfce7", text: "#15803d" }; // Green
      case "surgical": return { bg: "#fee2e2", text: "#b91c1c" }; // Red
      default: return { bg: "#f3f4f6", text: "#374151" }; // Gray
    }
  };

  const handleRowClick = (service: any) => {
    setSelectedService(service);
    setIsAdding(false);
  };

  const closePanel = () => {
    setSelectedService(null);
    setIsAdding(false);
  };

  return (
    <div className="d-flex flex-column h-100 p-2 p-md-4" style={{ backgroundColor: "#f8fafc", minHeight: "calc(100vh - 70px)" }}>
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: "#0f172a", letterSpacing: "-0.5px" }}>Service Management</h2>
          <p className="text-muted mb-0 small">Manage your clinic's offerings, categories, and pricing.</p>
        </div>
        <button 
          className="btn btn-primary d-flex align-items-center gap-2 rounded-pill shadow-sm px-4 py-2"
          style={{ backgroundColor: "#001BFF", border: "none", fontWeight: "600" }}
          onClick={() => {
            setSelectedService(null);
            setIsAdding(true);
          }}
        >
          <Plus size={18} /> Add New Service
        </button>
      </div>

      {/* Main Content Area */}
      <div className="row flex-grow-1 min-h-0 g-4">
        
        {/* Left Side: Table & Filters */}
        <div className={`col-12 ${selectedService || isAdding ? 'col-lg-7 d-none d-lg-block' : 'col-lg-12'}`}>
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
                      placeholder="Search services by name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="d-flex align-items-center bg-light rounded-pill px-3 py-1">
                    <span className="text-muted small fw-bold me-2">FILTER:</span>
                    <select 
                      className="form-select border-0 bg-transparent shadow-none fw-semibold p-1"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                      <option value="All">All Categories</option>
                      <option value="Cosmetic">Cosmetic</option>
                      <option value="Orthodontics">Orthodontics</option>
                      <option value="General">General</option>
                      <option value="Surgical">Surgical</option>
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
                    <th className="text-muted fw-semibold small py-3 ps-4 border-bottom-0">SERVICE NAME</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">CATEGORY</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">PRICE</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">DURATION</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">STATUS</th>
                    <th className="text-end py-3 pe-4 border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody className="border-top-0">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => {
                      const badgeColors = getCategoryBadgeColor(service.category);
                      const isSelected = selectedService?.id === service.id;
                      
                      return (
                        <tr 
                          key={service.id} 
                          onClick={() => handleRowClick(service)}
                          style={{ 
                            cursor: "pointer", 
                            backgroundColor: isSelected ? "#f8fafc" : "white",
                            borderLeft: isSelected ? "4px solid #001BFF" : "4px solid transparent"
                          }}
                          className="transition-all"
                        >
                          <td className="py-3 ps-4 fw-bold" style={{ color: "#1e293b" }}>{service.name}</td>
                          <td className="py-3">
                            <span className="badge rounded-pill" style={{ backgroundColor: badgeColors.bg, color: badgeColors.text, padding: "5px 10px", fontWeight: "600", fontSize: "11px", letterSpacing: "0.5px" }}>
                              {service.category.toUpperCase()}
                            </span>
                          </td>
                          <td className="py-3 text-secondary fw-medium small">{service.price}</td>
                          <td className="py-3 text-secondary fw-medium small">
                            <Clock size={14} className="me-1 d-inline" style={{ marginTop: "-2px" }}/>
                            {service.duration}
                          </td>
                          <td className="py-3">
                            {service.status === "Active" ? (
                              <div className="d-flex align-items-center gap-1 text-success small fw-bold">
                                <CheckCircle2 size={14} /> Active
                              </div>
                            ) : (
                              <div className="d-flex align-items-center gap-1 text-danger small fw-bold">
                                <XCircle size={14} /> Inactive
                              </div>
                            )}
                          </td>
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
                        No services found matching your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* Right Side: Edit/Add Panel */}
        {(selectedService || isAdding) && (
          <div className="col-12 col-lg-5">
            <div className="card border-0 shadow-lg rounded-4 h-100 d-flex flex-column overflow-hidden animation-fade-in pointer-events-auto">
              
              {/* Panel Header */}
              <div className="p-4 bg-white border-bottom d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px", backgroundColor: isAdding ? "#dcfce7" : "#e0e7ff", color: isAdding ? "#16a34a" : "#4f46e5" }}>
                    {isAdding ? <Plus size={20} /> : <Edit2 size={20} />}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0 text-dark">{isAdding ? "Create New Service" : "Edit Service Details"}</h5>
                    <p className="text-muted small mb-0">{isAdding ? "Configure pricing and category" : `ID: #${selectedService?.id}`}</p>
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
                  <h6 className="fw-bold text-dark mb-3 fs-6 d-flex align-items-center gap-2"><Stethoscope size={16}/> Basic Information</h6>
                  <div className="mb-3">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>SERVICE NAME</label>
                    <input type="text" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue={selectedService?.name || ""} placeholder="e.g. Laser Whitening" />
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>CATEGORY</label>
                    <select className="form-select border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue={selectedService?.category || "General"}>
                      <option value="Cosmetic">Cosmetic</option>
                      <option value="Orthodontics">Orthodontics</option>
                      <option value="General">General</option>
                      <option value="Surgical">Surgical</option>
                    </select>
                  </div>

                  <hr className="border-light-subtle my-4" />

                  {/* Pricing and Details */}
                  <h6 className="fw-bold text-dark mb-3 fs-6 d-flex align-items-center gap-2"><DollarSign size={16}/> Pricing & Duration</h6>
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>PRICE STRUCTURE</label>
                      <input type="text" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue={selectedService?.price || ""} placeholder="e.g. $299.00" />
                    </div>
                    <div className="col-6">
                      <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>EST. DURATION</label>
                      <input type="text" className="form-control border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue={selectedService?.duration || ""} placeholder="e.g. 60 mins" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>STATUS</label>
                    <select className="form-select border-light-subtle rounded-3 py-2 bg-light font-medium" defaultValue={selectedService?.status || "Active"}>
                      <option value="Active">Active (Visible)</option>
                      <option value="Inactive">Inactive (Hidden)</option>
                    </select>
                  </div>

                  <hr className="border-light-subtle my-4" />

                  {/* Description */}
                  <h6 className="fw-bold text-dark mb-3 fs-6 d-flex align-items-center gap-2"><Tag size={16}/> Marketing Description</h6>
                  <div className="mb-4">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>PATIENT-FACING DESCRIPTION</label>
                    <textarea 
                      className="form-control border-light-subtle rounded-3 py-2 bg-light" 
                      rows={4} 
                      defaultValue={selectedService?.description || ""}
                      placeholder="Write a compelling description that will appear on the booking site..."
                    ></textarea>
                    <div className="text-secondary small mt-1">This context will be shown to patients when booking.</div>
                  </div>

                  {/* Featured Image placeholder */}
                  <div className="mb-2">
                    <label className="form-label text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>FEATURED IMAGE</label>
                    <div className="border border-2 border-dashed border-light-subtle rounded-4 p-4 text-center cursor-pointer bg-light hover-bg-gray transition-all">
                      <div className="rounded-circle bg-white d-inline-flex justify-content-center align-items-center shadow-sm mb-2" style={{width: '40px', height: '40px', color: '#001BFF'}}>
                        <Upload size={18} />
                      </div>
                      <p className="text-secondary small mb-0 fw-medium">Click to upload or drag image here</p>
                    </div>
                  </div>
                </form>
              </div>

              {/* Panel Footer / Actions */}
              <div className="p-3 bg-light border-top d-flex justify-content-between align-items-center rounded-bottom-4">
                {!isAdding ? (
                  <button className="btn btn-outline-danger btn-sm px-3 fw-bold shadow-sm d-flex align-items-center gap-1">
                    <Trash2 size={14} /> Delete
                  </button>
                ) : <div></div>}
                
                <div className="d-flex gap-2">
                  <button className="btn btn-light border bg-white text-secondary fw-bold px-4 shadow-sm" onClick={closePanel}>Cancel</button>
                  <button className="btn btn-primary fw-bold shadow px-4" style={{ backgroundColor: "#001BFF", border: "none" }}>
                    {isAdding ? "Publish Service" : "Save Changes"}
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
