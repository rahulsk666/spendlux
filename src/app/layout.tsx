import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "600"],
  variable: "--font-poppins",
});

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "600"],
//   variable: "--font-montserrat",
// });

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
      <body className={`${poppins.variable} bg-background text-white`}>
        <div className="md:hidden">
          <Navbar />
          {children}
        </div>
        <div className="hidden md:block text-center">
          Only Supported in mobile devices
        </div>
      </body>
    </html>
  );
}
