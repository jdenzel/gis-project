import type { Metadata } from "next";
import "./styles/globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "GIS Project",
  description: "Denzel Mabilangan GIS Project",
};

const ProximaNova = localFont({
  src: [
    { path: "./lib/fonts/ProximaNova.ttf", weight: "400"},
    { path: "./lib/fonts/ProximaNovaSemiBold.ttf", weight: "600" },
    { path: "./lib/fonts/ProximaNovaBold.ttf", weight: "700" },
  ],
  variable: "--proxima-nova",
});

const KandalBook = localFont({
  src: [
    { path: "./lib/fonts/KandalBook.ttf", weight: "400"},
    { path: "./lib/fonts/KandalBookBold.ttf", weight: "700" },
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
