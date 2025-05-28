import { Poppins } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import AuthProvider from "@/components/authProvider";
import { createClient } from "@/utils/supabase/server";

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
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-background text-white overflow-y-hidden`}
      >
        <AuthProvider initialUser={user} />
        <div className="md:hidden">{children}</div>
        <div className="hidden md:block text-center">
          Only Supported in mobile devices
        </div>
      </body>
    </html>
  );
}
