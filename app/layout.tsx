import type { Metadata } from "next";
import "./styles.css/globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
