import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estimate.ai | AI Estimating for Exterior Contractors",
  description:
    "AI estimating built by exterior contractors, for exterior contractors. Upload your construction documents, get a complete material list and estimate in minutes.",
  keywords: [
    "construction estimating",
    "takeoff software",
    "siding contractor",
    "exterior contractor",
    "blueprint processing",
    "material takeoff",
    "construction AI",
  ],
  authors: [{ name: "Estimate.ai" }],
  openGraph: {
    title: "Estimate.ai | AI Estimating for Exterior Contractors",
    description:
      "AI estimating built by exterior contractors, for exterior contractors. Upload your construction documents, get a complete material list and estimate in minutes.",
    type: "website",
    locale: "en_US",
    siteName: "Estimate.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estimate.ai | AI Estimating for Exterior Contractors",
    description:
      "AI estimating built by exterior contractors, for exterior contractors. Upload your construction documents, get a complete material list and estimate in minutes.",
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
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
