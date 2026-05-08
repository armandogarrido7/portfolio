import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/portfolio.css";

export const metadata: Metadata = {
  title: "Armando Garrido | Backend Software Engineer",
  description:
    "Backend-oriented software engineer focused on reliable systems, travel-tech, integrations, clean architecture and production software.",
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