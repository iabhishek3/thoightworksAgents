import type { Metadata } from "next";
import { Instrument_Sans, IBM_Plex_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Squadly SI — Autonomous AI Agents",
  description:
    "Squadly SI (Super Intelligence) — autonomous AI agents that reason, plan, and execute across your enterprise. Agentic AI with multi-agent orchestration, 50+ integrations, SOC 2 certified.",
  keywords: [
    "Squadly SI",
    "Squadly Super Intelligence",
    "Squadly AI",
    "Squadly AI agents",
    "AI agent platform",
    "enterprise AI agents",
    "autonomous AI agents",
    "agentic AI platform",
    "agentic AI",
    "multi-agent orchestration",
    "AI workflow automation",
    "AI agent orchestration platform",
    "AI automation platform enterprise",
    "intelligent agent automation",
    "AI agents for business",
    "AI agents",
    "super intelligence",
    "superintelligence platform",
  ],
  alternates: {
    canonical: "https://squadly.si/",
  },
  openGraph: {
    title: "Squadly SI — Autonomous AI Agents",
    description:
      "Squadly SI — autonomous AI agents for enterprise operations. Multi-agent orchestration, full observability, and enterprise-grade security.",
    url: "https://squadly.si/",
    siteName: "Squadly SI",
    images: [
      {
        url: "https://squadly.si/og-image.png",
        width: 1200,
        height: 630,
        alt: "Squadly SI dashboard showing autonomous agents executing enterprise workflows",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Squadly SI — Autonomous AI Agents",
    description:
      "Squadly SI — autonomous AI agents that reason, plan, and execute across your enterprise.",
    images: ["https://squadly.si/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${ibmPlexMono.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Squadly",
              legalName: "Squadly, Inc.",
              url: "https://squadly.si",
              logo: "https://squadly.si/icon.svg",
              description:
                "Squadly builds SI (Super Intelligence) — enabling autonomous AI agents, multi-agent orchestration, agentic AI, and superintelligent workflow automation at enterprise scale.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "team@squadly.si",
                contactType: "sales",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Squadly SI",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Agentic AI Platform",
              operatingSystem: "Web",
              url: "https://squadly.si",
              description:
                "Squadly SI — deploy autonomous AI agents that reason, plan, and execute multi-step enterprise workflows with full observability and SOC 2 Type II security.",
              featureList: [
                "Multi-Agent Orchestration",
                "AI Workflow Automation",
                "Agent Observability and Audit Trails",
                "Human-in-the-Loop Controls",
                "50+ Enterprise Integrations",
                "SOC 2 Type II Compliance",
                "Continuous Agent Learning",
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Contact for enterprise pricing",
              },
              provider: {
                "@type": "Organization",
                name: "Squadly",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Squadly SI",
              alternateName: ["Squadly Super Intelligence", "Squadly AI"],
              url: "https://squadly.si",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
