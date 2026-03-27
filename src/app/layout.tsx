import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import AosInitializer from "@/components/AosInitializer";
import BootstrapCleanup from "@/components/BootstrapCleanup";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dental Billing Team & Associates",
  description: "Dental Billing Team & Associates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${robotoSlab.variable} d-flex flex-column min-vh-100`}>
        <AosInitializer />
        <BootstrapCleanup />
        {children}
      </body>
    </html>
  );
}
