import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter_Tight, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import ConditionalNavbar from "@/components/ConditionalNavbar"
import ConditionalFooter from "@/components/ConditionalFooter"

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const interTight = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Fitore",
  description: "Combat sports gym operations platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${fraunces.variable} ${interTight.variable} ${spaceMono.variable} antialiased`}
      >
        <ConditionalNavbar>
          <Navbar />
        </ConditionalNavbar>
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
