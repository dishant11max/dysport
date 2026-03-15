import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dishant — Developer & Builder",
  description: "Portfolio of Dishant. Building digital products, developer tools and internet experiments.",
  icons: {
    icon: "/favicon-cat.jpg",
    apple: "/favicon-cat.jpg",
  },
  openGraph: {
    title: "Dishant-Developer & Builder",
    description: "Portfolio of Dishant. Building digital products, developer tools and internet experiments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
