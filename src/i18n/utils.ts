import { ui, type Lang, type Copy } from './ui';

export { type Lang, type Copy };

/* All show times are Vienna local. Pinning the zone explicitly keeps
   the rendered dates correct no matter what TZ the build machine uses
   (Netlify builds in UTC — without this, a 00:30 show slides a day). */
const TZ = 'Europe/Vienna';

export function getLang(url: URL): Lang {
  return url.pathname.startsWith('/en') ? 'en' : 'de';
}

export function useTranslations(lang: Lang): Copy {
  return ui[lang];
}

/** Path to the current page in the other language. */
export function getAltLangPath(url: URL): string {
  return url.pathname.startsWith('/en')
    ? url.pathname.replace(/^\/en/, '') || '/'
    : '/en' + url.pathname;
}

/** Prefix a root-relative path with the locale. German is unprefixed. */
export function localePath(path: string, lang: Lang): string {
  return lang === 'en' ? `/en${path === '/' ? '' : path}` : path;
}

function parts(date: Date, lang: Lang, opts: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-AT' : 'en-GB', {
    timeZone: TZ,
    ...opts,
  }).format(date);
}

/** "FR 27. NOVEMBER 2026" / "FRI 27 NOVEMBER 2026" */
export function formatShowDate(date: Date, lang: Lang): string {
  const weekday = parts(date, lang, { weekday: 'short' }).replace('.', '');
  const day = parts(date, lang, { day: 'numeric' });
  const month = parts(date, lang, { month: 'long' });
  const year = parts(date, lang, { year: 'numeric' });
  const d = lang === 'de' ? `${day}.` : day;
  return `${weekday} ${d} ${month} ${year}`.toUpperCase();
}

/** "20:00" — 24-hour in both locales; this is Vienna. */
export function formatTime(date: Date, lang: Lang): string {
  return parts(date, lang, { hour: '2-digit', minute: '2-digit', hour12: false });
}

/** "27.11.26" — the numeric date on the flyer-less show plate. */
export function formatPlateDate(date: Date, lang: Lang): string {
  return parts(date, lang, { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '.');
}

/** "27 NOV" / "27. NOV" — the hero's next-show strip. */
export function formatShortDate(date: Date, lang: Lang): string {
  const day = parts(date, lang, { day: 'numeric' });
  const month = parts(date, lang, { month: 'short' }).replace('.', '');
  return (lang === 'de' ? `${day}. ${month}` : `${day} ${month}`).toUpperCase();
}

/** Interpolate {name} placeholders. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
