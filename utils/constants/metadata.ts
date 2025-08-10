import type { Metadata } from 'next';

// Site metadata that follows Next.js Metadata type
export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://sports.imo.gov.ng'),
  title: "Ministry of Sports and Youth Development - Imo State",
  description: "Official website of the Imo State Ministry of Sports and Youth Development. Empowering youth and developing sporting excellence through comprehensive programs, talent identification, and infrastructure development across Imo State.",
  authors: [{ name: "Imo State Government" }],
  alternates: {
    canonical: "/",
    languages: {
      'en-NG': '/en-ng',
    },
  }, 
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Sports and Youth Development - Imo State",
    description: "Empowering youth and developing sporting excellence in Imo State through comprehensive programs and infrastructure development",
    creator: "@ImoStateGov",
    images: ["/assets/twitter-card.jpg"]
  },
  keywords: [
    "Imo State",
    "Sports Development",
    "Youth Empowerment",
    "Talent Identification",
    "Sports Infrastructure",
    "National Sports Festival",
    "Hon. Obinna Evaristus Onyeocha",
    "Imo State Government",
    "Youth Development",
    "Sports Academy",
    "Heartland FC",
    "Dan Anyiam Stadium",
    "Niger Delta Games",
    "Youth Marathon",
    "Sports Training"
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sports.imo.gov.ng",
    siteName: "Imo State Ministry of Sports and Youth Development",
    title: "Ministry of Sports and Youth Development - Imo State",
    description: "Empowering youth and developing sporting excellence in Imo State through comprehensive programs, talent identification, infrastructure development, and strategic partnerships for sustainable sports development.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imo State Ministry of Sports and Youth Development - Empowering Youth and Building Champions"
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