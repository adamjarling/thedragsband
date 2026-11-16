/* Site-wide switches for assets the band supplies over time.
   Set a value here and the corresponding UI turns itself on. */
export const site = {
  /* Press kit: drop the file in public/ and set the path (e.g.
     '/press-kit.zip'). While this is null the footer omits the download
     button rather than linking at a 404. */
  pressKitUrl: null as string | null,

  /* SoundCloud: the track feeds the Listen embed, the profile feeds the
     footer link and the "on SoundCloud" note. */
  soundcloudProfileUrl: 'https://soundcloud.com/the-drags-band',
  soundcloudTrackUrl: 'https://soundcloud.com/the-drags-band/web-demo-reel-nov-2026',
} as const;
