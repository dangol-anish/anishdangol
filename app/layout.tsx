import { Analytics } from "@vercel/analytics/next";
import BackToTopButton from "@/components/custom/BackToTop";
import Copyright from "@/components/custom/Copyright";
import Navbar from "@/components/custom/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { RootLayoutProps } from "@/types/layout";

export const metadata: Metadata = {
  title: "Home | Anish Dangol",
  description:
    "Anish Dangol — software developer building minimal, high-performance web experiences.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] rounded-md bg-background px-3 py-2 text-sm text-foreground shadow-md ring-1 ring-border"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="content" className="flex-grow">
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
