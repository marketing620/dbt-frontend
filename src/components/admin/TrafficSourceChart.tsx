"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Google Ads", value: 400, color: "#8884d8" },
  { name: "Facebook Ads", value: 300, color: "#83a6ed" },
  { name: "Instagram Ads", value: 200, color: "#8dd1e1" },
  { name: "TikTok Ads", value: 250, color: "#a4de6c" },
  { name: "Organic Search", value: 50, color: "#d0ed57" },
  { name: "Referral", value: 150, color: "#ffc658" },
];

export default function TrafficSourceChart() {
  return (
    <div className="container mb-4">
      <div className="row g-4">
        {/* Pie Chart Card */}
        <div className="col-lg-6">
          <div className="card shadow-sm rounded-4 border-0 h-100 p-4">
            <h5 className="fw-bold mb-4 text-dark">Traffic Sources</h5>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={{ fontSize: 12, fill: "#6c757d" }}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bar Chart Card */}
        <div className="col-lg-6">
          <div className="card shadow-sm rounded-4 border-0 h-100 p-4">
            <h5 className="fw-bold mb-4 text-dark">Volume by Source</h5>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  layout="vertical"
                  margin={{ top: 5, right: 20, left: 30, bottom: 5 }}
                >
                  <XAxis
                    type="number"
                    tick={{ fill: "#6c757d", fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tick={{ fill: "#6c757d", fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "#f8f9fa" }}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
