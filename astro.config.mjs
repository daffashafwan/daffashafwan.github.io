import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://daffashafwan.github.io',
  integrations: [sitemap()],
  redirects: {
    // URL lama dari versi Hugo
    '/posts/about-me': '/about/',
    '/archives': '/posts/',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
