import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sabbir-dev.vercel.app"),
  title: "Sabbir Hossain | Full Stack Web Developer",
  description:
    "Portfolio of Sabbir Hossain - Aspiring Full-Stack Web Developer focused on building modern, responsive, and user-friendly web applications using React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Sabbir Hossain",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Northern University Bangladesh",
    "Dhaka Bangladesh",
    "Frontend Developer",
  ],
  authors: [{ name: "Sabbir Hossain", url: "https://github.com/sabbirckc" }],
  openGraph: {
    title: "Sabbir Hossain | Full Stack Web Developer",
    description:
      "Aspiring Full-Stack Web Developer focused on building modern, responsive, and user-friendly web applications.",
    type: "website",
    url: "https://github.com/sabbirckc",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Sabbir Hossain",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#050507] text-[#e2e8f0] selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
