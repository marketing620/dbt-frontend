"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface SourceData {
  name: string;
  value: number;
  color: string;
}

export default function TrafficSourceChart() {
  const [data, setData] = useState<SourceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const response = await fetch(`${API_URL}/api/analytics/dashboard`);
        if (response.ok) {
          const resData = await response.json();
          setData(resData.sourcesData || []);
        }
      } catch (error) {
        console.error("Failed to fetch analytics", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="container mb-4 text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Fallback data if empty
  const displayData = data.length > 0 ? data : [
    { name: "Direct", value: 1, color: "#8884d8" }
  ];

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
                    data={displayData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={{ fontSize: 12, fill: "#6c757d" }}
                  >
                    {displayData.map((entry, index) => (
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
                  data={displayData}
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
                    {displayData.map((entry, index) => (
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
