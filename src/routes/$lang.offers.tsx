import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Offers } from "@/components/sections/Offers";
import { Contact } from "@/components/sections/Contact";
import { FooterLinks } from "@/components/FooterLinks";

import { translations, defaultLang, type Language } from "@/lib/translations";

export const Route = createFileRoute("/$lang/offers")({
  component: OffersPage,
  head: ({ params }) => {
    const lang = (params.lang as Language) || defaultLang;
    const t = translations[lang] || translations[defaultLang];
    const title = `${t.offers.subtitle} | ${t.offers.title}`;
    const desc = t.offers.ratesDesc;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      links: [
        { rel: "canonical", href: `https://rentcartetouan.ma/${lang}/offers` },
        { rel: "alternate", hreflang: "es", href: "https://rentcartetouan.ma/es/offers" },
        { rel: "alternate", hreflang: "fr", href: "https://rentcartetouan.ma/fr/offers" },
        { rel: "alternate", hreflang: "en", href: "https://rentcartetouan.ma/en/offers" },
        { rel: "alternate", hreflang: "ar", href: "https://rentcartetouan.ma/ar/offers" },
        { rel: "alternate", hreflang: "x-default", href: "https://rentcartetouan.ma/fr/offers" },
      ],
    };
  }
});

function OffersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Offers />
      </main>
      <FooterLinks />
    </div>
  );
}
