/* Names are not translated; the instrument is, so it is stored as a key
   into ui[lang].about.instruments rather than as literal text. */
export const lineup = [
  { name: 'Lill Oehl', role: 'vocals' },
  { name: 'Stefan Zisser', role: 'guitarVocals' },
  { name: 'Alex K.', role: 'guitar' },
  { name: 'Thomas Haberl', role: 'drums' },
  { name: 'Adam J. Arling', role: 'bass' },
] as const;

export const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/wearethedrags' },
  { name: 'YouTube', href: 'https://www.youtube.com/@TheDragsBand' },
  { name: 'SoundCloud', href: 'https://soundcloud.com/the-drags-band' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@wearethedrags' },
] as const;

/* Photographers are referenced by key from gallery.json so a name or
   link is corrected in one place. Spellings and profile links carry
   over from the live site's credit line. */
export const photographers = {
  kogoj: {
    name: 'Peter Kogoj',
    url: 'https://www.facebook.com/profile.php?id=100009550403171',
  },
  murtaugh: {
    name: 'Casey Murtaugh',
    url: 'https://www.instagram.com/caseymolloymurtaugh/',
  },
} as const;

export type PhotographerKey = keyof typeof photographers;
