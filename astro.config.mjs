// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thedragsband.com',
  output: 'static',
  adapter: netlify(),

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Self-hosted via Fontsource — no Google Fonts request at runtime.
  // Display: Archivo Black (400 is the only weight it ships).
  // Body/UI: Courier Prime 400 + 700.
  fonts: [
    {
      name: 'Archivo Black',
      cssVariable: '--font-display',
      provider: fontProviders.fontsource(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Impact', 'Haettenschweiler', 'sans-serif'],
    },
    {
      name: 'Courier Prime',
      cssVariable: '--font-body',
      provider: fontProviders.fontsource(),
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Courier New', 'monospace'],
    },
  ],
});
