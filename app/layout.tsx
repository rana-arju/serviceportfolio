import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { constructMetadata } from "@/lib/seo";
import {
  JsonLd,
  getOrganizationSchema,
  getProfessionalServiceSchema,
  getWebSiteSchema,
  getSiteNavigationSchema,
} from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  ...constructMetadata(),
  title: {
    template: '%s | ReplyTentra',
    default: 'ReplyTentra — Premium AI, Automation & Software Engineering Agency',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Canonical & meta handled by Next.js metadata API */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {/* ── Structured Data / JSON-LD ── */}
        <JsonLd type="Organization"        data={getOrganizationSchema()} />
        <JsonLd type="ProfessionalService" data={getProfessionalServiceSchema()} />
        <JsonLd type="WebSite"             data={getWebSiteSchema()} />
        <JsonLd type="ItemList"            data={getSiteNavigationSchema()} />

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
