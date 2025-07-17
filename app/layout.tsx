import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MRC Web Platform – Migrant Resource Center",
  description:
    "Official web platform for the Migrant Resource Center. Providing essential services, resources, and support for migrants and refugees.",
  keywords: [
    "MRC",
    "Migrant Resource Center",
    "migrants",
    "refugees",
    "support",
    "services",
    "resources",
    "community",
    "humanitarian aid",
  ],
  authors: [{ name: "MRC Team" }],
  creator: "v0.dev",
  publisher: "Vercel",
  openGraph: {
    title: "MRC Web Platform – Migrant Resource Center",
    description:
      "Official web platform for the Migrant Resource Center. Providing essential services, resources, and support for migrants and refugees.",
    url: "https://www.mrcplatform.org", // Replace with your actual domain
    siteName: "MRC Web Platform",
    images: [
      {
        url: "/placeholder-logo.png", // Use your actual logo/image path
        width: 800,
        height: 600,
        alt: "MRC Web Platform Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MRC Web Platform – Migrant Resource Center",
    description:
      "Official web platform for the Migrant Resource Center. Providing essential services, resources, and support for migrants and refugees.",
    images: ["/placeholder-logo.png"], // Use your actual logo/image path
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
