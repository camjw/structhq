import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { CookieToast } from "@/components/cookie-toast";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

import {
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
  COMPANY_TWITTER_HANDLE,
  COMPANY_URL_PREFIX,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${COMPANY_NAME}`,
    default: COMPANY_NAME,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || COMPANY_URL_PREFIX),
  manifest: "/manifest.json",
  description: COMPANY_DESCRIPTION,
  openGraph: {
    title: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    url: COMPANY_URL_PREFIX,
    siteName: COMPANY_NAME,
    type: "website",
  },
  twitter: {
    site: `@${COMPANY_TWITTER_HANDLE}`,
  },
  icons: {
    shortcut: { url: "/favicon.ico", type: "image/x-icon" },
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        data-domain="structhq.com"
        src="https://plausible.io/js/script.js"
        defer
      />
      <body className="min-h-screen antialiased overflow-x-hidden selection:text-white selection:bg-primary-9 font-geist">
        <Header />
        <main className="min-h-[calc(100dvh-3rem)] sm:min-h-[calc(100dvh-4rem)]">
          {children}
        </main>
        <Footer />
        <Toaster />
        <CookieToast />
      </body>
    </html>
  );
}
