import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hongmei.codes",
  description: "hongmei.codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-slate-900 bg-slate-200 dark:text-slate-400 text-slate-500 selection:bg-primary selection:text-slate-100 dark:selection:text-blue-900`}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  );
}
