"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  MoreVertical,
  Mail,
  XCircle,
  Trash2,
} from "lucide-react";

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  
  // Side Panel State
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);

  // Filters
  const filteredMessages = messages.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          m.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Fetch from Express API
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact`);
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "unread": return { bg: "#fee2e2", text: "#b91c1c" }; // Red
      case "read": return { bg: "#fef3c7", text: "#d97706" }; // Yellow
      case "replied": return { bg: "#dcfce7", text: "#15803d" }; // Green
      default: return { bg: "#f3f4f6", text: "#374151" }; // Gray
    }
  };

  const handleRowClick = async (message: any) => {
    // Mark as read if unread
    if (message.status === "Unread") {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        await fetch(`${API_URL}/api/contact/${message.id}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: "Read" })
        });
        const updatedMessages = messages.map(m => m.id === message.id ? { ...m, status: "Read" } : m);
        setMessages(updatedMessages);
        setSelectedMessage({ ...message, status: "Read" });
      } catch (e) { console.error("Could not update status", e); }
    } else {
      setSelectedMessage(message);
    }
  };

  const closePanel = () => {
    setSelectedMessage(null);
  };

  const handleDelete = async (id: string | number) => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        await fetch(`${API_URL}/api/contact/${id}`, { method: 'DELETE' });
        setMessages(messages.filter(m => m.id !== id));
        setSelectedMessage(null);
      } catch (e) {
        console.error("Failed to delete", e);
      }
    }
  };

  const markAsReplied = async (id: string | number) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      await fetch(`${API_URL}/api/contact/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: "Replied" })
      });
      const updatedMessages = messages.map(m => m.id === id ? { ...m, status: "Replied" } : m);
      setMessages(updatedMessages);
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage({ ...selectedMessage, status: "Replied" });
      }
    } catch (e) {
      console.error("Failed to update status", e);
    }
  };

  return (
    <div className="d-flex flex-column h-100 p-2 p-md-4" style={{ backgroundColor: "#f8fafc", minHeight: "calc(100vh - 70px)" }}>
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: "#0f172a", letterSpacing: "-0.5px" }}>Contact Messages</h2>
          <p className="text-muted mb-0 small">View and manage inquiries from the public website contact form.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="row flex-grow-1 min-h-0 g-4">
        
        {/* Left Side: Table & Filters */}
        <div className={`col-12 ${selectedMessage ? 'col-lg-7 d-none d-lg-block' : 'col-lg-12'}`}>
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
                      placeholder="Search by name, email, or subject..."
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
                      <option value="Unread">Unread</option>
                      <option value="Read">Read</option>
                      <option value="Replied">Replied</option>
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
                    <th className="text-muted fw-semibold small py-3 ps-4 border-bottom-0">SENDER</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">SUBJECT</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">DATE</th>
                    <th className="text-muted fw-semibold small py-3 border-bottom-0">STATUS</th>
                    <th className="text-end py-3 pe-4 border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody className="border-top-0">
                  {isLoading ? (
                    <tr>
                      <td colSpan={5} className="text-center py-5 text-muted">
                        Loading messages...
                      </td>
                    </tr>
                  ) : filteredMessages.length > 0 ? (
                    filteredMessages.map((message) => {
                      const badgeColors = getStatusBadgeColor(message.status);
                      const isSelected = selectedMessage?.id === message.id;
                      
                      return (
                        <tr 
                          key={message.id} 
                          onClick={() => handleRowClick(message)}
                          style={{ 
                            cursor: "pointer", 
                            backgroundColor: isSelected ? "#f8fafc" : "white",
                            borderLeft: isSelected ? "4px solid #001BFF" : "4px solid transparent",
                            fontWeight: message.status === "Unread" ? "bold" : "normal"
                          }}
                          className="transition-all"
                        >
                          <td className="py-3 ps-4" style={{ color: "#1e293b" }}>
                            <div className="d-flex align-items-center gap-2">
                              <div className="rounded-circle d-flex justify-content-center align-items-center bg-light text-primary fw-bold" style={{ width: "38px", height: "38px", fontSize: "14px", color: "#001BFF" }}>
                                {message.name.charAt(0)}{message.name.split(" ")[1] ? message.name.split(" ")[1].charAt(0) : ""}
                              </div>
                              <div>
                                <div className="text-dark fw-semibold">{message.name}</div>
                                <div className="text-muted small fw-normal">{message.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 text-dark">{message.subject}</td>
                          <td className="py-3 text-secondary small fw-medium">
                            {message.date}
                          </td>
                          <td className="py-3">
                            <span className="badge rounded-pill" style={{ backgroundColor: badgeColors.bg, color: badgeColors.text, padding: "5px 10px", fontWeight: "600", fontSize: "11px", letterSpacing: "0.5px" }}>
                              {message.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="py-3 pe-4 text-end">
                            <button className="btn btn-sm btn-light rounded-circle text-muted p-2 hover-bg-gray border-0 shadow-none bg-transparent">
                              <MoreVertical size={16} />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center py-5 text-muted">
                        No messages found matching your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* Right Side: Details Panel */}
        {selectedMessage && (
          <div className="col-12 col-lg-5">
            <div className="card border-0 shadow-lg rounded-4 h-100 d-flex flex-column overflow-hidden animation-fade-in pointer-events-auto">
              
              {/* Panel Header */}
              <div className="p-4 bg-white border-bottom d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px", backgroundColor: "#e0e7ff", color: "#4f46e5" }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0 text-dark">Message Details</h5>
                    <p className="text-muted small mb-0">Received: {selectedMessage.date}</p>
                  </div>
                </div>
                <button className="btn btn-sm text-secondary bg-light rounded-circle p-2 border-0" onClick={closePanel}>
                  <XCircle size={20} />
                </button>
              </div>

              {/* Panel Body */}
              <div className="p-4 bg-white flex-grow-1 overflow-auto">
                {/* Sender Info */}
                <h6 className="fw-bold text-dark mb-3 fs-6 d-flex align-items-center gap-2">Sender Information</h6>
                <div className="card border-light bg-light rounded-3 p-3 mb-4 shadow-sm">
                  <div className="row g-2">
                    <div className="col-12 col-md-6 border-end-sm">
                      <div className="text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>NAME</div>
                      <div className="fw-medium text-dark">{selectedMessage.name}</div>
                    </div>
                    <div className="col-12 col-md-6 px-md-3">
                      <div className="text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>EMAIL</div>
                      <div className="fw-medium"><a href={`mailto:${selectedMessage.email}`} className="text-decoration-none" style={{ color: "#001BFF" }}>{selectedMessage.email}</a></div>
                    </div>
                    <div className="col-12 mt-3 pt-3 border-top">
                      <div className="text-muted small fw-bold" style={{ letterSpacing: "0.5px" }}>PHONE NUMBER</div>
                      <div className="fw-medium text-dark"><a href={`tel:${selectedMessage.phone}`} className="text-decoration-none text-dark">{selectedMessage.phone || "Not provided"}</a></div>
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <h6 className="fw-bold text-dark mb-3 fs-6 d-flex align-items-center gap-2">Message Content</h6>
                <div className="mb-4">
                  <label className="text-muted small fw-bold mb-1" style={{ letterSpacing: "0.5px" }}>SUBJECT POSTED</label>
                  <div className="fw-bold text-dark fs-6 mb-3 bg-light p-2 rounded px-3 border-start border-4 border-primary">{selectedMessage.subject}</div>
                  
                  <label className="text-muted small fw-bold mb-1" style={{ letterSpacing: "0.5px" }}>FULL MESSAGE</label>
                  <div className="p-3 bg-light rounded-3 text-dark mb-3 border" style={{ lineHeight: "1.6", whiteSpace: "pre-wrap", fontSize: "15px" }}>
                    {selectedMessage.message}
                  </div>
                </div>
              </div>

              {/* Panel Footer / Actions */}
              <div className="p-3 bg-light border-top d-flex justify-content-between align-items-center rounded-bottom-4">
                <button 
                  className="btn btn-outline-danger btn-sm px-3 fw-bold shadow-sm d-flex align-items-center gap-1"
                  onClick={() => handleDelete(selectedMessage.id)}
                >
                  <Trash2 size={14} /> Delete
                </button>
                
                <div className="d-flex gap-2">
                  <button className="btn btn-light border bg-white text-secondary fw-bold px-4 shadow-sm" onClick={closePanel}>Close</button>
                  <button 
                    className="btn btn-primary fw-bold shadow px-4" 
                    style={{ backgroundColor: "#001BFF", border: "none" }}
                    onClick={() => markAsReplied(selectedMessage.id)}
                    disabled={selectedMessage.status === "Replied"}
                  >
                    {selectedMessage.status === "Replied" ? "Marked as Replied" : "Mark as Replied"}
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
        .border-end-sm { border-right: 1px solid #dee2e6; }
        @media (max-width: 767px) {
          .border-end-sm { border-right: none; }
        }
        .animation-fade-in { animation: fadeIn 0.3s ease-in-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}}/>
    </div>
  );
}
