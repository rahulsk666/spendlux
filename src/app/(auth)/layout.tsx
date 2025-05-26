import Header from "@/components/header";
import AppBar from "@/components/appbar";
import { cookies } from "next/headers";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  console.log(token);
  
  // if (!token) {
  //   redirect("/login");
  // }
  return (
    <>
      <Header />
      <main>{children}</main>
      <AppBar />
    </>
  );
}
