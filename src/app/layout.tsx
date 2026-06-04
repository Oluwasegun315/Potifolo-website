import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers/app-providers";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Idowu Elijah",
    "Full Stack Developer",
    "Next.js Developer",
    "Web Developer Nigeria",
    "Portfolio",
    "E-commerce Developer",
    "API Developer",
    "Supabase",
    "Automation Expert",
    "Brand Growth",
  ],
  authors: [{ name: siteConfig.name, url: "https://idowuelijah.com" }],
  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    creator: "@idowuelijah",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} dark`}
    >
      <body className="min-h-screen font-sans text-white antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
