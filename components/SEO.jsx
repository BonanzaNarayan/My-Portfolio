import Script from "next/script";

export default function SEO() {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Person",
          name: "Bonanza Narayan",
          url: "https://bonanzanarayan.netlify.app/",
          sameAs: [
            "https://x.com/svddiin",
            "https://github.com/BonanzaNarayan",
            "https://linkedin.com/in/BonanzaNarayan",
          ],
          jobTitle: "Web Developer",
          worksFor: {
            "@type": "Organization",
            name: "Corporate Boss Solutions",
          },
          description:
            "Web developer building SaaS projects, templates, business websites, and modern web experiences.",
        }),
      }}
    />
  );
}