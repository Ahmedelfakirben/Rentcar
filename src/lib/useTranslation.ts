import { useParams } from '@tanstack/react-router';
import { translations, defaultLang, type Language } from './translations';

export function useTranslation() {
  const params = useParams({ strict: false }) as { lang?: string };
  const lang = (params.lang as Language) || defaultLang;
  
  const t = translations[lang] || translations[defaultLang];
  
  return { t, lang };
}
