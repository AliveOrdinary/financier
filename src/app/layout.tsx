import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from "@/FinanceContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financier.",
  description: "Your personal finance tracker!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppProvider>
            <main className="flex flex-col justify-center items-center">
              <Navbar />
              {children}
            </main>
          </AppProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
