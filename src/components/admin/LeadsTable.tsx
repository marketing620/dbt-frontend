export default function LeadsTable() {
  const leads = [
    {
      id: 1,
      name: "Dr. James Smith",
      clinic: "Bright Smiles Dental",
      service: "Full Cycle Billing",
      status: "New",
      date: "Mar 09, 2026",
      color: "primary",
    },
    {
      id: 2,
      name: "Sarah Connor",
      clinic: "Connor Orthodontics",
      service: "AR Recovery",
      status: "In Progress",
      date: "Mar 08, 2026",
      color: "warning",
    },
    {
      id: 3,
      name: "Dr. Alistair Vance",
      clinic: "Vance Family Dentistry",
      service: "Credentialing",
      status: "Closed Won",
      date: "Mar 05, 2026",
      color: "success",
    },
    {
      id: 4,
      name: "Emily Thorne",
      clinic: "Thorne Pediatrics",
      service: "Insurance Verification",
      status: "Follow Up",
      date: "Mar 04, 2026",
      color: "info",
    },
    {
      id: 5,
      name: "Lucas Vance",
      clinic: "City Center Dental",
      service: "Full Cycle Billing",
      status: "Lost",
      date: "Feb 28, 2026",
      color: "danger",
    },
  ];

  return (
    <div
      className="card-custom p-0 border border-1 overflow-hidden"
      style={{ borderColor: "#e5e7eb" }}
    >
      <div className="p-4 border-bottom d-flex justify-content-between align-items-center bg-white">
        <h5 className="fw-bold mb-0">Recent Inquiries & Leads</h5>
        <button className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-2">
          <i className="fa-solid fa-filter"></i> Filter
        </button>
      </div>

      <div className="table-responsive bg-white">
        <table
          className="table table-hover mb-0 border-0"
          style={{ verticalAlign: "middle" }}
        >
          <thead
            className="table-light text-muted"
            style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}
          >
            <tr>
              <th className="fw-semibold px-4 py-3 border-0">CONTACT NAME</th>
              <th className="fw-semibold py-3 border-0">CLINIC / PRACTICE</th>
              <th className="fw-semibold py-3 border-0">SERVICE OF INTEREST</th>
              <th className="fw-semibold py-3 border-0">DATE RECIEVED</th>
              <th className="fw-semibold py-3 border-0">STATUS</th>
              <th className="fw-semibold px-4 py-3 border-0 text-end">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} style={{ fontSize: "0.95rem" }}>
                <td className="px-4 py-3 fw-medium text-dark">{lead.name}</td>
                <td className="py-3 text-muted">{lead.clinic}</td>
                <td className="py-3 text-muted">{lead.service}</td>
                <td className="py-3 text-muted">{lead.date}</td>
                <td className="py-3">
                  <span
                    className={`badge bg-${lead.color} bg-opacity-10 text-${lead.color} px-3 py-2 rounded-pill fw-semibold border border-${lead.color} border-opacity-25`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-end">
                  <button className="btn btn-sm btn-light text-muted me-2 border-0 hover-focus-teal">
                    <i className="fa-regular fa-eye"></i>
                  </button>
                  <button className="btn btn-sm btn-light text-muted border-0 hover-focus-teal">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
