import { Poppins } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import AuthListener from "@/components/authListener";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "600"],
  variable: "--font-poppins",
});

export { metadata };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-background text-white`}>
        <Toaster position="bottom-center" />
        <AuthListener /> {/* Read auth changes*/}
        <div className="md:hidden">{children}</div>
        <div className="hidden md:block text-center">
          Only Supported in mobile devices
        </div>
      </body>
    </html>
  );
}
