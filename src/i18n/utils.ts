import de from './de.json';
import en from './en.json';

const translations = { de, en } as const;

type Lang = keyof typeof translations;
type TranslationKey = keyof typeof de;

export function getLang(url: URL): Lang {
  if (url.pathname.startsWith('/en')) return 'en';
  return 'de';
}

export function getAltLangPath(url: URL): string {
  if (url.pathname.startsWith('/en')) {
    return url.pathname.replace(/^\/en/, '') || '/';
  }
  return '/en' + url.pathname;
}

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations['de'][key] ?? key;
}
