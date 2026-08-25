import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

/* Shows, videos, tracks and gallery images are data-driven on purpose —
   the band adds dates and photos often and should never have to touch
   component markup to do it. Zod catches a malformed entry at build time. */

const shows = defineCollection({
  loader: file('src/data/shows.json'),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      doors: z.coerce.date().optional(),
      venue: z.string(),
      city: z.string(),
      district: z.string().optional(),
      policy: z.string().optional(),
      ticketUrl: z.string().url().nullable().default(null),
      // Flyers stay in full colour — they are exempt from the greyscale
      // treatment. Where a flyer does not exist yet the Shows section
      // substitutes a Resedagrün date plate.
      flyer: image().nullable().default(null),
      flyerAlt: z.string().nullable().default(null),
      support: z.string().nullable().default(null),
    }),
});

const videos = defineCollection({
  loader: file('src/data/videos.json'),
  schema: z.object({
    youtubeId: z.string(),
    title: z.string(),
    label: z.string().optional(),
  }),
});

const tracks = defineCollection({
  loader: file('src/data/tracks.json'),
  schema: z.object({
    title: z.string(),
    label: z.string().nullable().default(null),
    src: z.string().nullable().default(null),
    featured: z.boolean().default(false),
    status: z.string().nullable().default(null),
  }),
});

const gallery = defineCollection({
  loader: file('src/data/gallery.json'),
  schema: ({ image }) =>
    z.object({
      src: image(),
      alt: z.string(),
    }),
});

export const collections = { shows, videos, tracks, gallery };
