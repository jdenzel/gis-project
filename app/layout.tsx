import type { Metadata } from "next";
import "./globals.css";
import Home from "./page";

export const metadata: Metadata = {
  title: "GIS Project",
  description: "Denzel Mabilangan GIS Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <Home />
    </html>
  );
}
