import type { Metadata } from "next";
import "./styles/globals.css";
import localFont from "next/font/local";

const ProximaNova = localFont({
  src: "./styles/fonts/Proxima Nova.ttf"
});

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
    <html lang="en" className={ProximaNova.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
