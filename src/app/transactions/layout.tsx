import React from "react";

export default function pageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section about="transactions">{children}</section>;
}
  