import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';
import { localizedString } from './i18n/localized';

/* Shows, videos, tracks and gallery images are data-driven on purpose —
   the band adds dates and photos often and should never have to touch
   component markup to do it. Zod catches a malformed entry at build time.

   Prose fields use `localizedString`: either a plain string when both
   languages share it, or a {de, en} pair. */

const shows = defineCollection({
  loader: file('src/data/shows.json'),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      doors: z.coerce.date().optional(),
      venue: z.string(),
      city: localizedString,
      district: localizedString.optional(),
      // Short city name for the flyer-less date plate.
      plateCity: localizedString.optional(),
      policy: localizedString.nullable().default(null),
      ticketUrl: z.url().nullable().default(null),
      // Flyers stay in full colour — they are exempt from the greyscale
      // treatment. Where a flyer does not exist yet the Shows section
      // substitutes a Resedagrün date plate.
      flyer: image().nullable().default(null),
      flyerAlt: localizedString.nullable().default(null),
      support: localizedString.nullable().default(null),
    }),
});

const videos = defineCollection({
  loader: file('src/data/videos.json'),
  schema: z.object({
    youtubeId: z.string(),
    title: localizedString,
  }),
});

const tracks = defineCollection({
  loader: file('src/data/tracks.json'),
  schema: z.object({
    // null title renders as the localized "title TBC" placeholder.
    title: z.string().nullable().default(null),
    src: z.string().nullable().default(null),
    featured: z.boolean().default(false),
    status: z.enum(['soon']).nullable().default(null),
  }),
});

const gallery = defineCollection({
  loader: file('src/data/gallery.json'),
  schema: ({ image }) =>
    z.object({
      src: image(),
      alt: localizedString,
    }),
});

export const collections = { shows, videos, tracks, gallery };
