import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create - Spendlux",
  description: "Create a new transaction",
};

export default function pageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section about="create">{children}</section>;
}
