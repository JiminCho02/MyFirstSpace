import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BGM | Black Gear Motor - Hyundai N Performance",
  description: "The Origin of N Performance. Genuine Hyundai N parts directly from South Korea. Mando ECS, N-Performance Aero, Lightweight Forged Wheels.",
  keywords: "Hyundai N, Performance Parts, BGM, Black Gear Motor, Avante N, i30N, Veloster N, South Korea, Tuning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-bgm-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
