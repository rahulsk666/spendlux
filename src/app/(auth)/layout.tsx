import Header from "@/components/header";
import AppBar from "@/components/appbar";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <AppBar />
    </>
  );
}
