import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FooterLinks } from "@/components/FooterLinks";

import { translations, defaultLang, type Language } from "@/lib/translations";

export const Route = createFileRoute("/$lang/about")({
  component: AboutPage,
  head: ({ params }) => {
    const lang = (params.lang as Language) || defaultLang;
    const t = translations[lang] || translations[defaultLang];
    const title = `${t.nav.about} | ${t.about.title}`;
    const desc = t.about.desc;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      links: [
        { rel: "canonical", href: `https://rentcartetouan.ma/${lang}/about` },
        { rel: "alternate", hreflang: "es", href: "https://rentcartetouan.ma/es/about" },
        { rel: "alternate", hreflang: "fr", href: "https://rentcartetouan.ma/fr/about" },
        { rel: "alternate", hreflang: "en", href: "https://rentcartetouan.ma/en/about" },
        { rel: "alternate", hreflang: "ar", href: "https://rentcartetouan.ma/ar/about" },
        { rel: "alternate", hreflang: "x-default", href: "https://rentcartetouan.ma/fr/about" },
      ],
    };
  }
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <About />
      </main>
      <FooterLinks />
    </div>
  );
}
