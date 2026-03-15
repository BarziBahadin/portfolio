import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barzi Bahaalddin — Data Analyst & IT Engineer",
  description:
    "Portfolio of Barzi Bahaalddin Abdallah — Data Analyst, IT Engineer, and Computer Engineering graduate based in Kurdistan Region, Iraq.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
