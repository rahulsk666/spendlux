import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Analytics - Spendlux",
  description: "View your spending analytics",
};

export default function pageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section about="anaytics">{children}</section>;
}
