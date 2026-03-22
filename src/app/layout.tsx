import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruach Renovations | Kitchen & Bathroom Remodeling — Knoxville, TN",
  description:
    "Ruach Renovations — Knoxville's premier kitchen, bathroom, and full home renovation specialists. 20+ years of craftsmanship. Licensed, insured, satisfaction guaranteed. Request a free quote today.",
  keywords: [
    "kitchen renovation Knoxville TN",
    "bathroom remodel Knoxville",
    "home renovation Knoxville Tennessee",
    "kitchen remodeling East Tennessee",
    "contractor Knoxville TN",
    "flooring installation Knoxville",
    "Ruach Renovations",
  ],
  openGraph: {
    title: "Ruach Renovations | Kitchen & Bathroom Remodeling — Knoxville, TN",
    description:
      "Breathing Life Into Your Home. Premium kitchen, bathroom, and full home renovations in Knoxville, TN. 20+ years of excellence.",
    url: "https://ruach-renovations-usa.vercel.app",
    siteName: "Ruach Renovations",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruach Renovations | Kitchen & Bathroom Remodeling — Knoxville, TN",
    description:
      "Premium home renovation services in Knoxville, TN. Kitchens, bathrooms, full home renovations. 20+ years of excellence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        {/* Schema.org LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Ruach Renovations",
              description:
                "Premium kitchen, bathroom, and full home renovation services in Knoxville, Tennessee.",
              url: "https://ruach-renovations-usa.vercel.app",
              telephone: "(555) 000-0000",
              email: "eamon@ruachrenovations.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Knoxville",
                addressRegion: "TN",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 35.9606,
                  longitude: -83.9207,
                },
                geoRadius: "80000",
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-18:00",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Renovation Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Renovation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodel" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Home Renovation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Work" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-body bg-cream text-charcoal">{children}</body>
    </html>
  );
}
