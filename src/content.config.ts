import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';
import { localizedString } from './i18n/localized';

/* Shows, videos and gallery images are data-driven on purpose —
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
      /* Radio slots and other broadcast appearances sit in the same list as
         gigs, but they are not gigs: the hero's NEXT GIG strip skips them
         (see Home.astro) and they carry no ticket link. */
      type: z.enum(['show', 'radio']).default('show'),
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
      // Posters fill a portrait frame ('cover'). A logo or any non-portrait
      // image should use 'contain' so it renders whole instead of cropped.
      flyerFit: z.enum(['cover', 'contain']).default('cover'),
      // Key into `photographers` in src/data/lineup.ts — poster artist, shown
      // (linked) in the flyer lightbox.
      flyerCredit: z.enum(['kogoj', 'murtaugh']).nullable().default(null),
      support: localizedString.nullable().default(null),
    }),
});

const videos = defineCollection({
  loader: file('src/data/videos.json'),
  schema: z.object({
    youtubeId: z.string(),
    title: localizedString,
    /* Shorts are 9:16. The embed URL is the same either way — /shorts/<id> is
       only a viewing surface — but the frame has to match the source or the
       player pillarboxes into black bars. */
    orientation: z.enum(['landscape', 'portrait']).default('landscape'),
    // getCollection returns entries sorted by id, not file order, so display
    // order is stated explicitly. Lower shows first.
    order: z.number().default(99),
  }),
});

const gallery = defineCollection({
  loader: file('src/data/gallery.json'),
  schema: ({ image }) =>
    z.object({
      src: image(),
      alt: localizedString,
      // Key into `photographers` in src/data/lineup.ts. Null falls back
      // to the combined credit line beneath the grid.
      credit: z.enum(['kogoj', 'murtaugh']).nullable().default(null),
      /* Pins a photo to a slot in the grid (1 = first). getCollection returns
         entries sorted by id — file order is ignored — so everything without a
         position stays alphabetical and pinned photos are spliced in (Home.astro). */
      position: z.number().int().min(1).optional(),
    }),
});

export const collections = { shows, videos, gallery };
