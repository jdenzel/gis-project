import type { Metadata } from "next";
import "./styles/globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "GIS Project",
  description: "Denzel Mabilangan GIS Project",
};

const ProximaNova = localFont({
  src: [
    {
      path: "./styles/fonts/ProximaNova.ttf",
    }
  ],
  variable: "--proxima-nova",
});

const KandalBook = localFont({
  src: [
    {
      path: "./styles/fonts/KandalBook.ttf",
    }
  ],
  variable: "--kandal-book",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ProximaNova.variable} ${KandalBook.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
