import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { GaEvents } from "@/components/GaEvents";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.siteName} | 松戸市・柏市周辺の設備工事`,
    template: `%s | ${siteConfig.brandName}`
  },
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Analytics />
        <GaEvents />
        <JsonLd data={localBusinessSchema()} />
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
