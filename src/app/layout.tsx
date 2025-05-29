import { Poppins } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "600"],
  variable: "--font-poppins",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-background text-white overflow-y-hidden`}
      >
        <div className="md:hidden">{children}</div>
        <div className="hidden md:block text-center">
          Only Supported in mobile devices
        </div>
      </body>
    </html>
  );
}
