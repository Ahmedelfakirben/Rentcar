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
