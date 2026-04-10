import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: "Tysen Meroniuk",
  description: "Software engineer and founder. Building things that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border/50 py-8">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Tysen Meroniuk
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted">
                tysenmeroniuk@gmail.com
              </span>
              <a
                href="https://www.linkedin.com/in/tysen-meroniuk-b4ab1b327/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-opacity hover:opacity-70"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
