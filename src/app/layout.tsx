"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "./styles.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navigation from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <header>
              <Navigation />
            </header>
            {children}
            <footer>Footer</footer>
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
