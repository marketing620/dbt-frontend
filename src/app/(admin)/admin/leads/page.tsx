"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Download,
  X,
  Phone,
  Mail,
  MessageSquare,
  Plus,
  CheckCircle2,
  MailOpen,
  Trash2,
  ChevronDown
} from "lucide-react";
import toast from "react-hot-toast";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const response = await fetch(`${API_URL}/api/contact`);
        if (response.ok) {
          const data = await response.json();
          const formattedLeads = data.map((d: any) => ({
            id: d.id,
            name: d.name || "Unknown",
            email: d.email || "N/A",
            phone: d.phone || "N/A",
            service: d.subject || "General",
            source: d.utm_source || "Direct",
            campaign: d.utm_campaign || "N/A",
            status: d.status || "NEW",
            date: d.date || "",
            notes: d.notes && d.notes.length > 0 ? d.notes : (d.message ? [{ id: 1, text: d.message, author: "Lead form", date: d.date }] : [])
          }));
          setLeads(formattedLeads);
          if (formattedLeads.length > 0 && !selectedLeadId) {
            setSelectedLeadId(formattedLeads[0].id);
          }
        }
      } catch (error) {
        console.error("Failed to fetch leads", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLeads();
  }, [selectedLeadId]);

  // Filters
  const [filterSource, setFilterSource] = useState("All Sources");
  const [filterStatus, setFilterStatus] = useState("All Statuses");
  const [filterService, setFilterService] = useState("All Services");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // New Note State
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNoteText, setNewNoteText] = useState("");

  // Filtered Leads logic
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchSource =
        filterSource === "All Sources" || lead.source === filterSource;
      const matchStatus =
        filterStatus === "All Statuses" ||
        lead.status === filterStatus.toUpperCase();
      const matchService =
        filterService === "All Services" || lead.service === filterService;
      return matchSource && matchStatus && matchService;
    });
  }, [leads, filterSource, filterStatus, filterService]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const selectedLead = leads.find((l) => l.id === selectedLeadId);

  // Derived arrays for dropdowns
  const uniqueSources = [
    "All Sources",
    ...Array.from(new Set(leads.map((l) => l.source))),
  ];
  const uniqueStatuses = [
    "All Statuses",
    "New",
    "Contacted",
    "Qualified",
    "Closed",
    "Lost",
  ];
  const uniqueServices = [
    "All Services",
    ...Array.from(new Set(leads.map((l) => l.service))),
  ];

  // Note Action
  const handleAddNote = async () => {
    if (!newNoteText.trim() || !selectedLeadId) return;
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact/${selectedLeadId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newNoteText, author: "Admin" }),
      });
      if (response.ok) {
        const result = await response.json();
        setLeads((prev) =>
          prev.map((lead) => {
            if (lead.id === selectedLeadId) {
              return {
                ...lead,
                notes: [...lead.notes, result.note],
              };
            }
            return lead;
          }),
        );
        setNewNoteText("");
        setIsAddingNote(false);
        toast.success("Note added");
      }
    } catch (error) {
      console.error("Failed to add note", error);
      toast.error("Failed to add note");
    }
  };

  const updateLeadStatus = async (id: string, newStatus: string) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus.toUpperCase() } : l))
        );
        toast.success("Status updated");
      }
    } catch (error) {
      console.error("Failed to update status", error);
      toast.error("Failed to update status");
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        setSelectedLeadId(null);
        toast.success("Lead deleted");
      }
    } catch (error) {
      console.error("Failed to delete lead", error);
      toast.error("Failed to delete lead");
    }
  };

  const handleDeleteNote = async (leadId: string, noteId: string) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact/${leadId}/notes/${noteId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setLeads((prev) =>
          prev.map((l) => {
            if (l.id === leadId) {
              return { ...l, notes: l.notes.filter((n: any) => n.id.toString() !== noteId.toString()) };
            }
            return l;
          })
        );
        toast.success("Note deleted");
      }
    } catch (error) {
      console.error("Failed to delete note", error);
      toast.error("Failed to delete note");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "new":
        return (
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: "#dbeafe",
              color: "#1d4ed8",
              padding: "6px 10px",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            NEW
          </span>
        );
      case "contacted":
        return (
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: "#fef3c7",
              color: "#d97706",
              padding: "6px 10px",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            CONTACTED
          </span>
        );
      case "qualified":
        return (
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: "#dcfce7",
              color: "#15803d",
              padding: "6px 10px",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            QUALIFIED
          </span>
        );
      case "closed":
        return (
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: "#f3e8ff",
              color: "#7e22ce",
              padding: "6px 10px",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            CLOSED
          </span>
        );
      case "lost":
        return (
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: "#fee2e2",
              color: "#b91c1c",
              padding: "6px 10px",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            LOST
          </span>
        );
      default:
        return (
          <span
            className="badge rounded-pill bg-light text-secondary border"
            style={{ padding: "6px 10px", fontSize: "10px", fontWeight: "700" }}
          >
            {status.toUpperCase()}
          </span>
        );
    }
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div>
      {/* Filters Row */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-2 gap-3">
        <div className="d-flex flex-wrap gap-3">
          <div
            className="bg-white border text-secondary px-3 py-1 rounded-pill d-flex align-items-center shadow-sm"
            style={{ fontSize: "13px", fontWeight: "600" }}
          >
            SOURCE:
            <select
              className="form-select form-select-sm border-0 shadow-none text-dark fw-bold ms-1"
              style={{
                width: "auto",
                cursor: "pointer",
                backgroundPosition: "right 0.2rem center",
              }}
              value={filterSource}
              onChange={(e) => {
                setFilterSource(e.target.value);
                setCurrentPage(1);
              }}
            >
              {uniqueSources.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div
            className="bg-white border text-secondary px-3 py-1 rounded-pill d-flex align-items-center shadow-sm"
            style={{ fontSize: "13px", fontWeight: "600" }}
          >
            STATUS:
            <select
              className="form-select form-select-sm border-0 shadow-none text-dark fw-bold ms-1"
              style={{
                width: "auto",
                cursor: "pointer",
                backgroundPosition: "right 0.2rem center",
              }}
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                setCurrentPage(1);
              }}
            >
              {uniqueStatuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div
            className="bg-white border text-secondary px-3 py-1 rounded-pill d-flex align-items-center shadow-sm"
            style={{ fontSize: "13px", fontWeight: "600" }}
          >
            SERVICE:
            <select
              className="form-select form-select-sm border-0 shadow-none text-dark fw-bold ms-1"
              style={{
                width: "auto",
                cursor: "pointer",
                backgroundPosition: "right 0.2rem center",
              }}
              value={filterService}
              onChange={(e) => {
                setFilterService(e.target.value);
                setCurrentPage(1);
              }}
            >
              {uniqueServices.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
        <a
          href="#"
          className="text-secondary fw-bold text-decoration-none d-flex align-items-center hover-primary transition-all"
          style={{ fontSize: "14px", letterSpacing: "0.2px" }}
        >
          <Download size={16} className="me-2" /> Export CSV
        </a>
      </div>

      {/* Main Split Interface */}
      <div
        className="row g-0 bg-white shadow-sm border"
        style={{ borderRadius: "14px", overflow: "hidden" }}
      >
        {/* Left Column: Leads Table */}
        <div
          className={selectedLead ? "col-lg-8 border-end" : "col-lg-12"}
          style={{ transition: "all 0.3s ease" }}
        >
          <div className="table-responsive" style={{ minHeight: "550px" }}>
            <table className="table table-borderless align-middle mb-0 table-hover">
              <thead>
                <tr
                  style={{
                    background: "linear-gradient(to right, #fbfcfd, #f4f5f8)",
                  }}
                >
                  <th
                    className="py-3 px-4 border-bottom text-muted fw-bold text-uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.5px" }}
                  >
                    Name
                  </th>
                  <th
                    className="py-3 px-4 border-bottom text-muted fw-bold text-uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.5px" }}
                  >
                    Contact Details
                  </th>
                  <th
                    className="py-3 px-4 border-bottom text-muted fw-bold text-uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.5px" }}
                  >
                    Service
                  </th>
                  <th
                    className="py-3 px-4 border-bottom text-muted fw-bold text-uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.5px" }}
                  >
                    Source
                  </th>
                  <th
                    className="py-3 px-4 border-bottom text-muted fw-bold text-uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.5px" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-5">
                      <div className="spinner-border text-primary" role="status"></div>
                    </td>
                  </tr>
                ) : paginatedLeads.length > 0 ? (
                  paginatedLeads.map((lead) => {
                    const isSelected = selectedLead?.id === lead.id;
                    return (
                      <tr
                        key={lead.id}
                        onClick={() => setSelectedLeadId(lead.id)}
                        style={{
                          cursor: "pointer",
                          backgroundColor: isSelected
                            ? "#f4f6ff"
                            : "transparent",
                          borderLeft: isSelected
                            ? "4px solid #001BFF"
                            : "4px solid transparent",
                          borderBottom: "1px solid #f1f5f9",
                          transition: "background-color 0.15s ease-in-out",
                        }}
                      >
                        <td className="px-4 py-3 align-middle">
                          <div className="d-flex align-items-center">
                            <div
                              className="d-flex justify-content-center align-items-center rounded-circle me-3 shadow-sm"
                              style={{
                                width: "42px",
                                height: "42px",
                                backgroundColor: isSelected
                                  ? "#e0e7ff"
                                  : "#f8fafc",
                                color: "#4f46e5",
                                fontWeight: "bold",
                                fontSize: "14px",
                                border: isSelected
                                  ? "none"
                                  : "1px solid #e2e8f0",
                              }}
                            >
                              {getInitials(lead.name)}
                            </div>
                            <div
                              className="fw-bold text-dark"
                              style={{ fontSize: "14.5px", lineHeight: "1.3" }}
                            >
                              {lead.name.split(" ")[0]}
                              <br />
                              {lead.name.split(" ")[1]}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 align-middle">
                          <div
                            className="text-dark fw-semibold"
                            style={{ fontSize: "13.5px" }}
                          >
                            {lead.email}
                          </div>
                          <div
                            className="text-muted"
                            style={{ fontSize: "12px" }}
                          >
                            {lead.phone}
                          </div>
                        </td>
                        <td className="px-4 py-3 align-middle">
                          <div
                            className="text-muted fw-bold"
                            style={{ fontSize: "13px" }}
                          >
                            {lead.service}
                          </div>
                        </td>
                        <td className="px-4 py-3 align-middle">
                          <div
                            className="text-dark fw-semibold"
                            style={{ fontSize: "13.5px" }}
                          >
                            {lead.source}
                          </div>
                          <div
                            className="text-muted"
                            style={{ fontSize: "12px" }}
                          >
                            {lead.campaign}
                          </div>
                        </td>
                        <td className="px-4 py-3 align-middle">
                          {getStatusBadge(lead.status)}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center py-5 text-muted fw-bold"
                    >
                      No leads found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center p-3 border-top bg-white">
            <div className="text-muted fw-medium" style={{ fontSize: "13px" }}>
              Showing{" "}
              {filteredLeads.length > 0
                ? (currentPage - 1) * itemsPerPage + 1
                : 0}{" "}
              to {Math.min(currentPage * itemsPerPage, filteredLeads.length)} of{" "}
              {filteredLeads.length} leads
            </div>
            <div className="d-flex gap-1">
              <button
                className="btn btn-sm btn-light border px-2 text-muted"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`btn btn-sm px-3 shadow-sm ${currentPage === i + 1 ? "text-white" : "btn-light border bg-white text-dark fw-medium"}`}
                  style={
                    currentPage === i + 1
                      ? {
                          backgroundColor: "#001BFF",
                          border: "none",
                          fontWeight: "bold",
                        }
                      : {}
                  }
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="btn btn-sm btn-light border px-2 text-dark bg-white"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Details Panel */}
        {selectedLead && (
          <div
            className="col-lg-4 bg-white position-relative d-flex flex-column"
            style={{ minHeight: "600px" }}
          >
            <div
              className="p-4 flex-grow-1 overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 250px)" }}
            >
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5
                  className="fw-bold text-dark mb-0"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  Lead Details
                </h5>
                <X
                  size={20}
                  className="text-muted cursor-pointer"
                  onClick={() => setSelectedLeadId(null)}
                  style={{
                    cursor: "pointer",
                    padding: "4px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "50%",
                    width: "28px",
                    height: "28px",
                  }}
                />
              </div>

              {/* Lead Profile */}
              <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
                <div
                  className="rounded-4 d-flex justify-content-center align-items-center me-3 shadow-sm"
                  style={{
                    width: "65px",
                    height: "65px",
                    backgroundColor: "#001BFF",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  {getInitials(selectedLead.name)}
                </div>
                <div>
                  <h4
                    className="fw-bold mb-1 text-dark"
                    style={{ letterSpacing: "-0.5px" }}
                  >
                    {selectedLead.name}
                  </h4>
                  <div
                    className="text-muted fw-bold"
                    style={{ fontSize: "11px", letterSpacing: "0.5px" }}
                  >
                    LEAD ID: #{selectedLead.id.substring(0, 6).toUpperCase()}
                  </div>
                  <div className="mt-2 d-flex flex-wrap gap-2 align-items-center">
                    <span className="text-secondary small fw-bold">MARK AS:</span>
                    <select
                      className="form-select form-select-sm border shadow-sm fw-bold w-auto"
                      style={{ fontSize: "11px", borderRadius: "8px" }}
                      value={selectedLead.status}
                      onChange={(e) => updateLeadStatus(selectedLead.id, e.target.value)}
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="QUALIFIED">QUALIFIED</option>
                      <option value="CLOSED">CLOSED</option>
                      <option value="LOST">LOST</option>
                    </select>
                  </div>
                  <div className="d-flex gap-2 mt-2">
                    <div
                      className="bg-light border rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "#ef4444",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      title="Delete Lead"
                      onClick={() => deleteLead(selectedLead.id)}
                    >
                      <Trash2 size={14} />
                    </div>
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="bg-light border rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "#001BFF",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      title={`Call ${selectedLead.phone}`}
                    >
                      <Phone size={14} />
                    </a>
                    <a
                      href={`mailto:${selectedLead.email}`}
                      className="bg-light border rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "#001BFF",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      title={`Email ${selectedLead.email}`}
                    >
                      <Mail size={14} />
                    </a>
                    <a
                      href={`sms:${selectedLead.phone}`}
                      className="bg-light border rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "#001BFF",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      title={`Message ${selectedLead.phone}`}
                    >
                      <MessageSquare size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Notes Context */}
              <div className="mb-4">
                <div
                  className="text-secondary fw-bold mb-3"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Notes
                </div>
                <div className="d-flex flex-column gap-2 mb-3">
                  {selectedLead.notes.map((note: any) => (
                    <div
                      key={note.id}
                      className="bg-light p-3 rounded-4 shadow-sm position-relative"
                      style={{ border: "1px solid #f8f9fa" }}
                    >
                      <Trash2 
                        size={12} 
                        className="position-absolute text-danger cursor-pointer" 
                        style={{ top: "10px", right: "10px" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteNote(selectedLead.id, note.id.toString());
                        }}
                      />
                      <p
                        className="mb-2 text-dark font-medium pe-3"
                        style={{ fontSize: "13.5px", lineHeight: "1.6" }}
                      >
                        {note.text}
                      </p>
                      <div
                        className="text-muted fw-bold"
                        style={{ fontSize: "10px" }}
                      >
                        Added by {note.author} • {note.date}
                      </div>
                    </div>
                  ))}
                </div>

                {isAddingNote ? (
                  <div className="bg-white border rounded-4 p-3 shadow-sm mt-2">
                    <textarea
                      className="form-control form-control-sm border-0 shadow-none p-0 mb-3"
                      style={{ fontSize: "13.5px", resize: "none" }}
                      rows={3}
                      placeholder="Type your note here..."
                      value={newNoteText}
                      onChange={(e) => setNewNoteText(e.target.value)}
                      autoFocus
                    />
                    <div className="d-flex justify-content-end gap-2">
                      <button
                        className="btn btn-sm btn-light fw-bold px-3 text-secondary border"
                        onClick={() => {
                          setIsAddingNote(false);
                          setNewNoteText("");
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-sm btn-primary fw-bold px-3 shadow-sm"
                        style={{ backgroundColor: "#001BFF", border: "none" }}
                        onClick={handleAddNote}
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="btn btn-outline-secondary w-100 rounded-3 d-flex align-items-center justify-content-center py-2 transition-all"
                    style={{
                      border: "1px dashed #ced4da",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#6c757d",
                      backgroundColor: "#fff",
                    }}
                    onClick={() => setIsAddingNote(true)}
                  >
                    <Plus size={16} className="me-2" /> Add New Note
                  </button>
                )}
              </div>

              {/* Activity Timeline */}
              <div className="mt-2 text-dark">
                <div
                  className="text-secondary fw-bold mb-4"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Activity History
                </div>

                <div className="position-relative ms-2">
                  <div
                    style={{
                      position: "absolute",
                      left: "11px",
                      top: "10px",
                      bottom: "10px",
                      width: "2px",
                      backgroundColor: "#e2e8f0",
                    }}
                  ></div>

                  <div className="d-flex mb-4 position-relative">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center text-white z-1 shadow-sm"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginTop: "2px",
                        backgroundColor: "#10b981",
                      }}
                    >
                      <CheckCircle2 size={12} strokeWidth={3} />
                    </div>
                    <div className="ms-3">
                      <div
                        className="fw-bold text-dark"
                        style={{ fontSize: "13.5px" }}
                      >
                        Lead Created
                      </div>
                      <div
                        className="text-muted mb-1"
                        style={{ fontSize: "12.5px", lineHeight: "1.4" }}
                      >
                        System captured lead via {selectedLead.source}.
                      </div>
                      <div
                        className="text-muted fw-bold"
                        style={{ fontSize: "10px", color: "#adb5bd" }}
                      >
                        {selectedLead.date}
                      </div>
                    </div>
                  </div>

                  {(() => {
                    const internalNotesCount = selectedLead.notes.filter((n: any) => n.author === "Admin").length;
                    return internalNotesCount > 0 ? (
                      <div className="d-flex position-relative">
                        <div
                          className="rounded-circle d-flex justify-content-center align-items-center bg-white border border-primary text-primary z-1 shadow-sm"
                          style={{
                            width: "24px",
                            height: "24px",
                            marginTop: "2px",
                          }}
                        >
                          <MessageSquare
                            size={12}
                            strokeWidth={2.5}
                            style={{ color: "#001BFF" }}
                          />
                        </div>
                        <div className="ms-3">
                          <div
                            className="fw-bold text-dark"
                            style={{ fontSize: "13.5px" }}
                          >
                            Notes Updated
                          </div>
                          <div
                            className="text-muted mb-1"
                            style={{ fontSize: "12.5px", lineHeight: "1.4" }}
                          >
                            Administration added {internalNotesCount} internal note(s).
                          </div>
                          <div
                            className="text-muted fw-bold"
                            style={{ fontSize: "10px", color: "#adb5bd" }}
                          >
                            Recent Activity
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              </div>
            </div>

            {/* Bottom Sticky Actions */}
            <div className="p-3 border-top bg-white d-flex gap-2 w-100 mt-auto">
              <a
                href={`mailto:${selectedLead.email}?subject=Consultation Regarding ${selectedLead.service}&body=Hello ${selectedLead.name},`}
                className="btn btn-primary flex-grow-1 rounded-3 shadow-sm d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#001BFF",
                  border: "none",
                  fontSize: "13.5px",
                  fontWeight: "700",
                  padding: "12px 0",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  color: "#fff"
                }}
              >
                Reach Out to Lead
              </a>
            </div>
          </div>
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        select:focus { outline: none !important; box-shadow: none !important; }
        .hover-primary:hover { color: #001BFF !important; }
      `,
        }}
      />
    </div>
  );
}
