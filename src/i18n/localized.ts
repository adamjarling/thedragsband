import { z } from 'astro/zod';
import type { Lang } from './ui';

/* Some data-file fields are prose and need translating (a city name, a
   support act), while others are the same in both languages. Rather
   than forcing every entry into an object, a field may be either a
   plain string (identical in both locales) or a {de, en} pair. */
export const localizedString = z.union([
  z.string(),
  z.object({ de: z.string(), en: z.string() }),
]);

export type LocalizedString = z.infer<typeof localizedString>;

export function pick(value: LocalizedString, lang: Lang): string;
export function pick(value: LocalizedString | null | undefined, lang: Lang): string | null;
export function pick(value: LocalizedString | null | undefined, lang: Lang): string | null {
  if (value == null) return null;
  return typeof value === 'string' ? value : value[lang];
}
