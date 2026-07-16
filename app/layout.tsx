import type { Metadata, Viewport } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { siteUrl } from "./lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Game Development Constitution",
    template: "%s · Game Development Constitution",
  },
  description: "143 engine-agnostic principles for making better games — readable by humans, structured for AI, and open to everyone.",
  applicationName: "Game Development Constitution",
  authors: [{ name: "Sontlux Sukhavachana", url: "https://github.com/adventuresincausality" }],
  creator: "Sontlux Sukhavachana",
  keywords: ["game development", "game design", "indie games", "AI game development", "playtesting", "game production"],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    siteName: "The Game Development Constitution",
    title: "The Game Development Constitution",
    description: "A searchable, evidence-tagged field guide for humans and AI making games.",
    url: siteUrl,
    images: [{
      url: `${siteUrl}/social-preview.png`,
      width: 1536,
      height: 1024,
      alt: "An abstract field-guide map connecting game systems, craft, testing, teams, and shipping.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Game Development Constitution",
    description: "A searchable, evidence-tagged field guide for humans and AI making games.",
    images: [`${siteUrl}/social-preview.png`],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f2efe5",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
