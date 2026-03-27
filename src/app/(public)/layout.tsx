import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Dental Billing Team & Associates",
  description: "Dental Billing Team & Associates",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </>
  );
}
