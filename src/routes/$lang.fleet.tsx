import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Cars } from "@/components/sections/Cars";
import { Contact } from "@/components/sections/Contact";
import { FooterLinks } from "@/components/FooterLinks";
import { useTranslation } from "@/lib/useTranslation";

import { translations, defaultLang, type Language } from "@/lib/translations";

export const Route = createFileRoute("/$lang/fleet")({
  component: FleetPage,
  head: ({ params }) => {
    const lang = (params.lang as Language) || defaultLang;
    const t = translations[lang] || translations[defaultLang];
    const title = `${t.nav.fleet} | ${t.fleet.title}`;
    const desc = t.fleet.description;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      links: [
        { rel: "canonical", href: `https://rentcartetouan.ma/${lang}/fleet` },
        { rel: "alternate", hreflang: "es", href: "https://rentcartetouan.ma/es/fleet" },
        { rel: "alternate", hreflang: "fr", href: "https://rentcartetouan.ma/fr/fleet" },
        { rel: "alternate", hreflang: "en", href: "https://rentcartetouan.ma/en/fleet" },
        { rel: "alternate", hreflang: "ar", href: "https://rentcartetouan.ma/ar/fleet" },
        { rel: "alternate", hreflang: "x-default", href: "https://rentcartetouan.ma/fr/fleet" },
      ],
    };
  }
});

function FleetPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Cars />
      </main>
      <FooterLinks />
    </div>
  );
}
