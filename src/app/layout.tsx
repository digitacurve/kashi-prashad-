import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import Providers from "@/components/Providers";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kashipujakit.com"),
  title: "Kashi Divine Puja Kit | Bring Kashi Blessings to Your Home",
  description: "Receive authentic temple prasad, sacred Gangajal, Rudraksha, Chandan Mala, and essential puja items sourced directly from Kashi. Handcrafted with devotion, safely delivered to your home.",
  keywords: ["Kashi Puja Kit", "Kashi Prasad Online", "Buy Kashi Gangajal", "Rudraksha Mala Online", "Kashi Vishwanath Prasad", "Kal Bhairav Prasad", "Sacred Puja Kit", "Mahadev Puja Kit", "Authentic Puja Samagri", "Temple Prasad Delivery"],
  openGraph: {
    title: "Kashi Divine Puja Kit | Bring Kashi Blessings to Your Home",
    description: "Receive authentic temple prasad, sacred Gangajal, Rudraksha, Chandan Mala, and essential puja items sourced directly from Kashi.",
    url: "https://kashipujakit.com",
    siteName: "Kashi Divine Puja Kit",
    images: [
      {
        url: "/images/hero_puja_kit.png",
        width: 1200,
        height: 1200,
        alt: "Kashi Divine Puja Kit Premium Packaging",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashi Divine Puja Kit",
    description: "Bring the divine blessings of Kashi Vishwanath and Mahadev to your home. Sourced and packaged in Kashi.",
    images: ["/images/hero_puja_kit.png"],
  },
  alternates: {
    canonical: "https://kashipujakit.com",
  },
};

export const viewport = {
  themeColor: "#E67E22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#FFF9F0] text-[#222222] font-sans flex flex-col">
        <Providers>{children}</Providers>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

