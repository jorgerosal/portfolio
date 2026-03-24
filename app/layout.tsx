import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const title = "Jorge Rosal Jr. | Senior Full-Stack Engineer";
const description =
  "Senior Full-Stack Engineer with 10+ years of experience building scalable SaaS platforms, API-driven systems, and workflow automation tools.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const imageUrl = "/assets/images/jorge-rosal.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Jorge Rosal Jr.",
    "Senior Full-Stack Engineer",
    "SaaS Systems Builder",
    "Project Manager",
    "Node.js",
    "React",
    "AWS",
    "Automation",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Jorge Rosal Jr. portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${jakarta.variable} bg-background font-sans text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
