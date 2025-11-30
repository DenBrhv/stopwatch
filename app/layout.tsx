import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stopwatch App",
  description: "A beautiful stopwatch application with laps functionality",
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

