import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Superintelligence by ThoughtWorks — Autonomous AI Agents",
  description:
    "Superintelligence by ThoughtWorks — autonomous AI agents that reason, plan, and execute across your enterprise. Agentic AI with multi-agent orchestration, 50+ integrations, SOC 2 certified.",
  keywords: [
    "Superintelligence",
    "Superintelligence AI",
    "Superintelligence platform",
    "Superintelligence by ThoughtWorks",
    "ThoughtWorks AI",
    "ThoughtWorks AI agents",
    "super intelligent AI agents",
    "super intelligence AI platform",
    "superintelligent AI",
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
    canonical: "https://agents.thoughtworks.com/",
  },
  openGraph: {
    title: "Superintelligence by ThoughtWorks — Autonomous AI Agents",
    description:
      "Superintelligence — autonomous AI agents for enterprise operations. Multi-agent orchestration, full observability, and enterprise-grade security by ThoughtWorks.",
    url: "https://agents.thoughtworks.com/",
    siteName: "Superintelligence",
    images: [
      {
        url: "https://agents.thoughtworks.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Superintelligence dashboard showing autonomous agents executing enterprise workflows",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superintelligence by ThoughtWorks — Autonomous AI Agents",
    description:
      "Superintelligence — autonomous AI agents that reason, plan, and execute across your enterprise. By ThoughtWorks.",
    images: ["https://agents.thoughtworks.com/og-image.png"],
    creator: "@thoughtworks",
    site: "@thoughtworks",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ThoughtWorks",
              legalName: "ThoughtWorks, Inc.",
              url: "https://agents.thoughtworks.com",
              logo: "https://agents.thoughtworks.com/icon.svg",
              description:
                "ThoughtWorks builds Superintelligence — enabling autonomous AI agents, multi-agent orchestration, agentic AI, and superintelligent workflow automation at enterprise scale.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@thoughtworks.ai",
                contactType: "sales",
              },
              sameAs: [
                "https://www.linkedin.com/company/thoughtworks",
                "https://twitter.com/thoughtworks",
                "https://github.com/thoughtworks",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Superintelligence",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Agentic AI Platform",
              operatingSystem: "Web",
              url: "https://agents.thoughtworks.com",
              description:
                "Superintelligence by ThoughtWorks — deploy autonomous AI agents that reason, plan, and execute multi-step enterprise workflows with full observability and SOC 2 Type II security.",
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
                name: "ThoughtWorks",
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
              name: "Superintelligence",
              alternateName: ["Superintelligence AI", "Superintelligence by ThoughtWorks", "ThoughtWorks AI Agents"],
              url: "https://agents.thoughtworks.com",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
