import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Spendlux",
  description: "Finance manager",
  applicationName: "Spendlux",
  authors: [
    {
      name: "Spendlux",
      url: "https://spendlux.com",
    },
  ],
  creator: "Rahul, Anandu",
};

export const viewport: Viewport = {
  initialScale:1,
  minimumScale:1,
  userScalable:false,
  width: "device-width",
  height: "device-height",
}
