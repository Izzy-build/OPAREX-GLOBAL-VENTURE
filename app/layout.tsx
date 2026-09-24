import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Oparex Global Venture | Premium Furniture",
  description:
    "Discover stylish chairs, bedframes, sofas and custom furniture from Oparex Global Venture.",
  openGraph: {
    title: "Oparex Global Venture | Premium Furniture",
    description:
      "Discover stylish chairs, bedframes, sofas and custom furniture from Oparex Global Venture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
