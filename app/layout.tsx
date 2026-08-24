import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ReplyTentra — Premium AI, Automation & Software Agency",
  description: "We don't just build websites or automations. ReplyTentra engineers intelligent digital systems that help businesses operate, scale, and grow.",
  keywords: ["AI Automation", "n8n Automation", "Zapier", "GoHighLevel CRM", "Custom SaaS", "Web Development"],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
