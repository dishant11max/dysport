import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dishant.vercel.app"),
  title: "Dishant — Developer & Builder",
  description: "Portfolio of Dishant. Building digital products, developer tools and internet experiments.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Dishant — Developer & Builder",
    description: "Portfolio of Dishant. Building digital products, developer tools and internet experiments.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dishant — Developer & Builder" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dishant10510925",
    creator: "@dishant10510925",
    title: "Dishant — Developer & Builder",
    description: "Portfolio of Dishant. Building digital products, developer tools and internet experiments.",
    images: ["/og-image.png"],
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
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
