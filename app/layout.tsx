import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junrey Rivera | Developer & AI Creative Designer",
  description: "Portfolio for Junrey Rivera, full-stack developer, automation builder, and AI image content creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
