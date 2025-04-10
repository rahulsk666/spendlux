'use client';

import { usePathname } from "next/navigation";
import AppBar from "@/components/appbar";
import Header from "@/components/header";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <>
      <div className="md:hidden">
        {!isLoginPage && <Header />}
        <main>{children}</main>
        {!isLoginPage && <AppBar />}
      </div>
      <div className="hidden md:block text-center">
        Only Supported in mobile devices
      </div>
    </>
  );
} 