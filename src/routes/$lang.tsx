import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { translations, type Language, defaultLang } from '../lib/translations';
import { useEffect } from 'react';

export const Route = createFileRoute('/$lang')({
  beforeLoad: ({ params }) => {
    const lang = params.lang as Language;
    if (!translations[lang]) {
      throw redirect({
        to: '/$lang',
        params: { lang: defaultLang },
      });
    }
    return { lang, t: translations[lang] };
  },
  head: ({ params }) => {
    const lang = params.lang as Language;
    const t = translations[lang] || translations[defaultLang];
    return {
      meta: [
        { title: t.title },
        { name: "description", content: t.description },
        { property: "og:title", content: t.title },
        { property: "og:description", content: t.description },
      ],
      links: [
        { rel: "canonical", href: `https://rentcartetouan.ma/${lang}` },
        { rel: "alternate", hreflang: "es", href: "https://rentcartetouan.ma/es" },
        { rel: "alternate", hreflang: "fr", href: "https://rentcartetouan.ma/fr" },
        { rel: "alternate", hreflang: "en", href: "https://rentcartetouan.ma/en" },
        { rel: "alternate", hreflang: "ar", href: "https://rentcartetouan.ma/ar" },
        { rel: "alternate", hreflang: "x-default", href: "https://rentcartetouan.ma/" },
      ],
    };
  },
  component: LanguageLayout,
});

function LanguageLayout() {
  const { lang } = Route.useParams();
  
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return <Outlet />;
}
