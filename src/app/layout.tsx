import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://onpres.vercel.app/";

export const metadata: Metadata = {
  title: {
    default: "Onpres | Tecnología a un click — MacBooks, Notebooks y más",
    template: "%s | Onpres",
  },
  description:
    "Tienda de tecnología en Belgrano, CABA. Stock propio de MacBooks, iPads, Lenovo, monitores y accesorios. Envío a todo el país. Garantía oficial.",
  applicationName: "Onpres",
  authors: [{ name: "Onpres" }],
  generator: "Next.js",
  keywords: [
    "tienda de tecnología",
    "MacBook",
    "Apple",
    "Lenovo",
    "notebooks",
    "gaming",
    "monitores",
    "Belgrano",
    "CABA",
    "Argentina",
  ],
  creator: "Onpres",
  publisher: "Onpres",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Onpres",
    title: "Onpres | Tecnología a un click",
    description:
      "Los mejores productos Apple, Lenovo y más. Stock propio, envío a todo el país.",
    images: [
      {
        url: `${SITE_URL}/og-preview.webp`,
        width: 1200,
        height: 630,
        alt: "Onpres — Tecnología a un click",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Onpres | Tecnología a un click",
    description:
      "Los mejores productos Apple, Lenovo y más. Stock propio, envío a todo el país.",
    images: [`${SITE_URL}/og-preview.webp`],
  },

  verification: {
    // google: "tu-codigo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
