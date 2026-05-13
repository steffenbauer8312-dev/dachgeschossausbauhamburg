import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dachgeschossausbau-muenchen.de',
  prefetch: {
    prefetchAll: true
  }
});