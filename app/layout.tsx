import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Viewport } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hongmei",
  description:
    "hongmei is fullstack developer working with start-ups striving to make a positive impact in the world.",
  creator: "hongmei",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "hongmei",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "hongmei",
    description:
      "hongmei is fullstack developer working with start-ups striving to make a positive impact in the world.",
    url: "https://hongmei.codes",
    siteName: "hongmei",
    images: [
      {
        url: "https://hongmei.codes/og.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "16x16",
      },
      {
        url: "/icons/icon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/icons/icon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/icons/icon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
    apple: [
      {
        url: "apple-icon",
      },
      {
        url: "/icons/icon-72x72.png",
        type: "image/png",
        sizes: "72x72",
      },
      {
        url: "/icons/icon-76x76.png",
        type: "image/png",
        sizes: "76x76",
      },
      {
        url: "/icons/icon-120x120.png",
        type: "image/png",
        sizes: "120x120",
      },
      {
        url: "/icons/icon-152x152.png",
        type: "image/png",
        sizes: "152x152",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "icons/apple-icon-precomposed.png",
      },
    ],
    other: [
      {
        url: "/icons/icon-192x192.png",
        sizes: "192x192",
      },
      {
        url: "/icons/icon-128x128.png",
        sizes: "128x128",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-slate-900 bg-slate-200 dark:text-slate-400 text-slate-500 selection:bg-primary selection:text-slate-100`}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  );
}
