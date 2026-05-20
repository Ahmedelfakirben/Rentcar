import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Location } from "@/components/sections/Location";
import { FooterLinks } from "@/components/FooterLinks";

import { translations, defaultLang, type Language } from "@/lib/translations";

export const Route = createFileRoute("/$lang/contact")({
  component: ContactPage,
  head: ({ params }) => {
    const lang = (params.lang as Language) || defaultLang;
    const t = translations[lang] || translations[defaultLang];
    const title = `${t.nav.contact} | ${t.contact.title}`;
    const desc = t.contact.desc;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      links: [
        { rel: "canonical", href: `https://rentcartetouan.ma/${lang}/contact` },
        { rel: "alternate", hreflang: "es", href: "https://rentcartetouan.ma/es/contact" },
        { rel: "alternate", hreflang: "fr", href: "https://rentcartetouan.ma/fr/contact" },
        { rel: "alternate", hreflang: "en", href: "https://rentcartetouan.ma/en/contact" },
        { rel: "alternate", hreflang: "ar", href: "https://rentcartetouan.ma/ar/contact" },
        { rel: "alternate", hreflang: "x-default", href: "https://rentcartetouan.ma/fr/contact" },
      ],
    };
  }
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Contact />
        <Location />
      </main>
      <FooterLinks />
    </div>
  );
}
