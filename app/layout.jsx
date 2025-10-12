import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";
import Script from "next/script";
import SEO from "@/components/SEO";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Bonanza Narayan",
  description:
    "Bonanza is a web developer crafting SaaS-ready templates, custom websites, and modern web experiences with Next.js, React, and Firebase.",
  keywords: [
    "Web App Developer Ghana",
    "Website Developer",
    "Next.js Developer",
    "SaaS Templates",
    "SaaS Developer",
    "Website Templates",
    "Firebase Developer",
    "React Developer",
    "Bonanza Narayan",
    "Business Websites",
    "Custom Web Apps",
  ],
  authors: [{ name: "Bonanza Narayan" }],
  openGraph: {
    title: "Bonanza | Building Modern SaaS-Ready Websites",
    description:
      "I create beautiful, scalable, and high-performing web solutions — from business sites to full SaaS platforms.",
    url: "https://bonanzanarayan.netlify.app/",
    siteName: "BonanzaNarayan",
    images: [
      {
        url: "https://bonanzanarayan.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bonanza Portfolio Preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonanza Narayan | Web Developer & SaaS Builder",
    description:
      "Building high-quality SaaS-ready templates and web apps for creators and businesses.",
    images: ["https://bonanzanarayan.netlify.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="GH" />
        <meta name="geo.placename" content="Accra" />
        <meta name="geo.position" content="5.6037;-0.1870" />
        
      </head>
      <body
        className={`${inter.className}`}
      >
        <main>
          <ThemeProvider
           attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
        <SEO />
      </body>
    </html>
  );
}
