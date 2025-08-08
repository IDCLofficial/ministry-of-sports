import type { Metadata } from 'next';

// Site metadata that follows Next.js Metadata type
export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://nigerdeltaaffairs.imo.gov.ng'),
  title: "Ministry of Niger Delta Affairs and Intelligence - Imo State",
  description: "Official website of the Imo State Ministry of Niger Delta Affairs and Intelligence. Promoting peace, security, and sustainable development in the oil-producing communities of Imo State.",
  authors: [{ name: "Imo State Government" }],
  alternates: {
    canonical: "/",
    languages: {
      'en-NG': '/en-ng',
    },
  }, 
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Niger Delta Affairs and Intelligence - Imo State",
    description: "Promoting peace, security, and sustainable development in the oil-producing communities of Imo State",
    creator: "@ImoStateGov",
    images: ["/assets/twitter-card.jpg"]
  },
  keywords: [
    "Imo State",
    "Niger Delta",
    "Community Development",
    "Oil Producing Communities",
    "Environmental Protection",
    "Security Coordination",
    "Prince Dr. Henry Uzor Okafor",
    "Imo State Government",
    "Youth Empowerment",
    "Stakeholder Engagement",
    "Sustainable Development"
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://nigerdeltaaffairs.imo.gov.ng",
    siteName: "Imo State Ministry of Niger Delta Affairs and Intelligence",
    title: "Ministry of Niger Delta Affairs and Intelligence - Imo State",
    description: "Promoting peace, security, and sustainable development in the oil-producing communities of Imo State through strategic coordination and community engagement.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imo State Ministry of Niger Delta Affairs and Intelligence - Building Sustainable Communities"
      }
    ]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/ng-logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/ng-logo.png',
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#15803d' },
    { media: '(prefers-color-scheme: dark)', color: '#15803d' },
  ]
}