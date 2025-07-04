import { Analytics } from "@vercel/analytics/next";
import BackToTopButton from "@/components/custom/BackToTop";
import Copyright from "@/components/custom/Copyright";
import Navbar from "@/components/custom/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootLayoutProps } from "./types/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home | Anish Dangol",
  description: "My personal portfolio site",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col font-sans dark:bg-[var(--background)] transition-all dark:text-zinc-300 text-zinc-700">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>
          <Copyright />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
