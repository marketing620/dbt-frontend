"use client";

import { useState, useMemo } from "react";
import {
  Download,
  X,
  Phone,
  Mail,
  MessageSquare,
  Plus,
  CheckCircle2,
  MailOpen,
} from "lucide-react";

// Expanded Mock data for pagination testing
const initialLeadsData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123 4567",
    service: "Teeth Whitening",
    source: "Google Ads",
    campaign: "Summer Glow",
    status: "NEW",
    date: "Oct 24, 10:15 AM",
    notes: [
      {
        id: 1,
        text: "Interested in full mouth whitening for a wedding next month. Prefers morning appointments.",
        author: "Sarah",
        date: "Oct 24, 10:15 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@dental.com",
    phone: "(555) 987 6543",
    service: "Implants",
    source: "Facebook",
    campaign: "Smile More",
    status: "CONTACTED",
    date: "Oct 24, 09:30 AM",
    notes: [
      {
        id: 1,
        text: "Requires a consultation for upper jaw implants.",
        author: "System",
        date: "Oct 24, 09:30 AM",
      },
    ],
  },
  {
    id: 3,
    name: "Robert Brown",
    email: "rob.b@gmail.com",
    phone: "(555) 456 7890",
    service: "Cleaning",
    source: "Referral",
    campaign: "Loyalty",
    status: "QUALIFIED",
    date: "Oct 23, 02:45 PM",
    notes: [
      {
        id: 1,
        text: "Referred by his wife. Has not been to a dentist in 3 years.",
        author: "System",
        date: "Oct 23, 02:45 PM",
      },
    ],
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@outlook.com",
    phone: "(555) 222 3333",
    service: "Invisalign",
    source: "SEO",
    campaign: "Organic",
    status: "CLOSED",
    date: "Oct 23, 11:20 AM",
    notes: [
      {
        id: 1,
        text: "Started Invisalign treatment today.",
        author: "System",
        date: "Oct 23, 11:20 AM",
      },
    ],
  },
  {
    id: 5,
    name: "Michael Wilson",
    email: "m.wilson@web.com",
    phone: "(555) 888 9999",
    service: "Veneers",
    source: "Bing Ads",
    campaign: "Holiday Promo",
    status: "LOST",
    date: "Oct 22, 04:10 PM",
    notes: [
      {
        id: 1,
        text: "Decided to postpone treatment due to budget constraints.",
        author: "System",
        date: "Oct 22, 04:10 PM",
      },
    ],
  },
  {
    id: 6,
    name: "Sarah Jenkins",
    email: "sarah.j@email.com",
    phone: "(555) 345 6789",
    service: "Cleaning",
    source: "Google Ads",
    campaign: "General",
    status: "NEW",
    date: "Oct 21, 01:20 PM",
    notes: [
      {
        id: 1,
        text: "Routine cleaning block.",
        author: "Sarah",
        date: "Oct 21, 01:20 PM",
      },
    ],
  },
  {
    id: 7,
    name: "David Clark",
    email: "d.clark@outlook.com",
    phone: "(555) 234 5678",
    service: "Teeth Whitening",
    source: "SEO",
    campaign: "Organic",
    status: "CONTACTED",
    date: "Oct 20, 09:15 AM",
    notes: [
      {
        id: 1,
        text: "Left voicemail.",
        author: "System",
        date: "Oct 20, 09:15 AM",
      },
    ],
  },
  {
    id: 8,
    name: "Lisa Wong",
    email: "lwong@company.com",
    phone: "(555) 876 5432",
    service: "Invisalign",
    source: "Facebook",
    campaign: "Smile More",
    status: "QUALIFIED",
    date: "Oct 19, 11:45 AM",
    notes: [
      {
        id: 1,
        text: "Approved for financing.",
        author: "System",
        date: "Oct 19, 11:45 AM",
      },
    ],
  },
  {
    id: 9,
    name: "Tom Harris",
    email: "tharris@web.com",
    phone: "(555) 567 8901",
    service: "Implants",
    source: "Referral",
    campaign: "Loyalty",
    status: "NEW",
    date: "Oct 18, 03:30 PM",
    notes: [
      {
        id: 1,
        text: "Wants to consult about lower implants.",
        author: "Sarah",
        date: "Oct 18, 03:30 PM",
      },
    ],
  },
  {
    id: 10,
    name: "Amanda Lee",
    email: "alee@domain.com",
    phone: "(555) 432 1098",
    service: "Veneers",
    source: "Bing Ads",
    campaign: "Holiday Promo",
    status: "LOST",
    date: "Oct 17, 10:00 AM",
    notes: [
      {
        id: 1,
        text: "No response.",
        author: "System",
        date: "Oct 17, 10:00 AM",
      },
    ],
  },
  {
    id: 11,
    name: "Chris Evans",
    email: "cevans@mail.com",
    phone: "(555) 321 0987",
    service: "Cleaning",
    source: "Google Ads",
    campaign: "Summer Glow",
    status: "CLOSED",
    date: "Oct 16, 02:15 PM",
    notes: [
      {
        id: 1,
        text: "Completed cleaning.",
        author: "System",
        date: "Oct 16, 02:15 PM",
      },
    ],
  },
  {
    id: 12,
    name: "Jessica Alba",
    email: "jalba@email.com",
    phone: "(555) 210 9876",
    service: "Teeth Whitening",
    source: "SEO",
    campaign: "Organic",
    status: "CONTACTED",
    date: "Oct 15, 11:30 AM",
    notes: [
      {
        id: 1,
        text: "Sent follow up email.",
        author: "Sarah",
        date: "Oct 15, 11:30 AM",
      },
    ],
  },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState(initialLeadsData);
  const [selectedLeadId, setSelectedLeadId] = useState<number | null>(
    initialLeadsData[0].id,
  );

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
  const handleAddNote = () => {
    if (!newNoteText.trim() || !selectedLeadId) return;
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === selectedLeadId) {
          return {
            ...lead,
            notes: [
              ...lead.notes,
              {
                id: Date.now(),
                text: newNoteText,
                author: "Admin",
                date: new Date().toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              },
            ],
          };
        }
        return lead;
      }),
    );
    setNewNoteText("");
    setIsAddingNote(false);
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
                {paginatedLeads.length > 0 ? (
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
                    LEAD ID: #{44920 + selectedLead.id}
                  </div>
                  <div className="d-flex gap-2 mt-2">
                    <div
                      className="bg-light border rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "#001BFF",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <Phone size={14} />
                    </div>
                    <div
                      className="bg-light border rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "#001BFF",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <Mail size={14} />
                    </div>
                    <div
                      className="bg-light border rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "#001BFF",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <MessageSquare size={14} />
                    </div>
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
                      className="bg-light p-3 rounded-4 shadow-sm"
                      style={{ border: "1px solid #f8f9fa" }}
                    >
                      <p
                        className="mb-2 text-dark font-medium"
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
                        Automatically captured from initial entry.
                      </div>
                      <div
                        className="text-muted fw-bold"
                        style={{ fontSize: "10px", color: "#adb5bd" }}
                      >
                        {selectedLead.date}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mb-4 position-relative">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center text-white z-1 shadow-sm"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginTop: "2px",
                        backgroundColor: "#60a5fa",
                      }}
                    >
                      <Mail size={12} strokeWidth={2.5} />
                    </div>
                    <div className="ms-3">
                      <div
                        className="fw-bold text-dark"
                        style={{ fontSize: "13.5px" }}
                      >
                        Welcome Email Sent
                      </div>
                      <div
                        className="text-muted mb-1"
                        style={{ fontSize: "12.5px", lineHeight: "1.4" }}
                      >
                        System sent "Introduction to Series" sequence.
                      </div>
                      <div
                        className="text-muted fw-bold"
                        style={{
                          fontSize: "10px",
                          color: "#adb5bd",
                          letterSpacing: "0.2px",
                        }}
                      >
                        System Generated
                      </div>
                    </div>
                  </div>

                  <div className="d-flex position-relative">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center bg-white border border-primary text-primary z-1 shadow-sm"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginTop: "2px",
                      }}
                    >
                      <MailOpen
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
                        Email Opened
                      </div>
                      <div
                        className="text-muted mb-1"
                        style={{ fontSize: "12.5px", lineHeight: "1.4" }}
                      >
                        Lead viewed the "Welcome Email".
                      </div>
                      <div
                        className="text-muted fw-bold"
                        style={{ fontSize: "10px", color: "#adb5bd" }}
                      >
                        Read Status Detected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sticky Actions */}
            <div className="p-3 border-top bg-white d-flex gap-2 w-100 mt-auto">
              <button
                className="btn btn-primary flex-grow-1 rounded-3 shadow-sm"
                style={{
                  backgroundColor: "#001BFF",
                  border: "none",
                  fontSize: "13.5px",
                  fontWeight: "700",
                  padding: "12px 0",
                  letterSpacing: "0.5px",
                }}
              >
                Schedule Call
              </button>
              <button
                className="btn btn-outline-secondary rounded-3 px-4 fw-bold"
                style={{ fontSize: "13.5px" }}
              >
                Edit
              </button>
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
