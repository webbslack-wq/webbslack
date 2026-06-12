import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "webbslack — Full Stack Technical Lead | React · Next.js · Node · DevOps",
  description:
    "15+ years building web platforms, fintech systems, blockchain products and cloud infrastructure. Every build ships with an embedded AI agent — clients update their own site in plain language, with preview-and-approve safety.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-canvas text-ink font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
