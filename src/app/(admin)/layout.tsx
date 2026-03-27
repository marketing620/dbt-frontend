import type { Metadata } from "next";
import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/Sidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard - Dental Billing Team",
  description: "Admin panel for Dental Billing Team",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="d-flex vh-100 overflow-hidden bg-light w-100">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <AdminNavbar />
        <main
          className="flex-grow-1 overflow-y-auto w-100"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="p-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
