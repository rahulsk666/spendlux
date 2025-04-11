import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import AppBar from "@/components/appbar";
import Header from "@/components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Spendlux",
  description: "Finance manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-background text-white overflow-y-hidden`}>
        <div className="md:hidden">
          <Header />
          <main>{children}</main>
          <AppBar />
        </div>
        <div className="hidden md:block text-center">
          Only Supported in mobile devices
        </div>
      </body>
    </html>
  );
}
