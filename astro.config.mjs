// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site:'https://destapacionesdavila.com.ar',
  integrations: [
    react(),
    sitemap({
      lastmod:new Date(),
      priority:1
    })
  ]
});