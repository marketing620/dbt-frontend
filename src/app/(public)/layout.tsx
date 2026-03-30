import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Maintenance from "@/app/maintenance/page";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Dental Billing Team & Associates",
  description: "Dental Billing Team & Associates",
};

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check for the secret admin bypass cookie
  const cookieStore = await cookies();
  const hasBypass = cookieStore.has("maintenance_bypass");

  if (!hasBypass) {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      // Perform an ultra-fast cached fetch revalidated every 30 seconds
      const res = await fetch(`${API_URL}/api/settings/maintenance`, {
        next: { revalidate: 30 }
      });
      const data = await res.json();

      // If active, render the solitary offline screen without the standard Navbar/Footer!
      if (data.maintenanceActive) {
        return <Maintenance />;
      }
    } catch (e) {
      console.error("Failed to check maintenance mode status", e);
    }
  }

  return (
    <>
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </>
  );
}
