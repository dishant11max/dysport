import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Dishant — Developer & Builder",
  description: "Building digital products, developer tools and internet experiments.",
  openGraph: {
    title: "Dishant — Developer & Builder",
    description: "Building digital products, developer tools and internet experiments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
